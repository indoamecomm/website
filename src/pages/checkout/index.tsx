import Head from "next/head";
import React, {useContext, useRef} from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Address, Cart, Category, Store_Locations, User} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import {useAuth} from "../../hooks/useAuth";
import {useEffect} from "react";
import {
	CheckCouponValidity,
	CreateOrder,
	CreateOrderUnauthenticated,
	DeleteUserCart,
	GetUserCartDetails,
	UpdateOrderStatus,
	VerifyPayment,
} from "../../../queries/userQuery";
import {useState} from "react";
import {getSubTotal} from "../../Components/Header/Cart";
import {useMutation} from "@apollo/client";
import toast, {Toaster} from "react-hot-toast";
import Modal from "react-modal";
import Spinner from "../../Components/Utils/Spinner";
import {AddressEdit} from "../account";
// import ReactTooltip from "react-tooltip";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import {getDiscountedPrice} from "../../Components/Product/ProductTypes";
import {GetProductTypesById} from "../../../queries/productQuery";
import cartContext from "../../Context/cartContext";
import OrderUserContext from "../../Context/orderUserContext";
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
	// useScript("https://checkout.razorpay.com/v1/checkout.js")
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>Checkout | Indoamerica</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<div ref={ref}></div>

			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<div>
					<BreadCrumb
						backgroundImage={"/images/breadcrumb-bg/01.jpg"}
						title={"Checkout"}
						finalName={"CHECKOUT"}
						links={[{link: "/", name: "HOME"}]}
					/>
					<Checkout />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default index;

const Checkout: React.FC = () => {
	const {user} = useAuth();
	const [cart, setCart] = useState<Cart[]>([]);
	const [userDetails, setUserDetails] = useState<User>();

	const [placeOrderMutation] = useMutation(CreateOrder);
	const [placeOrderMutationUnauthenticated] = useMutation(CreateOrderUnauthenticated);

	const [verifyOrder] = useMutation(VerifyPayment);
	// const [deleteCart] = useMutation(DeleteUserCart);
	const [updateOrderStatus] = useMutation(UpdateOrderStatus);

	const [loading, setLoading] = useState<boolean>(false);
	const [couponLoading, setCouponLoading] = useState<boolean>(false);

	const [queryLoading, setQueryLoading] = useState<boolean>(true);
	const [activeAddress, setActiveAddress] = useState<Address | null>(null);

	const [couponName, setCouponName] = useState<string>("");
	const [activeCoupon, setActiveCoupon] = useState<any>(null);
	const [refetch, setRefetch] = useState<number>(1);
	const {cart: cartStore, setCart: setCartStore} = useContext(cartContext);
	const {setOrderUserId} = useContext(OrderUserContext);

	//For Unauthenticated User
	const [email, setEmail] = useState<string>("");
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");
	const [lineOne, setLineOne] = useState<string>("");
	const [lineTwo, setLineTwo] = useState<string>("");
	const [zipcode, setZipcode] = useState<string>("");
	const [town, setTown] = useState<string>("");
	const [state, setState] = useState<string>("");
	const apolloClient = initializeApollo();

	const deleteCart = async () => {
		const newClient = initializeApollo();

		await newClient.mutate({
			mutation: DeleteUserCart,
			variables: {
				userId: user.id,
			},
		});
	};

	// const [lineOne, setLineOne] = useState<string>("");

	const router = useRouter();

	const getUserCartItem = async () => {
		try {
			if (user) {
				setQueryLoading(true);
				const {
					data: {users},
				} = await apolloClient.query({
					query: GetUserCartDetails,
					variables: {
						userId: user.id,
						expiry: new Date().toISOString(),
					},
					fetchPolicy: "network-only",
				});
				if (users && users.length > 0) {
					setUserDetails(users[0]);

					// let newCarts: any[] = [];
					// let cartCopy: any[] = [];

					// let newUniqueCarts: any[] = [];

					// newUniqueCarts = users[0].carts.filter(function (currentObject) {
					// 	if (currentObject.productTypeId in newCarts) {
					// 		cartCopy[currentObject.productTypeId] = {
					// 			...cartCopy[currentObject.productTypeId],
					// 			count: cartCopy[currentObject.productTypeId].count + currentObject.count,
					// 		};
					// 		return false;
					// 	} else {
					// 		newCarts[currentObject.productTypeId] = true;
					// 		cartCopy[currentObject.productTypeId] = currentObject;
					// 		return true;
					// 	}
					// });

					// cartCopy = cartCopy.filter((element) => element.id);
					setCart(removeDuplicatesProductTypes(users[0].carts));

					// if (users[0].addresses.length > 0) {
					// 	setActiveAddress(users[0].addresses[0]);
					// }
				}
				setQueryLoading(false);
			} else {
				const {
					data: {product_type},
				} = await apolloClient.query({
					query: GetProductTypesById,
					variables: {
						productTypeArray: cartStore.map((element) => element.productTypeId) ?? [],
						expiry: new Date().toISOString(),
					},
					fetchPolicy: "network-only",
				});
				const newItems = product_type.map((product, index) => ({
					id: `${product.id}${index}`,
					count: cartStore[index].count,
					productTypeId: product.id,
					product_type: JSON.parse(JSON.stringify(product)),
				}));

				setCart(removeDuplicatesProductTypes(newItems));
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	useEffect(() => {
		getUserCartItem();
	}, [user, refetch]);

	const placeOrder = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		try {
			event.preventDefault();
			setLoading(true);
			const productTypes = cart.map((cartItem) => {
				return {
					count: cartItem.count,
					productTypeId: cartItem.productTypeId,
				};
			});

			const {
				data: {createOrder},
			} = await placeOrderMutation({
				variables: {
					addressId: activeAddress ? activeAddress.id : null,
					userId: user.id,
					currency: "INR",
					productTypes,
					promoCodeId: activeCoupon ? activeCoupon.couponId : null,
				},
			});

			if (createOrder) {
				const options = {
					key: "rzp_test_LlLmyaSARCe7Dw", // Enter the Key ID generated from the Dashboard
					currency: "INR",
					name: "Indoamerican",
					amount: "100",
					description: "Test Transaction",
					image: "https://example.com/your_logo",
					order_id: createOrder.razorpayOrderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
					// order_id: "order_GeBMz369ne4rF4",
					handler: async (response) => {
						const {
							data: {code, message},
						} = await verifyOrder({
							variables: {
								razorpayOrderId: createOrder.razorpayOrderId,
								razorpayPaymentId: response.razorpay_payment_id,
								razorpaySignature: response.razorpay_signature,
								orderId: createOrder.order.id,
							},
						});
						if (code === 500 || code === 401) {
							toast.error("Some error occurred please try again," + message);
						} else {
							await deleteCart();
							setLoading(false);

							router.push(`/order/${createOrder.order.id}`);
							toast.success("Order Successfully Placed");
						}
					},
					prefill: {
						name: user.name,
						email: user.email,
						contact: user.phoneNumber,
					},
					notes: {
						address: `${activeAddress?.lineOne} ${activeAddress?.lineTwo}`,
					},
					theme: {
						color: "#3399cc",
					},
					modal: {
						ondismiss: async function () {
							setLoading(false);
							await updateOrderStatus({
								variables: {
									orderId: createOrder.order.id,
									statusId: 5,
								},
							});
							toast.error("Checkout Gateway closed");
						},
					},
				};
				//@ts-ignore
				const paymentObject = new window.Razorpay(options);
				paymentObject.open();
				paymentObject.on("payment.failed", async function (response) {
					await updateOrderStatus({
						variables: {
							orderId: createOrder.order.id,
							statusId: 5,
						},
					});
					toast.success(response.error.reason);
					// alert(response.error.metadata.order_id);
					// alert(response.error.metadata.payment_id);
					setLoading(false);
				});
			} else {
				setLoading(false);
				toast.error("Some unknown error occurred");
			}
		} catch (error) {
			setLoading(false);
			toast.error(error.message);
		}
	};

	const placeOrderUnauthenticated = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (phoneNumber.length === 10) {
			try {
				event.preventDefault();
				setLoading(true);
				const productTypes = cart.map((cartItem) => {
					return {
						count: cartItem.count,
						productTypeId: cartItem.productTypeId,
					};
				});

				const {
					data: {createOrder},
				} = await placeOrderMutationUnauthenticated({
					variables: {
						currency: "INR",
						firstName,
						lastName,
						email,
						phoneNumber: `+91${phoneNumber}`,
						zipcode,
						lineOne,
						lineTwo,
						town,
						state,
						productTypes,
						promoCodeId: activeCoupon ? activeCoupon.couponId : null,
					},
				});

				if (createOrder) {
					const options = {
						key: "rzp_test_LlLmyaSARCe7Dw", // Enter the Key ID generated from the Dashboard
						currency: "INR",
						name: "Indoamerican",
						amount: "100",
						description: "Test Transaction",
						image: "/images/logo.png",
						order_id: createOrder.razorpayOrderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
						// order_id: "order_GeBMz369ne4rF4",
						handler: async (response: any) => {
							const {
								data: {code, message},
							} = await verifyOrder({
								variables: {
									razorpayOrderId: createOrder.razorpayOrderId,
									razorpayPaymentId: response.razorpay_payment_id,
									razorpaySignature: response.razorpay_signature,
									orderId: createOrder.order.id,
								},
							});
							if (code === 500 || code === 401) {
								toast.error("Some error occurred please try again," + message);
							} else {
								setLoading(false);
								setCartStore([]);
								setOrderUserId(createOrder.userId);
								console.log(createOrder.order.id);
								router.push(`/order/${createOrder.order.id}`);
								toast.success("Order Placed Successfully");
							}
						},
						prefill: {
							name: `${firstName} ${lastName}`,
							email: email,
							contact: phoneNumber,
						},
						notes: {
							address: `${lineOne} ${lineTwo}`,
						},
						theme: {
							color: "#3399cc",
						},
						modal: {
							ondismiss: async function () {
								setLoading(false);
								await updateOrderStatus({
									variables: {
										orderId: createOrder.order.id,
										statusId: 5,
									},
								});
								toast.error("Checkout Gateway closed");
							},
						},
					};
					//@ts-ignore
					const paymentObject = new window.Razorpay(options);
					paymentObject.open();
					paymentObject.on("payment.failed", async function (response) {
						await updateOrderStatus({
							variables: {
								orderId: createOrder.order.id,
								statusId: 5,
							},
						});
						toast.success(response.error.reason);
						// alert(response.error.metadata.order_id);
						// alert(response.error.metadata.payment_id);
						setLoading(false);
					});
				} else {
					setLoading(false);
					toast.error("Some unknown error occurred");
				}
			} catch (error) {
				setLoading(false);
			}
		} else {
			toast.error("Please enter a valid phone number of length 10");
		}
	};

	const disabledButton = !email || !firstName || !lastName || !phoneNumber || !lineOne || !town || !zipcode || !state;

	const checkCoupon = async () => {
		setCouponLoading(true);

		try {
			const {
				data: {
					coupons_aggregate: {
						aggregate: {count},
						nodes,
					},
				},
			} = await apolloClient.query({
				query: CheckCouponValidity,
				variables: {
					couponName: couponName,
				},
			});

			if (count > 0 && nodes.length > 0) {
				toast.success("Coupon Applied Successfully");
				const couponInfo = {
					couponId: nodes[0].id,
					value: nodes[0].value,
				};
				setActiveCoupon(couponInfo);
			} else {
				toast.error("Coupon Does Not Exist");
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setCouponLoading(false);
		}
	};
	const ReactTooltip = dynamic(() => import("react-tooltip"), {ssr: false});

	return (
		<div className="checkout-page-area mb-130">
			<Toaster position="bottom-center" />
			<ReactTooltip id="main" place={"left"} type={"dark"} effect="solid" uuid="mytt" multiline={true} />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="lezada-form">
							{/* Checkout Form s*/}
							<form className="checkout-form">
								<div className="row row-40">
									{user && !queryLoading ? (
										<CheckoutUserForm
											user={userDetails}
											address={userDetails && userDetails.addresses ? userDetails.addresses : null}
											activeAddress={activeAddress}
											setActiveAddress={setActiveAddress}
											setRefetch={setRefetch}
											refetch={refetch}
										/>
									) : (
										user && (
											<div className="col-lg-7 mb-20 d-flex justify-content-center">
												<Spinner width="40px" height="40px" />
											</div>
										)
									)}
									{!user && (
										<CheckoutUnauthenticatedUser
											email={email}
											setEmail={setEmail}
											firstName={firstName}
											setFirstName={setFirstName}
											lastName={lastName}
											setLastName={setLastName}
											phoneNumber={phoneNumber}
											setPhoneNumber={setPhoneNumber}
											lineOne={lineOne}
											setLineOne={setLineOne}
											lineTwo={lineTwo}
											setLineTwo={setLineTwo}
											town={town}
											setTown={setTown}
											state={state}
											setState={setState}
											zipcode={zipcode}
											setZipcode={setZipcode}
										/>
									)}
									<div className="col-lg-5">
										<div className="row">
											{/* Cart Total */}

											<CheckoutCart cart={cart} activeCoupon={activeCoupon} />
											<div className="col-6">
												<input
													type="text"
													placeholder="Coupon"
													value={couponName}
													onChange={(event) => setCouponName(event.target.value)}
												/>
											</div>

											<div className="col-4">
												{!couponLoading ? (
													<button
														className="lezada-button lezada-button--medium"
														type="button"
														onClick={checkCoupon}
														disabled={couponName.length < 5}>
														Apply
													</button>
												) : (
													<Spinner width="30px" height="30px" />
												)}
											</div>
											{/* Payment Method */}
											{user && !loading ? (
												<div className="col-12">
													<button
														data-for={!activeAddress && "main"}
														style={!activeAddress ? {opacity: 0.7} : {opacity: 1}}
														className="lezada-button lezada-button--medium mt-30"
														data-tip={"Please add address"}
														onClick={activeAddress ? placeOrder : undefined}
														type="submit">
														Place order
													</button>
												</div>
											) : (
												user && (
													<div className="col-12">
														<Spinner width="30px" height="30px" />
													</div>
												)
											)}
											{!user && !loading ? (
												<div className="col-12">
													<button
														style={disabledButton ? {opacity: 0.7} : {opacity: 1}}
														className="lezada-button lezada-button--medium mt-30"
														onClick={placeOrderUnauthenticated}
														disabled={disabledButton}
														type="button">
														Place order
													</button>
												</div>
											) : (
												!user && (
													<div className="col-12">
														<Spinner width="30px" height="30px" />
													</div>
												)
											)}
										</div>
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

const CheckoutUserForm: React.FC<{
	user: User | undefined;
	address: Address[] | any;
	activeAddress: any;
	setActiveAddress: (value: any) => void;
	refetch: number;
	setRefetch: (value: any) => void;
}> = (props) => {
	const {user, address, activeAddress, setActiveAddress, refetch, setRefetch} = props;

	return (
		<div className="col-lg-7 mb-20">
			{/* Billing Address */}
			<div id="billing-form" className="mb-40">
				<h4 className="checkout-title">Billing Address</h4>
				<div className="row">
					<div className="col-md-6 col-12 mb-20">
						<label>First Name</label>
						<p>{user?.firstName}</p>
						{/* <input type="text" placeholder="First Name" readOnly required value={user?.firstName} /> */}
					</div>
					<div className="col-md-6 col-12 mb-20">
						<label>Last Name</label>
						<p>{user?.lastName}</p>
					</div>
					<div className="col-md-6 col-12 mb-20">
						<label>Email Address</label>
						<p>{user?.email}</p>
					</div>
					<div className="col-md-6 col-12 mb-20">
						<label>Phone no</label>
						<p>{user?.phoneNumber}</p>
					</div>
					<CheckoutAddress
						address={address}
						activeAddress={activeAddress}
						setActiveAddress={setActiveAddress}
						user={user}
						setRefetch={setRefetch}
						refetch={refetch}
					/>
				</div>
			</div>
		</div>
	);
};

const CheckoutUnauthenticatedUser: React.FC<any> = (props) => {
	const {
		email,
		setEmail,
		firstName,
		setFirstName,
		lastName,
		setLastName,
		phoneNumber,
		setPhoneNumber,
		lineOne,
		setLineOne,
		lineTwo,
		setLineTwo,
		town,
		setTown,
		state,
		setState,
		zipcode,
		setZipcode,
	} = props;

	return (
		<div className="col-lg-7 mb-20">
			{/* Billing Address */}
			<div id="billing-form" className="mb-40">
				<h4 className="checkout-title">Billing Address</h4>
				<div className="row">
					<div className="col-md-6 col-12 mb-20">
						<label>First Name*</label>
						<input
							type="text"
							placeholder="First Name"
							value={firstName}
							onChange={(event) => {
								setFirstName(event.target.value);
							}}
						/>
					</div>
					<div className="col-md-6 col-12 mb-20">
						<label>Last Name*</label>
						<input
							type="text"
							value={lastName}
							onChange={(event) => {
								setLastName(event.target.value);
							}}
							placeholder="Last Name"
						/>
					</div>
					<div className="col-md-6 col-12 mb-20">
						<label>Email Address*</label>
						<input
							type="email"
							placeholder="Email Address"
							value={email}
							onChange={(event) => {
								setEmail(event.target.value);
							}}
						/>
					</div>
					<div className="col-md-6 col-12 mb-20">
						<label>Phone no*</label>
						<input
							type="text"
							placeholder="Phone number"
							value={phoneNumber}
							onChange={(event) => {
								setPhoneNumber(event.target.value);
							}}
						/>
					</div>
					<div className="col-12 mb-20">
						<label>Address*</label>
						<input
							type="text"
							placeholder="Address line 1"
							value={lineOne}
							onChange={(event) => {
								setLineOne(event.target.value);
							}}
						/>
						<input
							type="text"
							placeholder="Address line 2"
							value={lineTwo}
							onChange={(event) => {
								setLineTwo(event.target.value);
							}}
						/>
					</div>
					<div className="col-md-6 col-12 mb-20">
						<label>Town/City*</label>
						<input
							type="text"
							placeholder="Town/City"
							value={town}
							onChange={(event) => {
								setTown(event.target.value);
							}}
						/>
					</div>
					<div className="col-md-6 col-12 mb-20">
						<label>State*</label>
						<input
							type="text"
							placeholder="State"
							value={state}
							onChange={(event) => {
								setState(event.target.value);
							}}
						/>
					</div>
					<div className="col-md-6 col-12 mb-20">
						<label>Zip Code*</label>
						<input
							type="text"
							placeholder="Zip Code"
							value={zipcode}
							onChange={(event) => {
								setZipcode(event.target.value);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const CheckoutAddress: React.FC<{
	address: any;
	activeAddress: Address;
	setActiveAddress: (value: any) => void;
	user: any;
	refetch: number;
	setRefetch: (value: any) => void;
}> = (props) => {
	const {address, activeAddress, setActiveAddress, user, refetch, setRefetch} = props;
	const [openAddressModal, setOpenAddressModal] = useState<boolean>(false);

	const [addressListModal, setAddressListModal] = useState<boolean>(false);
	const [addressList, setAddressList] = useState<any>(false);

	// const [activeAddress, setActiveAddress] = useState<Address | null>(null);

	useEffect(() => {
		if (address && address.length > 0) {
			setAddressList({addresses: address});
			setActiveAddress(address[address.length - 1]);
		}
	}, [address]);

	return (
		<>
			<AddressListModal
				open={addressListModal}
				setOpen={setAddressListModal}
				data={addressList}
				setData={setAddressList}
				onClickAddress={setActiveAddress}
				activeAddress={activeAddress}
				setRefetch={setRefetch}
				refetch={refetch}
			/>

			<AddressEdit
				open={openAddressModal}
				setOpen={setOpenAddressModal}
				userId={user && user.id}
				setRefetch={setRefetch}
				refetch={refetch}
			/>
			{activeAddress && (
				<>
					<div className="col-12 mb-20">
						<label>Address</label>
						<p>{activeAddress?.lineOne}</p>
						<p>{activeAddress?.lineTwo}</p>
					</div>
					<div className="col-md-6 col-12 mb-20">
						<label>Town/City</label>
						<p>{activeAddress?.town}</p>
					</div>
					<div className="col-md-6 col-12 mb-20">
						<label>State</label>
						<p>{activeAddress?.state}</p>
					</div>
					<div className="col-md-6 col-12 mb-20">
						<label>Zip Code</label>
						<p>{activeAddress?.zipcode}</p>
					</div>
				</>
			)}
			<div className=" col-12 mb-20">
				{activeAddress ? (
					<button className="lezada-button lezada-button--medium mt-30" type="button" onClick={() => setAddressListModal(true)}>
						Use different address ?
					</button>
				) : (
					<button
						className="lezada-button lezada-button--medium mt-30"
						type="button"
						role="button"
						onClick={() => setOpenAddressModal(true)}>
						Add Address
					</button>
				)}
			</div>
		</>
	);
};

interface ModalProps {
	open: boolean;
	setOpen: (value: boolean) => void;
	data?: any;
	setData?: (value: any) => void;
	onClickAddress?: (value: any) => void;
	activeAddress?: any;
	refetch: number;
	setRefetch: (value: any) => void;
}

const AddressListModal: React.FC<ModalProps> = (props) => {
	const {open, setOpen, data, onClickAddress, activeAddress: selectedAddress, refetch, setRefetch} = props;
	const [openAddressModal, setOpenAddressModal] = useState<boolean>(false);
	const {user} = useAuth();

	return (
		<Modal overlayClassName="overlay" className="modal__main modal-list__address" isOpen={open}>
			<AddressEdit
				open={openAddressModal}
				setOpen={setOpenAddressModal}
				userId={user && user.id}
				setRefetch={setRefetch}
				refetch={refetch}
			/>
			<div className="d-flex flex-column">
				<div className="close">
					<h2 className="checkout-title">Select Address</h2>
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
					<div className="address">
						{data.addresses &&
							data.addresses.length > 0 &&
							data.addresses.map((activeAddress) => (
								<div
									key={activeAddress.id}
									className={`address__container ${
										activeAddress.id === selectedAddress.id ? "address__container-active" : ""
									}`}
									onClick={() => {
										//@ts-ignore
										onClickAddress(activeAddress ? activeAddress : "");
										setOpen(false);
									}}>
									<div className="col-12">
										<p className="address__name">{activeAddress?.name}</p>
									</div>
									<div className="col-12">
										<p className="address__item">{activeAddress?.lineOne},</p>
										<p className="address__item">{activeAddress?.lineTwo},</p>
									</div>
									<div className="col-md-6 col-12">
										<p className="address__item">{activeAddress?.town}</p>
									</div>
									<div className="col-md-6 col-12">
										<p className="address__item">{activeAddress?.state}</p>
									</div>
									<div className="col-md-6 col-12">
										<p className="address__item">{activeAddress?.zipcode}</p>
									</div>
								</div>
							))}

						<div
							className="address__container d-flex justify-content-center align-items-center"
							onClick={() => {
								setOpenAddressModal(true);
							}}>
							<p className="address__name">Add new address + </p>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};
const CheckoutCart: React.FC<{cart: Cart[]; activeCoupon: any}> = (props) => {
	const {cart, activeCoupon} = props;

	return (
		<div className="col-12 mb-60">
			<h4 className="checkout-title">Cart Total</h4>
			<div className="checkout-cart-total">
				<h4>
					Product <span>Total</span>
				</h4>
				<ul>
					{cart.map((cartItem) => (
						<li key={cartItem.id}>
							{cartItem.product_type.name} X {cartItem.count}
							<span>₹{cartItem.count * (getDiscountedPrice(cartItem.product_type) ?? 0)}</span>
						</li>
					))}
					{activeCoupon && (
						<li key={"activeCoupon"}>
							Coupon Applied
							<span>-{activeCoupon.value}%</span>
						</li>
					)}
				</ul>
				<p>
					Sub Total <span>₹{getSubTotal(cart, activeCoupon && activeCoupon.value)}</span>
				</p>
				<p>
					Shipping Fee <span>₹00.00</span>
				</p>
				<h4>
					Grand Total <span>₹{getSubTotal(cart, activeCoupon && activeCoupon.value)}</span>
				</h4>
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
		revalidate: 1,
	};
}

export const removeDuplicatesProductTypes = (carts: Cart[]): Cart[] => {
	let newCarts: any[] = [];
	let cartCopy: any[] = [];
	carts.filter(function (currentObject) {
		if (currentObject.productTypeId in newCarts) {
			cartCopy[currentObject.productTypeId] = {
				...cartCopy[currentObject.productTypeId],
				count: cartCopy[currentObject.productTypeId].count + currentObject.count,
			};
			return false;
		} else {
			newCarts[currentObject.productTypeId] = true;
			cartCopy[currentObject.productTypeId] = currentObject;
			return true;
		}
	});

	return cartCopy.filter((element) => element.id);
};
