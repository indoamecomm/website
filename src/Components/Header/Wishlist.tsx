import {useMutation} from "@apollo/client";
import Link from "next/link";
import React, {useContext, useEffect, useState} from "react";
import toast from "react-hot-toast";
import {GetProductTypesById} from "../../../queries/productQuery";
import {DeleteWishlist, GetUserWishlist} from "../../../queries/userQuery";
import {initializeApollo} from "../../apollo";
import {Wishlists} from "../../generated/graphql";
import {useAuth} from "../../hooks/useAuth";
import {getDiscountedPrice} from "../Product/ProductTypes";
import Spinner from "../Utils/Spinner";
import WishlistContext from "../../Context/wishlistContext";
import overlayContext from "../../Context/overlayContext";

const Wishlist = () => {
	const {user} = useAuth();
	const [wishlistItems, setWishlistItems] = useState<Wishlists[]>([]);

	const apolloClient = initializeApollo();

	const {wishlist} = useContext(WishlistContext);
	const {wishlistActive, setWishlistActive} = useContext(overlayContext);
	const [loading, setLoading] = useState<boolean>(false);

	const getUserWishlists = async () => {
		try {
			setLoading(false);

			if (user) {
				console.log("User authenticated get wishlist");
				const data = await apolloClient.subscribe({
					query: GetUserWishlist,
					variables: {
						userId: user.id,
						expiry: new Date().toISOString(),
					},
					fetchPolicy: "network-only",
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
						productTypeArray: [...wishlist] ?? [],
						expiry: new Date().toISOString(),
					},
					fetchPolicy: "network-only",
				});
				const newItems = product_type.map((product, index) => ({
					id: `${product.id}${index}`,
					product_type: JSON.parse(JSON.stringify(product)),
				}));
				setWishlistItems(newItems);
			}
		} catch (error) {
			toast.error(error.message + ", Error occurred while fetching wishlists");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getUserWishlists();
	}, [user, wishlist]);

	return (
		<div className={`wishlist-overlay ${wishlistActive ? "active-wishlist-overlay" : ""}`} id="wishlist-overlay">
			<div className={`wishlist-overlay-close ${wishlistActive ? "active" : "inactive"}`} />
			<div className="wishlist-overlay-content">
				{/*=======  close icon  =======*/}
				<span className="close-icon" id="wishlist-close-icon" onClick={() => setWishlistActive(false)}>
					<a>
						<i className="ion-android-close" />
					</a>
				</span>
				{/*=======  End of close icon  =======*/}
				{/*=======  offcanvas wishlist content container  =======*/}
				{!loading ? (
					<div className="offcanvas-cart-content-container">
						<h3 className="cart-title">Wishlist</h3>
						{wishlistItems.length > 0 ? (
							<div className="cart-product-wrapper">
								<div className="cart-product-container ps-scroll">
									{/*=======  single cart product  =======*/}
									{wishlistItems.map((wishlist) => (
										<WishlistItem wishlist={wishlist} key={wishlist.id} />
									))}
								</div>
								{/*=======  cart buttons  =======*/}
								<div className="cart-buttons">
									<Link href="/wishlist">
										<a onClick={() => setWishlistActive(false)}>view wishlist</a>
									</Link>
								</div>
								{/*=======  End of cart buttons  =======*/}
							</div>
						) : (
							<p>No items added to wishlist yet</p>
						)}
					</div>
				) : (
					<div className="offcanvas-cart-content-container ">
						<Spinner width="40px" height="40px" />
					</div>
				)}
				{/*=======  End of offcanvas wishlist content container   =======*/}
			</div>
		</div>
	);
};

const WishlistItem: React.FC<{wishlist: Wishlists}> = (props) => {
	const {wishlist} = props;
	const {user} = useAuth();

	const [deleteWishlist] = useMutation(DeleteWishlist);
	const [loading, setLoading] = useState<boolean>(false);
	const {wishlist: wishlistStore, setWishlist: setWishlistStore} = useContext(WishlistContext);

	const deleteWishlistItem = async () => {
		console.log(user);
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
				console.log("Inside delete without user");
				let newWishlist: any = [...wishlistStore];
				newWishlist = newWishlist.filter((item) => item !== wishlist.product_type.id);
				setWishlistStore(newWishlist);
			}
		} catch (error) {
			setLoading(false);
			toast.error(error.message);
		}
	};

	return (
		<div className="single-cart-product">
			{!loading ? (
				<span className="cart-close-icon">
					<p style={{cursor: "pointer"}} onClick={deleteWishlistItem}>
						<i className="ti-close" />
					</p>
				</span>
			) : (
				<span className="cart-close-icon">
					<Spinner width="10px" height="10px" />
				</span>
			)}
			<div className="image">
				<Link href={`/product/${wishlist.product_type.productId}`}>
					<a>
						<img src={wishlist.product_type.imageUrl ?? ""} className="img-fluid" alt="" />
					</a>
				</Link>
			</div>
			<div className="content">
				<h5>
					<Link href={`/product/${wishlist.product_type.productId}`}>
						<a>{wishlist.product_type.name}</a>
					</Link>
				</h5>
				<p>
					{wishlist.product_type.originalPrice ? (
						<span className="main-price discounted">₹{wishlist.product_type.originalPrice} </span>
					) : (
						<span />
					)}
					&nbsp;&nbsp;
					<span className="discounted-price">₹{getDiscountedPrice(wishlist.product_type)}</span>
				</p>
			</div>
		</div>
	);
};
export default Wishlist;
