import Head from "next/head";
import React, {useContext, useEffect, useRef, useState} from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Order, Orders, Order_Product_Types, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import {CancelOrder, GetOrderByUserId, GetOrders, InsertUserCart} from "../../../queries/userQuery";
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
import {useScript} from "../../hooks/useScript";

interface HeaderProps {
	categories: Category[];
	storeLocations: Store_Locations[];
}

const index: React.FC<HeaderProps> = (props: HeaderProps) => {
	const {categories, storeLocations} = props;

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
				<title>Orders | Indoamerica</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<div ref={ref}></div>

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
	const [loading, setLoading] = useState<boolean>(false);

	const [cancelOrderModal, setCancelOrderModal] = useState<boolean>(false);

	const [reOrderLoading, setReOrderLoading] = useState<boolean>(false);

	const getUserOrder = async () => {
		try {
			setLoading(true);
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
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	//@ts-ignore
	const couponValue = order && order.coupon && order.coupon.value;

	useEffect(() => {
		getUserOrder();
		console.log(user);
	}, [user, refetch]);

	const reOrder = async () => {
		// console.log(order?.order_product_types);
		// order?.order_product_types.forEach((product) => {
		// 	console.log(product);
		// })

		setReOrderLoading(true);
		const cartItems = order?.order_product_types.map((product) => {
			return {
				count: product.count,
				productTypeId: product.product_type.id,
				userId: user.id,
			};
		});
		const {
			data: {insert_cart},
		} = await apolloClient.mutate({
			mutation: InsertUserCart,
			variables: {
				insertCart: cartItems,
			},
		});

		if (insert_cart && insert_cart.affected_rows > 0) {
			toast.success("Redirecting you to cart");
			router.push("/cart");
		} else {
			toast.error("Some error occurred while reordering items");
		}

		setReOrderLoading(false);
	};

	return (
		<div className="shopping-cart-area mb-130">
			<Toaster position={"bottom-center"} />

			<div className="container">
				<CancelModal
					open={cancelOrderModal}
					setOpen={setCancelOrderModal}
					orderId={orderId ? parseInt(orderId.toString()) : 0}
					refetch={getUserOrder}
				/>

				{!loading ? (
					<div className="row">
						<div className="col-lg-12 mb-30">
							{/*=======  cart table  =======*/}
							{order ? (
								<div className="cart-table-container">
									<table className="cart-table">
										<thead>
											<tr>
												<th className="product-name" colSpan={2}>
													Your Order ID: {orderId}
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
													<CartProduct
														orderProduct={orderProduct}
														key={orderProduct.id}
														setRefetch={setRefetch}
													/>
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

								{user && user.firebaseUUID && (
									<div className="w-75 d-flex justify-content-between p-5 mx-auto mb-4">
										{(order.order_status.id === 1 || order.order_status.id === 6) && (
											<button
												className="lezada-button-danger lezada-button--xl"
												style={{margin: 0}}
												onClick={() => {
													setCancelOrderModal(true);
												}}>
												CANCEL
											</button>
										)}
										{!reOrderLoading ? (
											<button className="lezada-button lezada-button--xl" style={{margin: 0}} onClick={reOrder}>
												REORDER
											</button>
										) : (
											<Spinner width="40px" height="40px" />
										)}
									</div>
								)}

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
				) : (
					<div className="d-flex justify-content-center mt-40">
						<Spinner width="40px" height="40px" />
					</div>
				)}
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
					{orderProduct.product_type.user_ratings.length > 0
						? `Edit Rating(${orderProduct.product_type.user_ratings[0].rating})`
						: "Rate"}
				</button>
			</td>
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

interface CancelModalProps {
	open: boolean;
	setOpen: (value: boolean) => void;
	orderId: number;
	refetch: () => void;
}

const CancelModal: React.FC<CancelModalProps> = (props) => {
	const {orderId, open, setOpen, refetch} = props;
	const client = initializeApollo();
	const [loading, setLoading] = useState<boolean>(false);

	const cancelOrder = async () => {
		setLoading(true);
		const {
			data: {update_orders},
		} = await client.mutate({
			mutation: CancelOrder,
			variables: {
				orderId,
			},
		});

		if (update_orders && update_orders.affected_rows > 0) {
			refetch();
			toast.success("Order cancelled successfully");
		} else {
			toast.error("Some error occurred while cancelling your order");
		}

		setLoading(false);

		setOpen(false);
	};

	return (
		<Modal overlayClassName="overlay" className="modal__main modal-logout" isOpen={open}>
			<div className="close">
				<h2 className="modal__title">Cancel Order ?</h2>
				<img
					src="/images/website/cross.svg"
					alt="Close"
					className="close-img"
					onClick={() => {
						setOpen(false);
					}}
				/>
			</div>
			<div className="modal__content">
				<h1 className="modal__header">Are you sure cancel this order?</h1>
				<div className="row text-center">
					{!loading ? (
						<button
							className="lezada-button lezada-button--medium mt-20 mx-auto"
							type="button"
							onClick={() => {
								//@ts-ignore
								cancelOrder();
							}}>
							Yes
						</button>
					) : (
						<div className="d-flex justify-content-center mt-40 mx-auto">
							<Spinner width="40px" height="40px" />
						</div>
					)}
				</div>
			</div>
		</Modal>
	);
};
