import React from "react";

export interface ProductDescriptionProps {
	name: string;
	categoryName: string;
	description: string;
	nutritiveValue: string;
	productImage: string;

	///images/category/sunglasses1.jpg
}
const ProductDescription: React.FC<ProductDescriptionProps> = (props) => {
	const {name, categoryName, description, nutritiveValue, productImage} = props;

	return (
		<div className="cosmetics-home-intro-area mb-70">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 mb-30">
						<div className="cosmetics-home-intro">
							<h1>{name}</h1>
							<p className="label">{categoryName}</p>
							<p className="description">{description}</p>
							{nutritiveValue && nutritiveValue.trim().length > 2 && (
								<p>
									<strong>Nutritive value : </strong>
									{nutritiveValue}
								</p>
							)}
						</div>
					</div>
					<div className="col-md-6 pl-60 pl-sm-15 pl-xs-15 pl-xxs-15 mb-30">
						{/*=======  single image  =======*/}
						<div className="single-category__image single-category__image--two text-center text-md-right">
							<img src={productImage} className="img-fluid" alt={`${name} main image`} />
						</div>
						{/*=======  End of single image  =======*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDescription;
