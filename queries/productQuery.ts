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
				id
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


export const GetProductsByCategoryId = gql`
	query GetProductsBySubCategoryId($subCategoryId: Int!, $seasonId: bigint, $orderObject: [product_order_by!], $searchString: String) {
		product(order_by: $orderObject, where: {subCategoryId: {_eq: $subCategoryId}, isDeleted: {_eq: false}, productTypes: {product_seasons: {seasonId: {_eq: $seasonId}}}, name: {_ilike: $searchString }}) {
			imageUrl
			hoverImageUrl
			name
			description
			id
			productTypes_aggregate {
			aggregate {
				max {
				discountedPrice
				originalPrice
				}
				min {
				originalPrice
				discountedPrice
				}
			}
			}
		}
	}

`;


export const GetCategories = gql`
	query GetCategoriesForProducts {
		categories {
			id
			name
			sub_categories {
			id
			name
			products_aggregate {
				aggregate {
				count
				}
			}
			products {
				id
				name
			}
			}
		}
	}
`;


export const GetSubCategories = gql`
	query GetSubCategories {
		sub_categories(order_by: {id: asc}) {
			id
			name
		}
	}
`;


export const GetSubCategoriesDetails = gql`
	query GetSubCategoriesDetails($subCategoryId: Int!) {
		sub_categories(order_by: {id: asc}, where: {id: {_eq: $subCategoryId}}) {
			id
			name
			coverImageUrl
		}
	}
`;


export const GetSeasons = gql`
	query GetSeasons {
		seasons(order_by: { id: asc }, where: { isDeleted: { _eq: false } }) {
			id
			name
		}
	}
`;




export const InsertToUserCart = gql`
	mutation InsertToUserCart($userId:  bigint!, $productTypeId: Int!, $count: Int!) {
		insert_cart(objects: {userId: $userId, productTypeId: $productTypeId, count: $count}) {
			affected_rows
		}
	}
`;

export const InsertWishlist = gql`
	mutation InsertWishlist($userId: bigint!, $productTypeId: Int!) {
		insert_wishlists(objects: {userId: $userId, productTypeId: $productTypeId}) {
			affected_rows
		}
	}
`;