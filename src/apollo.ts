import { useMemo } from 'react'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createIsomorphLink = () => {
	// if (typeof window === 'undefined') {

	// } else {
	const { HttpLink } = require('@apollo/client/link/http')
	return new HttpLink({
		uri: 'https://indoam.herokuapp.com/v1/graphql',
		credentials: 'same-origin',
		headers: {
			"x-hasura-admin-secret": "indoame@321"
		}
	})
	// }
}

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: createIsomorphLink(),
		cache: new InMemoryCache(),
	})
}

export function initializeApollo(initialState: NormalizedCacheObject | null = null) {
	const _apolloClient = apolloClient ?? createApolloClient()

	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// gets hydrated here
	if (initialState) {
		_apolloClient.cache.restore(initialState)
	}
	// For SSG and SSR always create a new Apollo Client
	if (typeof window === 'undefined') return _apolloClient
	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient

	return _apolloClient
}

export function useApollo(initialState: NormalizedCacheObject) {
	const store = useMemo(() => initializeApollo(initialState), [initialState])
	return store
}



// // import fetch from 'isomorphic-unfetch'
// import {
// 	ApolloClient,
// 	// ApolloLink,
// 	// ApolloProvider,
// 	HttpLink,
// 	InMemoryCache,
// 	NormalizedCacheObject,

// } from "@apollo/client";
// // import { onError } from 'apollo-link-error'
// import { WebSocketLink } from 'apollo-link-ws'
// import { SubscriptionClient } from 'subscriptions-transport-ws'


// // import auth0 from './auth0';
// let accessToken: string | null = null
// // const requestAccessToken = async () => {
// // 	if (accessToken) return
// // 	const res = await fetch(`${process.env.APP_HOST}/api/session`)
// // 	if (res.ok) {
// // 		const json = await res.json()
// // 		accessToken = json.accessToken
// // 	} else {
// // 		accessToken = 'public'
// // 	}
// // }
// // // remove cached token on 401 from the server
// // const resetTokenLink = onError(({ networkError }) => {
// // 	if (networkError && networkError.name === 'ServerError' && networkError.statusCode === 401) {
// // 		accessToken = null
// // 	}
// // })


// const createHttpLink: any = (headers: any) => {
// 	const httpLink = new HttpLink({
// 		uri: 'https://ready-panda-91.hasura.app/v1/graphql',
// 		credentials: 'include',
// 		headers, // auth token is fetched on the server side
// 		fetch,
// 	})
// 	return httpLink;
// }
// const createWSLink = () => {
// 	return new WebSocketLink(
// 		new SubscriptionClient('wss://ready-panda-91.hasura.app/v1/graphql', {
// 			lazy: true,
// 			reconnect: true,
// 			connectionParams: async () => {
// 				return {
// 					headers: {
// 						authorization: accessToken ? `Bearer ${accessToken}` : '',
// 					},
// 				}
// 			},
// 		})
// 	)
// }
// export default function createApolloClient(initialState: NormalizedCacheObject, headers: any) {
// 	const ssrMode = typeof window === 'undefined'
// 	let link: any
// 	if (ssrMode) {
// 		link = createHttpLink(headers) // executed on server
// 	} else {
// 		link = createWSLink() // executed on client
// 	}
// 	return new ApolloClient({
// 		ssrMode,
// 		link,
// 		cache: new InMemoryCache().restore(initialState),
// 	})
// }