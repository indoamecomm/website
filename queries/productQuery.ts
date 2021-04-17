import { gql } from "@apollo/client";

export const GetProductDetailsById = gql`
	query GetProductDetailsById($productId: bigint!, $expiry: timestamptz!) {
		product(where: {id: {_eq: $productId}}) {
			id
			imageUrl
			coverImageUrl
			name
			nutritiveValue
			description
			subCategoryId
			sub_category {
			id
			name
			}
			productTypes {
				id
				SKU
				deal_of_the_days(where: {enable: {_eq: true},  expiry: {_gt: $expiry}}) {
					discount
					id
					enable
				}
			discountedPrice
			imageUrl
			name
			originalPrice
			quantity
			plant
			remark
			duration
			product {
				deal_of_the_days(where: {enable: {_eq: true}, expiry: {_gt: $expiry}}) {
					discount
					enable
				}
			}
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
	query GetProductRecommendations($productId: Int!) {
		product_type(limit: 5, where: {productId: {_neq: $productId}}) {
			id
			name
			recommendedCoverImage
			productId
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
	query GetProductsBySubCategoryId($subCategoryId: Int!, $seasonId: bigint, $orderObject: [product_order_by!], $searchString: String, $expiry: timestamptz, $limit: Int!) {
	product(order_by: $orderObject, where: {subCategoryId: {_eq: $subCategoryId}, isDeleted: {_eq: false}, productTypes: {product_seasons: {seasonId: {_eq: $seasonId}}}, name: {_ilike: $searchString}}, limit: $limit) {
		imageUrl
		hoverImageUrl
		name
		description
		id
		deal_of_the_days(where: {enable: {_eq: true}, expiry: {_gt: $expiry}}) {
		id
		discount
		enable
		}
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
	product_aggregate(where: {subCategoryId: {_eq: $subCategoryId}, isDeleted: {_eq: false}, productTypes: {product_seasons: {seasonId: {_eq: $seasonId}}}, name: {_ilike: $searchString}}) {
		aggregate {
		count
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

export const GetProductTypesById = gql`
	query GetProductTypesById($productTypeArray: [Int!], $expiry: timestamptz!) {
		product_type(where: { id: { _in: $productTypeArray } }) {
			id
			imageUrl
			name
			originalPrice
			discountedPrice
			productId
			deal_of_the_days(where: {enable: {_eq: true}, expiry: {_gt: $expiry}}) {
				id
				discount
				enable
			}
			product {
				id
				name
				deal_of_the_days(where: {enable: {_eq: true}, expiry: {_gt: $expiry}}) {
					id
					discount
					enable
				}
				subCategoryId
				sub_category {
					id
					name
				}
			}
		}
	}
`;





export const GetTopPurchasedProducts = gql`
	query GetTopPurchasedProducts {
		topThreeProductTypes {
			productType {
				id
				name
				imageUrl
				originalPrice
				discountedPrice
				productId
			}
		}
	}
`;


export const InsertUserRatings = gql`
	mutation InsertUserRatings($rating: Int!, $userId: bigint!, $productTypeId: Int!) {
		insert_user_ratings(objects: {rating: $rating, userId: $userId, productTypeId: $productTypeId}) {
			affected_rows
		}
	}
`;


export const UpdateUserRatings = gql`
	mutation UpdateUserRatings($ratingId: bigint!, $rating: Int!) {
		update_user_ratings(where: { id: { _eq: $ratingId } }, _set: { rating: $rating }) {
			affected_rows
		}
	}

`;
