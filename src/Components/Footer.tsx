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
								{" "}
								© 2019 Indo American Hybrid Seeds. <span>All Rights Reserved</span>
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
										<a href="store-location.html">Store location</a>
									</li>
									<li>
										<Link href="/faqs">
											<a>FAQs</a>
										</Link>
									</li>
									<li>
										<a href="shop-order-tracking.html">Orders tracking</a>
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
										<a href="#">Support Policy</a>
									</li>
									<li>
										<a href="#">Privacy Policy</a>
									</li>
									<li>
										<a href="faq.html">FAQs</a>
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
										<a href="//instagram.com">
											<i className="fa fa-instagram" /> Instagram
										</a>
									</li>
									<li>
										<a href="https://www.facebook.com/indamseeds/?fref=ts">
											{" "}
											<i className="fa fa-facebook" /> Facebook
										</a>
									</li>
									<li>
										<a href="//youtube.com">
											{" "}
											<i className="fa fa-youtube" /> Youtube
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
