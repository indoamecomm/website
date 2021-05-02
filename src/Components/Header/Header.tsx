import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { GetUserTotalCartCount, GetUserTotalWishlistCount } from "../../../queries/userQuery";
import { initializeApollo } from "../../apollo";
import { Category, Store_Locations } from "../../generated/graphql";
import { useAuth } from "../../hooks/useAuth";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import wishlistContext from "../../Context/wishlistContext";
import cartContext from "../../Context/cartContext";
import overlayContext from "../../Context/overlayContext";

interface HeaderProps {
	categories: Category[];
	storeLocations: Store_Locations[];
}

const Header: React.FC<HeaderProps> = (props) => {
	const { categories, storeLocations } = props;
	const [cartCount, setCartCount] = useState<number>(0);
	const { cart: cartStore } = useContext(cartContext);
	const { wishlist } = useContext(wishlistContext);

	const { setWishlistActive, setCartActive } = useContext(overlayContext);

	const [wishlistCount, setWishlistCount] = useState<number>(0);

	const { user } = useAuth();

	const apolloClient = initializeApollo();
	const getCartCount = async () => {
		const data = await apolloClient.subscribe({
			query: GetUserTotalCartCount,
			variables: {
				userId: user.id,
			},
		});

		if (data) {
			data.subscribe(({ data: { cart_aggregate } }) => {
				setCartCount(cart_aggregate.aggregate.count);
			});
			// setCartItems(data.data.cart);
		}
	};

	useEffect(() => {
		if (!user) {
			setWishlistCount(wishlist && wishlist.length > 0 ? wishlist.length : 0);
			setCartCount(cartStore && cartStore.length > 0 ? cartStore.length : 0);
		}
	}, [wishlist, cartStore, user]);

	const getWishlistCount = async () => {
		const data = await apolloClient.subscribe({
			query: GetUserTotalWishlistCount,
			variables: {
				userId: user.id,
			},
		});

		if (data) {
			data.subscribe(({ data: { wishlists_aggregate } }) => {
				setWishlistCount(wishlists_aggregate.aggregate.count);
			});
			// setCartItems(data.data.cart);
		}
	};

	useEffect(() => {
		if (user) {
			getCartCount();
			getWishlistCount();
		}
	}, [user]);

	return (
		<header className="header header-box-topbar header-sticky">
			<Wishlist />
			<Cart />
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
										<a href="#">Kannada (coming soon)</a>
									</li>
									<li>
										<a href="#">Hindi (coming soon)</a>
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
								<Link href="/">
									<a>
										<img src="/images/logo.png" className="img-fluid" alt="" />
									</a>
								</Link>
							</div>
						</div>

						<div className="header-right-container">
							<div className="header-right-icons d-flex justify-content-end align-items-center h-100">
								<div className="single-icon search">
									<a id="search-icon"></a>
								</div>

								<div className="single-icon user-login">
									<Link href={user ? "/account" : "/login"}>
										<a>
											<i className={user != null ? 'ion-android-contact': 'ion-android-person'}></i>
										</a>
									</Link>
								</div>
								<div
									className="single-icon wishlist"
									onClick={() => {
										setWishlistActive(true);
									}}>
									<a
										id="offcanvas-wishlist-icon"
										onClick={() => {
											setWishlistActive(true);
										}}>
										<i className="ion-android-favorite-outline" />
										<span className="count">{wishlistCount}</span>
									</a>
								</div>
								<div
									className="single-icon cart"
									onClick={() => {
										setCartActive(true);
									}}>
									<a
										id="offcanvas-cart-icon"
										onClick={() => {
											setCartActive(true);
										}}>
										<i className="ion-ios-cart" />
										<span className="count">{cartCount}</span>
									</a>
								</div>
							</div>
						</div>
						<div className="header-bottom-navigation">
							<div className="site-main-nav d-none d-lg-block">
								<nav className="site-nav center-menu">
									<ul>
										<li>
											<Link href="/">
												<a>Home</a>
											</Link>
										</li>
										<li className="menu-item-has-children">
											<a>Products</a>
											<ul className="sub-menu mega-menu mega-menu-column-5">
												{categories &&
													categories.map((category) => (
														<HeaderCategoryCard category={category} key={category.id} isMobile={false} />
													))}
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
															<Link href="/about">
																<a>About Us</a>
															</Link>
														</li>
														<li>
															<Link href="/blogs">
																<a target="newwindow">Indam News</a>
															</Link>
														</li>
														<li>
															<Link href="/support">
																<a>Getting in Touch</a>
															</Link>
														</li>
													</ul>
												</li>
												<HeaderStoreLocations storeLocations={storeLocations} isMobile={false} />
												<li>
													<a className="mega-column-title">Shop Related</a>
													<ul className="mega-sub-menu">
														<li>
															<Link href="/faqs">
																<a>F.A.Q</a>
															</Link>
														</li>
														<li>
															<Link href="/privacy">
																<a>Privacy Policy</a>
															</Link>
														</li>
														<li>
															<Link href="/support">
																<a>Customer Support</a>
															</Link>
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
									<Link href="/">
										<a>Home</a>
									</Link>
								</li>
								<li>
									<a>Products</a>
									<ul className="dl-submenu">
										{categories &&
											categories.map((category) => (
												<HeaderCategoryCard category={category} key={category.id} isMobile={true} />
											))}
										<li>
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
									<a>Others</a>
									<ul className="dl-submenu">
										<li className="menu-item-has-children">
											<a>The Community</a>
											<ul className="sub-menu mega-menu mega-menu-column-4">
												<li>
													<a className="mega-column-title">Seeds</a>
													<ul className="mega-sub-menu">
														{categories &&
															categories.map((category) => (
																<HeaderCategoryCard
																	category={category}
																	key={category.id}
																	isMobile={false}
																/>
															))}
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
															<Link href="/about">
																<a>About Us</a>
															</Link>
														</li>
														<li>
															<Link href="/blogs">
																<a target="newwindow">Indam News</a>
															</Link>
														</li>
														<li>
															<Link href="/support">
																<a>Getting in Touch</a>
															</Link>
														</li>
													</ul>
												</li>
												<HeaderStoreLocations storeLocations={storeLocations} isMobile={true} />
												<li>
													<a className="mega-column-title">Shop Related</a>
													<ul className="mega-sub-menu">
														<li>
															<Link href="Faqs">
																<a>F.A.Q</a>
															</Link>
														</li>
														<li>
															<Link href="/privacy">
																<a>Privacy Policy</a>
															</Link>{" "}
														</li>
														<li>
															<Link href="/support">
																<a>Support</a>
															</Link>
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

interface HeaderCategoryCardProps {
	category: Category;
	isMobile: boolean;
}

const HeaderCategoryCard: React.FC<HeaderCategoryCardProps> = (props: HeaderCategoryCardProps) => {
	const { category, isMobile } = props;

	return (
		<li>
			<a href="#" className={isMobile ? " " : "mega-column-title"}>
				{category.name}
			</a>
			<ul className={isMobile ? "dl-submenu" : "mega-sub-menu"}>
				{category.subCategories && category.subCategories.length > 0 ? (
					category &&
					category.subCategories?.map((subCategory) => (
						<li key={subCategory?.id}>
							{subCategory?.isDeleted ? <a>{subCategory?.name}</a> : <Link href={`/category/${subCategory?.id}`}>
								<a>{subCategory?.name}</a>
							</Link>}
						</li>
					))
				) : (
					<li>
						<a>Coming soon</a>
					</li>
				)}
			</ul>
		</li>
	);
};

interface HeaderStoreLocationProps {
	storeLocations: Store_Locations[];
	isMobile: boolean;
}

const HeaderStoreLocations: React.FC<HeaderStoreLocationProps> = (props: HeaderStoreLocationProps) => {
	const { isMobile } = props;

	return (
		<li>
			<a href="#" className={isMobile ? " " : "mega-column-title"}>
				Other Outlets
			</a>
			<ul className={isMobile ? "dl-submenu" : "mega-sub-menu"}>
				<li>
					<a href="https://maps.app.goo.gl/MHJ7dAzQDkwCzW3E9" target="_blank">
						Corporate Office
					</a>
				</li>
				<li>
					<a
						href="https://maps.app.goo.gl/osAKo2kwnxYhZNU56
"
						target="_blank">
						Garden Center
					</a>
				</li>
				<li>
					<a
						href="https://maps.app.goo.gl/2B4N73mon8Nwud9g8
"
						target="_blank">
						Ambara
					</a>
				</li>
				<li>
					<a href="https://maps.app.goo.gl/bjHg4zyp2dC4vnFE6" target="_blank">
						Charms
					</a>
				</li>
				{/* {storeLocations && storeLocations.length > 0 ? (
					storeLocations.map((storeLocation) => (
						<li key={storeLocation?.id}>
							<a>{storeLocation?.name}</a>
						</li>
					))
				) : (
					<li>
						<a>Coming soon</a>
					</li>
				)} */}
			</ul>
		</li>
	);
};
