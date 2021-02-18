import Head from "next/head";
import React, {useEffect, useState} from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Store_Locations, User, Wishlists} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import toast, {Toaster} from "react-hot-toast";
import {DeleteWishlist, GetUserWishlist, InsertToUserCartFromWishlist} from "../../../queries/userQuery";
// import Spinner from "../Utils/Spinner";
import {useAuth} from "../../hooks/useAuth";
import {useMutation} from "@apollo/client";
import Spinner from "../../Components/Utils/Spinner";
import Link from "next/link";
import {GetProductTypesById} from "../../../queries/productQuery";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {checkIfJsonDuplicates, getDiscountedPrice} from "../../Components/Product/ProductTypes";

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
						title={"Wishlist"}
						finalName={"WISHLIST"}
						links={[{link: "/", name: "HOME"}]}
					/>
					<WishlistMain />
				</div>
			</main>
			<Footer />
		</>
	);
};
//ssss
export default index;

const WishlistMain = () => {
	const {user} = useAuth();

	const [wishlistItems, setWishlistItems] = useState<Wishlists[]>([]);
	const [wishlist] = useLocalStorage("wishlist", []);

	const apolloClient = initializeApollo();

	const getUserWishlists = async () => {
		if (user) {
			const data = await apolloClient.subscribe({
				query: GetUserWishlist,
				variables: {
					userId: user.id,
					expiry: new Date().toISOString(),
				},
			});

			if (data) {
				data.subscribe(({data: {wishlists}}) => {
					setWishlistItems(wishlists);
				});
				// setCartItems(data.data.cart);
			}
		} else {
			const {
				data: {product_type},
			} = await apolloClient.query({
				query: GetProductTypesById,
				variables: {
					productTypeArray: wishlist ?? [],
					expiry: new Date().toISOString(),
				},
			});
			console.log(product_type);
			const newItems = product_type.map((product) => ({
				id: product.id,
				product_type: JSON.parse(JSON.stringify(product)),
			}));
			setWishlistItems(newItems);
		}
	};

	useEffect(() => {
		getUserWishlists();
	}, [user, wishlist]);

	return (
		<div className="shopping-cart-area mb-130">
			<Toaster position="bottom-center" />

			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						{/*=======  cart table  =======*/}
						<div className="cart-table-container">
							{wishlistItems.length > 0 ? (
								<table className="cart-table">
									<thead>
										<tr>
											<th className="product-name" colSpan={2}>
												Product
											</th>
											<th className="product-price">Price</th>
											<th className="product-quantity">Quantity</th>
											<th className="product-subtotal">&nbsp;</th>
											<th className="product-remove">&nbsp;</th>
										</tr>
									</thead>
									<tbody>
										{wishlistItems.map((wishlist) => (
											<WishlistItem wishlist={wishlist} user={user} />
										))}
									</tbody>
								</table>
							) : (
								<p> No Items added to wishlist yet</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const WishlistItem: React.FC<{wishlist: Wishlists; user: User}> = (props) => {
	const {wishlist, user} = props;
	const [addToCartFromWishlist] = useMutation(InsertToUserCartFromWishlist);
	const [cartLoading, setCartLoading] = useState<boolean>(false);
	const [count, setCount] = useState<number>(1);
	const [deleteWishlist] = useMutation(DeleteWishlist);
	const [loading, setLoading] = useState<boolean>(false);
	const [wishlistStore, setWishlistStore] = useLocalStorage("wishlist", []);
	const [cartStore, setCartStore] = useLocalStorage("cart", []);

	const addToCart = async () => {
		try {
			if (user) {
				setCartLoading(true);
				const {data} = await addToCartFromWishlist({
					variables: {
						wishlistId: wishlist.id,
						count,
						userId: user.id,
						productTypeId: wishlist.product_type.id,
					},
				});
				setCartLoading(false);

				if (data && data.insert_cart.affected_rows > 0 && data.delete_wishlists.affected_rows > 0) {
					toast.success("Item added from wishlist to cart successfully");
				} else {
					toast.error("Some unknown error occurred");
				}
			} else {
				let newCartStore: any = [...cartStore];
				if (checkIfJsonDuplicates(newCartStore, wishlist.product_type.id, "productTypeId")) {
					newCartStore = newCartStore.filter((item) => item.productTypeId !== wishlist.product_type.id);
				} else {
					newCartStore.push({productTypeId: wishlist.product_type.id, count});
				}
				newCartStore = new Set(newCartStore);
				setCartStore([...newCartStore]);

				let newWishlist: any = [...wishlistStore];
				newWishlist = newWishlist.filter((item) => item !== wishlist.product_type.id);
				newWishlist = new Set(newWishlist);
				setWishlistStore([...newWishlist]);
			}
		} catch (error) {
			setCartLoading(false);
			toast.error(error.message);
		}
	};

	const deleteWishlistItem = async () => {
		try {
			if (user) {
				setLoading(true);
				const {
					data: {delete_wishlists},
				} = await deleteWishlist({
					variables: {
						wishlistId: wishlist.id,
					},
				});
				setLoading(false);

				if (delete_wishlists && delete_wishlists.affected_rows > 0) {
					toast.success(" Item removed from wishlist successfully");
				} else {
					toast.error("Some unknown error occurred");
				}
			} else {
				let newWishlist: any = [...wishlistStore];
				newWishlist = newWishlist.filter((item) => item !== wishlist.product_type.id);
				newWishlist = new Set(newWishlist);
				setWishlistStore([...newWishlist]);
			}
		} catch (error) {
			setLoading(false);
			toast.error(error.message);
		}
	};

	return (
		<tr>
			<td className="product-thumbnail">
				<Link href={`/product/${wishlist.product_type.product.id}`}>
					<a>
						<img src={wishlist.product_type.imageUrl ?? ""} className="img-fluid" alt={wishlist.product_type.name} />
					</a>
				</Link>
			</td>
			<td className="product-name">
				<Link href={`/product/${wishlist.product_type.product.id}`}>
					<a>{wishlist.product_type.name}</a>
				</Link>

				<span className="product-variation">{wishlist.product_type.product.name}</span>
			</td>
			<td className="product-price">
				<span className="price">₹{count * (getDiscountedPrice(wishlist.product_type) ?? 0)}</span>
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
			<td className="add-to-cart">
				{!cartLoading ? (
					<button className="lezada-button lezada-button--small lezada-button--icon--left" onClick={addToCart}>
						<i className="ion-ios-cart-outline" /> add to cart
					</button>
				) : (
					<Spinner width="30px" height="30px" />
				)}
			</td>
			<td className="product-remove">
				{loading ? (
					<Spinner width="40px" height="40px" />
				) : (
					<a onClick={deleteWishlistItem}>
						<i className="ion-android-close" />
					</a>
				)}
			</td>
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
