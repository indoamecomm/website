import Head from "next/head";
import React from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";

interface HeaderProps {
	categories: Category[];
	storeLocations: Store_Locations[];
}

const index: React.FC<HeaderProps> = (props: HeaderProps) => {
	const {categories, storeLocations} = props;
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>Category</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<div>
					<BreadCrumb backgroundImage={"/images/breadcrumb-bg/01.jpg"} title={"Category"} finalName={"CATEGORY"} links={[{link: "/", name: "HOME"}]} />

					<CategoryMain />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default index;

const CategoryMain: React.FC = () => {
	return (
		<div className="shop-page-wrapper">
			{/*=======  shop page header  =======*/}
			<div className="shop-page-header">
				<div className="container wide">
					<div className="row align-items-center">
						<div className="col-12 col-lg-7 col-md-10 d-none d-md-block">
							{/*=======  fitler titles  =======*/}
							<div className="filter-title filter-title--type-two">
								<ul className="product-filter-menu">
									<li className="active" data-filter="*">
										All
									</li>
									<li data-filter=".hot">Kharif</li>
									<li data-filter=".new">Rabi</li>
									<li data-filter=".sale">Monsoon</li>
									<li data-filter=".sale">All Year</li>
								</ul>
							</div>
							{/*=======  End of fitler titles  =======*/}
						</div>
						<div className="col-12 col-lg-5 col-md-2">
							{/*=======  filter icons  =======*/}
							<div className="filter-icons">
								{/*=======  filter dropdown  =======*/}
								<div className="single-icon filter-dropdown">
									<select className="nice-select">
										<option value={0}>Default sorting</option>
										<option value={1}>Sort ny popularity</option>
										<option value={0}>Sort by average rating</option>
										<option value={0}>Sort by latest</option>
										<option value={0}>Sort by price: low to high</option>
										<option value={0}>Sort by price: high to low</option>
									</select>
								</div>
								{/*=======  End of filter dropdown  =======*/}
								{/*=======  grid icons  =======*/}
								<div className="single-icon grid-icons">
									<a data-target="five-column" className="active">
										<i className="ti-layout-grid4-alt" />
									</a>
									<a data-target="four-column">
										<i className="ti-layout-grid3-alt" />
									</a>
									<a data-target="three-column">
										<i className="ti-layout-grid2-alt" />
									</a>
									<a data-target="list">
										<i className="ti-view-list" />
									</a>
								</div>
							</div>
							{/*=======  End of filter icons  =======*/}
						</div>
					</div>
				</div>
			</div>
			{/*=======  End of shop page header  =======*/}
			{/*=============================================
		=            shop page content         =
		=============================================*/}
			<div className="shop-page-content mt-100 mb-100">
				<div className="container wide">
					<div className="row">
						<div className="col-xl-3 col-lg-3 order-2 order-lg-1">
							{/*=======  page sidebar  =======*/}
							<div className="page-sidebar">
								{/*=======  single sidebar widget  =======*/}
								<div className="single-sidebar-widget mb-40">
									{/*=======  search widget  =======*/}
									<div className="search-widget">
										<form action="#">
											<input type="search" placeholder="Search products ..." />
											<button type="button">
												<i className="ion-android-search" />
											</button>
										</form>
									</div>
									{/*=======  End of search widget  =======*/}
								</div>
								{/*=======  End of single sidebarwidget  =======*/}
								{/*=======  single sidebar widget  =======*/}
								<div className="single-sidebar-widget mb-40">
									<h2 className="single-sidebar-widget--title">Categories</h2>
									<ul className="single-sidebar-widget--list single-sidebar-widget--list--category">
										<li className="has-children">
											<a href="shop-left-sidebar.html">Seeds </a> <span className="quantity">125</span>
											<ul>
												<li className="has-children">
													<a href="shop-left-sidebar.html">Vegetable Seeds </a> <span className="quantity">50</span>
													<ul>
														<li>
															<a href="shop-left-sidebar.html">Onion</a>
														</li>
														<li>
															<a href="shop-left-sidebar.html">Tomato</a>
														</li>
														<li>
															<a href="shop-left-sidebar.html">Potato</a>
														</li>
														<li>
															<a href="shop-left-sidebar.html">Chillies</a>
														</li>
													</ul>
												</li>
												<li className="has-children">
													<a href="shop-left-sidebar.html">Flower Seeds </a> <span className="quantity">75</span>
													<ul>
														<li>
															<a href="shop-left-sidebar.html">Jasmine</a>
														</li>
														<li>
															<a href="shop-left-sidebar.html">Rose</a>
														</li>
														<li>
															<a href="shop-left-sidebar.html">Daisy</a>
														</li>
														<li>
															<a href="shop-left-sidebar.html">Sunflower</a>
														</li>
														<li>
															<a href="shop-left-sidebar.html">Lotus</a>
														</li>
														<li>
															<a href="shop-left-sidebar.html">Lily</a>
														</li>
														<li>
															<a href="shop-left-sidebar.html">Black Daisy</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="has-children">
											<a href="shop-left-sidebar.html">Greens </a> <span className="quantity">23</span>
											<ul>
												<li>
													<a href="shop-left-sidebar.html">Type A</a>
												</li>
												<li>
													<a href="shop-left-sidebar.html">Typeb</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="shop-left-sidebar.html">MicroGreens </a> <span className="quantity">12</span>
										</li>
										<li>
											<a href="shop-left-sidebar.html">Others </a> <span className="quantity">22</span>
										</li>
									</ul>
								</div>
								{/*=======  End of single sidebar widget  =======*/}
								{/*=======  single sidebar widget  =======*/}
								<div className="single-sidebar-widget mb-40">
									<h2 className="single-sidebar-widget--title">Popular products</h2>
									{/*=======  widget product wrapper  =======*/}
									<div className="widget-product-wrapper">
										{/*=======  single widget product  =======*/}
										<div className="single-widget-product-wrapper">
											<div className="single-widget-product">
												{/*=======  image  =======*/}
												<div className="single-widget-product__image">
													<a href="#">
														<img src="/images/products/product-furniture-2-100x100.jpg" className="img-fluid" alt="" />
													</a>
												</div>
												{/*=======  End of image  =======*/}
												{/*=======  content  =======*/}
												<div className="single-widget-product__content">
													<div className="single-widget-product__content__top">
														<h3 className="product-title">
															<a href="#">Indam Redstar</a>
														</h3>
														<div className="price">
															<span className="main-price discounted">₹270.00</span>
															<span className="discounted-price">₹220.00</span>
														</div>
														<div className="rating">
															<i className="ion-android-star" />
															<i className="ion-android-star" />
															<i className="ion-android-star-outline" />
															<i className="ion-android-star-outline" />
															<i className="ion-android-star-outline" />
														</div>
													</div>
												</div>
												{/*=======  End of content  =======*/}
											</div>
										</div>
										{/*=======  End of single widget product  =======*/}
										{/*=======  single widget product  =======*/}
										<div className="single-widget-product-wrapper">
											<div className="single-widget-product">
												{/*=======  image  =======*/}
												<div className="single-widget-product__image">
													<a href="#">
														<img src="/images/products/product-furniture-11-100x100.jpg" className="img-fluid" alt="" />
													</a>
												</div>
												{/*=======  End of image  =======*/}
												{/*=======  content  =======*/}
												<div className="single-widget-product__content">
													<div className="single-widget-product__content__top">
														<h3 className="product-title">
															<a href="#">Onion Indam</a>
														</h3>
														<div className="price">
															<span className="main-price discounted">₹660.00</span>
															<span className="discounted-price">₹600.00</span>
														</div>
														<div className="rating">
															<i className="ion-android-star" />
															<i className="ion-android-star" />
															<i className="ion-android-star" />
															<i className="ion-android-star" />
															<i className="ion-android-star" />
														</div>
													</div>
												</div>
												{/*=======  End of content  =======*/}
											</div>
										</div>
										{/*=======  End of single widget product  =======*/}
										{/*=======  single widget product  =======*/}
										<div className="single-widget-product-wrapper">
											<div className="single-widget-product">
												{/*=======  image  =======*/}
												<div className="single-widget-product__image">
													<a href="#">
														<img src="/images/products/soccer-4-100x100.jpg" className="img-fluid" alt="" />
													</a>
												</div>
												{/*=======  End of image  =======*/}
												{/*=======  content  =======*/}
												<div className="single-widget-product__content">
													<div className="single-widget-product__content__top">
														<h3 className="product-title">
															<a href="#">Indam Chillies</a>
														</h3>
														<div className="price">
															<span className="main-price discounted">₹36.00</span>
															<span className="discounted-price">₹33.00</span>
														</div>
														<div className="rating">
															<i className="ion-android-star" />
															<i className="ion-android-star" />
															<i className="ion-android-star" />
															<i className="ion-android-star" />
															<i className="ion-android-star-outline" />
														</div>
													</div>
												</div>
												{/*=======  End of content  =======*/}
											</div>
										</div>
										{/*=======  End of single widget product  =======*/}
									</div>
									{/*=======  End of widget product wrapper  =======*/}
								</div>
								{/*=======  End of single sidebar widget  =======*/}
							</div>
							{/*=======  End of page sidebar  =======*/}
						</div>
						<div className="col-xl-9 col-lg-9 order-1 order-lg-2 mb-md-80 mb-sm-80">
							<div className="row product-isotope shop-product-wrap five-column">
								{/*=======  single product  =======*/}
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 hot new sale">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="/images/products/cloth-1-11-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/cloth-1-21-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-badges"></div>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="onion.html">Onions</a>
												</h3>
												<a href="onion.html">View Options</a>
											</div>
											<div className="price">
												<span className="main-price discounted">₹160.00 - ₹180.00</span>
												<span className="discounted-price">₹180.00 - ₹250.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="onion.html">
												<img src="/images/products/cloth-1-11-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/cloth-1-21-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="onion.html">Onions</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price discounted">₹160.00 - ₹180.00</span>
												<span className="discounted-price">₹180.00 - ₹250.00</span>
											</div>
											<p className="short-desc">
												Onion is most widely cultivated popular vegetable species. It is used for culinary purpose also it has several non-culinary use like it is used as Moth
												repellent because of its pungent juice, it is used to polish glass and copperware, onion concentrated water can be spray on plants to increased plants
												pest resistance. India ranks first in term of area and second in production after China. Green Onions are also known as scallions or spring onions. They
												contain variety of health-enhancing compounds like minerals, vitamins and phytochemicals. You can use these raw in salads or cook them in combination
												with other vegetables to get that extra boost of nutrition.
											</p>
											<a href="onion.html" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
								{/*=======  End of single product  =======*/}
								{/*=======  single product  =======*/}
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 sale">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="/images/products/cloth-1-12-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/cloth-1-22-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="beetroot.html">Beetroot</a>
												</h3>
												<a href="beetroot.html">View Options</a>
											</div>
											<div className="price">
												<span className="main-price">₹130.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="beetroot.html">
												<img src="/images/products/cloth-1-12-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/cloth-1-22-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="beetroot.html">Beetroot</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price">₹130.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Beetroot is also known as “garden beet”. It is sweet in taste and is healthy having antioxidant properties. Best time to grow beetroots is from July
												through August for winter storage, it can be grown all year round. Beetroot can be classified into two main types - globe and long rooted. Once only
												blood-red root was available, but now we have orange, yellow, gold, white and even concentrically ringed roots of varying shapes. It is a versatile
												vegetable &amp; it is easy to grow.
											</p>
											<a href="beetroot.html" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
								{/*=======  End of single product  =======*/}
								{/*=======  single product  =======*/}
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 hot new sale">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="beetroot.html">
												<img src="/images/products/watch-2-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/watch-2-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Tomato</a>
												</h3>
												<a href="#">View Options</a>
											</div>
											<div className="price">
												<span className="main-price discounted">₹260.00</span>
												<span className="discounted-price">₹230.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="/images/products/watch-2-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/watch-2-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Tomato</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price discounted">₹260.00</span>
												<span className="discounted-price">₹230.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente
												eveniet consectetur voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis, Lorem ipsum dolor sit amet consectetur,
												adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur voluptas quas harum
												impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
											</p>
											<a href="#" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
								{/*=======  End of single product  =======*/}
								{/*=======  single product  =======*/}
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 new">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="/images/products/watch-3-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/watch-3-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-badges"></div>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#"> Chillies</a>
												</h3>
												<a href="#">View Options</a>
											</div>
											<div className="price">
												<span className="main-price discounted">₹120.00</span>
												<span className="discounted-price">₹100.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="/images/products/watch-3-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/watch-3-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Chillies</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price discounted">₹120.00</span>
												<span className="discounted-price">₹100.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente
												eveniet consectetur voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,Lorem ipsum dolor sit amet consectetur,
												adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur voluptas quas harum
												impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
											</p>
											<a href="#" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
								{/*=======  End of single product  =======*/}
								{/*=======  single product  =======*/}
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 sale">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="/images/products/cosmetics-1-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/cosmetics-1-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Potato</a>
												</h3>
												<a href="#">View Options</a>
											</div>
											<div className="price">
												<span className="main-price discounted">₹100.00</span>
												<span className="discounted-price">₹80.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="/images/products/cosmetics-1-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/cosmetics-1-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Potato</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price discounted">₹100.00</span>
												<span className="discounted-price">₹80.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente
												eveniet consectetur voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,Lorem ipsum dolor sit amet consectetur,
												adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur voluptas quas harum
												impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
											</p>
											<a href="#" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
								{/*=======  End of single product  =======*/}
								{/*=======  single product  =======*/}
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 sale">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="/images/products/furniture-1-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/furniture-1-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Beans</a>
												</h3>
												<a href="#">View Options</a>
											</div>
											<div className="price">
												<span className="main-price discounted">₹400.00</span>
												<span className="discounted-price">₹380.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="/images/products/furniture-1-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/furniture-1-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Beans</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price discounted">₹400.00</span>
												<span className="discounted-price">₹380.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente
												eveniet consectetur voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis, Lorem ipsum dolor sit amet consectetur,
												adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur voluptas quas harum
												impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
											</p>
											<a href="#" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
								{/*=======  End of single product  =======*/}
								{/*=======  single product  =======*/}
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 new">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="/images/products/furniture-2-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/furniture-2-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-badges"></div>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Carrot</a>
												</h3>
												<a href="#">View Options</a>
											</div>
											<div className="price">
												<span className="main-price">₹85.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="/images/products/furniture-2-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/furniture-2-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Carrot</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price">₹85.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente
												eveniet consectetur voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,Lorem ipsum dolor sit amet consectetur,
												adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur voluptas quas harum
												impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
											</p>
											<a href="#" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
								{/*=======  End of single product  =======*/}
								{/*=======  single product  =======*/}
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 sale">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="/images/products/furniture-3-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/furniture-3-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Green</a>
												</h3>
												<a href="#">View Options</a>
											</div>
											<div className="price">
												<span className="main-price discounted">₹360.00</span>
												<span className="discounted-price">₹300.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="/images/products/furniture-3-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/furniture-3-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-badges">
												<span className="onsale">-25%</span>
											</div>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Green </a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price discounted">₹360.00</span>
												<span className="discounted-price">₹300.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente
												eveniet consectetur voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,Lorem ipsum dolor sit amet consectetur,
												adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur voluptas quas harum
												impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
											</p>
											<a href="#" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
							
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 hot sale">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="/images/products/cloth-1-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="/images/products/cloth-1-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Spinach</a>
												</h3>
												<a href="#">+ View Options</a>
											</div>
											<div className="price">
												<span className="main-price discounted">₹160.00</span>
												<span className="discounted-price">₹180.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/cloth-1-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/cloth-1-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
											<div className="single-product__variations">{/* <a href="#" class="clear-link">clear</a> */}</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Spinach</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price discounted">₹160.00</span>
												<span className="discounted-price">₹180.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente
												eveniet consectetur voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,Lorem ipsum dolor sit amet consectetur,
												adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur voluptas quas harum
												impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
											</p>
											<a href="#" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
							
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 sale">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/watch-1-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/watch-1-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Broccoli</a>
												</h3>
												<a href="#">View Options</a>
											</div>
											<div className="price">
												<span className="main-price">₹130.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/watch-1-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/watch-1-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Broccoli</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price">₹130.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente
												eveniet consectetur voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis, Lorem ipsum dolor sit amet consectetur,
												adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur voluptas quas harum
												impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
											</p>
											<a href="#" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
							
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 hot">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/watch-2-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/watch-2-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Garlic</a>
												</h3>
												<a href="#">View Options</a>
											</div>
											<div className="price">
												<span className="main-price discounted">₹260.00</span>
												<span className="discounted-price">₹230.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/watch-2-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/watch-2-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-badges">
												<span className="hot">hot</span>
											</div>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Garlic</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price discounted">₹260.00</span>
												<span className="discounted-price">₹230.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente
												eveniet consectetur voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis, Lorem ipsum dolor sit amet consectetur,
												adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur voluptas quas harum
												impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
											</p>
											<a href="#" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
								
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 new">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/watch-3-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/watch-3-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-badges"></div>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#"> Peas</a>
												</h3>
												<a href="#">View Options</a>
											</div>
											<div className="price">
												<span className="main-price discounted">₹120.00</span>
												<span className="discounted-price">₹100.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/watch-3-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/watch-3-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Peas</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price discounted">₹120.00</span>
												<span className="discounted-price">₹100.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente
												eveniet consectetur voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,Lorem ipsum dolor sit amet consectetur,
												adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur voluptas quas harum
												impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
											</p>
											<a href="#" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
						
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 sale">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/cosmetics-1-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/cosmetics-1-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Ginger</a>
												</h3>
												<a href="#">View Options</a>
											</div>
											<div className="price">
												<span className="main-price discounted">₹100.00</span>
												<span className="discounted-price">₹80.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/cosmetics-1-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/cosmetics-1-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-badges">
												<span className="onsale">-5%</span>
											</div>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Ginger</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price discounted">₹100.00</span>
												<span className="discounted-price">₹80.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente
												eveniet consectetur voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis, Lorem ipsum dolor sit amet consectetur,
												adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur voluptas quas harum
												impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
											</p>
											<p />
											<a href="#" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
							
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 sale">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/furniture-1-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/furniture-1-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Asparagus</a>
												</h3>
												<a href="#">View Options</a>
											</div>
											<div className="price">
												<span className="main-price discounted">₹400.00</span>
												<span className="discounted-price">₹380.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/furniture-1-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/furniture-1-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Asparagus</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price discounted">₹400.00</span>
												<span className="discounted-price">₹380.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente
												eveniet consectetur voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis, Lorem ipsum dolor sit amet consectetur,
												adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur voluptas quas harum
												impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
											</p>
											<a href="#" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
							
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 new">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/furniture-2-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/furniture-2-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-badges"></div>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Cabbage</a>
												</h3>
												<a href="#">View Options</a>
											</div>
											<div className="price">
												<span className="main-price">₹85.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/furniture-2-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/furniture-2-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Cabbage</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price">₹85.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente
												eveniet consectetur voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis, Lorem ipsum dolor sit amet consectetur,
												adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur voluptas quas harum
												impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
											</p>
											<a href="#" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
							
								<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 sale">
									<div className="single-product">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/furniture-3-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/furniture-3-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="left">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Sweet Potatoes</a>
												</h3>
												<a href="#">View Options</a>
											</div>
											<div className="price">
												<span className="main-price discounted">₹360.00</span>
												<span className="discounted-price">₹300.00</span>
											</div>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
									<div className="single-product--list">
										{/*=======  single product image  =======*/}
										<div className="single-product__image">
											<a className="image-wrap" href="#">
												<img src="assets/images/products/furniture-3-1-600x800.jpg" className="img-fluid" alt="" />
												<img src="assets/images/products/furniture-3-2-600x800.jpg" className="img-fluid" alt="" />
											</a>
											<div className="single-product__floating-icons">
												<span className="wishlist">
													<a
														href="#"
														data-tippy="Add to wishlist"
														data-tippy-inertia="true"
														data-tippy-animation="shift-away"
														data-tippy-delay={50}
														data-tippy-arrow="true"
														data-tippy-theme="sharpborder"
														data-tippy-placement="bottom">
														<i className="ion-android-favorite-outline" />
													</a>
												</span>
											</div>
										</div>
										{/*=======  End of single product image  =======*/}
										{/*=======  single product content  =======*/}
										<div className="single-product__content">
											<div className="title">
												<h3>
													{" "}
													<a href="#">Sweet Potatoes</a>
												</h3>
											</div>
											<div className="price">
												<span className="main-price discounted">₹360.00</span>
												<span className="discounted-price">₹300.00</span>
											</div>
											<p className="short-desc">
												{" "}
												Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente
												eveniet consectetur voluptas quas harum impedit quia quibusdam tempora ab facilis. Non assumenda veritatis, Lorem ipsum dolor sit amet consectetur,
												adipisicing elit. Laudantium consequuntur voluptatem ad molestiae. Expedita nesciunt quam totam, sapiente eveniet consectetur voluptas quas harum
												impedit quia quibusdam tempora ab facilis. Non assumenda veritatis,
											</p>
											<a href="#" className="lezada-button lezada-button--medium">
												View Options
											</a>
										</div>
										{/*=======  End of single product content  =======*/}
									</div>
								</div>
								
							</div>
							<div className="row">
								<div className="col-lg-12 text-center mt-30">
									<a className="lezada-button lezada-button--medium lezada-button--icon--left" href="#">
										<i className="ion-android-add" /> MORE
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*=====  End of shop page content  ======*/}
		</div>
	);
};

export async function getStaticProps() {
	const apolloClient = initializeApollo();

	const {
		data: {categories, store_locations: storeLocations},
	} = await apolloClient.query({
		query: GetHeaderData,
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			categories,
			storeLocations,
		},
	};
}
