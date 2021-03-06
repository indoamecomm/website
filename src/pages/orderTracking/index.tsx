import Head from "next/head";
import React, {useContext, useRef} from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import {useState} from "react";
import {VerifyIfOrderBelongsToUser} from "../../../queries/userQuery";
import toast, {Toaster} from "react-hot-toast";
import Spinner from "../../Components/Utils/Spinner";
import OrderUserContext from "../../Context/orderUserContext";
import {useRouter} from "next/router";
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
				<title>Order Tracking | Indoamerica</title>
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
						title={"Order Tracking"}
						finalName={"ORDER TRACKING"}
						links={[{link: "/", name: "HOME"}]}
					/>
					<OrderTracking />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default index;

const OrderTracking = () => {
	const apolloClient = initializeApollo();
	const [email, setEmail] = useState<string>("");
	const [orderId, setOrderId] = useState<number | undefined>(0);
	const [loading, setLoading] = useState<boolean>(false);
	const {setOrderUserId} = useContext(OrderUserContext);
	const router = useRouter();
	const verifyIfOrderBelongsToUser = async () => {
		try {
			setLoading(true);
			const {
				data: {orders_aggregate: orders},
			} = await apolloClient.query({
				query: VerifyIfOrderBelongsToUser,
				variables: {
					orderId,
					email,
				},
				fetchPolicy: "network-only",
			});
			
			console.log(orders);

			if (orders.aggregate.count === 0) {
				toast.error("Order Not found");
				setLoading(false);
			} else {
				toast.success("Order found, redirecting...");
				setOrderUserId(orders.nodes[0].user.id);
				router.push(`/order/${orderId}`);
			}
		} catch (error) {
			toast.error(error.message);
			setLoading(false);
		} finally {
		}
	};

	return (
		<div className="order-tracking-area mb-130">
			<div className="container">
				<Toaster position={"bottom-center"} />
				<div className="row">
					<div className="col-lg-6 col-md-10 col-12 offset-lg-3 offset-md-1">
						{/*=======  order tracking box  =======*/}
						<div className="order-tracking-box pt-50 pr-50 pb-50 pl-50  pt-xxs-40 pr-xxs-20 pb-xxs-40 pl-xxs-20">
							<p className="info-text mb-20">
								To track your order please enter your Order ID in the box below and press the "Track" button. This was given
								to you on your receipt and in the confirmation email you should have received.
							</p>
							{/*=======  order-tracking form  =======*/}
							<div className="lezada-form order-tracking-form">
								<form action="#">
									<div className="row">
										<div className="col-lg-12 mb-20">
											<label htmlFor="orderId">Order ID</label>
											<input
												type="number"
												id="orderId"
												placeholder="Found in your order confirmation email"
												value={orderId ?? ""}
												onChange={(event) => {
													setOrderId(parseInt(event.target.value));
												}}
											/>
										</div>
										<div className="col-lg-12">
											<label htmlFor="orderEmail">Billing email</label>
											<input
												type="email"
												id="orderEmail"
												placeholder="Email you used during checkout"
												value={email}
												onChange={(event) => {
													setEmail(event.target.value);
												}}
											/>
										</div>
										<div className="col-lg-12 text-center mt-40">
											{!loading ? (
												<button
													disabled={!email || !orderId}
													className="lezada-button lezada-button--medium order-tracking-button"
													onClick={verifyIfOrderBelongsToUser}>
													track
												</button>
											) : (
												<Spinner width="40px" height="40px" />
											)}
										</div>
									</div>
								</form>
							</div>
							{/*=======  End of order-tracking form  =======*/}
						</div>
						{/*=======  End of order tracking box  =======*/}
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
		revalidate: 1,
	};
}
