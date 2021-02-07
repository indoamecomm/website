import { gql } from "@apollo/client";



export const GetProductDetailsById = gql`
	query GetProductDetailsById($productId: bigint!) {
		product(where: {id: {_eq: $productId}}) {
			id
			imageUrl
			coverImageUrl
			name
			nutritiveValue
			description
			sub_category {
				name
			}
			productTypes {
				SKU
				deal_of_the_days(where: {enable: {_eq: true}}) {
					discount
					id
				}
				discountedPrice
				imageUrl
				name
				originalPrice
				plant
				remark
				duration
				product_seasons {
					id
					season {
						name
					}
				}
			}
			instruction_titles(order_by: {index: asc}) {
				id
				name
				typeId
				index
				instructions(order_by: {index: asc}) {
					id
					mediaUrl
					index
					title
					description
				}
			}
		}
	}
`;


export const GetProducts = gql`
	query GetProducts {
		product {
			id
			name
		}
	}
`;

export const GetRecommendations = gql`
	query GetProductRecommendations {
		product_type(limit: 5) {
			id
			name
			recommendedCoverImage
			product {
				name
				sub_category {
					name
				}
			}
		}
	}
`;