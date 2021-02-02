import Head from "next/head";
import React from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {Category, Faq_Titles, Store_Locations} from "../../generated/graphql";
import Link from "next/link";
import {GetFaqTitles} from "../../../queries/faqQuery";

interface FaqsProps {
	categories: Category[];
	storeLocations: Store_Locations[];
	faqTitles: Faq_Titles[];
}

const index: React.FC<FaqsProps> = (props: FaqsProps) => {
	const {categories, storeLocations, faqTitles: faqs} = props;
	console.log(faqs, "Here in app");

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>Frequently Asked Questions </title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<div className="breadcrumb-area breadcrumb-bg-1 pt-50 pb-70 mb-100">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h1 className="breadcrumb-title">F.A.Q</h1>
								{/*=======  breadcrumb list  =======*/}
								<ul className="breadcrumb-list">
									<li className="breadcrumb-list__item">
										<Link href="/">
											<a>HOME</a>
										</Link>
									</li>
									<li className="breadcrumb-list__item breadcrumb-list__item--active">F.A.Q</li>
								</ul>
								{/*=======  End of breadcrumb list  =======*/}
							</div>
						</div>
					</div>
				</div>
				{/*=======  End of breadcrumb area =======*/}
				{/*=============================================
    =            page content         =
    =============================================*/}
				<div className="faq-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="faq-wrapper">
									{faqs && faqs.map((faq, index) => <Faq key={faq.title + index} faq={faq} />)}

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

export default index;

const Faq: React.FC<{faq: Faq_Titles}> = (props) => {
	const {faq} = props;
	return (
		<div className="single-faq mb-80">
			<h2 className="faq-title mb-20">{faq.title}</h2>
			<div className="accordion" id={faq.title.split(" ")[0] + faq.id}>
				{faq.faqs.map((element) => (
					<div className="card">
						<div className="card-header" id={element.answer.split(" ")[0] + element.id}>
							<h5 className="mb-0">
								<button
									className="btn btn-link collapsed"
									data-toggle="collapse"
									data-target={`#${element.question.split(" ")[0] + element.id}`}
									aria-expanded="false"
									aria-controls={`${element.question}`}>
									{element.question}
								</button>
							</h5>
						</div>
						<div
							id={`${element.question.split(" ")[0] + element.id}`}
							className="collapse"
							aria-labelledby={element.answer.split(" ")[0] + element.id}
							data-parent={`#${faq.title.split(" ")[0] + faq.id}`}>
							<div className="card-body">
								<p>{element.answer} </p>
							</div>
						</div>
					</div>
				))}
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

	const {
		data: {faqTitles},
	} = await apolloClient.query({
		query: GetFaqTitles,
	});

	console.log(faqTitles);

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			categories,
			storeLocations,
			faqTitles,
		},
	};
}
