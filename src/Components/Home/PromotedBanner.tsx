import React from "react";
import {Banner_Type} from "../../generated/graphql";

interface PromotedBannerProps {
	promotedBanner: Banner_Type[];
}
const PromotedBanner: React.FC<PromotedBannerProps> = (props) => {
	const {promotedBanner} = props;

	const promotedBanner1 = promotedBanner[0].banners[0];
	const promotedBanner2 = promotedBanner[0].banners[1];

	return (
		<div className="hover-banner-area mb-70 mb-md-60 mb-sm-60">
			<div className="container wide">
				<div className="row">
					<div className="col-md-6 mb-30">
						{/*=======  single banner  =======*/}
						<div className="single-banner single-banner--hoverborder">
							<a className="banner-link" href="shop-left-sidebar.html" />
							<img src={promotedBanner1?.image ?? undefined} className="img-fluid" alt="" />
							<div className="banner-content banner-content--black-left">
								<p>
									<span className="big-text">{promotedBanner1.title}</span> <span className="small-text d-block">{promotedBanner1.heading}</span>
								</p>
							</div>
						</div>
						{/*=======  End of single banner  =======*/}
					</div>
					<div className="col-md-6 mb-30">
						{/*=======  single banner  =======*/}
						<div className="single-banner single-banner--hoverborder">
							<a className="banner-link" href="shop-left-sidebar.html" />
							<img src={promotedBanner2?.image ?? undefined} className="img-fluid" alt="" />
							<div className="banner-content banner-content--black-left">
								<p>
									<span className="big-text">{promotedBanner2.title}</span> <span className="small-text d-block">{promotedBanner2.heading}</span>
								</p>
							</div>
						</div>
						{/*=======  End of single banner  =======*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PromotedBanner;
