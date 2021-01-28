import Head from "next/head";
import React from "react";
import {initializeApollo} from "../apollo";
import Header from "../Components/Header";
import {GetBannerData, GetDealOfTheDay, GetHeaderData} from "../../queries/homeQuery";
import {Banner_Type, Category, Deal_Of_The_Day, Store_Locations} from "../generated/graphql";
import Banner from "../Components/Banner";
import Deal from "../Components/Deal";

interface HomeProps {
	categories: Category[];
	storeLocations: Store_Locations[];
	shopCollection: Banner_Type[];
	highlyUsed: Banner_Type[];
	dealOfTheDay: Deal_Of_The_Day;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
	const {categories, storeLocations, shopCollection, highlyUsed, dealOfTheDay} = props;

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>IndoAmericanHS-Test</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>

			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<Banner shopCollection={shopCollection} highlyUsed={highlyUsed} />
				<SectionTitle />
				<Deal dealOfTheDay={dealOfTheDay} />
			</main>
		</>
	);
};

export default Home;

const SectionTitle = () => {
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
								WELCOME <br /> STRANGER
							</p>
						</div>
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
		data: {shopCollection, highlyUsed},
	} = await apolloClient.query({
		query: GetBannerData,
	});

	const {
		data: {deal_of_the_day},
	} = await apolloClient.query({
		query: GetDealOfTheDay,
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			categories,
			storeLocations,
			shopCollection,
			highlyUsed,
			dealOfTheDay: deal_of_the_day[0],
		},
	};
}
