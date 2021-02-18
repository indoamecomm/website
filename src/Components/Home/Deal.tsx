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
												<i className="icon-left ion-ios-cart" /> Only ₹{" "}
												{getDiscountedPrice(dealOfTheDay.discount, dealOfTheDay.product_type?.originalPrice ?? 0)}
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
	console.log(
		`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
	);

	return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};

export const getDiscountedPrice = (discount: number, originalPrice: number): number => {
	return originalPrice - originalPrice * (discount / 100);
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
