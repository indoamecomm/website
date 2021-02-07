import React from "react";

interface ProductHeaderProps {
	seasons: string;
	productTypesLength: number;
}

const ProductHeader: React.FC<ProductHeaderProps> = (props) => {
	const {seasons, productTypesLength} = props;
	return (
		<div className="section-title-container mb-70 mb-md-50 mb-sm-50">
			<div className="container">
				<div className="row mb-75">
					<div className="col-6">
						<div className="section-title__label section-title__label-style2 section-title__label--left section-title__label-style3--left">
							<p style={{textTransform: "capitalize"}}>
								{seasons} <br /> SEASONS
							</p>
						</div>
					</div>
					<div className="col-6 text-right">
						<div className="section-title__label  section-title__label-style2 section-title__label--right section-title__label-style3--right">
							<p>
								{productTypesLength < 10 ? `0${productTypesLength}` : productTypesLength} <br />
								VARIANTS
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductHeader;
