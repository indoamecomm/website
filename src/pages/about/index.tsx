import Head from "next/head";
import React, {useRef} from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import {GetTestimonials} from "../../../queries/faqQuery";
import {useScript} from "../../hooks/useScript";

interface HeaderProps {
	categories: Category[];
	storeLocations: Store_Locations[];
	testimonials: any[];
}

const index: React.FC<HeaderProps> = (props: HeaderProps) => {
	const {categories, storeLocations, testimonials} = props;
	const ref = useRef<HTMLDivElement>(null);

	useScript("/js/vendor/modernizr-2.8.3.min.js", ref);
	useScript("/js/vendor/jquery.min.js", ref);
	useScript("/js/popper.min.js", ref);
	useScript("/js/plugins.js", ref);
	useScript("/js/main.js", ref);
	useScript("/js/bootstrap.min.js", ref);

	useScript("/revolution/js/jquery.themepunch.revolution.min.js", ref);
	useScript("/revolution/js/jquery.themepunch.tools.min.js", ref);
	useScript("/revolution/revolution-active.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.kenburn.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.slideanims.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.actions.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.layeranimation.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.navigation.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.parallax.min.js", ref);
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>About Us | Indoamerica </title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<div ref={ref}></div>

			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<div>
					<BreadCrumb
						backgroundImage={"/images/breadcrumb-bg/01.jpg"}
						title={"About Us"}
						finalName={"ABOUT US"}
						links={[{link: "/", name: "HOME"}]}
					/>

					{/*=============================================
	=            section title  container      =
	=============================================*/}
					<div className="section-title-container mb-40">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 offset-lg-2">
									{/*=======  section title  =======*/}
									<div className="section-title section-title--one text-center">
										<p className="subtitle subtitle--deep">WHO WE ARE</p>
										<h1>Indo American Hybrid Seeds</h1>
										<p className="subtitle">
											Indo-American Hybrid Seeds (India) Pvt. Ltd. came into being on the 4th of November, 1965.
											Established by our Chairman Padmashree Dr. Manmohan Attavar, its primary focus was supplying
											seeds of the highest quality to the American market.
										</p>
									</div>
									{/*=======  End of section title  =======*/}
								</div>
							</div>
						</div>
					</div>
					{/*=====  End of section title container ======*/}
					{/*=============================================
    =            about us video content         =
    =============================================*/}
					<div className="about-video-content mb-100">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 offset-lg-1">
									{/*=======  about video area  =======*/}
									<div className="about-video-bg-area about-video-bg-2 pt-300 pb-300 pt-sm-200 pb-sm-200  pt-xs-150 pb-xs-150  mb-50">
										{/*=======  floating-text left  =======*/}
										<p className="video-text video-text-left">
											<a href="#">SINCE</a>
										</p>
										{/*=======  End of floating-text left  =======*/}
										<h1>OUR STORY</h1>
										{/*=======  floating-text right  =======*/}
										<p className="video-text video-text-right">
											<a href="#">1965</a>
										</p>
										{/*=======  End of floating-text right  =======*/}
									</div>
									{/*=======  End of about video area  =======*/}
								</div>
							</div>
							<div className="row">
								<div className="offset-lg-1 col-lg-4 col-md-6 mb-sm-50">
									<div className="lezada-widget lezada-widget--about mb-35">
										<h2 className="widget-title mb-25">OUR PROCESS</h2>
										<p className="widget-content">
											we take you through our method; the Journey of a Seed at I AHS. In a brief manner, you can see
											the steps to our meticulously planned process and be further assured that only seeds of the best
											quality reach you.
										</p>
									</div>
									<div className="lezada-widget lezada-widget--about mb-35">
										<h2 className="widget-title mb-25">RESEARCH AND DEVELOPMENT</h2>
										<p className="widget-content">
											Our highly focused R&amp;D team develops products based on farmer requirements in different
											parts of the country.
										</p>
									</div>
									<div className="lezada-widget lezada-widget--about">
										<h2 className="widget-title mb-25">GARDEN CENTER</h2>
										<p className="widget-content">
											The IAHS Garden Centre has been a trusted source of plants for over 40 years. We possess a wide
											variety of exotic ornamentals, flowering and foliage plants, as well as cacti and succulents.
										</p>
									</div>
								</div>
								<div className="col-lg-5 offset-lg-1 col-md-6">
									{/*=======  about page content  =======*/}
									<div className="about-page-text">
										<p className=" mb-35">
											Over the years, through precise research and development IAHS has developed wide range of
											products that are engineered to suit various agro-climatic conditions, thus enabling us to cater
											to domestic as well as international markets.
										</p>
										<a
											href="https://indamseeds.com/about_us.html"
											className="lezada-button lezada-button--medium lezada-button--icon--left"
											target="newwindow">
											{" "}
											<i className="icon-left ion-plus" /> visit website
										</a>
									</div>
									{/*=======  End of about page content  =======*/}
								</div>
							</div>
						</div>
					</div>
					{/*=====  End of about us video content  ======*/}
					{/*=============================================
    =            multi item testimonial area        =
    =============================================*/}
					<div className="lezada-testimonial multi-item-testimonial-area testimonial-bg testimonial-bg-1 mb-100 pt-135 pb-135">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 mb-60">
									{/*=======  section title  =======*/}
									<div className="section-title section-title--one text-center">
										<h1>Testimonial</h1>
									</div>
									{/*=======  End of section title  =======*/}
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									{/*=======  testmonial slider container  =======*/}
									<div
										className="lezada-slick-slider multi-testimonial-slider-container"
										data-slick-setting='{
						"slidesToShow": 3,
						"arrows": true,
						"autoplay": false,
						"autoplaySpeed": 5000,
						"speed": 1000,
						"prevArrow": {"buttonClass": "slick-prev", "iconClass": "ti-angle-left" },
						"nextArrow": {"buttonClass": "slick-next", "iconClass": "ti-angle-right" }
					}'
										data-slick-responsive='[
						{"breakpoint":1501, "settings": {"slidesToShow": 3} },
						{"breakpoint":1199, "settings": {"slidesToShow": 3} },
						{"breakpoint":991, "settings": {"slidesToShow": 2, "arrows": false} },
						{"breakpoint":767, "settings": {"slidesToShow": 1, "arrows": false} },
						{"breakpoint":575, "settings": {"slidesToShow": 1, "arrows": false} },
						{"breakpoint":479, "settings": {"slidesToShow": 1, "arrows": false} }
					]'>
										{/*=======  single testimonial  =======*/}
										{testimonials.map((testimonial) => (
											<div className="col" key={testimonial.id}>
												<div className="testimonial-item multi-testimonial-single-item">
													<div className="multi-testimonial-single-item__text">{testimonial.testimonial}</div>
													<div className="multi-testimonial-single-item__author-info">
														<div className="content">
															<p className="name">{testimonial.author}</p>
															<span className="designation">/ {testimonial.designation}</span>
														</div>
													</div>
												</div>
											</div>
										))}
										{/*=======  End of single testimonial  =======*/}
										{/*=======  single testimonial  =======*/}
									</div>
									{/*=======  End of testmonial slider container  =======*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default index;

export async function getStaticProps() {
	const apolloClient = initializeApollo();

	const {
		data: {categories, store_locations: storeLocations},
	} = await apolloClient.query({
		query: GetHeaderData,
	});
	const {
		data: {testimonials},
	} = await apolloClient.query({
		query: GetTestimonials,
	});
	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			categories,
			storeLocations,
			testimonials,
		},
		revalidate: 1,
	};
}
