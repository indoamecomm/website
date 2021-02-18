import { gql } from "@apollo/client";


export const GetUserByFirebaseUUID = gql`
	query GetUserByFirebaseUUID($email: String) {
		users(where: {email: {_eq: $email}, isDeleted: {_eq: false}}) {
			id
			email
			firebaseUUID
			firstName
			lastName
		}
	}
`;


export const UserSignUp = gql`
	mutation UserSignUp($email: String!, $firstName: String!, $lastName: String!,  $password: String!, $phoneNumber:String!) {
		UserSignUp(input: {email: $email, firstName: $firstName, lastName: $lastName, password: $password, phoneNumber:$phoneNumber}) {
			Error {
				code
				message
			}
			User {
				id
				email
			}
		}
	}
`;

export const GetAccountDetails = gql`
	query GetAccountDetails($userId: bigint!) {
		orders: orders(where: {userId: {_eq: $userId}}) {
			id
			order_status {
			name
			id
			}
			totalAmount
			createdAt
		}
		addresses: addresses(where: {userId: {_eq: $userId}}, order_by: {id: asc}) {
			id
			lineOne
			lineTwo
			name
			state
			town
			zipcode
		}
		users: users(where: {id: {_eq: $userId}}) {
			id
			firstName
			lastName
			phoneNumber
			email
		}
	}

`;

export const UpdateUserAccountDetails = gql`
	mutation UpdateUserAccountDetails($userId: bigint!, $firstName: String!, $lastName: String!) {
		update_users(where: {id: {_eq: $userId}}, _set: {firstName: $firstName, lastName: $lastName}) {
			affected_rows
		}
	}
`;

export const GetUserCart = gql`
	query GetUserCart($userId: bigint!) {
		cart(where: {userId: {_eq: $userId}}) {
			id
			count
			product_type {
				name
				discountedPrice
				imageUrl
				product {
					id 
				}
			}
		}
	}
`;


export const GetUserCartSubscription = gql`
	subscription GetUserCart($userId: bigint!) {
		cart(where: {userId: {_eq: $userId}}) {
			id
			count
			product_type {
				name
				discountedPrice
				imageUrl
				product {
					id 
				}
			}
		}
	}
`;


export const DeleteCartById = gql`
	mutation DeleteCart($cartId: bigint!) {
		delete_cart(where: {id: {_eq: $cartId}}) {
			affected_rows
		}
	}
`;


export const GetUserWishlist = gql`
	subscription GetUserWishlist($userId: bigint!) {
		wishlists(where: {userId: {_eq: $userId}}) {
			id
			product_type {
				id
				name
				originalPrice
				discountedPrice
				imageUrl
				product {
					id
					name
				}
			}
		}
	}

`;



export const DeleteWishlist = gql`
	mutation DeleteWishlist($wishlistId: bigint!) {
		delete_wishlists(where: {id: {_eq: $wishlistId}}) {
			affected_rows
		}
	}
`;


export const GetUserCartCount = gql`
	subscription GetUserCartCount($productTypeId: Int!, $userId: bigint!) {
		users_aggregate(where: { carts: { productTypeId: { _eq: $productTypeId } }, id: { _eq: $userId } }) {
			aggregate {
				count
			}
		}
	}
`;

export const GetUserWishlistCount = gql`
	subscription GetUserWishlistCount($productTypeId: Int!, $userId: bigint!) {
		users_aggregate(where: {wishlists: {productTypeId: {_eq: $productTypeId}}, id: {_eq: $userId}}) {
			aggregate {
			count
			}
		}
	}
`;

export const GetUserTotalCartCount = gql`
	subscription GetUserTotalCartCount($userId: bigint!) {
		cart_aggregate(where: {userId: {_eq: $userId}}) {
			aggregate {
			count
			}
		}
	}

`;

export const GetUserTotalWishlistCount = gql`
	subscription GetUserTotalWishlistCount($userId: bigint!) {
		wishlists_aggregate(where: {userId: {_eq: $userId}}) {
			aggregate {
			count
			}
		}
	}
`;


export const UpdateCart = gql`
	mutation UpdateCart($cartId: bigint!, $count: Int!) {
		update_cart(where: {id: {_eq: $cartId}}, _set: {count: $count}) {
			affected_rows
		}
	}
`;


export const InsertToUserCartFromWishlist = gql`
	mutation InsertToUserCartFromWishlist($userId: bigint!, $productTypeId: Int!, $count: Int!, $wishlistId: bigint!) {
		insert_cart(objects: { userId: $userId, productTypeId: $productTypeId, count: $count }) {
			affected_rows
		}
		delete_wishlists(where: { id: { _eq: $wishlistId } }) {
			affected_rows
		}
	}
`;

export const GetUserCartDetails = gql`
	query GetUserCartDetails($userId: bigint!) {
		users(where: { id: { _eq: $userId } }) {
			carts {
				count
				id
				productTypeId
				product_type {
					id
					name
					discountedPrice
					deal_of_the_days {
						discount
					}
				}
			}
			addresses(where: { isDeleted: { _eq: false } }) {
				id
				name
				lineOne
				lineTwo
				name
				zipcode
				town
				state
			}
			email
			firstName
			lastName
			id
			phoneNumber
		}
	}

`;



export const CreateOrder = gql`
	mutation CreateOrder($addressId: Int!, $currency: String!, $userId: Int!, $productTypes: [ProductTypePair!]!) {
		createOrder(input: { addressId: $addressId, currency: $currency, productTypeIds: $productTypes, userId: $userId }) {
			order {
				id
			}
			razorpayOrderId
		}
	}

`;


export const CheckCouponValidity = gql`
	query CheckCouponValidity($couponName: String!) {
		coupons_aggregate(where: {isValid: {_eq: true}, code: {_eq: $couponName}}) {
			aggregate {
			count
			}
			nodes {
			id
			value
			}
		}
	}

`;




export const InsertAddress = gql`
	mutation InsertAddress($lineOne: String!, $lineTwo: String!, $state: String!, $town: String!, $userId: bigint!, $zipCode: String!, $name: String!) {
		insert_addresses(objects: {countryId: 1, lineOne: $lineOne, lineTwo:  $lineTwo, state: $state, town: $town, userId: $userId,  name: $name,zipcode: $zipCode}) {
			affected_rows
		}
	}
`;



export const UpdateAddress = gql`
	mutation UpdateAddress($lineOne: String!, $lineTwo: String!, $state: String!, $town: String!, $addressId: bigint!, $zipCode: String!, $name: String!) {
		update_addresses(_set: { lineOne: $lineOne, lineTwo: $lineTwo, state: $state, town: $town, zipcode: $zipCode, name: $name }, where: { id: { _eq: $addressId } }) {
			affected_rows
		}
	}
`;



export const VerifyPayment = gql`
	mutation VerifyPayment($orderId: Int!, $razorpayOrderId: String!, $razorpayPaymentId: String!, $razorpaySignature: String!) {
	verifyPayment(input: { orderId: $orderId, razorPayOrderId: $razorpayOrderId, razorPayPaymentId: $razorpayPaymentId, razorPaySignature: $razorpaySignature }) {
		code
		message
	}
}
`;

export const DeleteUserCart = gql`
	mutation DeleteUserCart($userId: bigint!) {
		delete_cart(where: { userId: { _eq: $userId } }) {
			affected_rows
		}
	}
`;





