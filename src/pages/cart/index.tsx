import Head from "next/head";
import React, {useEffect, useRef, useState} from "react";
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
import Spinner from "../../Components/Utils/Spinner";
import {GetProductTypesById} from "../../../queries/productQuery";
import {getDiscountedPrice} from "../../Components/Product/ProductTypes";
import cartContext from "../../Context/cartContext";
import {useContext} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {useScript} from "../../hooks/useScript";
import Modal from "react-modal";

interface HeaderProps {
	categories: Category[];
	storeLocations: Store_Locations[];
}

const index: React.FC<HeaderProps> = (props: HeaderProps) => {
	const {categories, storeLocations} = props;
	const ref = useRef<HTMLDivElement>(null);

	useScript("/js/vendor/modernizr-2.8.3.min.js", ref);
	useScript("/js/vendor/jquery.min.js", ref);
	useScript("/js/popper.min.js", ref);
	useScript("/js/plugins.js", ref);
	useScript("/js/main.js", ref);
	useScript("/js/bootstrap.min.js", ref);

	useScript("/revolution/js/jquery.themepunch.revolution.min.js", ref);
	useScript("/revolution/js/jquery.themepunch.tools.min.js", ref);
	useScript("/revolution/revolution-active.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.kenburn.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.slideanims.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.actions.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.layeranimation.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.navigation.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.parallax.min.js", ref);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>Shopping Cart</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<div ref={ref}></div>

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
	const [loading, setLoading] = useState<boolean>(true);

	const {cart: cartStore} = useContext(cartContext);

	const apolloClient = initializeApollo();
	const [confirmGuest, setConfirmGuest] = useState<boolean>(false);

	const getUserCartItem = async () => {
		try {
			if (user) {
				const data = await apolloClient.subscribe({
					query: GetUserCartSubscription,
					variables: {
						userId: user.id,
						expiry: new Date().toISOString(),
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
						expiry: new Date().toISOString(),
					},
					fetchPolicy: "network-only",
				});
				const newItems = product_type.map((product, index) => ({
					id: `${product.id}${index}`,
					count: cartStore[index].count,
					product_type: JSON.parse(JSON.stringify(product)),
				}));

				setCartItems(newItems);
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const router = useRouter();

	useEffect(() => {
		getUserCartItem();
	}, [user, cartStore]);

	const getSubTotal = (cartItems: Cart[]): number => {
		let subTotal: number = 0;

		cartItems.forEach((cart) => {
			subTotal += (getDiscountedPrice(cart.product_type) ?? 0) * cart.count;
		});

		return subTotal;
	};

	const proceedToCheckout = () => {
		if (user) {
			router.push("/checkout");
		} else {
			setConfirmGuest(true);
		}
	};

	return (
		<div className="shopping-cart-area mb-130">
			<ConfirmGuestModal open={confirmGuest} setOpen={setConfirmGuest} />
			<Toaster position="bottom-center" />
			<div className="container">
				<div className="row">
					{!loading ? (
						<>
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
													<button className="lezada-button lezada-button--medium" onClick={proceedToCheckout}>
														proceed to checkout
													</button>
													{/*=======  End of update cart button  =======*/}
												</div>
											</div>
										</div>
										{/*=======  End of coupon area  =======*/}
									</div>
								</>
							)}
						</>
					) : (
						<div className="col-lg-12 mb-80">
							<Spinner width="40px" height="40px" />
						</div>
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
	const {cart: cartStore, setCart: setCartStore} = useContext(cartContext);
	const {user} = useAuth();
	const [deleteCartById] = useMutation(DeleteCartById);
	const [firstRender, setFirstRender] = useState<boolean>(false);

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
					if (item.productTypeId === cart.product_type.id) {
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
		if (user) {
			if (firstRender) {
				timeout = setTimeout(() => {
					updateCart();
				}, 500);
			} else {
				setFirstRender(true);
			}
			return () => clearTimeout(timeout);
		} else {
			updateCart();
		}
	}, [count]);

	return (
		<tr>
			<td className="product-thumbnail">
				<Link href={`/product/${cart.product_type.product.id}`}>
					<a>
						<img src={cart.product_type.imageUrl ?? ""} className="img-fluid" alt={cart.product_type.product.name} />
					</a>
				</Link>
			</td>
			<td className="product-name">
				<Link href={`/product/${cart.product_type.product.id}`}>
					<a>{cart.product_type.name}</a>
				</Link>

				<span className="product-variation">{cart.product_type.product.name}</span>
			</td>
			<td className="product-price">
				<span className="price">₹{getDiscountedPrice(cart.product_type)}</span>
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
				<span className="price">₹{count * (getDiscountedPrice(cart.product_type) ?? 0)}</span>
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
interface ModalProps {
	open: boolean;
	setOpen: (value: boolean) => void;
	data?: any;
	setData?: any;
	userId?: number;
	setRefetch?: (value: any) => void;
	refetch?: number;
}

export const ConfirmGuestModal: React.FC<ModalProps> = (props) => {
	const {open, setOpen} = props;
	const router = useRouter();

	return (
		<Modal overlayClassName="overlay" className="modal__main modal-logout" isOpen={open}>
			<div className="close">
				<h2 className="modal__title">Proceed to Checkout ?</h2>
				<img
					src="images/website/cross.svg"
					alt="Close"
					className="close-img"
					onClick={() => {
						setOpen(false);
					}}
				/>
			</div>
			<div className="modal__content">
				<div className="row text-center">
					<div className="col-12">
						<button
							className="lezada-button lezada-button--medium mt-20 mx-auto"
							type="button"
							onClick={() => {
								router.push("/checkout");
								setOpen(false);
							}}>
							Continue as Guest?
						</button>
					</div>
					<div className="col-12">
						<button
							className="lezada-button lezada-button--medium mt-20 mx-auto"
							type="button"
							onClick={() => {
								router.push("/login?checkout=true");
								setOpen(false);
								toast.success("Please login before you proceed to Checkout, Don't worry your cart will saved ");
							}}>
							Login
						</button>
					</div>
				</div>
			</div>
		</Modal>
	);
};
