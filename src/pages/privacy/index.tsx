import Head from "next/head";
import React from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Faq_Titles, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";

interface FaqsProps {
	categories: Category[];
	storeLocations: Store_Locations[];
	faqTitles: Faq_Titles[];
}

const index: React.FC<FaqsProps> = (props: FaqsProps) => {
	const {categories, storeLocations} = props;

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>Frequently Asked Questions </title>
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
			</Head>
			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<BreadCrumb
					backgroundImage={"/images/breadcrumb-bg/01.jpg"}
					finalName={"Privacy Policy"}
					title={"Privacy Policy"}
					links={[{link: "/", name: "HOME"}]}
				/>

				<div className="faq-area">
					<p>Privacy Policy :)</p>
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

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			categories,
			storeLocations,
		},
	};
}
