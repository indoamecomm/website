import Head from "next/head";
import React from "react";
import {initializeApollo} from "../apollo";
import Header from "../Components/Header/Header";
import {GetBannerData, GetBlogsList, GetDealOfTheDay, GetHeaderData, GetProductListing} from "../../queries/homeQuery";
import {Banner_Type, Blogs, Category, Deal_Of_The_Day, ProductType, Store_Locations} from "../generated/graphql";
import Banner from "../Components/Home/Banner";
import Deal from "../Components/Home/Deal";
import PromotedBanner from "../Components/Home/PromotedBanner";
import ProductListing from "../Components/Home/ProductListing";
import FeaturedProduct from "../Components/Home/FeaturedProduct";
import BlogList from "../Components/Home/BlogList";
import Footer from "../Components/Footer";
import {useAuth} from "../hooks/useAuth";

interface HomeProps {
	categories: Category[];
	storeLocations: Store_Locations[];
	shopCollection: Banner_Type[];
	highlyUsed: Banner_Type[];
	promotedBanners: Banner_Type[];
	featuredProducts: ProductType[];
	newProducts: ProductType[];
	featuredProduct: Banner_Type[];
	dealOfTheDay: Deal_Of_The_Day;
	blogs: Blogs[];
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
	const {
		categories,
		storeLocations,
		shopCollection,
		highlyUsed,
		dealOfTheDay,
		promotedBanners,
		featuredProducts,
		newProducts,
		featuredProduct,
		blogs,
	} = props;

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>IndoAmerican </title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />

				<meta charSet="utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
				<link href="/revolution/css/settings.css" rel="stylesheet" />
				<link href="/revolution/css/navigation.css" rel="stylesheet" />
				<link href="/revolution/custom-setting.css" rel="stylesheet" />
				<script defer src="/js/vendor/modernizr-2.8.3.min.js"></script>
				<script defer src="/js/vendor/jquery.min.js"></script>
				<script defer src="/js/popper.min.js"></script>
				<script defer src="/js/bootstrap.min.js"></script>

				<script defer src="/js/plugins.js"></script>
				<script defer src="/js/main.js"></script>

				<script defer src="/revolution/js/jquery.themepunch.revolution.min.js"></script>
				<script defer src="/revolution/js/jquery.themepunch.tools.min.js"></script>
				<script defer src="/revolution/revolution-active.js"></script>

				<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
				<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
				<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.actions.min.js"></script>
				<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
				<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
				<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
			</Head>

			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<Banner shopCollection={shopCollection} highlyUsed={highlyUsed} />
				<SectionTitle />
				<Deal dealOfTheDay={dealOfTheDay} />
				<PromotedBanner promotedBanner={promotedBanners} />
				<PersonalizedListing />
				<ProductListing featuredProducts={featuredProducts} newProducts={newProducts} />
				<FeaturedProduct featuredProduct={featuredProduct} />
				<BlogList blogs={blogs} />
				<InstagramSlider />
			</main>
			<Footer />
		</>
	);
};

export default Home;

const SectionTitle: React.FC = () => {
	const {user} = useAuth();

	return (
		<div className="section-title-container mb-40">
			<div className="container">
				<div className="row">
					<div className="col-6">
						<div className="section-title__label section-title__label-style2 section-title__label--left section-title__label-style3--left">
							<p>
								SS-2020 <span className="line">sec1</span>
							</p>
						</div>
					</div>
					<div className="col-6 text-right">
						<div className="section-title__label  section-title__label-style2 section-title__label--right section-title__label-style3--right">
							<p>
								WELCOME <br /> {user ? user.firstName.toUpperCase() : "STRANGER"}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const PersonalizedListing: React.FC = () => {
	return (
		<div className="section-title-container mb-80">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						{/*=======  section title  =======*/}
						<div className="section-title section-title--one text-center">
							<h1>Personalized Listing</h1>
							<p>All products in one single glance.</p>
						</div>
						{/*=======  End of section title  =======*/}
					</div>
				</div>
			</div>
		</div>
	);
};

const InstagramSlider: React.FC = () => {
	return (
		<div className="instagram-slider-area mb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-8 order-2 order-lg-1">
						{/*==============================================     Instagram image slider    ==============================================*/}
						<div className="instagram-image-slider-area">
							{/*=======  instagram image container  =======*/}
							<div className="instagram-image-slider-container">
								<div className="instagram-feed-thumb">
									<div
										id="instafeed"
										className="instagram-carousel"
										data-userid={429141287}
										data-accesstoken="6665768655.1677ed0.313e6c96807c45d8900b4f680650dee5"></div>
								</div>
							</div>
							{/*=======  End of instagram image container  =======*/}
						</div>
						{/*=====  End of instagram image slider  ======*/}
					</div>
					<div className="col-lg-4 order-1 order-lg-2">
						{/*=======  instagram intro  =======*/}
						<div className="instagram-section-intro pl-50 pl-lg-50 pl-md-0 pl-sm-0 pl-xs-0 pl-xxs-0 mb-0 mb-lg-0 mb-md-50 mb-sm-50 mb-xs-50 mb-xxs-50">
							<p>
								<a href="https://www.instagram.com/" target="_blank">
									@indams_community
								</a>
							</p>
							<h3>Follow us on Instagram</h3>
						</div>
						{/*=======  End of instagram intro  =======*/}
					</div>
				</div>
			</div>
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

	const {
		data: {shopCollection, highlyUsed, promotedBanners, featuredProduct},
	} = await apolloClient.query({
		query: GetBannerData,
	});

	const {
		data: {deal_of_the_day},
	} = await apolloClient.query({
		query: GetDealOfTheDay,
		variables: {
			expiry: new Date().toISOString(),
		},
	});

	const {
		data: {newProducts, featuredProducts},
	} = await apolloClient.query({
		query: GetProductListing,
		variables: {
			expiry: new Date().toISOString(),
		},
	});

	const {
		data: {blogs},
	} = await apolloClient.query({
		query: GetBlogsList,
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			categories,
			storeLocations,
			shopCollection,
			highlyUsed,
			promotedBanners,
			dealOfTheDay: deal_of_the_day[0],
			newProducts,
			featuredProducts,
			featuredProduct,
			blogs,
		},
	};
}
