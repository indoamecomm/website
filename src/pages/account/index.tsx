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
				<title>Shopping Cart</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<div>
					<BreadCrumb backgroundImage={"/images/breadcrumb-bg/01.jpg"} title={"My Account"} finalName={"MY ACCOUNT"} links={[{link: "/", name: "HOME"}]} />
					<Account />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default index;

const Account: React.FC = () => {
	return (
		<div className="my-account-area mb-130 mb-md-70 mb-sm-70 mb-xs-70 mb-xxs-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className="myaccount-tab-menu nav" role="tablist">
									<a href="#dashboard" className="active" data-toggle="tab">
										Dashboard
									</a>
									<a href="#orders" data-toggle="tab">
										Orders
									</a>
									<a href="#download" data-toggle="tab">
										Download
									</a>

									<a href="#address-edit" data-toggle="tab">
										address
									</a>
									<a href="#account-info" data-toggle="tab">
										Account Details
									</a>
									<a href="shop-customer-login.html"> Logout</a>
								</div>
							</div>
							{/* My Account Tab Menu End */}
							{/* My Account Tab Content Start */}
							<div className="col-lg-12 col-md-12">
								<div className="tab-content" id="myaccountContent">
									{/* Single Tab Content Start */}
									<div className="tab-pane fade show active" id="dashboard" role="tabpanel">
										<div className="myaccount-content">
											<h3>Dashboard</h3>
											<div className="welcome">
												<p>
													Hello, <strong>UserName</strong> (If Not <strong>UserName !</strong>
													<a href="shop-customer-login.html" className="logout">
														{" "}
														Logout
													</a>
													)
												</p>
											</div>
											<p className="mb-0">
												From your account dashboard. you can easily check &amp; view your recent orders, manage your shipping and billing addresses and edit your password and
												account details.
											</p>
										</div>
									</div>
									{/* Single Tab Content End */}
									{/* Single Tab Content Start */}
									<div className="tab-pane fade" id="orders" role="tabpanel">
										<div className="myaccount-content">
											<h3>Orders</h3>
											<div className="myaccount-table table-responsive text-center">
												<table className="table table-bordered">
													<thead className="thead-light">
														<tr>
															<th>Order</th>
															<th>Date</th>
															<th>Status</th>
															<th>Total</th>
															<th>Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>1</td>
															<td>Aug 22, 2020</td>
															<td>Pending</td>
															<td>₹3000</td>
															<td>
																<a href="shop-cart.html" className="check-btn sqr-btn ">
																	View
																</a>
															</td>
														</tr>
														<tr>
															<td>2</td>
															<td>July 22, 2020</td>
															<td>Approved</td>
															<td>₹200</td>
															<td>
																<a href="shop-cart.html" className="check-btn sqr-btn ">
																	View
																</a>
															</td>
														</tr>
														<tr>
															<td>3</td>
															<td>June 12, 2020</td>
															<td>On Hold</td>
															<td>₹990</td>
															<td>
																<a href="shop-cart.html" className="check-btn sqr-btn ">
																	View
																</a>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									{/* Single Tab Content End */}
									{/* Single Tab Content Start */}
									<div className="tab-pane fade" id="download" role="tabpanel">
										<div className="myaccount-content">
											<h3>Invoices</h3>
											<div className="myaccount-table table-responsive text-center">
												<table className="table table-bordered">
													<thead className="thead-light">
														<tr>
															<th>Product</th>
															<th>Date</th>
															<th>Expire</th>
															<th>Download</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>Type A</td>
															<td>Aug 22, 2020</td>
															<td>Yes</td>
															<td>
																<a href="#" className="check-btn sqr-btn ">
																	<i className="fa fa-cloud-download" /> Download File
																</a>
															</td>
														</tr>
														<tr>
															<td>Type B</td>
															<td>Sep 12, 2020</td>
															<td>Never</td>
															<td>
																<a href="#" className="check-btn sqr-btn ">
																	<i className="fa fa-cloud-download" /> Download File
																</a>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									{/* Single Tab Content End */}
									{/* Single Tab Content Start */}
									<div className="tab-pane fade" id="payment-method" role="tabpanel">
										<div className="myaccount-content">
											<h3>Payment Method</h3>
											<p className="saved-message">You Can't Saved Your Payment Method yet.</p>
										</div>
									</div>
									{/* Single Tab Content End */}
									<div className="tab-pane fade" id="address-edit" role="tabpanel">
										<div className="myaccount-content">
											<h3>Billing Address</h3>
											<address>
												<p>
													<strong>Alex Tuntuni</strong>
												</p>
												<p>
													1355 Market St, Suite 900 <br />
													San Francisco, CA 94103
												</p>
												<p>Mobile: (123) 456-7890</p>
											</address>
											<a href="#" className="check-btn sqr-btn ">
												<i className="fa fa-edit" /> Edit Address
											</a>
										</div>
									</div>
									{/* Single Tab Content Start */}
									<div className="tab-pane fade" id="account-info" role="tabpanel">
										<div className="myaccount-content">
											<h3>Account Details</h3>
											<div className="account-details-form">
												<form action="#">
													<div className="row">
														<div className="col-lg-6">
															<div className="single-input-item">
																<label htmlFor="first-name" className="required">
																	First Name
																</label>
																<input type="text" id="first-name" />
															</div>
														</div>
														<div className="col-lg-6">
															<div className="single-input-item">
																<label htmlFor="last-name" className="required">
																	Last Name
																</label>
																<input type="text" id="last-name" />
															</div>
														</div>
													</div>
													<div className="single-input-item">
														<label htmlFor="display-name" className="required">
															Display Name
														</label>
														<input type="text" id="display-name" />
													</div>
													<div className="single-input-item">
														<label htmlFor="email" className="required">
															Email Addres
														</label>
														<input type="email" id="email" />
													</div>
													<fieldset>
														<legend>Password change</legend>
														<div className="single-input-item">
															<label htmlFor="current-pwd" className="required">
																Current Password
															</label>
															<input type="password" id="current-pwd" />
														</div>
														<div className="row">
															<div className="col-lg-6">
																<div className="single-input-item">
																	<label htmlFor="new-pwd" className="required">
																		New Password
																	</label>
																	<input type="password" id="new-pwd" />
																</div>
															</div>
															<div className="col-lg-6">
																<div className="single-input-item">
																	<label htmlFor="confirm-pwd" className="required">
																		Confirm Password
																	</label>
																	<input type="password" id="confirm-pwd" />
																</div>
															</div>
														</div>
													</fieldset>
													<div className="single-input-item">
														<button className="check-btn sqr-btn ">Save Changes</button>
													</div>
												</form>
											</div>
										</div>
									</div>{" "}
									{/* Single Tab Content End */}
								</div>
							</div>{" "}
							{/* My Account Tab Content End */}
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
