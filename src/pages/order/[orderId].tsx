import Head from "next/head";
import React, {useEffect, useState} from "react";
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

	const getUserCartItem = async () => {
		if (user) {
			const {
				data: {orders},
			} = await apolloClient.query({
				query: GetOrderByUserId,
				variables: {
					userId: user.id,
					orderId,
					expiry: new Date().toISOString(),
				},
			});
			setOrder(orders[0]);
		}
	};

	useEffect(() => {
		getUserCartItem();
	}, [user]);

	return (
		<div className="shopping-cart-area mb-130">
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
											<th className="product-remove">&nbsp;</th>
										</tr>
									</thead>
									<tbody>
										{order.order_product_types.map((orderProduct) => (
											<CartProduct orderProduct={orderProduct} key={orderProduct.id} />
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
										<div className="col-lg-6 mb-md-30 mb-sm-30">
											<table className="cart-calculation-table mb-30">
												<tbody>
													<tr></tr>
													<tr>
														<th></th>
														<td className="subtotal"></td>
													</tr>
												</tbody>
											</table>
										</div>
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

const CartProduct: React.FC<{orderProduct: Order_Product_Types}> = (props) => {
	const {orderProduct} = props;

	return (
		<tr>
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

	const paths = orders.map((order: Order) => ({
		params: {orderId: order.id.toString()},
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return {paths, fallback: true};
};
