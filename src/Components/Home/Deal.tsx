import Link from "next/link";
import React from "react";
import {Deal_Of_The_Day} from "../../generated/graphql";

const Deal: React.FC<{dealOfTheDay: Deal_Of_The_Day}> = (props) => {
	const {dealOfTheDay} = props;

	return (
		<div className="countdown-timer-area mb-100 mb-md-60 mb-sm-60">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="countdown-background pt-30 pb-30">
							<div className="row align-items-center">
								<div className="col-12 col-xl-5 col-lg-3">
									<div className="countdown-image text-center">
										<img src="/images/test/06.png" className="img-fluid" alt="" />
									</div>
								</div>
								<div className=" col-12 col-xl-7 col-lg-9">
									<div className="countdown-wrapper text-center">
										<h3>Deal of the day</h3>
										<div className="deal-countdown" data-countdown={formateDate(dealOfTheDay.expiry)} />
										<Link href={getDealLink(dealOfTheDay)}>
											<a className="lezada-button lezada-button--medium lezada-button--icon--left">
												<i className="icon-left ion-ios-cart" /> Only ₹ {getDiscountedPrice(dealOfTheDay)}
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Deal;

const formateDate = (isoDate: string): string => {
	const date = new Date(isoDate);


	return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};

export const getDiscountedPrice = (deal: Deal_Of_The_Day): number => {
	const {product_type: productType, product, discount} = deal;
	let discountPrice = 0;
	if (productType && productType.discountedPrice) {
		discountPrice = productType.discountedPrice - productType.discountedPrice * (discount / 100) ?? 0;
	} else if (product && product.productTypes_aggregate?.aggregate?.avg?.discountedPrice) {
		const productAveragePrice = product.productTypes_aggregate.aggregate.avg.discountedPrice;
		discountPrice = productAveragePrice - productAveragePrice * (discount / 100);
	}

	return discountPrice;
};

export const getDealLink = (deal: Deal_Of_The_Day): string => {
	let link = "";

	if (deal.productTypeId) {
		link = `/product/${deal.product_type?.productId}`;
	} else if (deal.productId) {
		link = `/product/${deal.productId}`;
	}

	return link;
};
