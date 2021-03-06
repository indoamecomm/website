import Link from "next/link";
import React from "react";
import {ProductType} from "../../generated/graphql";
import {getDiscountedPrice} from "../Product/ProductTypes";

interface ProductListingProps {
	featuredProducts: ProductType[];
	newProducts: ProductType[];
	topRated: ProductType[];
}

const ProductListing: React.FC<ProductListingProps> = (props: ProductListingProps) => {
	const {featuredProducts, newProducts, topRated} = props;
	return (
		<div className="product-widget-slider-container mb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 mb-md-70 mb-sm-70">
						{/*=======  single product widget slider container  =======*/}
						<div className="single-product-widget-slider-container">
							<h3 className="widget-slider-title" id="append-arrow-1">
								New Products
							</h3>
							{/*=======  single product widget slider  =======*/}
							<div
								className="lezada-slick-slider single-product-widget-slider"
								data-slick-setting='{
									"slidesToShow": 1,
									"slidesToScroll": 1,
									"rows": 3,
									"arrows": true,
									"speed": 1000,
									"appendArrows": "#append-arrow-1",
									"prevArrow": {"buttonClass": "slick-prev", "iconClass": "ti-angle-left" },
									"nextArrow": {"buttonClass": "slick-next", "iconClass": "ti-angle-right" }
								}'
								data-slick-responsive='[
									{"breakpoint":1501, "settings": {"slidesToShow": 1} },
									{"breakpoint":1199, "settings": {"slidesToShow": 1} },
									{"breakpoint":991, "settings": {"slidesToShow": 1,"slidesToScroll": 1} },
									{"breakpoint":767, "settings": {"slidesToShow": 1, "slidesToScroll": 1} },
									{"breakpoint":575, "settings": {"slidesToShow": 1, "slidesToScroll": 1} },
									{"breakpoint":479, "settings": {"slidesToShow": 1, "slidesToScroll": 1} }
								]'>
								{newProducts.map((productType) => (
									<Product productType={productType} key={productType.id} />
								))}
							</div>
							{/*=======  End of single product widget slider  =======*/}
						</div>
						{/*=======  End of single product widget slider container =======*/}
					</div>
					<div className="col-lg-4 col-md-6 mb-sm-70">
						{/*=======  single product widget slider container  =======*/}
						<div className="single-product-widget-slider-container">
							<h3 className="widget-slider-title" id="append-arrow-2">
								Top Rated
							</h3>
							{/*=======  single product widget slider  =======*/}
							<div
								className="lezada-slick-slider single-product-widget-slider"
								data-slick-setting='{
									"slidesToShow": 1,
									"slidesToScroll": 1,
									"rows": 3,
									"arrows": true,
									"speed": 1000,
									"appendArrows": "#append-arrow-2",
									"prevArrow": {"buttonClass": "slick-prev", "iconClass": "ti-angle-left" },
									"nextArrow": {"buttonClass": "slick-next", "iconClass": "ti-angle-right" }
								}'
								data-slick-responsive='[
									{"breakpoint":1501, "settings": {"slidesToShow": 1} },
									{"breakpoint":1199, "settings": {"slidesToShow": 1} },
									{"breakpoint":991, "settings": {"slidesToShow": 1,"slidesToScroll": 1} },
									{"breakpoint":767, "settings": {"slidesToShow": 1, "slidesToScroll": 1} },
									{"breakpoint":575, "settings": {"slidesToShow": 1, "slidesToScroll": 1} },
									{"breakpoint":479, "settings": {"slidesToShow": 1, "slidesToScroll": 1} }
								]'>
								{topRated.map((productType) => (
									<Product productType={productType} key={productType.id} />
								))}
							</div>
							{/*=======  End of single product widget slider  =======*/}
						</div>
						{/*=======  End of single product widget slider container =======*/}
					</div>
					<div className="col-lg-4 col-md-6">
						{/*=======  single product widget slider container  =======*/}
						<div className="single-product-widget-slider-container">
							<h3 className="widget-slider-title" id="append-arrow-3">
								Featured Products
							</h3>
							{/*=======  single product widget slider  =======*/}
							<div
								className="lezada-slick-slider single-product-widget-slider"
								data-slick-setting='{
									"slidesToShow": 1,
									"slidesToScroll": 1,
									"rows": 3,
									"arrows": true,
									"speed": 1000,
									"appendArrows": "#append-arrow-3",
									"prevArrow": {"buttonClass": "slick-prev", "iconClass": "ti-angle-left" },
									"nextArrow": {"buttonClass": "slick-next", "iconClass": "ti-angle-right" }
								}'
								data-slick-responsive='[
										{"breakpoint":1501, "settings": {"slidesToShow": 1} },
										{"breakpoint":1199, "settings": {"slidesToShow": 1} },
										{"breakpoint":991, "settings": {"slidesToShow": 1,"slidesToScroll": 1} },
										{"breakpoint":767, "settings": {"slidesToShow": 1, "slidesToScroll": 1} },
										{"breakpoint":575, "settings": {"slidesToShow": 1, "slidesToScroll": 1} },
										{"breakpoint":479, "settings": {"slidesToShow": 1, "slidesToScroll": 1} }
									]'>
								{featuredProducts.map((productType) => (
									<Product productType={productType} key={productType.id} />
								))}
							</div>
							{/*=======  End of single product widget slider  =======*/}
						</div>
						{/*=======  End of single product widget slider container =======*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductListing;

const Product: React.FC<{productType: ProductType}> = (props) => {
	const {productType} = props;

	//@ts-ignore
	const ratings = Math.ceil(productType.user_ratings_aggregate.aggregate.avg.rating ?? 1);

	return (
		<div className="single-widget-product-wrapper">
			<div className="single-widget-product">
				{/*=======  image  =======*/}
				<div onContextMenu={(e) => e.preventDefault()} className="single-widget-product__image">
					<Link href={`/product/${productType.productId}`}>
						<a>
							<img src={productType?.imageUrl ?? ""} className="img-fluid" alt={productType.name} />
						</a>
					</Link>
				</div>
				{/*=======  End of image  =======*/}
				{/*=======  content  =======*/}
				<div className="single-widget-product__content">
					<div className="single-widget-product__content__top">
						<h3 className="product-title">
							<Link href={`/product/${productType.productId}`}>
								<a>{productType.name}</a>
							</Link>
						</h3>
						<div className="price">
							{productType.originalPrice ? (
								<span className="main-price discounted">₹{productType.originalPrice}</span>
							) : (
								<span />
							)}
							{/*@ts-ignore*/}
							<span className="discounted-price">₹{getDiscountedPrice(productType)}</span>
						</div>
						<div className="rating">
							{[1, 2, 3, 4, 5].map((element) => (
								<i className={element <= ratings ? "ion-android-star" : "ion-android-star-outline"} key={element} />
							))}
						</div>
					</div>
					{/* <div className="single-widget-product__content__bottom">
						<a className="cart-btn" href="#">
							Add to cart
						</a>
					</div> */}
				</div>
				{/*=======  End of content  =======*/}
			</div>
		</div>
	);
};
