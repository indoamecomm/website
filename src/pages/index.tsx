import Head from "next/head";
import React from "react";
import {initializeApollo} from "../apollo";
import Header from "../Components/Header/Header";
import gql from "graphql-tag";
import {useQuery} from "@apollo/client";

const ViewerQuery = gql`
	query MyQuery {
		categories {
			id
			name
		}
	}
`;
const Home: React.FC = () => {
	const {
		data: {categories},
	} = useQuery(ViewerQuery);

	console.log(categories);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>IndoAmericanHS-Test</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* Favicon */}
				<link rel="icon" href="assets/images/favicon.ico" />
			</Head>

			<Header />
			<main></main>
		</>
	);
};

export default Home;

export async function getStaticProps() {
	const apolloClient = initializeApollo();

	await apolloClient.query({
		query: ViewerQuery,
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
		},
	};
}
