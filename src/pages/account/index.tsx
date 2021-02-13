import Head from "next/head";
import React from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import {useAuth} from "../../hooks/useAuth";
import {useEffect} from "react";
import {GetAccountDetails, UpdateUserAccountDetails} from "../../../queries/userQuery";
import {useState} from "react";
import {format} from "date-fns";
import {useMutation} from "@apollo/client";
import toast, {Toaster} from "react-hot-toast";
import Spinner from "../../Components/Utils/Spinner";
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
	const {user, changePassword: changePass, signOut} = useAuth();
	const apolloClient = initializeApollo();
	const [orders, setOrders] = useState<any[] | null>(null);
	const [addresses, setAddresses] = useState<any | null>(null);
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [currentPassword, setCurrentPassword] = useState<string>("");
	const [newPassword, setNewPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");

	const [updateUserAccount] = useMutation(UpdateUserAccountDetails);
	const [detailsLoading, setDetailsLoading] = useState<boolean>(false);

	const [passwordLoading, setPasswordLoading] = useState<boolean>(false);
	const router = useRouter();
	const updateUser = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setDetailsLoading(true);

		updateUserAccount({
			variables: {
				userId: user.id,
				firstName,
				lastName,
			},
		})
			.then(({data: {update_users}}) => {
				setDetailsLoading(false);

				if (update_users.affected_rows > 0) {
					toast.success("Details Update Successfully");
					console.log("Update Successful");
				}
			})
			.catch((error) => {
				setDetailsLoading(false);

				console.log(error);
				toast.error(error.message);
			});
	};

	const changePassword = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (newPassword === confirmPassword) {
			setPasswordLoading(true);
			changePass({email, password: currentPassword, newPassword}).then((data: any) => {
				setPasswordLoading(false);

				if (data.error) {
					return toast.error(data.error.message);
				}
				return toast.success("Passwords Updated Successfully");
			});
		} else {
			toast.error("Passwords do not match");
		}
	};

	useEffect(() => {
		if (user) {
			apolloClient
				.query({
					query: GetAccountDetails,
					variables: {
						userId: user.id,
					},
				})
				.then(({data: {orders, addresses, users}}) => {
					setOrders(orders);
					setAddresses(addresses[0]);
					setFirstName(users[0].firstName);
					setLastName(users[0].lastName);
					setEmail(users[0].email);
				});
		}
	}, [user]);

	const logout = async () => {
		await signOut();
		await router.push("/login");
	};

	return (
		<div className="my-account-area mb-130 mb-md-70 mb-sm-70 mb-xs-70 mb-xxs-70">
			<Toaster position="bottom-center" />

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
									<a onClick={logout}> Logout</a>
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
													Hello,{" "}
													<strong>
														{" "}
														{user && user.firstName} {user && user.lastName}
													</strong>
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
															<th>Order Id</th>
															<th>Date</th>
															<th>Status</th>
															<th>Total</th>
															<th>Action</th>
														</tr>
													</thead>
													<tbody>
														{orders &&
															orders.map((order) => (
																<tr key={order.id}>
																	<td>{order.id}</td>
																	<td>{format(new Date(order.createdAt), "MMM d, y")}</td>
																	<td>{order.order_status.name}</td>
																	<td>₹{order.totalAmount}</td>
																	<td>
																		<a href="#" className="check-btn sqr-btn ">
																			View
																		</a>
																	</td>
																</tr>
															))}
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
											{addresses ? (
												<address>
													<p>
														<strong>{addresses.name}</strong>
													</p>
													<p>
														{addresses.lineOne}, <br />
														{addresses.lineTwo}, <br />
														{addresses.town} {addresses.state}, <br />
														{addresses.zipcode}
													</p>
												</address>
											) : (
												<p>No Address added yet</p>
											)}
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
												<form onSubmit={updateUser}>
													<div className="row">
														<div className="col-lg-6">
															<div className="single-input-item">
																<label htmlFor="first-name" className="required">
																	First Name
																</label>
																<input type="text" id="first-name" name="first name" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
															</div>
														</div>
														<div className="col-lg-6">
															<div className="single-input-item">
																<label htmlFor="last-name" className="required">
																	Last Name
																</label>
																<input type="text" id="last-name" name="last name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
															</div>
														</div>
													</div>

													<div className="single-input-item" style={{cursor: "not-allowed", opacity: 0.7}}>
														<label htmlFor="email" className="required" style={{cursor: "disabled"}}>
															Email Address
														</label>
														<input type="email" id="email" value={email} disabled={true} />
													</div>
													{!detailsLoading ? (
														<div className="single-input-item mb-4">
															<button className="check-btn sqr-btn" type="submit">
																Save Changes
															</button>
														</div>
													) : (
														<div className="single-input-item mb-4 ml-4">
															<Spinner width="30px" height="30px" />
														</div>
													)}
												</form>
												<form className="mt-2" style={{marginTop: "3em"}} onSubmit={changePassword}>
													<fieldset>
														<legend>Password change</legend>
														<div className="single-input-item">
															<label htmlFor="current-pwd" className="required">
																Current Password
															</label>
															<input
																type="password"
																id="current-pwd"
																name="current password"
																value={currentPassword}
																onChange={(event) => setCurrentPassword(event.target.value)}
															/>
														</div>
														<div className="row">
															<div className="col-lg-6">
																<div className="single-input-item">
																	<label htmlFor="new-pwd" className="required">
																		New Password
																	</label>
																	<input
																		type="password"
																		id="new-pwd"
																		name="new password"
																		value={newPassword}
																		onChange={(event) => setNewPassword(event.target.value)}
																	/>
																</div>
															</div>
															<div className="col-lg-6">
																<div className="single-input-item">
																	<label htmlFor="confirm-pwd" className="required">
																		Confirm Password
																	</label>
																	<input
																		type="password"
																		id="confirm-pwd"
																		name="confirm password"
																		value={confirmPassword}
																		onChange={(event) => setConfirmPassword(event.target.value)}
																	/>
																</div>
															</div>
														</div>
													</fieldset>
													{!passwordLoading ? (
														<div className="single-input-item mb-4">
															<button className="check-btn sqr-btn" type="submit">
																Change Password
															</button>
														</div>
													) : (
														<div className="single-input-item mb-4 ml-4">
															<Spinner width="30px" height="30px" />
														</div>
													)}
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
