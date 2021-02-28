import Head from "next/head";
import React, {useRef} from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import {useAuth} from "../../hooks/useAuth";
import {useEffect} from "react";
import {GetAccountDetails, InsertAddress, UpdateAddress, UpdateUserAccountDetails} from "../../../queries/userQuery";
import {useState} from "react";
import {format} from "date-fns";
import {useMutation} from "@apollo/client";
import toast, {Toaster} from "react-hot-toast";
import Spinner from "../../Components/Utils/Spinner";
import {useRouter} from "next/router";
import Modal from "react-modal";
import Link from "next/link";
import {PDFDownloadLink} from "@react-pdf/renderer";
import Invoice from "../../Components/Invoice/Invoice";
import {useScript} from "../../hooks/useScript";

interface HeaderProps {
	categories: Category[];
	storeLocations: Store_Locations[];
}

const index: React.FC<HeaderProps> = (props: HeaderProps) => {
	const {categories, storeLocations} = props;
	useEffect(() => {
		const rootEl: any = document.getElementById("root");

		Modal.setAppElement(rootEl);
	}, []);

	const ref = useRef<HTMLDivElement>(null);

	useScript("/js/vendor/modernizr-2.8.3.min.js", ref);
	useScript("/js/vendor/jquery.min.js", ref);
	useScript("/js/popper.min.js", ref);
	useScript("/js/plugins.js", ref);
	useScript("/js/main.js", ref);
	useScript("/js/bootstrap.min.js", ref);

	useScript("/revolution/js/jquery.themepunch.revolution.min.js", ref);
	useScript("/revolution/js/jquery.themepunch.tools.min.js", ref);
	useScript("/revolution/revolution-active.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.kenburn.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.slideanims.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.actions.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.layeranimation.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.navigation.min.js", ref);
	useScript("/revolution/js/extensions/revolution.extension.parallax.min.js", ref);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>Shopping Cart</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
				<div ref={ref}></div>
			</Head>

			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<div>
					<BreadCrumb
						backgroundImage={"/images/breadcrumb-bg/01.jpg"}
						title={"My Account"}
						finalName={"MY ACCOUNT"}
						links={[{link: "/", name: "HOME"}]}
					/>
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
	const [openAddressModal, setOpenAddressModal] = useState<boolean>(false);
	const [logoutModal, setLogoutModal] = useState<boolean>(false);
	const [addressEditData, setAddressEditData] = useState<any>();
	const [refetch, setRefetch] = useState<number>(0);
	const [queryLoading, setQueryLoading] = useState<boolean>(false);
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
					setRefetch(() => refetch + 1);
				}
				setRefetch(() => refetch + 1);
			})
			.catch((error) => {
				setDetailsLoading(false);

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

	console.log("Re rendering");

	useEffect(() => {
		setQueryLoading(true);
		if (user) {
			apolloClient
				.query({
					query: GetAccountDetails,
					variables: {
						userId: user.id,
					},
					fetchPolicy: "network-only",
				})
				.then(({data: {orders, addresses, users}}) => {
					setOrders(orders);
					setAddresses(addresses);
					setFirstName(users[0].firstName);
					setLastName(users[0].lastName);
					setEmail(users[0].email);
					setQueryLoading(false);
				});
		}
	}, [user, refetch]);

	const logout = async () => {
		await signOut();
		await router.push("/login");
	};

	return (
		<div className="my-account-area mb-130 mb-md-70 mb-sm-70 mb-xs-70 mb-xxs-70">
			<Toaster position="bottom-center" />
			<AddressEdit
				open={openAddressModal}
				setOpen={setOpenAddressModal}
				data={addressEditData}
				setData={setAddressEditData}
				userId={user && user.id}
				setRefetch={setRefetch}
				refetch={refetch}
			/>
			<LogoutModal open={logoutModal} setOpen={setLogoutModal} setData={logout} />
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
										Invoices
									</a>
									<a href="#address-edit" data-toggle="tab">
										address
									</a>
									<a href="#account-info" data-toggle="tab">
										Account Details
									</a>
									<a onClick={() => setLogoutModal(true)}> Logout</a>
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
													Hello, &nbsp;
													<strong>
														{firstName} {lastName}
													</strong>
												</p>
											</div>
											<p className="mb-0">
												From your account dashboard. you can easily check &amp; view your recent orders, manage your
												shipping and billing addresses and edit your password and account details.
											</p>
										</div>
									</div>
									{/* Single Tab Content End */}
									{/* Single Tab Content Start */}
									<div className="tab-pane fade" id="orders" role="tabpanel">
										<div className="myaccount-content">
											<h3>Orders</h3>
											<div className="myaccount-table table-responsive text-center">
												{orders && orders.length > 0 ? (
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
															{orders.map((order) => (
																<tr key={order.id}>
																	<td>{order.id}</td>
																	<td>{format(new Date(order.createdAt), "MMM d, y")}</td>
																	<td>{order.order_status.name}</td>
																	<td>₹{order.totalAmount}</td>
																	<td>
																		<Link href={`/order/${order.id}`}>
																			<a className="check-btn sqr-btn ">View</a>
																		</Link>
																	</td>
																</tr>
															))}
														</tbody>
													</table>
												) : (
													<p>No orders yet</p>
												)}
											</div>
										</div>
									</div>
									{/* Single Tab Content End */}
									{/* Single Tab Content Start */}
									<div className="tab-pane fade" id="download" role="tabpanel">
										<div className="myaccount-content">
											<h3>Invoices</h3>
											<div className="myaccount-table table-responsive text-center">
												{orders && orders.length > 0 ? (
													<table className="table table-bordered">
														<thead className="thead-light">
															<tr>
																<th>Invoice Id</th>
																<th>Date</th>
																<th>Status</th>
																<th>Total</th>
																<th>Action</th>
															</tr>
														</thead>
														<tbody>
															{orders.map(
																(order) =>
																	order.statusId === 6 && <InvoiceItem key={order.id} order={order} />
															)}
														</tbody>
													</table>
												) : (
													<p>No invoices yet</p>
												)}
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
											<div className="d-flex justify-content-between">
												<h2>Addresses</h2>
												<a
													className="button-outline"
													onClick={() => {
														setOpenAddressModal(true);
													}}>
													add Address
												</a>
											</div>
											<h4>&nbsp;</h4>
											{!queryLoading ? (
												<>
													{addresses && addresses.length > 0 ? (
														addresses.map((address) => (
															<address key={address.id}>
																<div className="d-flex justify-content-between pb-0 mb-0">
																	<p>
																		<strong>{address.name}</strong>
																	</p>
																	<a
																		className="button-outline"
																		onClick={() => {
																			setAddressEditData(address);
																			setOpenAddressModal(true);
																		}}>
																		edit
																	</a>
																</div>
																<p>
																	{address.lineOne}, <br />
																	{address.lineTwo}, <br />
																	{address.town} {address.state}, <br />
																	{address.zipcode}
																</p>
															</address>
														))
													) : (
														<p>No Address added yet</p>
													)}
												</>
											) : (
												<Spinner width="50px" height="50px" />
											)}
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
																<input
																	type="text"
																	id="first-name"
																	name="first name"
																	value={firstName}
																	onChange={(event) => setFirstName(event.target.value)}
																/>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="single-input-item">
																<label htmlFor="last-name" className="required">
																	Last Name
																</label>
																<input
																	type="text"
																	id="last-name"
																	name="last name"
																	value={lastName}
																	onChange={(event) => setLastName(event.target.value)}
																/>
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
							</div>
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

const InvoiceItem: React.FC<{order: any}> = (props) => {
	const {order} = props;
	const {user} = useAuth();

	const invoice = {
		id: "5df3180a09ea16dc4b95f910",
		invoice_no: order.id,
		company: user && `${user.firstName} ${user.lastName}`,
		email: user && user.email,
		phone: user && user.phoneNumber,
		address:
			order &&
			`${order.address.lineOne}, ${order.address.lineTwo}, ${order.address.state}, ${order.address.town}, ${order.address.zipcode}`,
		trans_date: order && format(new Date(order.createdAt), "MMM d, y"),
		items: order && order.order_product_types,
	};

	const [ready, setReady] = useState<boolean>(false);
	return (
		<tr key={order.id}>
			<td>{order.id}</td>
			<td>{format(new Date(order.createdAt), "MMM d, y")}</td>
			<td>{order.order_status.name}</td>
			<td>₹{order.totalAmount}</td>

			{ready ? (
				<td>
					<PDFDownloadLink document={<Invoice invoice={invoice} />} fileName="Invoice.pdf">
						{({loading}) => (loading ? "Loading..." : "Download")}
					</PDFDownloadLink>
				</td>
			) : (
				<td>
					<a onClick={() => setReady(true)} className="check-btn  sqr-btn">
						Generate
					</a>
				</td>
			)}
		</tr>
	);
};
interface ModalProps {
	open: boolean;
	setOpen: (value: boolean) => void;
	data?: any;
	setData?: any;
	userId?: number;
	setRefetch?: (value: any) => void;
	refetch?: number;
}
export const AddressEdit: React.FC<ModalProps> = (props) => {
	const {open, setOpen, data: address, setData, userId, setRefetch, refetch} = props;
	const [lineOne, setLineOne] = useState<string>("");
	const [lineTwo, setLineTwo] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [state, setState] = useState<string>("");
	const [zip, setZip] = useState<string>("");
	const [town, setTown] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [addAddress] = useMutation(InsertAddress);
	const [editAddress] = useMutation(UpdateAddress);

	useEffect(() => {
		if (address) {
			setLineOne(address.lineOne);
			setLineTwo(address.lineTwo);
			setName(address.name);
			setState(address.state);
			setTown(address.town);
			setZip(address.zipcode);
		}
	}, [address]);

	const clearState = () => {
		setLineOne("");
		setLineTwo("");
		setName("");
		setState("");
		setTown("");
		setZip("");

		setOpen(false);
	};
	const submit = async (event: React.FormEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();
			setLoading(true);
			if (!address) {
				const {data} = await addAddress({
					variables: {
						lineOne,
						lineTwo,
						name,
						state,
						town,
						userId,
						zipCode: zip,
					},
				});
				if (data.insert_addresses.affected_rows > 0) {
					setRefetch && setRefetch(() => (refetch ? refetch : 0) + 1);

					toast.success("Address Inserted Successfully");
					clearState();
					//@ts-ignore
				} else {
					toast.error("Some unknown error occurred");
				}
			} else {
				const {data} = await editAddress({
					variables: {
						lineOne,
						lineTwo,
						name,
						state,
						town,
						zipCode: zip,
						addressId: address.id,
					},
				});
				if (data.update_addresses.affected_rows > 0) {
					setRefetch && setRefetch((refetch ? refetch : 1) + 1);
					//@ts-ignore
					setData(null);
					toast.success("Address Inserted Successfully");
					clearState();
				} else {
					toast.error("Some unknown error occurred");
				}
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Modal overlayClassName="overlay" className="modal__main modal-edit__address" isOpen={open}>
			<div className="d-flex flex-column">
				<div className="close">
					<h2 className="modal__title">{address ? "Edit Address" : "Add Address"}</h2>
					<img
						src="images/website/cross.svg"
						alt="Close"
						className="close-img"
						onClick={() => {
							clearState();
							setOpen(false);
						}}
					/>
				</div>
				<div>
					<div className="modal__content lezada-form">
						<form onSubmit={submit}>
							<div className="row modal__content" style={{margin: "auto", width: "40rem"}}>
								<div className="col-lg-6 mb-50">
									<input
										style={{width: "100%"}}
										type="text"
										placeholder="Name"
										required
										value={name}
										name="Address name"
										onChange={(event) => setName(event.target.value)}
									/>
								</div>
								<div className="col-lg-6 mb-30">
									<input
										style={{width: "100%"}}
										type="text"
										placeholder="City"
										required
										value={town}
										name="city"
										onChange={(event) => setTown(event.target.value)}
									/>
								</div>
								<div className="col-lg-12 mb-50">
									<input
										style={{width: "100%"}}
										type="text"
										placeholder="Line One"
										required
										value={lineOne}
										name="Line One"
										onChange={(event) => setLineOne(event.target.value)}
									/>
								</div>
								<div className="col-lg-12 mb-30">
									<input
										style={{width: "100%"}}
										type="text"
										placeholder="Line Two"
										required
										value={lineTwo}
										name="Line Two"
										onChange={(event) => setLineTwo(event.target.value)}
									/>
								</div>

								<div className="col-lg-6 mb-50">
									<input
										style={{width: "100%"}}
										type="text"
										placeholder="State"
										required
										value={state}
										name="state"
										onChange={(event) => setState(event.target.value)}
									/>
								</div>
								<div className="col-lg-6 mb-30">
									<input
										type="text"
										style={{width: "100%"}}
										placeholder="Zip code"
										required
										value={zip}
										name="city"
										onChange={(event) => setZip(event.target.value)}
									/>
								</div>

								<div className="col-lg-12 text-center">
									{!loading ? (
										<button className="lezada-button lezada-button--medium mt-20" type="submit">
											{address ? "Edit" : "Save"}
										</button>
									) : (
										<Spinner width="40px" height="40px" />
									)}
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Modal>
	);
};

const LogoutModal: React.FC<ModalProps> = (props) => {
	const {open, setOpen, setData} = props;

	return (
		<Modal overlayClassName="overlay" className="modal__main modal-logout" isOpen={open}>
			<div className="close">
				<h2 className="modal__title">Logout ?</h2>
				<img
					src="images/website/cross.svg"
					alt="Close"
					className="close-img"
					onClick={() => {
						setOpen(false);
					}}
				/>
			</div>
			<div className="modal__content">
				<h1 className="modal__header">Are you sure you want to logout</h1>
				<div className="row text-center">
					<button
						className="lezada-button lezada-button--medium mt-20 mx-auto"
						type="button"
						onClick={() => {
							//@ts-ignore
							setData(null);
							setOpen(false);
						}}>
						Yes
					</button>
				</div>
			</div>
		</Modal>
	);
};
