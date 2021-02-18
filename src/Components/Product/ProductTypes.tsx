import {useMutation} from "@apollo/client";
import Link from "next/link";
import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import {InsertToUserCart, InsertWishlist} from "../../../queries/productQuery";
import {GetUserCartCount, GetUserWishlistCount} from "../../../queries/userQuery";
import {initializeApollo} from "../../apollo";
import {Product_Type} from "../../generated/graphql";
import {useAuth} from "../../hooks/useAuth";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import Spinner from "../Utils/Spinner";

const ProductTypes: React.FC<{productType: Product_Type; leftOrient: boolean; subCategory: string}> = (props) => {
	const {productType, leftOrient, subCategory} = props;
	const apolloClient = initializeApollo();

	const [loading, setLoading] = useState<boolean>(false);
	const [wishlistLoading, setWishlistLoading] = useState<boolean>(false);

	const [cartExists, setCartExists] = useState<boolean>(false);
	const [wishlistExists, setWishlistExists] = useState<boolean>(false);

	const {user} = useAuth();
	const [count, setCount] = useState<number>(1);

	const [insertToUserCart] = useMutation(InsertToUserCart);
	const [insertWishlist] = useMutation(InsertWishlist);
	const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
	const [cartStore, setCartStore] = useLocalStorage("cart", []);

	const checkCartExist = async () => {
		if (user) {
			const data = await apolloClient.subscribe({
				query: GetUserCartCount,
				variables: {
					userId: user.id,
					productTypeId: productType.id,
				},
			});

			if (data) {
				data.subscribe(({data: {users_aggregate}}) => {
					setCartExists(users_aggregate.aggregate.count > 0);
				});
				// setCartItems(data.data.cart);
			}
		} else {
			console.log(cartStore, checkIfJsonDuplicates(cartStore, productType.id, "productTypeId"));
			setCartExists(checkIfJsonDuplicates(cartStore, productType.id, "productTypeId"));
		}
	};

	const checkWishlistExist = async () => {
		if (user) {
			const data = await apolloClient.subscribe({
				query: GetUserWishlistCount,
				variables: {
					userId: user.id,
					productTypeId: productType.id,
				},
			});

			if (data) {
				data.subscribe(({data: {users_aggregate}}) => {
					console.log(users_aggregate.aggregate.count > 0, "Product Type ", productType.name);
					setWishlistExists(users_aggregate.aggregate.count > 0);
				});
				// setCartItems(data.data.cart);
			}
		} else {
			setWishlistExists(wishlist.includes(productType.id));
		}
	};

	useEffect(() => {
		checkCartExist();
		checkWishlistExist();
	}, [user, cartStore, wishlist]);

	const addToCart = async () => {
		try {
			if (user) {
				setLoading(true);

				const {
					data: {insert_cart},
				} = await insertToUserCart({
					variables: {
						userId: user.id,
						productTypeId: productType.id,
						count,
					},
				});
				setLoading(false);

				if (insert_cart && insert_cart.affected_rows > 0) {
					toast.success("Product Added to your cart successfully");
				} else {
					toast.error("Some unknown error occurred");
				}
			} else {
				let newCartStore: any = [...cartStore];
				if (checkIfJsonDuplicates(newCartStore, productType.id, "productTypeId")) {
					newCartStore = newCartStore.filter((item) => item.productTypeId !== productType.id);
				} else {
					newCartStore.push({productTypeId: productType.id, count});
				}
				newCartStore = new Set(newCartStore);
				setCartStore([...newCartStore]);
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	const addToWishlist = async () => {
		try {
			if (user) {
				setWishlistLoading(true);

				const {
					data: {insert_wishlists},
				} = await insertWishlist({
					variables: {
						userId: user.id,
						productTypeId: productType.id,
					},
				});
				setWishlistLoading(false);

				if (insert_wishlists && insert_wishlists.affected_rows > 0) {
					toast.success("Product Added to your wishlist successfully");
				} else {
					toast.error("Some unknown error occurred");
				}
			} else {
				console.log("Here", wishlist);
				let newWishlist: any = [...wishlist];
				if (newWishlist.includes(productType.id)) {
					newWishlist = newWishlist.filter((item) => item !== productType.id);
				} else {
					newWishlist.push(productType.id);
				}
				newWishlist = new Set(newWishlist);
				setWishlist([...newWishlist]);
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<div className="shop-product">
			<Toaster position="bottom-center" />

			<div className="row pb-100">
				<div className={`col-lg-6 ${leftOrient ? "order-lg-2" : "order-lg-1"}`}>
					{/*=======  shop product description  =======*/}
					<div className="shop-product__description">
						<div className="shop-product__rating mb-15">
							<span className="review-link ml-0">
								<a href="#">SKU {productType.SKU}</a>
							</span>
						</div>
						<div className="shop-product__title mb-15">
							<h2>{productType.name}</h2>
						</div>
						<div className="shop-product__price mb-30">
							{productType.originalPrice && (
								<span className="main-price discounted">&#8377; {productType.originalPrice}</span>
							)}
							<span className="discounted-price">&#8377; {getDiscountedPrice(productType)}</span>
						</div>
						<div className="shop-product__short-desc mb-50">
							{productType.plant && (
								<>
									<strong>Plant</strong>
									<br />
									{productType.plant}
									<br />
									<br />{" "}
								</>
							)}
							{productType.duration && (
								<>
									<strong>Duration</strong>
									<br />
									{productType.duration}
									<br />
									<br />
								</>
							)}
							{productType.remark && (
								<>
									<strong>Remarks</strong>
									<br />
									{productType.remark}
									<br />
									<br />
								</>
							)}
							{productType.product_seasons && productType.product_seasons.length > 0 && (
								<>
									<strong>Season</strong>
									<br />
									<span style={{textTransform: "capitalize"}}>
										{productType.product_seasons.map((season) => season.season.name).join(" | ")}
									</span>
									<br />
									<br />
								</>
							)}
						</div>
						{/*=======  End of other info table  =======*/}
						{/*=======  shop product quantity block  =======*/}
						{!cartExists && (
							<div className="shop-product__block shop-product__block--quantity mb-40">
								<div className="shop-product__block__title">Quantity</div>
								<div className="shop-product__block__value">
									<div className="pro-qty d-inline-block mx-0 pt-0">
										<a
											className="dec qty-btn"
											onClick={() => setCount((oldCount) => (oldCount - 1 > 0 ? oldCount - 1 : 1))}>
											-
										</a>
										<input type="text" value={count} onChange={(event) => setCount(parseInt(event.target.value))} />
										<a className="inc qty-btn" onClick={() => setCount((oldCount) => oldCount + 1)}>
											+
										</a>
									</div>
								</div>
							</div>
						)}
						{/*=======  End of shop product quantity block  =======*/}
						{/*=======  shop product buttons  =======*/}
						<div className="shop-product__buttons mb-40">
							{!loading ? (
								cartExists ? (
									<Link href="/cart">
										<a className="lezada-button lezada-button--medium">Go to Cart</a>
									</Link>
								) : (
									<button className="lezada-button lezada-button--medium" type="button" onClick={addToCart}>
										+ add to cart
									</button>
								)
							) : (
								<div className="d-flex justify-content-center w-50">
									<Spinner width="40px" height="40px" />
								</div>
							)}
						</div>
						{/*=======  End of shop product buttons  =======*/}
						{/*=======  other info table  =======*/}
						<div className="quick-view-other-info pb-0">
							<table>
								<tbody>
									<tr className="single-info"></tr>
									<tr className="single-info">
										<td className="quickview-value">
											<a href="#">{subCategory}</a>,<a href="#">Year Round</a>
										</td>
									</tr>
									<tr>
										<td className="quickview-value">
											<ul className="quickview-social-icons">
												<li>
													<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Findamseeds.com%2Ftest%2Fonion.html&t=&quote=">
														<i className="fa fa-facebook" />
													</a>
												</li>
												<li>
													<a href="https://twitter.com/intent/tweet?text=%20https%3A%2F%2Findamseeds.com%2Ftest%2Fonion.html&related=AddToAny,micropat">
														<i className="fa fa-twitter" />
													</a>
												</li>
												<li>
													<a href="https://api.whatsapp.com/send?text=%20https%3A%2F%2Findamseeds.com%2Ftest%2Fonion.html">
														<i className="fa fa-whatsapp" />
													</a>
												</li>
											</ul>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						{/*=======  End of other info table  =======*/}
					</div>
					{/*=======  End of shop product description  =======*/}
				</div>
				<div className={`col-lg-6 mb-md-70 mb-sm-70 ${leftOrient ? "order-lg-1" : "order-lg-2"}`}>
					{/*=======  shop product big image gallery  =======*/}
					<div className="shop-product__big-image-gallery-wrapper mb-30">
						{/*=======  shop product gallery icons  =======*/}
						<div className="shop-product-rightside-icons">
							{wishlistLoading ? (
								<span className="wishlist-icon">
									<Spinner width="10px" height="10px" />
								</span>
							) : (
								<span className="wishlist-icon">
									<a
										onClick={addToWishlist}
										// data-tippy={!wishlistExists ? "Add to wishlists dude" : "Remove from wishlist"}
										data-tippy-placement="left"
										data-tippy-inertia="true"
										data-tippy-animation="shift-away"
										data-tippy-delay={50}
										data-tippy-arrow="true"
										data-tippy-theme="sharpborder">
										{wishlistExists ? (
											<i className="ion-android-favorite" />
										) : (
											<i className="ion-android-favorite-outline" />
										)}
									</a>
								</span>
							)}
							<span className="enlarge-icon">
								<a
									className="btn-zoom-popup"
									href="#"
									data-tippy="Click to enlarge"
									data-tippy-placement="left"
									data-tippy-inertia="true"
									data-tippy-animation="shift-away"
									data-tippy-delay={50}
									data-tippy-arrow="true"
									data-tippy-theme="sharpborder">
									<i className="ion-android-expand" />
								</a>
							</span>
						</div>
						{/*=======  End of shop product gallery icons  =======*/}
						<div className="shop-product__big-image-gallery-slider">
							{/*=======  single image  =======*/}
							<div className="single-image">
								<img src={productType.imageUrl ?? ""} className="img-fluid" alt={productType.name} />
							</div>
							{/*=======  End of single image  =======*/}
							{/*=======  single image  =======*/}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductTypes;

export const checkIfJsonDuplicates = (jsonObject: any[], checkElement: string | number, checkField: string | number): boolean => {
	for (let i = 0; i < jsonObject.length; i++) {
		if (jsonObject[i][checkField] === checkElement) {
			return true;
		}
	}

	return false;
};

const getDiscountedPrice = (productType: Product_Type): number => {
	let discountPrice = productType.discountedPrice ?? 0;

	return discountPrice;
};
