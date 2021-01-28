import { gql } from "@apollo/client";

export const GetHeaderData = gql`
	query GetHeaderData {
		categories(order_by: {id: asc}) {
			id
			name
			subCategories: sub_categories(order_by: {id: asc}) {
				id
				name
			}
		}
		store_locations(order_by: {id: asc}) {
			id
			name
		}
	}
`;

export const GetBannerData = gql`
	query GetBanners {
		shopCollection: banner_type(where: {type: {_eq: 1}}, order_by: {id: asc}) {
			id
			name
			banners {
				heading
				description
				id
				image
				title
				typeId
				cost
			}
		}
		highlyUsed: banner_type(where: {type: {_eq: 2}}, order_by: {id: asc}) {
			id
			name
			banners {
				heading
				description
				id
				image
				title
				typeId
				cost
			}
		}
	}
`;


export const GetDealOfTheDay = gql`
	query GetDealOfTheDay {
		deal_of_the_day {
			enable
			expiry
			id
			discount
			product {
				id
				name
			}
			product_type {
				id
				originalPrice
			}
		}
	}

`;