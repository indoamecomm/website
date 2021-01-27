import React from "react";

const Header = () => {
	return (
		<header className="header header-box-topbar header-sticky">
			{/*=======  header bottom  =======*/}
			<div className="header-bottom pt-40   pb-md-40  pb-sm-40">
				<div className="container">
					<div className="header-bottom-container">
						<div className="language-currency-change-container">
							{/*=======  language change =======*/}
							<div className="language-change change-dropdown d-none d-lg-block">
								<a>English</a>
								<ul>
									<li>
										<a href="#">English</a>
									</li>
									<li>
										<a href="#">Kannada</a>
									</li>
									<li>
										<a href="#">Hindi</a>
									</li>
								</ul>
							</div>

							<span className="header-separator d-none d-lg-block">|</span>

							<div className="currency-change change-dropdown d-none d-lg-block">
								<a>INR</a>
								<ul>
									<li>
										<a href="#">EURO</a>
									</li>
									<li>
										<a href="#">USD</a>
									</li>
								</ul>
							</div>
							{/*=======  End of currency change =======*/}
						</div>
						{/*=======  End of language and currency change  =======*/}
						{/*=======  logo with off canvas  =======*/}
						<div className="logo-with-offcanvas">
							{/*=======  logo   =======*/}
							<div className="logo">
								<a href="index.html">
									<img src="/images/logo.png" className="img-fluid" alt="" />
								</a>
							</div>
						</div>

						<div className="header-right-container">
							<div className="header-right-icons d-flex justify-content-end align-items-center h-100">
								<div className="single-icon search">
									<a id="search-icon"></a>
								</div>

								<div className="single-icon user-login">
									<a href="my-account.html">
										<i className="ion-android-person"></i>
									</a>
								</div>
								<div className="single-icon wishlist">
									<a id="offcanvas-wishlist-icon">
										<i className="ion-android-favorite-outline" />
										<span className="count">2</span>
									</a>
								</div>
								<div className="single-icon cart">
									<a id="offcanvas-cart-icon">
										<i className="ion-ios-cart" />
										<span className="count">3</span>
									</a>
								</div>
							</div>
						</div>
						<div className="header-bottom-navigation">
							<div className="site-main-nav d-none d-lg-block">
								<nav className="site-nav center-menu">
									<ul>
										<li>
											<a href="index-test.html">Home</a>
										</li>
										<li className="menu-item-has-children">
											<a>Products</a>
											<ul className="sub-menu mega-menu mega-menu-column-5">
												<li>
													<a className="mega-column-title">Seeds</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="vegetable-seeds.html">Vegetable Seeds</a>
														</li>
														<li>
															<a href="#">Flower Seeds</a>
														</li>
														<li>
															<a href="#">Herbs</a>
														</li>
														<li>
															<a href="#">Microgreens</a>
														</li>
													</ul>
												</li>
												<li>
													<a className="mega-column-title">Plants</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="#">Coming Soon </a>
														</li>
													</ul>
												</li>
												<li>
													<a className="mega-column-title">Collections</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="#">Coming Soon </a>
														</li>
													</ul>
												</li>
												<li>
													<a className="mega-column-title">Downloads</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="#">Digital Catalog</a>
														</li>
														<li>
															<a href="#">Growing Guide</a>
														</li>
														<br />
														<br />
														<br />
														<br />
														<br />
														<br />
													</ul>
												</li>
												<li>
													<div className="menu-image">
														<img src="/images/test/15.png" className="img-fluid" alt="" />
													</div>
												</li>
											</ul>
										</li>
										<li className="menu-item-has-children">
											<a>Others</a>
											<ul className="sub-menu mega-menu mega-menu-column-5">
												<li>
													<a className="mega-column-title">The Community</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="about.html">About Us</a>
														</li>
														<li>
															<a href="https://indamseeds.com/news.html" target="newwindow">
																Indam News
															</a>
														</li>
														<li>
															<a href="https://indamseeds.com/Contact.html">Getting in Touch</a>
														</li>
													</ul>
												</li>
												<li>
													<a className="mega-column-title">Our Outlets</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="#">Outlet 1 </a>
														</li>
														<li>
															<a href="#">Outlet 2</a>
														</li>
														<li>
															<a href="#">Outlet 3</a>
														</li>
													</ul>
												</li>
												<li>
													<a className="mega-column-title">Shop Related</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="faq.html">F.A.Q</a>
														</li>
														<li>
															<a href="privacy-policy.html">Privacy Policy</a>
														</li>
														<li>
															<a href="support.html">Customer Support</a>
														</li>
													</ul>
												</li>
												<li>
													<a className="mega-column-title">Social Presence</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="https://www.facebook.com/indamseeds/?fref=ts" target="newwindow">
																Facebook
															</a>
														</li>
														<li>
															<a href="https://www.instagram.com/" target="newwindow">
																Instagram
															</a>
														</li>
														<li>
															<a href="https://www.youtube.com" target="newwindow">
																YouTube
															</a>
														</li>
														<br />
														<br />
													</ul>
												</li>
												<li>
													<div className="menu-image">
														<img src="/images/test/16.png" className="img-fluid" alt="" />
													</div>
												</li>
											</ul>
										</li>
									</ul>
								</nav>
							</div>
						</div>
						{/*=======  End of header bottom navigation  =======*/}
					</div>
					{/*=======  End of header bottom container  =======*/}
					{/* Mobile Navigation Start Here */}
					<div className="site-mobile-navigation d-block d-lg-none">
						<div id="dl-menu" className="dl-menuwrapper site-mobile-nav">
							{/*Site Mobile Menu Toggle Start*/}
							<button className="dl-trigger hamburger hamburger--spin">
								<span className="hamburger-box">
									<span className="hamburger-inner" />
								</span>
							</button>
							{/*Site Mobile Menu Toggle End*/}
							<ul className="dl-menu dl-menu-toggle">
								<li>
									<a href="#">Home</a>
								</li>
								<li>
									<a href="#">Products</a>
									<ul className="dl-submenu">
										<li>
											{" "}
											<a href="#">Seeds</a>
											<ul className="dl-submenu">
												<li>
													<a href="vegetable-seeds.html">Vegetable Seeds</a>
												</li>
												<li>
													<a href="#">Flower Seeds</a>
												</li>
												<li>
													<a href="#">Herbs</a>
												</li>
												<li>
													<a href="#">Microgreens</a>
												</li>
											</ul>
										</li>
										<li>
											{" "}
											<a href="#">Plants</a>
											<ul className="dl-submenu">
												<li>
													<a href="#">Coming Soon </a>
												</li>
											</ul>
										</li>
										<li>
											{" "}
											<a href="#">Collections</a>
											<ul className="dl-submenu">
												<li>
													<a href="#">Coming Soon </a>
												</li>
											</ul>
										</li>
										<li>
											{" "}
											<a href="#">Downloads</a>
											<ul className="dl-submenu">
												<li>
													<a href="#">Digital Catalog</a>
												</li>
												<li>
													<a href="#">Growing Guide</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<a href="#">Others</a>
									<ul className="dl-submenu">
										<li className="menu-item-has-children">
											<a href="shop-left-sidebar.html">The Community</a>
											<ul className="sub-menu mega-menu mega-menu-column-4">
												<li>
													<a className="mega-column-title">Seeds</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="shop-no-sidebar.html">Vegetable Seeds</a>
														</li>
														<li>
															<a href="shop-left-sidebar.html">Flower Seeds</a>
														</li>
													</ul>
												</li>
												<li>
													<a className="mega-column-title">Greens</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="shop-product-basic.html">Herbs </a>
														</li>
														<li>
															<a href="shop-product-fullwidth.html">Organic</a>
														</li>
														<li>
															<a href="shop-product-sticky-details.html">Microgreens</a>
														</li>
													</ul>
												</li>
												<li>
													<a className="mega-column-title">Collections</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="shop-product-basic.html">Add Ons</a>
														</li>
														<li>
															<a href="shop-product-fullwidth.html">Combo Pack</a>
														</li>
														<li>
															<a href="shop-product-sticky-details.html">DIY Kits</a>
														</li>
														<li>
															<a href="shop-product-with-sidebar.html">Tools</a>
														</li>
														<li>
															<a href="shop-product-extra-content.html">Everything Else</a>
														</li>
													</ul>
												</li>
												<li>
													<a className="mega-column-title">View By</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="shop-product-with-background.html">By Category</a>
														</li>
														<li>
															<a href="shop-cart.html">All Products</a>
														</li>
													</ul>
												</li>
												<li>
													<div className="menu-image">
														<img src="/images/test/15.png" className="img-fluid" alt="" />
													</div>
												</li>
											</ul>
										</li>
										<li className="menu-item-has-children">
											<a>Others</a>
											<ul className="sub-menu mega-menu mega-menu-column-5">
												<li>
													<a className="mega-column-title">The Community</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="about.html">About Us</a>
														</li>
														<li>
															<a href="https://indamseeds.com/news.html" target="newwindow">
																Indam News
															</a>
														</li>
														<li>
															<a href="contact.html">Getting in Touch</a>
														</li>
													</ul>
												</li>
												<li>
													<a className="mega-column-title">Our Outlets</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="#">Outlet 1 </a>
														</li>
														<li>
															<a href="#">Outlet 2</a>
														</li>
														<li>
															<a href="#">Outlet 3</a>
														</li>
													</ul>
												</li>
												<li>
													<a className="mega-column-title">Shop Related</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="faq.html">F.A.Q</a>
														</li>
														<li>
															<a href="privacy-policy.html">Privacy Policy</a>
														</li>
														<li>
															<a href="support.html">Support</a>
														</li>
													</ul>
												</li>
												<li>
													<a className="mega-column-title">Social Presence</a>
													<ul className="mega-sub-menu">
														<li>
															<a href="https://www.facebook.com/indamseeds/?fref=ts" target="newwindow">
																Facebook
															</a>
														</li>
														<li>
															<a href="https://www.instagram.com/" target="newwindow">
																Instagram
															</a>
														</li>
														<li>
															<a href="https://www.youtube.com" target="newwindow">
																YouTube
															</a>
														</li>
													</ul>
												</li>
												<li>
													<div className="menu-image">
														<img src="/images/test/15.png" className="img-fluid" alt="" />
													</div>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
					{/* Mobile Navigation End Here */}
				</div>
			</div>
			{/*=======  End of header bottom  =======*/}
		</header>
	);
};

export default Header;
