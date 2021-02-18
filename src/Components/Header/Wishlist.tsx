import {useMutation} from "@apollo/client";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {GetProductTypesById} from "../../../queries/productQuery";
import {DeleteWishlist, GetUserWishlist} from "../../../queries/userQuery";
import {initializeApollo} from "../../apollo";
import {Wishlists} from "../../generated/graphql";
import {useAuth} from "../../hooks/useAuth";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import Spinner from "../Utils/Spinner";

const Wishlist = () => {
	const {user} = useAuth();
	const [wishlistItems, setWishlistItems] = useState<Wishlists[]>([]);

	const apolloClient = initializeApollo();

	const [wishlist] = useLocalStorage("wishlist", []);

	const getUserWishlists = async () => {
		if (user) {
			const data = await apolloClient.subscribe({
				query: GetUserWishlist,
				variables: {
					userId: user.id,
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
					productTypeArray: [...wishlist] ?? [],
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
		console.log(wishlist);
	}, [user, wishlist]);

	return (
		<div className="wishlist-overlay" id="wishlist-overlay">
			<div className="wishlist-overlay-close inactive" />
			<div className="wishlist-overlay-content">
				{/*=======  close icon  =======*/}
				<span className="close-icon" id="wishlist-close-icon">
					<a>
						<i className="ion-android-close" />
					</a>
				</span>
				{/*=======  End of close icon  =======*/}
				{/*=======  offcanvas wishlist content container  =======*/}
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
									<a>view wishlist</a>
								</Link>
							</div>
							{/*=======  End of cart buttons  =======*/}
						</div>
					) : (
						<p>No items added to wishlist yet</p>
					)}
				</div>
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
	const [wishlistStore, setWishlistStore] = useLocalStorage("wishlist", []);

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
					{wishlist.product_type.originalPrice && (
						<span className="main-price discounted">₹{wishlist.product_type.originalPrice} </span>
					)}
					&nbsp;&nbsp;
					<span className="discounted-price">₹{wishlist.product_type.discountedPrice}</span>
				</p>
			</div>
		</div>
	);
};
export default Wishlist;
