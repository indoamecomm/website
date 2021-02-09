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
		addresses: addresses(where: {userId: {_eq: $userId}}) {
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