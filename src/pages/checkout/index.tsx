import Head from "next/head";
import React from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Address, Cart, Category, Store_Locations, User} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import {useAuth} from "../../hooks/useAuth";
import {useEffect} from "react";
import {CheckCouponValidity, CreateOrder, DeleteUserCart, GetUserCartDetails, VerifyPayment} from "../../../queries/userQuery";
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
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>Checkout</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
				<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
				<link rel="icon" href="/images/favicon.ico" />
				<link href="/revolution/css/settings.css" rel="stylesheet" />
				<link href="/revolution/css/navigation.css" rel="stylesheet" />
				<link href="/revolution/custom-setting.css" rel="stylesheet" />
				<script src="/js/vendor/modernizr-2.8.3.min.js"></script>
				<script src="/js/vendor/jquery.min.js"></script>
				<script src="/js/popper.min.js"></script>
				<script src="/js/bootstrap.min.js"></script>

				<script defer src="/js/main.js"></script>
			</Head>
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
		</>
	);
};

export default index;

const Checkout: React.FC = () => {
	const {user} = useAuth();
	const [cart, setCart] = useState<Cart[]>([]);
	const [userDetails, setUserDetails] = useState<User>();

	const apolloClient = initializeApollo();

	const [placeOrderMutation] = useMutation(CreateOrder);
	const [verifyOrder] = useMutation(VerifyPayment);
	const [deleteCart] = useMutation(DeleteUserCart);

	const [loading, setLoading] = useState<boolean>(false);
	const [couponLoading, setCouponLoading] = useState<boolean>(false);

	const [queryLoading, setQueryLoading] = useState<boolean>(true);
	const [activeAddress, setActiveAddress] = useState<Address | null>(null);

	const [couponName, setCouponName] = useState<string>("");
	const [activeCoupon, setActiveCoupon] = useState<any>(null);
	const [refetch, setRefetch] = useState<number>(1);

	const router = useRouter();

	const getUserCartItem = async () => {
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
			setCart(users[0].carts);
			// if (users[0].addresses.length > 0) {
			// 	setActiveAddress(users[0].addresses[0]);
			// }
		}
		setQueryLoading(false);
	};

	useEffect(() => {
		if (user) {
			getUserCartItem();
		}
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
							await deleteCart({
								variables: {
									userId: user.id,
								},
							});
							setLoading(false);

							router.push("/account");
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
				};
				//@ts-ignore
				const paymentObject = new window.Razorpay(options);
				paymentObject.open();
			} else {
				setLoading(false);
				toast.error("Some unknown error occurred");
			}
		} catch (error) {
			setLoading(false);
			toast.error(error.message);
		}
	};

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
									{!queryLoading ? (
										<CheckoutUserForm
											user={userDetails}
											address={userDetails && userDetails.addresses ? userDetails.addresses : null}
											activeAddress={activeAddress}
											setActiveAddress={setActiveAddress}
											setRefetch={setRefetch}
											refetch={refetch}
										/>
									) : (
										<div className="col-lg-7 mb-20 d-flex justify-content-center">
											<Spinner width="40px" height="40px" />
										</div>
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
											{!loading ? (
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
												<div className="col-12">
													<Spinner width="30px" height="30px" />
												</div>
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
			setActiveAddress(address[0]);
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
										<p className="address__item">{activeAddress?.lineOne}</p>
										<p className="address__item">{activeAddress?.lineTwo}</p>
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
	};
}
