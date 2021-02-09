import Head from "next/head";
import React from "react";
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
				<title>Customer Support</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<div>
					<BreadCrumb backgroundImage={"/images/breadcrumb-bg/01.jpg"} title={"Customer Login"} finalName={"CUSTOMER LOGIN"} links={[{link: "/", name: "HOME"}]} />
					<Login />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default index;

const Login: React.FC = () => {
	return (
		<div className="login-area mb-130 mb-md-70 mb-sm-70 mb-xs-70 mb-xxs-70">
			<div className="container">
				<div className="row">
					<LoginForm />
					<SignUpForm />
				</div>
			</div>
		</div>
	);
};

const LoginForm: React.FC = () => {
	const {signIn, user, sendPasswordResetEmail} = useAuth();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const router = useRouter();

	const login = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		signIn({email, password}).then((data: any) => {
			setLoading(false);

			if (data.error) {
				toast.error(data.error.message);
				return console.log(data.error, "error");
			}
			toast.success("Login Successful");
			router.push("/account");

			return console.log(data, "user ");
		});
	};

	return (
		<div className="col-lg-6 mb-md-50 mb-sm-50">
			<div className="lezada-form login-form">
				<form onSubmit={login}>
					<div className="row">
						<p>{user && user.firstName} User Here</p>
						<div className="col-lg-12">
							{/*=======  login title  =======*/}
							<div className="section-title section-title--login text-center mb-50">
								<h2 className="mb-20">Login</h2>
								<p>Great to have you back!</p>
							</div>
							{/*=======  End of login title  =======*/}
						</div>
						<div className="col-lg-12 mb-60">
							<input type="email" placeholder="Email address" required value={email} name="email" onChange={(event) => setEmail(event.target.value)} />
						</div>
						<div className="col-lg-12 mb-60">
							<input type="password" placeholder="Password" minLength={8} required name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
						</div>
						{!loading ? (
							<div className="col-lg-12 text-center mb-30">
								<button className="lezada-button lezada-button--medium ">login</button>
							</div>
						) : (
							<div className="col-lg-12 text-center mb-30">
								<Spinner width="40px" height="40px" backgroundColor="#004032" />
							</div>
						)}
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

const SignUpForm: React.FC = () => {
	return (
		<div className="col-lg-6">
			<div className="lezada-form login-form--register">
				<form action="#">
					<div className="row">
						<div className="col-lg-12">
							{/*=======  login title  =======*/}
							<div className="section-title section-title--login text-center mb-50">
								<h2 className="mb-20">Register</h2>
								<p>If you don’t have an account, register now!</p>
							</div>
							{/*=======  End of login title  =======*/}
						</div>
						<div className="col-lg-12 mb-30">
							<label htmlFor="regEmail">
								Email Address <span className="required">*</span>{" "}
							</label>
							<input type="text" id="regEmail" required />
						</div>
						<div className="col-lg-12 mb-50">
							<label htmlFor="regPassword">
								Password <span className="required">*</span>{" "}
							</label>
							<input type="password" id="regPassword" required />
						</div>
						<div className="col-lg-12 text-center">
							<button className="lezada-button lezada-button--medium">register</button>
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
