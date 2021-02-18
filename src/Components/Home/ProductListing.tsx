import React from "react";
import {ProductType} from "../../generated/graphql";

interface ProductListingProps {
	featuredProducts: ProductType[];
	newProducts: ProductType[];
}

const ProductListing: React.FC<ProductListingProps> = (props: ProductListingProps) => {
	const {featuredProducts, newProducts} = props;
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
									<Product productType={productType} />
								))}
								{newProducts.map((productType) => (
									<Product productType={productType} />
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
								{newProducts.map((productType) => (
									<Product productType={productType} />
								))}
								{newProducts.map((productType) => (
									<Product productType={productType} />
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
									<Product productType={productType} />
								))}
								{newProducts.map((productType) => (
									<Product productType={productType} />
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

	return (
		<div className="single-widget-product-wrapper">
			<div className="single-widget-product">
				{/*=======  image  =======*/}
				<div className="single-widget-product__image">
					<a href="shop-product-basic.html">
						<img src={productType.imageUrl} className="img-fluid" alt={productType.name} />
					</a>
				</div>
				{/*=======  End of image  =======*/}
				{/*=======  content  =======*/}
				<div className="single-widget-product__content">
					<div className="single-widget-product__content__top">
						<h3 className="product-title">
							<a href="shop-product-basic.html">{productType.name}</a>
						</h3>
						<div className="price">
							{productType.discountedPrice && <span className="main-price discounted">₹{productType.discountedPrice}</span>}
							<span className="discounted-price">₹{productType.originalPrice}</span>
						</div>
						<div className="rating">
							<i className="ion-android-star" />
							<i className="ion-android-star" />
							<i className="ion-android-star" />
							<i className="ion-android-star" />
							<i className="ion-android-star" />
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
