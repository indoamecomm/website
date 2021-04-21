import { useMemo } from 'react'
import { ApolloClient, InMemoryCache, NormalizedCacheObject, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities';
import { auth } from "./config/firebase";
let apolloClient: ApolloClient<NormalizedCacheObject>;

const { WebSocketLink } = require('apollo-link-ws');


let tokenHeader: string | null | undefined = null;

const getFirebaseToken = async () => {
	const token = await auth.currentUser?.getIdToken(true)
	tokenHeader = token;
	const headers: any = {};

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}
	return headers;
}




const createIsomorphLink =  (token: any) => {
	// if (typeof window === 'undefined') {


	// } else {

	const wsLink = process.browser
		? new WebSocketLink({
			uri: 'wss://api.indamseeds.com/v1/graphql',
			options: {
				lazy: true,
				reconnect: true,
				timeout: 10000,
				connectionParams: async () => {

					return {
						// return {
						headers: token ? {
							Authorization: `Bearer ${token}`
						} : {
							"X-Hasura-Role": "pvc"
						},
						//}
					}
				},
			},
		}) : null;



	const { HttpLink } = require('@apollo/client/link/http')
	const httpLink = new HttpLink({
		uri: 'https://api.indamseeds.com/v1/graphql',
		credentials: 'same-origin',
		headers: token ? {
			Authorization: `Bearer ${token}`
		} : {
			"X-Hasura-Role": "pvc"
		},
		defaultOptions: {
			watchQuery: {
				fetchPolicy: "network-only",
			},
			query: {
				fetchPolicy: "network-only",
			},
		},
	})

	const link = process.browser ? split(
		({ query }) => {
			const definition = getMainDefinition(query);
			return (
				definition.kind === 'OperationDefinition' &&
				definition.operation === 'subscription'
			);
		},
		wsLink,
		httpLink
	) : httpLink;

	return link

	// }
}


function createApolloClient(token) {
	return new ApolloClient({
		ssrMode: true,
		link: createIsomorphLink(token),
		cache: new InMemoryCache(),
	})
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null) {


	return getApolloClient(initialState, tokenHeader);
}

export function useApollo(initialState: NormalizedCacheObject) {
	const store = useMemo(() => initializeApollo(initialState), [initialState, tokenHeader])
	return store
}


const getApolloClient = (initialState, header) => {
	getFirebaseToken();

	const _apolloClient = createApolloClient(header);
	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract();

		// Restore the cache using the data passed from
		// getStaticProps/getServerSideProps combined with the existing cached data
		_apolloClient.cache.restore({ ...existingCache, ...initialState });
	}

	// For SSG and SSR always create a new Apollo Client
	if (typeof window === "undefined") return _apolloClient;

	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
}

