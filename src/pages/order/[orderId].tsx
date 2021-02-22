import Head from "next/head";
import React, {useContext, useEffect, useState} from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Order, Orders, Order_Product_Types, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import {GetOrderByUserId, GetOrders} from "../../../queries/userQuery";
import {useAuth} from "../../hooks/useAuth";

import {getDiscountedPrice} from "../../Components/Product/ProductTypes";
import {useRouter} from "next/router";
import Link from "next/link";
import OrderUserContext from "../../Context/orderUserContext";
import Modal from "react-modal";
import {InsertUserRatings, UpdateUserRatings} from "../../../queries/productQuery";
import {useMutation} from "@apollo/client";
import toast, {Toaster} from "react-hot-toast";
import Spinner from "../../Components/Utils/Spinner";

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
				<title>Orders</title>
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
			</Head>
			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<div>
					<BreadCrumb
						backgroundImage={"/images/breadcrumb-bg/01.jpg"}
						title={"Order"}
						finalName={"ORDER"}
						links={[{link: "/", name: "HOME"}]}
					/>
					<CartMain />
				</div>
			</main>
			<Footer />
		</>
	);
};
export default index;

const CartMain: React.FC = () => {
	const {user} = useAuth();
	const [order, setOrder] = useState<Orders>();

	const apolloClient = initializeApollo();
	const router = useRouter();
	const {orderId} = router.query;
	const {orderUserId} = useContext(OrderUserContext);
	const [refetch, setRefetch] = useState<number>(1);

	const getUserCartItem = async () => {
		if (orderUserId) {
			const {
				data: {orders},
			} = await apolloClient.query({
				query: GetOrderByUserId,
				variables: {
					userId: orderUserId,
					orderId,
					expiry: new Date().toISOString(),
				},
				fetchPolicy: "network-only",
			});
			setOrder(orders[0]);
		} else if (user) {
			const {
				data: {orders},
			} = await apolloClient.query({
				query: GetOrderByUserId,
				variables: {
					userId: user.id,
					orderId,
					expiry: new Date().toISOString(),
				},
				fetchPolicy: "network-only",
			});
			setOrder(orders[0]);
		}
	};

	//@ts-ignore
	const couponValue = order && order.coupon && order.coupon.value;

	useEffect(() => {
		console.log("refetchCalled");
		getUserCartItem();
	}, [user, refetch]);

	return (
		<div className="shopping-cart-area mb-130">
			<Toaster position={"bottom-center"} />

			<div className="container">
				<div className="row">
					<div className="col-lg-12 mb-30">
						{/*=======  cart table  =======*/}
						{order ? (
							<div className="cart-table-container">
								<table className="cart-table">
									<thead>
										<tr>
											<th className="product-name" colSpan={2}>
												Product
											</th>
											<th className="product-price">Price</th>
											<th className="product-quantity">Quantity</th>
											<th className="product-subtotal">Total</th>
											<th className="product-remove">Rate</th>
										</tr>
									</thead>
									<tbody>
										{order &&
											order.order_product_types &&
											order.order_product_types.map((orderProduct) => (
												<CartProduct orderProduct={orderProduct} key={orderProduct.id} setRefetch={setRefetch} />
											))}
									</tbody>
								</table>
							</div>
						) : (
							<p className="d-flex justify-content-center">Order not found</p>
						)}
						{/*=======  End of cart table  =======*/}
					</div>
					{order && (
						<>
							<div className="col-lg-12 mb-80">
								{/*=======  coupon area  =======*/}
								<div className="cart-coupon-area pb-30">
									<div className="row align-items-center">
										{/* <div className="col-lg-6 mb-md-30 mb-sm-30">
											<table className="cart-calculation-table mb-30">
												<tbody>
													<tr>
														<td className="subtotal">Coupon</td>
														<td className="subtotal">25</td>
													</tr>
													<tr>
														<td className="subtotal">Coupon</td>
														<td className="subtotal">25</td>
													</tr>
												</tbody>
											</table>
										</div> */}

										{
											//@ts-ignore
											order.coupon && (
												<div className="col-lg-6 text-left text-lg-right">
													{/*=======  update cart button  =======*/}
													<table className="cart-calculation-table mb-30">
														<tbody>
															<tr>
																<th>Coupon</th>
																{/* {@ts-ignore} */}
																<td className="total">-{couponValue}%</td>
															</tr>
														</tbody>
													</table>
													{/*=======  End of update cart button  =======*/}
												</div>
											)
										}
										<div className="col-lg-6 text-left text-lg-right">
											{/*=======  update cart button  =======*/}
											<table className="cart-calculation-table mb-30">
												<tbody>
													<tr>
														<th>TOTAL</th>
														<td className="total">₹{order.totalAmount}</td>
													</tr>
												</tbody>
											</table>
											{/*=======  End of update cart button  =======*/}
										</div>
									</div>
								</div>
								{/*=======  End of coupon area  =======*/}
							</div>
							<div className="col-lg-12 mb-80">
								<table className="cart-table">
									<thead>
										<tr>
											<th className="product-name" colSpan={2}>
												Address
											</th>
											<th className="product-name" colSpan={2}>
												Order Status
											</th>
										</tr>
									</thead>
									<tbody className="">
										<tr>
											<td colSpan={2}>
												<div className="col-12">
													<p>{order.address?.lineOne}</p>
												</div>
												<div className="col-12">
													<p>{order.address?.lineTwo}</p>
												</div>
												<div className="col-md-12 col-12">
													<p>{order.address?.town}</p>
												</div>
												<div className="col-md-12 col-12">
													<p>{order.address?.state}</p>
												</div>
												<div className="col-md-12 col-12">
													<p>{order.address?.zipcode}</p>
												</div>
											</td>
											<td colSpan={2} style={{verticalAlign: "top"}}>
												<h3>{order.order_status.name}</h3>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

const CartProduct: React.FC<{orderProduct: Order_Product_Types; setRefetch: (number) => void}> = (props) => {
	const {orderProduct, setRefetch} = props;
	const [ratingsModal, setRatingsModal] = useState<boolean>(false);

	const [ratingsData, setRatingsData] = useState(orderProduct.product_type);

	useEffect(() => {
		setRatingsData(orderProduct.product_type);
	}, [orderProduct]);

	return (
		<tr>
			<RatingsModal
				open={ratingsModal}
				setOpen={setRatingsModal}
				data={ratingsData}
				setData={setRatingsData}
				setRefetch={setRefetch}
			/>

			<td className="product-thumbnail">
				<Link href={`/product/${orderProduct.product_type.product.id}`}>
					<a>
						<img
							src={orderProduct.product_type.imageUrl ?? ""}
							className="img-fluid"
							alt={orderProduct.product_type.product.name}
						/>
					</a>
				</Link>
			</td>
			<td className="product-name">
				<Link href={`/product/${orderProduct.product_type.product.id}`}>
					<a>{orderProduct.product_type.name}</a>
				</Link>
				<span className="product-variation">{orderProduct.product_type.product.name}</span>
			</td>
			<td className="product-price">
				<span className="price">₹{getDiscountedPrice(orderProduct.product_type)}</span>
			</td>
			<td className="product-quantity">
				<span className="price">{orderProduct.count}</span>
			</td>
			<td className="total-price">
				<span className="price">₹{orderProduct.count * (getDiscountedPrice(orderProduct.product_type) ?? 0)}</span>
			</td>
			<td className="total-price">
				<button className="lezada-button lezada-button--medium" style={{margin: 0}} onClick={() => setRatingsModal(true)}>
					Rate
				</button>
			</td>
		</tr>
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

export const getStaticPaths = async () => {
	const apolloClient = initializeApollo();

	// Get the paths we want to pre-render based on posts
	const {
		data: {orders},
	} = await apolloClient.query({
		query: GetOrders,
	});
	const paths =
		orders &&
		orders.length > 0 &&
		orders.map((order: Order) => ({
			params: {orderId: order.id.toString()},
		}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return {paths, fallback: true};
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

const RatingsModal: React.FC<ModalProps> = (props) => {
	const {open, setOpen, setData, data, setRefetch} = props;
	const [rating, setRating] = useState<number>(0);
	const [insertUserRatings] = useMutation(InsertUserRatings);
	const [updateUserRatings] = useMutation(UpdateUserRatings);

	const {user} = useAuth();
	const [loading, setLoading] = useState<boolean>(false);
	const [existingRating, setExistingRating] = useState<any>(null);
	const {orderUserId} = useContext(OrderUserContext);

	useEffect(() => {
		if (data && data.user_ratings.length > 0) {
			setExistingRating(data.user_ratings[0]);
			setRating(data.user_ratings[0].rating);
		}
	}, [data]);

	const submitRatings = () => {
		if (existingRating) {
			updateRating();
		} else {
			insertRatings();
		}
	};
	const insertRatings = async () => {
		try {
			setLoading(true);
			const {
				data: {insert_user_ratings},
			} = await insertUserRatings({
				variables: {
					userId: user ? user.id : orderUserId,
					productTypeId: data.id,
					rating,
				},
			});

			if (insert_user_ratings.affected_rows > 0) {
				toast.success("Ratings submitted successfully");
				setOpen(false);
			} else {
				toast.error("Some unknown error occurred");
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setRefetch && setRefetch((refetch) => refetch + 1);
			setLoading(false);
		}
	};

	const updateRating = async () => {
		try {
			setLoading(true);
			const {
				data: {update_user_ratings},
			} = await updateUserRatings({
				variables: {
					ratingId: existingRating.id,
					rating,
				},
			});

			if (update_user_ratings.affected_rows > 0) {
				toast.success("Ratings updated successfully");

				setData(null);
				setOpen(false);
			} else {
				toast.error("Some unknown error occurred");
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setRefetch && setRefetch((refetch) => refetch + 1);
			setLoading(false);
		}
	};

	return (
		<Modal overlayClassName="overlay" className="modal__main modal-rating" isOpen={open}>
			<div className="close">
				<h2 className="modal__title">Ratings</h2>
				<img
					src="/images/website/cross.svg"
					alt="Close"
					className="close-img-1"
					onClick={() => {
						setOpen(false);
					}}
				/>
			</div>
			<div className="modal__content">
				<div className="rating text-center" style={{marginBottom: "2em"}}>
					{[1, 2, 3, 4, 5].map((element) => (
						<span key={element}>
							{rating < element ? (
								<img
									key={element}
									src="/images/website/star-outline.png"
									alt="Close"
									className="close-img"
									onClick={() => {
										setRating(element);
									}}
								/>
							) : (
								<img
									key={element}
									src="/images/website/star.png"
									alt="Close"
									className="close-img"
									onClick={() => {
										setRating(element);
									}}
								/>
							)}
						</span>
					))}
				</div>
				<div className="row text-center">
					{!loading ? (
						<button
							className="lezada-button lezada-button--medium mt-20 mx-auto"
							type="button"
							disabled={!rating}
							onClick={submitRatings}>
							Rate
						</button>
					) : (
						<div className=" mt-20 mx-auto">
							<Spinner width="40px" height="40px" />
						</div>
					)}
				</div>
			</div>
		</Modal>
	);
};
