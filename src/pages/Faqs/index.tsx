import Head from "next/head";
import React from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {Category, Store_Locations} from "../../generated/graphql";
import Link from "next/link";

interface HeaderProps {
	categories: Category[];
	storeLocations: Store_Locations[];
}

const About: React.FC<HeaderProps> = (props: HeaderProps) => {
	const {categories, storeLocations} = props;

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>About Us </title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<div className="faq-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="faq-wrapper">
									{/*=======  single faq  =======*/}
									<div className="single-faq mb-80">
										<h2 className="faq-title mb-20">Shipping information</h2>
										<div className="accordion" id="shippingInfo">
											<div className="card">
												<div className="card-header" id="headingOne">
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
															What Shipping Methods are Available?
														</button>
													</h5>
												</div>
												<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#shippingInfo">
													<div className="card-body">
														<p>
															Depending on the item(s) you purchase on garageclothing.com and the location to which the item(s) will be delivered, different shipping
															methods will be available. At checkout, you will be prompted to choose a variety of shipping methods.
														</p>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header" id="headingTwo">
													<h5 className="mb-0">
														<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
															Do You Ship Internationally?
														</button>
													</h5>
												</div>
												<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#shippingInfo">
													<div className="card-body">
														<p>
															At the moment, we only ship to Canada and the United States. For international orders, please contact internationalorders@dynamite.ca. If
															you have any questions, please don’t hesitate to contact our Customer Experience Department by mail or by phone at 1-888-882-1138 (Canada)
															and 1-888-342-7243 (USA).
														</p>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header" id="headingThree">
													<h5 className="mb-0">
														<button
															className="btn btn-link collapsed"
															data-toggle="collapse"
															data-target="#collapseThree"
															aria-expanded="false"
															aria-controls="collapseThree">
															How to Track My Order?
														</button>
													</h5>
												</div>
												<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#shippingInfo">
													<div className="card-body">
														<p>
															Once your order has been shipped, you will receive an email with your tracking and shipping information. Simply click on the link in the
															email or select the ‘track order’ option here and enter your order number and email address or sign into your account.
														</p>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header" id="headingFour">
													<h5 className="mb-0">
														<button
															className="btn btn-link collapsed"
															data-toggle="collapse"
															data-target="#collapseFour"
															aria-expanded="false"
															aria-controls="collapseFour">
															How Long Will It Take To Get My Package?
														</button>
													</h5>
												</div>
												<div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#shippingInfo">
													<div className="card-body">
														<p>
															We ship only on business days. Business days are from Monday to Friday, excluding holidays. Any order placed after 12 P.M. ET will be
															processed the following business day. Due to a high volume period, your order may take longer than anticipated. For remote locations, please
															add an additional 2-5 business day to each shipping method’s expected delivery time. If you are not sure whether your location is remote,
															please click here for all the details.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/*=======  End of single faq  =======*/}
									{/*=======  single faq  =======*/}
									<div className="single-faq mb-80">
										<h2 className="faq-title mb-20">Payment information</h2>
										<div className="accordion" id="paymentInfo">
											<div className="card">
												<div className="card-header" id="headingFive">
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
															What Payment Methods Are Accepted?
														</button>
													</h5>
												</div>
												<div id="collapseFive" className="collapse show" aria-labelledby="headingFive" data-parent="#paymentInfo">
													<div className="card-body">
														<p>
															We gladly accept Visa, MasterCard and American Express. If your card has been issued outside the U.S. or Canada, please note that your order
															may need additional verification before it can be processed. Unfortunately, we cannot accept COD orders and all orders must be paid in full
															once submitted online.
														</p>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header" id="headingSix">
													<h5 className="mb-0">
														<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
															What Happens If There Is A Pricing Error?
														</button>
													</h5>
												</div>
												<div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#paymentInfo">
													<div className="card-body">
														<p>
															We do our best to provide accuracy in the pricing and other product information displayed on our website, but mistakes sometimes happen. In
															such cases, Furniture.ca expressly reserves the right not to honor pricing errors found on this website when accepting an online order. If
															an error occurs, we’ll let you know and cancel the order. Any authorized payments for that order will be immediately refunded. If you find
															an error once your order is delivered, please contact our Customer Care team or refer to our return policy.
														</p>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header" id="headingSeven">
													<h5 className="mb-0">
														<button
															className="btn btn-link collapsed"
															data-toggle="collapse"
															data-target="#collapseSeven"
															aria-expanded="false"
															aria-controls="collapseSeven">
															What Do You Do With My Information?
														</button>
													</h5>
												</div>
												<div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#paymentInfo">
													<div className="card-body">
														<p>
															We use your info to fulfil your order accurately and quickly and to improve your shopping experience. We respect your privacy and never
															share this information with anyone, except in connection with your order. If you want to know more, take a look at our Private Policy.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/*=======  End of single faq  =======*/}
									{/*=======  single faq  =======*/}
									<div className="single-faq mb-80">
										<h2 className="faq-title mb-20">Orders and returns</h2>
										<div className="accordion" id="orderInfo">
											<div className="card">
												<div className="card-header" id="headingNine">
													<h5 className="mb-0">
														<button className="btn btn-link" data-toggle="collapse" data-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
															How do I place an Order?
														</button>
													</h5>
												</div>
												<div id="collapseNine" className="collapse show" aria-labelledby="headingNine" data-parent="#orderInfo">
													<div className="card-body">
														<p>
															Click on a Product Photo or Product Name to see more detailed information. To place your order, choose the specification you want and enter
															the quantity, and click ‘Buy Now’.Please enter the required information such as Delivery Address, Quantity Type etc. Before clicking “Place
															Order”, please check your Order Details carefully. If you want to add a new Delivery Address, click ” Add a new address”. If you want to
															edit a current Delivery Address, click ‘Edit this address’. After confirming your Order, you will be automatically taken to the Payment page
														</p>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header" id="headingTen">
													<h5 className="mb-0">
														<button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
															How Can I Cancel Or Change My Order?
														</button>
													</h5>
												</div>
												<div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#orderInfo">
													<div className="card-body">
														<p>
															Go to Your Orders. Click Cancel Items. Note: Select the checkbox next to each item you wish to remove from the order. If you want to cancel
															the entire order, select all of the items. Click Cancel checked items when finished.
														</p>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header" id="headingEleven">
													<h5 className="mb-0">
														<button
															className="btn btn-link collapsed"
															data-toggle="collapse"
															data-target="#collapseEleven"
															aria-expanded="false"
															aria-controls="collapseEleven">
															Who Should I Contact If I Have Any Queries?
														</button>
													</h5>
												</div>
												<div id="collapseEleven" className="collapse" aria-labelledby="headingEleven" data-parent="#orderInfo">
													<div className="card-body">
														<p>
															You can contact our customer support team by provided email or mobile phone. In case, it’s not convenient to talk, you can come to our store
															to make your request.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/*=======  End of single faq  =======*/}
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*=====  End of  page content  ======*/}
				{/*=============================================
	=            call to action area         =
	=============================================*/}
				<div className="cta-area pt-50 pb-50">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="cta-content">
									<div className="cta-title">
										<h2>Any unanswered questions?</h2>
									</div>
									<div className="cta-button">
										<a href="support.html">
											<button className="lezada-button lezada-button--medium lezada-cta-button">contact us</button>
										</a>
									</div>
									<a href="support.html"></a>
								</div>
								<a href="support.html"></a>
							</div>
							<a href="support.html"></a>
						</div>
						<a href="support.html"></a>
					</div>
					<a href="support.html"></a>
				</div>
				<a href="support.html"></a>
			</main>
			<Footer />
		</>
	);
};

export default About;

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
