import Link from "next/link";
import React from "react";
import {Banner_Type} from "../../generated/graphql";
import {getBannerLink} from "./Banner";

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
						<div style={{background: 'black', overflow: 'hidden'}} className="single-banner single-banner--hoverborder">
							<Link href={getBannerLink(promotedBanner1.bannerProducts[0])}>
								<a className="banner-link" />
							</Link>
							<img style={{opacity: '0.7'}} src={promotedBanner1?.image ?? undefined} className="img-fluid" alt="" />
							<div className="banner-content banner-content--black-left">
								<p>
									<span style={{color: 'white'}} className="big-text">{promotedBanner1.title}</span>{" "}
									<span style={{color: 'white'}} className="small-text d-block">{promotedBanner1.heading}</span>
								</p>
							</div>
						</div>
						{/*=======  End of single banner  =======*/}
					</div>
					<div className="col-md-6 mb-30">
						{/*=======  single banner  =======*/}
						<div style={{background: 'black', overflow: 'hidden'}} className="single-banner single-banner--hoverborder">
							<Link href={getBannerLink(promotedBanner2.bannerProducts[0])}>
								<a className="banner-link" />
							</Link>

							<img style={{opacity: '0.7'}} src={promotedBanner2?.image ?? undefined} className="img-fluid" alt="" />
							<div className="banner-content banner-content--black-left">
								<p>
									<span style={{color: 'white'}} className="big-text">{promotedBanner2.title}</span>{" "}
									<span style={{color: 'white'}} className="small-text d-block">{promotedBanner2.heading}</span>
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
