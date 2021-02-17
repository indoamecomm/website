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
import {CheckCouponValidity, CreateOrder, GetUserCartDetails} from "../../../queries/userQuery";
import {useState} from "react";
import {getSubTotal} from "../../Components/Header/Cart";
import {useMutation} from "@apollo/client";
import toast, {Toaster} from "react-hot-toast";
import Modal from "react-modal";
import Spinner from "../../Components/Utils/Spinner";

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

				<script defer src="/js/vendor/modernizr-2.8.3.min.js"></script>
				<script defer src="/js/vendor/jquery.min.js"></script>
				<script defer src="/js/popper.min.js"></script>
				<script defer src="/js/bootstrap.min.js"></script>
				<script defer src="/js/plugins.js"></script>

				<script defer src="/js/main.js"></script>
			</Head>
			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<div>
					<BreadCrumb backgroundImage={"/images/breadcrumb-bg/01.jpg"} title={"Checkout"} finalName={"CHECKOUT"} links={[{link: "/", name: "HOME"}]} />
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
	const [address, setAddress] = useState<Address[]>([]);

	const apolloClient = initializeApollo();

	const [placeOrderMutation] = useMutation(CreateOrder);
	const [loading, setLoading] = useState<boolean>(false);
	const [couponLoading, setCouponLoading] = useState<boolean>(false);

	const [queryLoading, setQueryLoading] = useState<boolean>(true);
	const [activeAddress, setActiveAddress] = useState<Address | null>(null);

	const [couponName, setCouponName] = useState<string>("");
	const [activeCoupon, setActiveCoupon] = useState<any>(null);

	const getUserCartItem = async () => {
		setQueryLoading(true);
		const {
			data: {users},
		} = await apolloClient.query({
			query: GetUserCartDetails,
			variables: {
				userId: user.id,
			},
		});
		if (users) {
			setUserDetails(users[0]);
			setCart(users[0].carts);
			setAddress(users[0].addresses);
		}
		setQueryLoading(false);
	};

	useEffect(() => {
		if (user) {
			getUserCartItem();
		}
	}, [user]);

	const placeOrder = async (event: React.FormEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();
			setLoading(true);
			const productTypes = cart.map((cartItem) => {
				return {
					count: cartItem.count,
					productTypeId: cartItem.productTypeId,
				};
			});

			const {data} = await placeOrderMutation({
				variables: {
					addressId: activeAddress ? activeAddress.id : null,
					userId: user.id,
					currency: "INR",
					productTypes,
				},
			});

			console.log(data);
			if (data) {
				setLoading(false);
				const options = {
					key: "rzp_test_LlLmyaSARCe7Dw", // Enter the Key ID generated from the Dashboard
					currency: "INR",
					name: "Acme Corp",
					description: "Test Transaction",
					image: "https://example.com/your_logo",
					order_id: data.razorpayOrderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
					handler: function (response) {
						console.log(response.razorpay_payment_id);
						console.log(response.razorpay_order_id);
						console.log(response.razorpay_signature);
						toast.success("Order Successfully Placed");
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

	return (
		<div className="checkout-page-area mb-130">
			<Toaster position="bottom-center" />

			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="lezada-form">
							{/* Checkout Form s*/}
							<form className="checkout-form" onSubmit={placeOrder}>
								<div className="row row-40">
									{!queryLoading ? (
										<CheckoutUserForm
											user={userDetails}
											address={userDetails && userDetails.addresses ? userDetails.addresses : null}
											activeAddress={activeAddress}
											setActiveAddress={setActiveAddress}
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
												<input type="text" placeholder="Coupon" value={couponName} onChange={(event) => setCouponName(event.target.value)} />
											</div>

											<div className="col-4">
												{!couponLoading ? (
													<button className="lezada-button lezada-button--medium" type="button" onClick={checkCoupon} disabled={couponName.length < 5}>
														Apply
													</button>
												) : (
													<Spinner width="30px" height="30px" />
												)}
											</div>
											{/* Payment Method */}
											{!loading ? (
												<div className="col-12">
													<button className="lezada-button lezada-button--medium mt-30" type="submit">
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

const CheckoutUserForm: React.FC<{user: User | undefined; address: Address[] | any; activeAddress: any; setActiveAddress: (value: any) => void}> = (props) => {
	const {user, address, activeAddress, setActiveAddress} = props;

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
					<CheckoutAddress address={address} activeAddress={activeAddress} setActiveAddress={setActiveAddress} />
				</div>
			</div>
		</div>
	);
};

const CheckoutAddress: React.FC<{address: any; activeAddress: Address; setActiveAddress: (value: any) => void}> = (props) => {
	const {address, activeAddress, setActiveAddress} = props;

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
			<div className="col-12 mb-20">
				<AddressListModal open={addressListModal} setOpen={setAddressListModal} data={addressList} setData={setAddressList} onClickAddress={setActiveAddress} activeAddress={activeAddress} />
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
			<div className=" col-12 mb-20">
				<button className="lezada-button lezada-button--medium mt-30" type="button" onClick={() => setAddressListModal(true)}>
					Use different address ?
				</button>
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
}

const AddressListModal: React.FC<ModalProps> = (props) => {
	const {open, setOpen, data, onClickAddress, activeAddress: selectedAddress} = props;

	return (
		<Modal overlayClassName="overlay" className="modal__main modal-list__address" isOpen={open}>
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
									className={`address__container ${activeAddress.id === selectedAddress.id ? "address__container-active" : ""}`}
									//@ts-ignore
									onClick={() => onClickAddress(activeAddress ? activeAddress : "")}>
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
						<>
							<li key={cartItem.id}>
								{cartItem.product_type.name} X {cartItem.count}
								<span>₹{cartItem.count * (cartItem.product_type.discountedPrice ?? 0)}</span>
							</li>

							{activeCoupon && (
								<li key={"activeCoupon"}>
									Coupon Applied
									<span>-{activeCoupon.value}%</span>
								</li>
							)}
						</>
					))}
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
