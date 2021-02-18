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
				<title>Order OrderTracking</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
				<link href="/revolution/css/settings.css" rel="stylesheet" />
				<link href="/revolution/css/navigation.css" rel="stylesheet" />
				<link href="/revolution/custom-setting.css" rel="stylesheet" />
				<script src="/js/vendor/modernizr-2.8.3.min.js"></script>
				<script src="/js/vendor/jquery.min.js"></script>
				<script src="/js/popper.min.js"></script>
				<script src="/js/bootstrap.min.js"></script>

				<script src="/js/plugins.js"></script>
				<script src="/js/main.js"></script>

				<script src="/revolution/js/jquery.themepunch.revolution.min.js"></script>
				<script src="/revolution/js/jquery.themepunch.tools.min.js"></script>
				<script src="/revolution/revolution-active.js"></script>

				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.actions.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
			</Head>
			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<div>
					<BreadCrumb
						backgroundImage={"/images/breadcrumb-bg/01.jpg"}
						title={"Order Tracking"}
						finalName={"ORDER TRACKING"}
						links={[{link: "/", name: "HOME"}]}
					/>
					<OrderTracking />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default index;

const OrderTracking = () => {
	return (
		<div className="order-tracking-area mb-130">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-10 col-12 offset-lg-3 offset-md-1">
						{/*=======  order tracking box  =======*/}
						<div className="order-tracking-box pt-50 pr-50 pb-50 pl-50  pt-xxs-40 pr-xxs-20 pb-xxs-40 pl-xxs-20">
							<p className="info-text mb-20">
								To track your order please enter your Order ID in the box below and press the "Track" button. This was given
								to you on your receipt and in the confirmation email you should have received.
							</p>
							{/*=======  order-tracking form  =======*/}
							<div className="lezada-form order-tracking-form">
								<form action="#">
									<div className="row">
										<div className="col-lg-12 mb-20">
											<label htmlFor="orderId">Order ID</label>
											<input type="text" id="orderId" placeholder="Found in your order confirmation email" />
										</div>
										<div className="col-lg-12">
											<label htmlFor="orderEmail">Billing email</label>
											<input type="text" id="orderEmail" placeholder="Email you used during checkout" />
										</div>
										<div className="col-lg-12 text-center mt-40">
											<button className="lezada-button lezada-button--medium order-tracking-button">track</button>
										</div>
									</div>
								</form>
							</div>
							{/*=======  End of order-tracking form  =======*/}
						</div>
						{/*=======  End of order tracking box  =======*/}
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

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			categories,
			storeLocations,
		},
	};
}
