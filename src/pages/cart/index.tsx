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
					<BreadCrumb backgroundImage={"/images/breadcrumb-bg/01.jpg"} title={"Shopping Cart"} finalName={"SHOPPING CART"} links={[{link: "/", name: "HOME"}]} />
					<Cart />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default index;

const Cart: React.FC = () => {
	return (
		<div className="shopping-cart-area mb-130">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 mb-30">
						{/*=======  cart table  =======*/}
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
									<CartProduct />
									<CartProduct />
									<CartProduct />
								</tbody>
							</table>
						</div>
						{/*=======  End of cart table  =======*/}
					</div>
					<div className="col-lg-12 mb-80">
						{/*=======  coupon area  =======*/}
						<div className="cart-coupon-area pb-30">
							<div className="row align-items-center">
								<div className="col-lg-6 mb-md-30 mb-sm-30">
									<table className="cart-calculation-table mb-30">
										<tbody>
											<tr>
												<th>**</th>
											</tr>
											<tr>
												<th>Shipping Costs</th>
												<td className="subtotal">+ ₹100.00</td>
											</tr>
										</tbody>
									</table>
									{/*=======  coupon form  =======*/}
									<div className="lezada-form coupon-form">
										<form action="#">
											<div className="row">
												<div className="col-md-7 mb-sm-10">
													<input type="text" placeholder="Enter your coupon code" />
												</div>
												<div className="col-md-5">
													<button className="lezada-button lezada-button--medium">apply coupon</button>
												</div>
											</div>
										</form>
									</div>
									{/*=======  End of coupon form  =======*/}
								</div>
								<div className="col-lg-6 text-left text-lg-right">
									{/*=======  update cart button  =======*/}
									<table className="cart-calculation-table mb-30">
										<tbody>
											<tr>
												<th>SUBTOTAL</th>
												<td className="subtotal">₹1400.00</td>
											</tr>
											<tr>
												<th>TOTAL</th>
												<td className="total">₹1500.00</td>
											</tr>
										</tbody>
									</table>
									<button className="lezada-button lezada-button--medium">update cart</button>
									<a href="shop-checkout.html">
										<button className="lezada-button lezada-button--medium">proceed to checkout</button>
									</a>
									{/*=======  End of update cart button  =======*/}
								</div>
							</div>
						</div>
						{/*=======  End of coupon area  =======*/}
					</div>
					<div className="col-xl-4 offset-xl-8 col-lg-5 offset-lg-7">
						<div className="cart-calculation-area">
							<h2 className="mb-40">Cart totals</h2>
							<table className="cart-calculation-table mb-30">
								<tbody>
									<tr>
										<th>SUBTOTAL</th>
										<td className="subtotal">₹100.00</td>
									</tr>
									<tr>
										<th>TOTAL</th>
										<td className="total">₹100.00</td>
									</tr>
								</tbody>
							</table>
							<div className="cart-calculation-button text-center">
								<a href="shop-checkout.html">
									<button className="lezada-button lezada-button--medium">proceed to checkout</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const CartProduct = () => {
	return (
		<tr>
			<td className="product-thumbnail">
				<a href="shop-product-basic.html">
					<img src="/images/products/bag-1-1-600x800.jpg" className="img-fluid" alt="" />
				</a>
			</td>
			<td className="product-name">
				<a href="shop-product-basic.html">INDAM REDSTAR</a>
				<span className="product-variation">Beetroot</span>
			</td>
			<td className="product-price">
				<span className="price">₹100.00</span>
			</td>
			<td className="product-quantity">
				<div className="pro-qty d-inline-block mx-0">
					<input type="text" defaultValue={1} />
				</div>
			</td>
			<td className="total-price">
				<span className="price">₹100.00</span>
			</td>
			<td className="product-remove">
				<a href="#">
					<i className="ion-android-close" />
				</a>
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
