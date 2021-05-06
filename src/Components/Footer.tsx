import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div className="footer-container footer-one pt-100 pb-50">
			<div className="container wide">
				<div className="row">
					<div className="col footer-single-widget">
						{/*=======  copyright text  =======*/}
						{/*=======  logo  =======*/}
						<div className="logo">
							<img src="assets/images/logo.png" className="img-fluid" alt="" />
						</div>
						{/*=======  End of logo  =======*/}
						{/*=======  copyright text  =======*/}
						<div className="copyright-text">
							<p>
								© 2021 Indo American Hybrid Seeds. <span>All Rights Reserved</span>
							</p>
						</div>
						{/*=======  End of copyright text  =======*/}
						{/*=======  End of copyright text  =======*/}
					</div>
					<div className="col footer-single-widget">
						{/*=======  single widget  =======*/}
						<h5 className="widget-title">ABOUT</h5>
						{/*=======  footer navigation container  =======*/}
						<div className="footer-nav-container">
							<nav>
								<ul>
									<li>
										<Link href="/about">
											<a>About us</a>
										</Link>
									</li>
									<li>
										<Link href="/support">
											<a>Store location</a>
										</Link>
									</li>
									<li>
										<Link href="/support">
											<a>Support</a>
										</Link>
									</li>
									<li>
										<Link href="/orderTracking">
											<a>Orders tracking</a>
										</Link>
									</li>
								</ul>
							</nav>
						</div>
						{/*=======  End of footer navigation container  =======*/}
						{/*=======  single widget  =======*/}
					</div>
					<div className="col footer-single-widget">
						{/*=======  single widget  =======*/}
						<h5 className="widget-title">USEFUL LINKS</h5>
						{/*=======  footer navigation container  =======*/}
						<div className="footer-nav-container">
							<nav>
								<ul>
									<li>
										<Link href="/support">
											<a>Support Policy</a>
										</Link>
									</li>
									<li>
										<Link href="/privacy">
											<a>Privacy Policy</a>
										</Link>
									</li>
									<li>
										<Link href="/faqs">
											<a>FAQs</a>
										</Link>
									</li>
								</ul>
							</nav>
						</div>
						{/*=======  End of footer navigation container  =======*/}
						{/*=======  single widget  =======*/}
					</div>
					<div className="col footer-single-widget">
						{/*=======  single widget  =======*/}
						<h5 className="widget-title">FOLLOW US ON</h5>
						{/*=======  footer navigation container  =======*/}
						<div className="footer-nav-container footer-social-links">
							<nav>
								<ul>
									
									<li>
										<a href="https://www.facebook.com/Indo-American-Hybrid-Seeds-India-Pvt-Ltd-Vegetable-Crops-113434713907434" target="_blank">
											<i className="fa fa-facebook" /> Facebook
										</a>
									</li>
									
								</ul>
							</nav>
						</div>
						{/*=======  End of footer navigation container  =======*/}
						{/*=======  single widget  =======*/}
					</div>
					<div className="col footer-single-widget">
						{/*=======  single widget  =======*/}
						<div className="footer-subscription-widget">
							<h2 className="footer-subscription-title">Subscribe.</h2>
							<p className="subscription-subtitle">Subscribe to our newsletter to receive news on update.</p>
							{/*=======  subscription form  =======*/}
							<div className="subscription-form">
								<form id="mc-form" className="mc-form">
									<input type="email" placeholder="Your email address" required />
									<button type="submit">
										<i className="ion-ios-arrow-thin-right" />
									</button>
								</form>
							</div>
							{/*=======  End of subscription form  =======*/}
							{/* mailchimp-alerts Start */}
							<div className="mailchimp-alerts">
								<div className="mailchimp-submitting" />
								{/* mailchimp-submitting end */}
								<div className="mailchimp-success" />
								{/* mailchimp-success end */}
								<div className="mailchimp-error" />
								{/* mailchimp-error end */}
							</div>
							{/* mailchimp-alerts end */}
						</div>
						{/*=======  End of single widget  =======*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
