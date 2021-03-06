import { gql } from "@apollo/client";


export const GetUserByFirebaseUUID = gql`
	query GetUserByFirebaseUUID($email: String) {
		users(where: {email: {_eq: $email}, isDeleted: {_eq: false}}) {
			id
			email
			firebaseUUID
			firstName
			lastName
			phoneNumber
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
  orders: orders(where: {userId: {_eq: $userId}}, order_by: {id: desc}) {
    id
	statusId
    order_status {
      name
      id
    }
    totalAmount
    createdAt
    order_product_types {
      id
      product_type {
        id
        name
        discountedPrice
      }
      count
    }
    address {
      lineOne
      lineTwo
      name
      state
      town
	  zipcode
    }
	coupon {
      code
      value
    }
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
	query GetUserCart($userId: bigint!, $expiry: timestamptz!) {
		cart(where: {userId: {_eq: $userId}}) {
			id
			count
			product_type {
				deal_of_the_days(where: {enable: {_eq: true},  expiry: {_gt: $expiry}}) {
					discount
					id
					enable
				}
				name
				discountedPrice
					product {
						deal_of_the_days(where: {enable: {_eq: true}, expiry: {_gt: $expiry}}) {
							discount
							enable
						}
					}
				imageUrl
				product {
					id 
				}
			}
		}
	}
`;


export const GetUserCartSubscription = gql`
	subscription GetUserCart($userId: bigint!, $expiry: timestamptz!) {
		cart(where: {userId: {_eq: $userId}}, order_by: {product_type: {id: asc}}) {
			id
			count
			product_type {
				id
				deal_of_the_days(where: {enable: {_eq: true}, expiry: {_gt: $expiry}}) {
					discount
					id
					enable
				}
				name
				discountedPrice
				product {
					deal_of_the_days(where: {enable: {_eq: true}, expiry: {_gt: $expiry}}) {
					id
					discount
					enable
					}
				}
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
	subscription GetUserWishlist($userId: bigint!, $expiry: timestamptz!) {
		wishlists(where: {userId: {_eq: $userId}}) {
			id
			product_type {
				id
				name
				originalPrice
				deal_of_the_days(where: {enable: {_eq: true}, expiry: {_gt: $expiry}}) {
					id
					discount
					enable
				}
				discountedPrice
				imageUrl
				product {
					id
					name
					deal_of_the_days(where: {enable: {_eq: true}, expiry: {_gt: $expiry}}) {
						id
						discount
						enable
					}
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
	query GetUserCartDetails($userId: bigint!, $expiry: timestamptz!) {
		users(where: { id: { _eq: $userId } }) {
			carts {
				count
				id
				productTypeId
				product_type {
					id
					name
					discountedPrice
					deal_of_the_days(where: {enable: {_eq: true}, expiry: {_gt: $expiry}}) {
						id
						discount
						enable
					}
					product {
						deal_of_the_days(where: {enable: {_eq: true}, expiry: {_gt: $expiry}}) {
							id
							discount
							enable
						}
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
	mutation CreateOrder($addressId: Int!, $currency: String!, $userId: Int!, $productTypes: [ProductTypePair!]!, $promoCodeId: Int) {
		createOrder(input: {addressId: $addressId, currency: $currency, productTypeIds: $productTypes, userId: $userId, promoCodeId: $promoCodeId}) {
			order {
			id
			}
			razorpayOrderId
		}
	}
`;

export const CreateOrderUnauthenticated = gql`
mutation CreateOrderUnauthenticated($productTypes: [ProductTypePair!]!, $promoCodeId: Int, $town: String!, $state: String!, $zipcode: String!, $email: String!, $firstName: String!, $lastName: String!, $lineTwo: String, $lineOne: String!, $phoneNumber: String!) {
  createOrder(input: {currency: "INR", productTypeIds: $productTypes, promoCodeId: $promoCodeId, town: $town, state: $state, zipcode: $zipcode, email: $email, countryId: 1, firstName: $firstName, lastName: $lastName, lineTwo: $lineTwo, lineOne: $lineOne, name: "Home", phoneNumber: $phoneNumber, addressName: "Home"}) {
    order {
      id
    }
    razorpayOrderId
    userId
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
	mutation InsertAddress($lineOne: String!, $lineTwo: String, $state: String!, $town: String!, $userId: bigint!, $zipCode: String!, $name: String!) {
		insert_addresses(objects: {countryId: 1, lineOne: $lineOne, lineTwo:  $lineTwo, state: $state, town: $town, userId: $userId,  name: $name,zipcode: $zipCode}) {
			affected_rows
		}
	}
`;



export const UpdateAddress = gql`
	mutation UpdateAddress($lineOne: String!, $lineTwo: String, $state: String!, $town: String!, $addressId: bigint!, $zipCode: String!, $name: String!) {
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





export const DeleteWishlistByUserId = gql`
	mutation DeleteWishlistByUserId($userId: bigint!, $productTypeId: Int!) {
		delete_wishlists(where: {productTypeId: {_eq: $productTypeId}, userId: {_eq: $userId}}) {
			affected_rows
		}
	}
`;


export const InsertUserCartAndWishlist = gql`
	mutation InsertUserCartAndWishlist($insertCart: [cart_insert_input!]!, $insertWishlist: [wishlists_insert_input!]!) {
		insert_cart(objects: $insertCart) {
			affected_rows
		}
		insert_wishlists(objects: $insertWishlist) {
			affected_rows
		}
	}
# { productTypeId: 10, userId: 0, count: 0 }
	
`;


export const InsertUserCart = gql`
	mutation InsertUserCartAndWishlist($insertCart: [cart_insert_input!]!) {
		insert_cart(objects: $insertCart) {
			affected_rows
		}
	}
# { productTypeId: 10, userId: 0, count: 0 }
`;


export const GetOrderByUserId = gql`

	query GetOrderByUserId($orderId: bigint!, $userId: bigint!, $expiry: timestamptz!) {
		orders(where: {id: {_eq: $orderId}, userId: {_eq: $userId}}) {
			address {
				id
				lineOne
				lineTwo
				name
				state
				town
				zipcode
				}
			coupon {
				value
			}
			order_status {
				id
				name
			}
			order_product_types {
				id
				order_status {
					name
				}
				product_type {
					id
					imageUrl
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
					}
					name
					discountedPrice
					user_ratings(where: {userId: {_eq: $userId}}) {
						rating
						id
					}
				}
				count
				}
			totalAmount
		}
	}

`


export const GetOrders = gql`
	query GetOrders {
		orders {
			id
		}
	}
`



export const UpdateOrderStatus = gql`
	mutation UpdateOrderStatus($statusId: Int!, $orderId: bigint!) {
		update_orders(where: {id: {_eq: $orderId}}, _set: {statusId: $statusId}) {
			affected_rows
		}
	}
`;

export const VerifyIfOrderBelongsToUser = gql`
query VerifyIfOrderBelongsToUser($orderId: bigint!, $email: String!) {
	orders_aggregate(where: {id: {_eq: $orderId}, user: {email: {_eq: $email}}}) {
		aggregate {
		count
		}
		nodes {
		user {
			id
		}
		}
	}
}

`;


export const InsertContactUs = gql`
	mutation InsertContactUs($email: String!, $firstName: String!, $message: String!, $subject: String!) {
		insert_contact_us(objects: { email: $email, firstName: $firstName, message: $message, subject: $subject }) {
			affected_rows
		}
	}

`;




export const GetUserRatingByProductId = gql`
	query GetUserRatingByProductId($productTypeId: Int!) {
		user_ratings_aggregate(where: {productTypeId: {_eq: $productTypeId}}) {
			aggregate {
			avg {
				rating
			}
			}
		}
	}
`;


export const CancelOrder = gql`
	mutation CancelOrder($orderId: bigint!) {
		update_orders(where: {id: {_eq: $orderId}}, _set: {statusId: 3}) {
			affected_rows
		}
	}
`;