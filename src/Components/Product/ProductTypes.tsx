import React from "react";
import {Product_Type} from "../../generated/graphql";

const ProductTypes: React.FC<{productType: Product_Type; leftOrient: boolean; subCategory: string}> = (props) => {
	const {productType, leftOrient, subCategory} = props;

	return (
		<div className="shop-product">
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
							{productType.originalPrice && <span className="main-price discounted">&#8377; {productType.originalPrice}</span>}
							<span className="discounted-price">&#8377; {productType.discountedPrice}</span>
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
									<span style={{textTransform: "capitalize"}}>{productType.product_seasons.map((season) => season.season.name).join(" | ")}</span>
									<br />
									<br />
								</>
							)}
						</div>
						{/*=======  End of other info table  =======*/}
						{/*=======  shop product quantity block  =======*/}
						<div className="shop-product__block shop-product__block--quantity mb-40">
							<div className="shop-product__block__title">Quantity</div>
							<div className="shop-product__block__value">
								<div className="pro-qty d-inline-block mx-0 pt-0">
									<input type="text" defaultValue={1} />
								</div>
							</div>
						</div>
						{/*=======  End of shop product quantity block  =======*/}
						{/*=======  shop product buttons  =======*/}
						<div className="shop-product__buttons mb-40">
							<a className="lezada-button lezada-button--medium" href="#">
								{" "}
								+ add to cart
							</a>
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
							<span className="wishlist-icon">
								<a
									href="#"
									data-tippy="Add to wishlist"
									data-tippy-placement="left"
									data-tippy-inertia="true"
									data-tippy-animation="shift-away"
									data-tippy-delay={50}
									data-tippy-arrow="true"
									data-tippy-theme="sharpborder">
									<i className="ion-android-favorite-outline" />
								</a>
							</span>
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
