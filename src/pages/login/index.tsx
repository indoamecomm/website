import Head from "next/head";
import React from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";

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
					<div className="col-lg-6 mb-md-50 mb-sm-50">
						<div className="lezada-form login-form">
							<form action="#">
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
										<input type="text" placeholder="Username or email address" required />
									</div>
									<div className="col-lg-12 mb-60">
										<input type="password" placeholder="Password" required />
									</div>
									<div className="col-lg-12 text-center mb-30">
										<button className="lezada-button lezada-button--medium">login</button>
									</div>
									<div className="col-lg-12">
										<input type="checkbox" /> <span className="remember-text">Remember me</span>
										<a href="#" className="reset-pass-link">
											Lost your password?
										</a>
									</div>
								</div>
							</form>
						</div>
					</div>
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
				</div>
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
