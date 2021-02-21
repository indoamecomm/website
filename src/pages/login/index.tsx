import Head from "next/head";
import React, {useContext} from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import {useAuth} from "../../hooks/useAuth";
import {useState} from "react";
import Spinner from "../../Components/Utils/Spinner";
import toast, {Toaster} from "react-hot-toast";
import {useRouter} from "next/router";
import {useEffect} from "react";
import cartContext from "../../Context/cartContext";
import wishlistContext from "../../Context/wishlistContext";
import {InsertUserCartAndWishlist} from "../../../queries/userQuery";

interface HeaderProps {
	categories: Category[];
	storeLocations: Store_Locations[];
}

const index: React.FC<HeaderProps> = (props: HeaderProps) => {
	const {categories, storeLocations} = props;

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>Login/Register</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
				<link href="/revolution/css/settings.css" rel="stylesheet" />
				<link href="/revolution/css/navigation.css" rel="stylesheet" />
				<link href="/revolution/custom-setting.css" rel="stylesheet" />
				<script src="/js/vendor/modernizr-2.8.3.min.js"></script>
				<script src="/js/vendor/jquery.min.js"></script>
				<script src="/js/popper.min.js"></script>
				<script src="/js/bootstrap.min.js"></script>

				<script src="/js/plugins.js"></script>
				<script src="/js/main.js"></script>

				<script src="/revolution/js/jquery.themepunch.revolution.min.js"></script>
				<script src="/revolution/js/jquery.themepunch.tools.min.js"></script>
				<script src="/revolution/revolution-active.js"></script>

				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.actions.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
				<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
			</Head>
			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<div>
					<BreadCrumb
						backgroundImage={"/images/breadcrumb-bg/01.jpg"}
						title={"Customer Login"}
						finalName={"CUSTOMER LOGIN"}
						links={[{link: "/", name: "HOME"}]}
					/>
					<Login />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default index;

const Login: React.FC = () => {
	const [loginActive, setLoginActive] = useState<boolean>(true);
	const router = useRouter();

	const {checkout} = router.query;
	const [proceedToCheckout, setProceedToCheckout] = useState<boolean>(false);
	const {cart} = useContext(cartContext);
	const {wishlist} = useContext(wishlistContext);
	const apolloClient = initializeApollo();

	useEffect(() => {
		setProceedToCheckout(checkout === "true");
	}, [checkout]);

	const saveUserCartAndWishlist = async (userId: number) => {
		const cartItems = cart.map((element) => {
			return {
				count: element.count,
				productTypeId: element.productTypeId,
				userId,
			};
		});
		const wishlistItems = wishlist.map((element) => {
			return {
				productTypeId: element,
				userId,
			};
		});

		return await apolloClient.mutate({
			mutation: InsertUserCartAndWishlist,
			variables: {
				insertCart: cartItems,
				insertWishlist: wishlistItems,
			},
		});
	};

	return (
		<div className="login-area mb-130 mb-md-70 mb-sm-70 mb-xs-70 mb-xxs-70">
			<div className="container">
				<div className="row">
					{loginActive ? (
						<LoginForm
							setLoginActive={setLoginActive}
							proceedToCheckout={proceedToCheckout}
							setProceedToCheckout={setProceedToCheckout}
							saveUserCartAndWishlist={saveUserCartAndWishlist}
						/>
					) : (
						<SignUpForm
							setLoginActive={setLoginActive}
							proceedToCheckout={proceedToCheckout}
							setProceedToCheckout={setProceedToCheckout}
							saveUserCartAndWishlist={saveUserCartAndWishlist}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

interface AuthFormProps {
	setLoginActive: (value: boolean) => void;
	proceedToCheckout: boolean;
	setProceedToCheckout: (boolean) => void;
	saveUserCartAndWishlist: (userId: number) => void;
}

const LoginForm: React.FC<AuthFormProps> = (props) => {
	const {setLoginActive, proceedToCheckout, saveUserCartAndWishlist} = props;
	const {signIn, sendPasswordResetEmail} = useAuth();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const {setCart} = useContext(cartContext);
	const {setWishlist} = useContext(wishlistContext);
	const router = useRouter();
	

	const login = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			setLoading(true);
			const data = await signIn({email, password});
			if (data.error) {
				toast.error(data.error.message);
				setLoading(false);
			}
			toast.success("Login Successful");
			await saveUserCartAndWishlist(data.id);
			setCart([]);
			setWishlist([]);
			if (proceedToCheckout) {
				router.push("/checkout");
			} else {
				router.push("/account");
			}
		} catch (error) {
			setLoading(false);
			toast.error(error.message);
		}
	};

	return (
		<div className="col-lg-6 mb-md-50 mb-sm-50 mx-auto">
			<div className="lezada-form login-form">
				<form onSubmit={login}>
					<div className="row">
						<div className="col-lg-12">
							{/*=======  login title  =======*/}
							<div className="section-title section-title--login text-center mb-50">
								<h2 className="mb-20">Login</h2>
								<p>Great to have you back!</p>
							</div>
							{/*=======  End of login title  =======*/}
						</div>
						<div className="col-lg-12 mb-60">
							<input
								type="email"
								placeholder="Email address"
								required
								value={email}
								name="email"
								onChange={(event) => setEmail(event.target.value)}
							/>
						</div>
						<div className="col-lg-12 mb-60">
							<input
								type="password"
								placeholder="Password"
								minLength={8}
								required
								name="password"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</div>
						{!loading ? (
							<div className="col-lg-12 text-center mb-30">
								<button className="lezada-button lezada-button--medium " type="submit">
									login
								</button>
							</div>
						) : (
							<div className="col-lg-12 text-center mb-30">
								<Spinner width="40px" height="40px" backgroundColor="#004032" />
							</div>
						)}
						<div className="col-lg-12 text-center">
							<button
								className="lezada-button lezada-button--medium lezada-button-outline"
								type="button"
								onClick={() => setLoginActive(false)}>
								register
							</button>
						</div>
						<Toaster position="bottom-center" />
						<div className="col-lg-12">
							{/* <input type="checkbox" /> <span className="remember-text">Remember me</span> */}
							<a
								className="reset-pass-link"
								onClick={() => {
									toast.success(`Reset link sent on email ${email}`);
									sendPasswordResetEmail(email);
								}}>
								Lost your password?
							</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

const SignUpForm: React.FC<AuthFormProps> = (props) => {
	const {setLoginActive, proceedToCheckout} = props;
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");

	const [loading, setLoading] = useState<boolean>(false);
	const router = useRouter();
	const {signUp} = useAuth();

	const register = async (event: React.FormEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();
			if (password !== confirmPassword) {
				return toast.error("Passwords do not match");
			}
			setLoading(true);

			await signUp({email, password, firstName, lastName, phoneNumber: `+91${phoneNumber}`});
			toast.success("SignUp completed Successfully, Redirecting you to Home Page");
			if (proceedToCheckout) {
				router.push("/checkout");
			} else {
				router.push("/");
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="col-lg-6 mx-auto">
			<Toaster position="bottom-center" />

			<div className="lezada-form login-form">
				<form onSubmit={register}>
					<div className="row">
						<div className="col-lg-12">
							{/*=======  login title  =======*/}
							<div className="section-title section-title--login text-center mb-50">
								<h2 className="mb-20">Register</h2>
								<p>If you don’t have an account, register now!</p>
							</div>
							{/*=======  End of login title  =======*/}
						</div>
						<div className="col-lg-6 mb-50">
							<input
								type="text"
								placeholder="First Name"
								required
								value={firstName}
								name="first name"
								onChange={(event) => setFirstName(event.target.value)}
							/>
						</div>
						<div className="col-lg-6 mb-30">
							<input
								type="text"
								placeholder="Last name"
								required
								value={lastName}
								name="last name"
								onChange={(event) => setLastName(event.target.value)}
							/>
						</div>

						<div className="col-lg-6 mb-30">
							<input
								type="email"
								placeholder="Email address"
								required
								value={email}
								name="email"
								onChange={(event) => setEmail(event.target.value)}
							/>
						</div>
						<div className="col-lg-6 mb-50">
							<input
								type="tel"
								placeholder="Phone Number"
								required
								value={phoneNumber}
								name="phone number"
								maxLength={10}
								minLength={10}
								onChange={(event) => setPhoneNumber(event.target.value)}
							/>
						</div>

						<div className="col-lg-6 mb-30">
							<input
								type="password"
								placeholder="Password"
								required
								value={password}
								name="password"
								onChange={(event) => setPassword(event.target.value)}
							/>
						</div>
						<div className="col-lg-6 mb-50">
							<input
								type="password"
								placeholder="Confirm Password"
								required
								value={confirmPassword}
								name="confirm password"
								onChange={(event) => setConfirmPassword(event.target.value)}
							/>
						</div>

						<div className="col-lg-12 text-center">
							{!loading ? (
								<button className="lezada-button lezada-button--medium">register</button>
							) : (
								<Spinner width="50px" height="50px" />
							)}
						</div>

						<div className="col-lg-12 text-center">
							<button
								className="lezada-button lezada-button--medium lezada-button-outline mt-20"
								type="button"
								onClick={() => setLoginActive(true)}>
								Have A Account?
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export async function getStaticProps() {
	const apolloClient = initializeApollo();

	const {
		data: {categories, store_locations: storeLocations},
	} = await apolloClient.query({
		query: GetHeaderData,
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			categories,
			storeLocations,
		},
	};
}
