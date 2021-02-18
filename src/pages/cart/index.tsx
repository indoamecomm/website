import Head from "next/head";
import React, {useEffect, useState} from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import toast, {Toaster} from "react-hot-toast";
import {DeleteCartById, GetUserCartSubscription, UpdateCart} from "../../../queries/userQuery";
import {useAuth} from "../../hooks/useAuth";
import {Cart} from "../../generated/graphql";
import {useMutation} from "@apollo/client";
import Link from "next/link";
import Spinner from "../../Components/Utils/Spinner";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {GetProductTypesById} from "../../../queries/productQuery";

interface HeaderProps {
	categories: Category[];
	storeLocations: Store_Locations[];
}

const index: React.FC<HeaderProps> = (props: HeaderProps) => {
	const {categories, storeLocations} = props;

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>Shopping Cart</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
				<link href="/revolution/css/settings.css" rel="stylesheet" />
				<link href="/revolution/css/navigation.css" rel="stylesheet" />
				<link href="/revolution/custom-setting.css" rel="stylesheet" />
				<script src="/js/vendor/modernizr-2.8.3.min.js"></script>
				<script src="/js/vendor/jquery.min.js"></script>
				<script src="/js/popper.min.js"></script>
				<script src="/js/bootstrap.min.js"></script>

				<script src="/js/plugins.js"></script>
				<script src="/js/main.js"></script>

				<script src="/revolution/js/jquery.themepunch.revolution.min.js"></script>
				<script src="/revolution/js/jquery.themepunch.tools.min.js"></script>
				<script src="/revolution/revolution-active.js"></script>

				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.actions.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
			</Head>
			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<div>
					<BreadCrumb
						backgroundImage={"/images/breadcrumb-bg/01.jpg"}
						title={"Shopping Cart"}
						finalName={"SHOPPING CART"}
						links={[{link: "/", name: "HOME"}]}
					/>
					<CartMain />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default index;

const CartMain: React.FC = () => {
	const {user} = useAuth();
	const [cartItems, setCartItems] = useState<Cart[]>([]);
	const [cartStore] = useLocalStorage("cart", []);

	const apolloClient = initializeApollo();

	const getUserCartItem = async () => {
		if (user) {
			const data = await apolloClient.subscribe({
				query: GetUserCartSubscription,
				variables: {
					userId: user.id,
				},
			});

			if (data) {
				data.subscribe(({data: {cart}}) => {
					setCartItems(cart);
				});
				// setCartItems(data.data.cart);
			}
		} else {
			const {
				data: {product_type},
			} = await apolloClient.query({
				query: GetProductTypesById,
				variables: {
					productTypeArray: cartStore.map((element) => element.productTypeId) ?? [],
				},
			});
			const newItems = product_type.map((product, index) => ({
				id: `${product.id}${index}`,
				count: cartStore[index].count,
				product_type: JSON.parse(JSON.stringify(product)),
			}));
			setCartItems(newItems);
		}
	};

	useEffect(() => {
		getUserCartItem();
	}, [user, cartStore]);

	const getSubTotal = (cartItems: Cart[]): number => {
		let subTotal: number = 0;

		cartItems.forEach((cart) => {
			subTotal += (cart.product_type.discountedPrice ?? 0) * cart.count;
		});

		return subTotal;
	};
	return (
		<div className="shopping-cart-area mb-130">
			<Toaster position="bottom-center" />
			<div className="container">
				<div className="row">
					<div className="col-lg-12 mb-30">
						{/*=======  cart table  =======*/}
						{cartItems.length > 0 ? (
							<div className="cart-table-container">
								<table className="cart-table">
									<thead>
										<tr>
											<th className="product-name" colSpan={2}>
												Product
											</th>
											<th className="product-price">Price</th>
											<th className="product-quantity">Quantity</th>
											<th className="product-subtotal">Total</th>
											<th className="product-remove">&nbsp;</th>
										</tr>
									</thead>
									<tbody>
										{cartItems.map((cartItem) => (
											<CartProduct cart={cartItem} key={cartItem.id} />
										))}
									</tbody>
								</table>
							</div>
						) : (
							<p className="d-flex justify-content-center">No items added yet</p>
						)}
						{/*=======  End of cart table  =======*/}
					</div>
					{cartItems.length > 0 && (
						<>
							<div className="col-lg-12 mb-80">
								{/*=======  coupon area  =======*/}
								<div className="cart-coupon-area pb-30">
									<div className="row align-items-center">
										<div className="col-lg-6 mb-md-30 mb-sm-30">
											<table className="cart-calculation-table mb-30">
												<tbody>
													<tr>
														<th>**</th>
													</tr>
													<tr>
														<th></th>
														<td className="subtotal"></td>
													</tr>
												</tbody>
											</table>
										</div>
										<div className="col-lg-6 text-left text-lg-right">
											{/*=======  update cart button  =======*/}
											<table className="cart-calculation-table mb-30">
												<tbody>
													<tr>
														<th>SUBTOTAL</th>
														<td className="subtotal">₹{getSubTotal(cartItems)}</td>
													</tr>
													<tr>
														<th>TOTAL</th>
														<td className="total">₹{getSubTotal(cartItems)}</td>
													</tr>
												</tbody>
											</table>
											<Link href="/checkout">
												<a>
													<button className="lezada-button lezada-button--medium">proceed to checkout</button>
												</a>
											</Link>

											{/*=======  End of update cart button  =======*/}
										</div>
									</div>
								</div>
								{/*=======  End of coupon area  =======*/}
							</div>
							{/* <div className="col-xl-4 offset-xl-8 col-lg-5 offset-lg-7">
								<div className="cart-calculation-area">
									<h2 className="mb-40">Cart totals</h2>
									<table className="cart-calculation-table mb-30">
										<tbody>
											<tr>
												<th>SUBTOTAL</th>
												<td className="subtotal">₹100.00</td>
											</tr>
											<tr>
												<th>TOTAL</th>
												<td className="total">₹100.00</td>
											</tr>
										</tbody>
									</table>
									<div className="cart-calculation-button text-center">
										<a href="shop-checkout.html">
											<button className="lezada-button lezada-button--medium">proceed to checkout</button>
										</a>
									</div>
								</div>
							</div> */}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

const CartProduct: React.FC<{cart: Cart}> = (props) => {
	const {cart} = props;
	const [count, setCount] = useState<number>(cart.count ?? 1);
	const [updateCartCount] = useMutation(UpdateCart);
	const [loading, setLoading] = useState<boolean>(false);
	const [cartStore, setCartStore] = useLocalStorage("cart", []);
	const {user} = useAuth();

	const [deleteCartById] = useMutation(DeleteCartById);

	const updateCart = async () => {
		try {
			if (user) {
				const {
					data: {update_cart},
				} = await updateCartCount({
					variables: {
						cartId: cart.id,
						count,
					},
				});
				if (update_cart.affected_rows > 0) {
					toast.success("Cart Item updated successfully");
				} else {
					toast.error("Some unknown error occurred");
				}
			} else {
				let newCartStore: any = [...cartStore];
				newCartStore = newCartStore.map((item) => {
					if (item.productTypeId !== cart.product_type.id) {
						return {
							productTypeId: item.productTypeId,
							count,
						};
					} else {
						return item;
					}
				});
				setCartStore([...newCartStore]);
			}
		} catch (error) {
			toast.success(error.message);
		}
	};

	const onDelete = async () => {
		try {
			if (user) {
				setLoading(true);
				const {
					data: {delete_cart},
				} = await deleteCartById({
					variables: {
						cartId: cart.id,
					},
				});
				setLoading(false);

				if (delete_cart && delete_cart.affected_rows > 0) {
					toast.success("Cart item deleted successfully");
				} else {
					toast.error("Some unknown error occurred");
				}
			} else {
				let newCartStore: any = [...cartStore];
				newCartStore = newCartStore.filter((item) => item.productTypeId !== cart.product_type.id);
				setCartStore([...newCartStore]);
				toast.success("Cart item deleted successfully");
			}
		} catch (error) {
			setLoading(false);
			toast.error(error.message);
		}
	};

	let timeout;
	useEffect(() => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			updateCart();
			console.log("After timeout");
		}, 2000);
	}, [count]);

	return (
		<tr>
			<td className="product-thumbnail">
				<a href="shop-product-basic.html">
					<img src={cart.product_type.imageUrl ?? ""} className="img-fluid" alt={cart.product_type.product.name} />
				</a>
			</td>
			<td className="product-name">
				<a href="shop-product-basic.html">{cart.product_type.name}</a>
				<span className="product-variation">{cart.product_type.product.name}</span>
			</td>
			<td className="product-price">
				<span className="price">₹{cart.product_type.discountedPrice}</span>
			</td>
			<td className="product-quantity">
				<div className="pro-qty d-inline-block mx-0">
					<a className="dec qty-btn" onClick={() => setCount((oldCount) => (oldCount - 1 > 0 ? oldCount - 1 : 1))}>
						-
					</a>
					<input type="text" value={count} onChange={(event) => setCount(parseInt(event.target.value))} />
					<a className="inc qty-btn" onClick={() => setCount((oldCount) => oldCount + 1)}>
						+
					</a>
				</div>
			</td>
			<td className="total-price">
				<span className="price">₹{count * (cart.product_type.discountedPrice ?? 0)}</span>
			</td>

			{!loading ? (
				<td className="product-remove">
					<a onClick={onDelete}>
						<i className="ion-android-close" />
					</a>
				</td>
			) : (
				<Spinner width="20px" height="20px" />
			)}
		</tr>
	);
};

export async function getStaticProps() {
	const apolloClient = initializeApollo();

	const {
		data: {categories, store_locations: storeLocations},
	} = await apolloClient.query({
		query: GetHeaderData,
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			categories,
			storeLocations,
		},
	};
}
