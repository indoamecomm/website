import Head from "next/head";
import React, {useState} from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import toast, {Toaster} from "react-hot-toast";
import {InsertContactUs} from "../../../queries/userQuery";
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
				<title>Customer Support</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
				<link rel="icon" href="/images/favicon.ico" />
				<link href="/revolution/css/settings.css" rel="stylesheet" />
				<link href="/revolution/css/navigation.css" rel="stylesheet" />
				<link href="/revolution/custom-setting.css" rel="stylesheet" />
				<script src="/js/vendor/modernizr-2.8.3.min.js"></script>
				<script src="/js/vendor/jquery.min.js"></script>
				<script src="/js/popper.min.js"></script>
				<script src="/js/bootstrap.min.js"></script>

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
			</Head>
			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<div>
					<BreadCrumb
						backgroundImage={"/images/breadcrumb-bg/01.jpg"}
						title={"Customer Support"}
						finalName={"CUSTOMER SUPPORT"}
						links={[{link: "/", name: "HOME"}]}
					/>
					<Support />
					<Toaster position={"bottom-center"} />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default index;

const Support: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [subject, setSubject] = useState<string>("");
	const [summary, setSummary] = useState<string>("");

	const [loading, setLoading] = useState<boolean>(false);
	const apolloClient = initializeApollo();

	const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
		try {
			setLoading(true);
			event.preventDefault();
			const {
				data: {insert_contact_us},
			} = await apolloClient.mutate({
				mutation: InsertContactUs,
				variables: {
					email,
					firstName: name,
					subject,
					message: summary,
				},
			});
			if (insert_contact_us.affected_rows > 0) {
				toast.success("Query submitted successfully");
			} else {
				toast.error("Some error occurred");
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<>
			<div className="section-title-container mb-50">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							{/*=======  section title  =======*/}
							<div className="section-title section-title--one text-center">
								<p className="subtitle subtitle--deep">COME SAY HELLO</p>
								<h1>Our Locations</h1>
							</div>
							{/*=======  End of section title  =======*/}
						</div>
					</div>
				</div>
			</div>
			{/*=====  End of section title container ======*/}
			{/*==============================================            group map area         ==============================================*/}
			<div className="group-map-area mb-100 mb-md-70 mb-sm-70">
				<div className="group-map-container">
					{/*=======  single map  =======*/}
					<div className="single-map mb-md-30 mb-sm-30">
						<div className="google-map google-map--style-3" id="google-map-three" />
					</div>
					{/*=======  End of single map  =======*/}
					{/*=======  single map  =======*/}
					<div className="single-map mb-md-30 mb-sm-30">
						<div className="google-map google-map--style-3" id="google-map-four" />
					</div>
					{/*=======  End of single map  =======*/}
					{/*=======  single map  =======*/}
					<div className="single-map mb-md-30 mb-sm-30">
						<div className="google-map google-map--style-3" id="google-map-five" />
					</div>
					{/*=======  End of single map  =======*/}
				</div>
			</div>
			{/*=====  End of group map area  ======*/}
			{/*==============================================            icon box area         =============================================*/}
			<div className="icon-box-area mb-100 mb-md-30 mb-sm-30">
				<div className="container">
					<div className="row">
						<div className="col-md-4 mb-md-70 mb-sm-70">
							{/*=======  single icon box  =======*/}
							<div className="single-icon-box">
								<div className="icon-box-icon">
									<i className="ion-location" />
								</div>
								<div className="icon-box-content">
									<h3 className="title">ADDRESS</h3>
									<p className="content">view location above</p>
								</div>
							</div>
							{/*=======  End of single icon box  =======*/}
						</div>
						<div className="col-md-4 mb-md-70 mb-sm-70">
							{/*=======  single icon box  =======*/}
							<div className="single-icon-box mb-10">
								<div className="icon-box-icon">
									<i className="ion-ios-telephone" />
								</div>
								<div className="icon-box-content">
									<h3 className="title">CONTACT</h3>
									<p className="content">
										Mobile: 080 2861 1499 <span>Product Related: 1800 – 1102</span>
									</p>
								</div>
							</div>
							<div className="single-icon-box">
								<div className="icon-box-icon">
									<i className="ion-ios-email" />
								</div>
								<div className="icon-box-content">
									<p className="content"> Mail: iahs@indamseeds.com </p>
								</div>
							</div>
							{/*=======  End of single icon box  =======*/}
						</div>
						<div className="col-md-4 mb-md-70 mb-sm-70">
							{/*=======  single icon box  =======*/}
							<div className="single-icon-box">
								<div className="icon-box-icon">
									<i className="ion-ios-clock-outline" />
								</div>
								<div className="icon-box-content">
									<h3 className="title">HOUR OF OPERATION</h3>
									<p className="content">
										Monday – Friday : 09:00 – 20:00<span>Sunday &amp; Saturday: 10:30 – 22:00</span>
									</p>
								</div>
							</div>
							{/*=======  End of single icon box  =======*/}
						</div>
					</div>
				</div>
			</div>
			{/*=====  End of icon box area  ======*/}
			{/*=============================================            section title  container      ==============================================*/}
			<div className="section-title-container mb-50">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							{/*=======  section title  =======*/}
							<div className="section-title section-title--one text-center">
								<h1>Write to Us</h1>
							</div>
							{/*=======  End of section title  =======*/}
						</div>
					</div>
				</div>
			</div>
			{/*=====  End of section title container ======*/}
			{/*==============================================            contact form area         =============================================*/}
			<div className="contact-form-area mb-60">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2">
							<div className="lezada-form contact-form">
								<form onSubmit={submitForm}>
									<div className="row">
										<div className="col-md-6 mb-40">
											<input
												type="text"
												placeholder="First Name *"
												name="customerName"
												id="customername"
												value={name}
												onChange={(event) => {
													setName(event.target.value);
												}}
												required
											/>
										</div>
										<div className="col-md-6 mb-40">
											<input
												type="email"
												placeholder="Email *"
												name="customerEmail"
												id="customerEmail"
												value={email}
												onChange={(event) => {
													setEmail(event.target.value);
												}}
												required
											/>
										</div>
										<div className="col-lg-12 mb-40">
											<input
												type="text"
												placeholder="Subject"
												name="contactSubject"
												value={subject}
												onChange={(event) => {
													setSubject(event.target.value);
												}}
												id="contactSubject"
											/>
										</div>
										<div className="col-lg-12 mb-40">
											<textarea
												cols={30}
												rows={10}
												placeholder="Message"
												name="contactMessage"
												id="contactMessage"
												defaultValue={""}
												value={summary}
												onChange={(event) => {
													setSummary(event.target.value);
												}}
											/>
										</div>
										<div className="col-lg-12 text-center">
											{!loading ? (
												<button
													type="submit"
													value="submit"
													id="submit"
													className="lezada-button lezada-button--medium">
													submit
												</button>
											) : (
												<Spinner width="40px" height="40px" />
											)}
										</div>
									</div>
								</form>
							</div>
							<p className="form-messege pt-10 pb-10 mt-10 mb-10" />
						</div>
					</div>
				</div>
			</div>
			{/*=====  End of contact form area  ======*/}
		</>
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
