import Link from "next/link";
import React from "react";
import {Product_Type} from "../../generated/graphql";

const ProductRecommendation: React.FC<{productTypesRecommendation: Product_Type[]}> = (props) => {
	const {productTypesRecommendation: productTypes} = props;
	return (
		<div className="slider-area mb-80 mb-md-60 mb-sm-60 pb-0">
			{/*=======  slider-wrapper  =======*/}
			<div
				className="lezada-slick-slider decor-slider-wrapper"
				data-slick-setting='{
						"slidesToShow": 1,
						"slidesToScroll": 1,
						"arrows": true,
						"dots": false,
						"centerMode": true,
						"centerPadding": "22%",
						"autoplay": true,
						"autoplaySpeed": 5000,
						"speed": 1000,
						"prevArrow": {"buttonClass": "slick-prev", "iconClass": "ti-angle-left" },
						"nextArrow": {"buttonClass": "slick-next", "iconClass": "ti-angle-right" }
					}'
				data-slick-responsive='[
						{"breakpoint":1501, "settings": {"slidesToShow": 1, "arrows": true, "centerPadding": "160px"} },
						{"breakpoint":1199, "settings": {"slidesToShow": 1, "arrows": true, "centerMode": false} },
						{"breakpoint":991, "settings": {"slidesToShow": 1,"slidesToScroll": 1, "arrows": true, "centerMode": false} },
						{"breakpoint":767, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "arrows": true, "centerMode": false} },
						{"breakpoint":575, "settings": {"slidesToShow": 1, "slidesToScroll": 1,  "arrows": true, "centerMode": false} },
						{"breakpoint":479, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "arrows": true, "centerMode": false} }
					]'>
				{/*=======  single slider  =======*/}
				{productTypes.map((productType) => (
					<div className="decor-single-slider" key={productType.id}>
						<div className="decor-single-slider-content">
							{/*=======  slider image  =======*/}
							<div onContextMenu={(e) => e.preventDefault()} className="slider-image" style={{background: 'black', overflow: 'hidden'}}>
								<img style={{"opacity": '0.6'}} src={productType.recommendedCoverImage ?? ""} className="img-fluid" alt="" />
							</div>
							{/*=======  End of slider image  =======*/}
							{/*=======  slider content  =======*/}
							<div className="slider-content">
								{/* <div className="color-title color-title--white" style={{color: "#FFFFFF"}}>
									{productType.product.sub_category.name}
								</div> */}
								<div className="main-title" style={{color: "#FFFFFF"}}>
									{/* {productType.product.name} <br />  */}
									{productType.name}
								</div>
								<Link href={`/product/${productType.productId}`}>
									<a className="lezada-button lezada-button--medium">shop now</a>
								</Link>
							</div>
							{/*=======  End of slider content  =======*/}
						</div>
					</div>
				))}
				{/*=======  End of single slider  =======*/}
				{/*=======  single slider  =======*/}

				{/*=======  End of single slider  =======*/}
				{/*=======  single slider  =======*/}

				{/*=======  End of single slider  =======*/}
			</div>
			{/*=======  End of slider-wrapper  =======*/}
		</div>
	);
};

export default ProductRecommendation;
