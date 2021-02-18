import {auth} from "../config/firebase";
import firebase from "firebase/app";

import {useState, useContext, createContext, ReactNode} from "react";
import {initializeApollo} from "../apollo";
import {GetUserByFirebaseUUID, UserSignUp as UserSignUpQuery} from "../../queries/userQuery";
import {User} from "../generated/graphql";
import {useEffect} from "react";
const authContext = createContext<any>({user: {}});
const {Provider} = authContext;

export function AuthProvider(props: {children: ReactNode}): JSX.Element {
	const auth = useAuthProvider();
	return <Provider value={auth}>{props.children}</Provider>;
}
export const useAuth: any = () => {
	return useContext(authContext);
};

// Provider hook that creates an auth object and handles it's state
const useAuthProvider = () => {
	const apolloClient = initializeApollo();

	const [user, setUser] = useState<User | null>(null);
	const createUser = (hasuraUser: User) => {
		setUser(() => hasuraUser);
		console.log(hasuraUser, "inside Create user", user);
		return user;
	};
	const signUp = async ({firstName, lastName, email, password, phoneNumber}: any) => {
		const {
			data: {UserSignUp},
		} = await apolloClient.mutate({
			mutation: UserSignUpQuery,
			variables: {
				email,
				firstName,
				lastName,
				password,
				phoneNumber,
			},
		});

		if (UserSignUp.Error) {
			console.log(UserSignUp.Error);
			throw UserSignUp.Error;
		} else {
			return signIn({email, password});
		}
	};

	const getUserAdditionalData = async (firebaseUser: firebase.User): Promise<User[]> => {
		console.log(firebaseUser, firebaseUser.email);
		const {
			data: {users},
		} = await apolloClient.query({
			query: GetUserByFirebaseUUID,
			variables: {
				email: firebaseUser.email,
			},
			fetchPolicy: "network-only",
		});

		console.log(users);

		return users;
	};

	const handleAuthStateChanged = async (firebaseUser: firebase.User) => {
		if (firebaseUser) {
			const users = await getUserAdditionalData(firebaseUser);
			console.log(users, "Inside Handle Auth State Changed");
			if (users && users.length > 0) {
				console.log(users, "inside condition");
				createUser(users[0]);
			}
		}
	};
	const sendPasswordResetEmail = (email: string) => {
		return auth.sendPasswordResetEmail(email).then((response) => {
			return response;
		});
	};

	useEffect(() => {
		const unsub = auth.onAuthStateChanged(async (firebaseUser) => {
			if (firebaseUser) {
				await handleAuthStateChanged(firebaseUser);
				console.log("inside Use effect", user);
			}
		});

		return () => unsub();
	}, []);

	const signIn = ({email, password}: any) => {
		console.log(email, password);
		return auth
			.signInWithEmailAndPassword(email, password)
			.then(async (response) => {
				if (response.user) {
					console.log(response.user);
					const users = await getUserAdditionalData(response.user);
					console.log(users);
					if (users.length === 0) {
						return {error: {message: "User Does not exist please SignUp to continue"}};
					}
					const hasuraUser: User = users[0];
					setUser(hasuraUser);
					return hasuraUser;
				}
			})
			.catch((error) => {
				return {error};
			});
	};

	const changePassword = async ({email, password, newPassword}: any) => {
		return auth
			.signInWithEmailAndPassword(email, password)
			.then(async (response) => {
				if (response.user) {
					return (
						auth.currentUser &&
						auth.currentUser
							.updatePassword(newPassword)
							.then(function () {
								return "Password updated successfully";
								//Do something
							})
							.catch(function (err) {
								//Do something
								return {
									error: err,
								};
							})
					);
				}
			})
			.catch(() => {
				return {
					error: {
						message: "Invalid Current Password ",
					},
				};
			});
	};

	const signOut = async () => {
		setUser(null);
		return auth.signOut();
	};
	return {
		user,
		signIn,
		setUser,
		sendPasswordResetEmail,
		changePassword,
		signOut,
		signUp,
	};
};
