import Head from "next/head";
import React, {useRef} from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Faq_Titles, Store_Locations} from "../../generated/graphql";
import {GetFaqTitles} from "../../../queries/faqQuery";
import BreadCrumb from "../../Components/BreadCrumb";
import Link from "next/link";
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from "react-accessible-accordion";
import {useScript} from "../../hooks/useScript";

interface FaqsProps {
	categories: Category[];
	storeLocations: Store_Locations[];
	faqTitles: Faq_Titles[];
}

const index: React.FC<FaqsProps> = (props: FaqsProps) => {
	const {categories, storeLocations, faqTitles: faqs} = props;
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
				<title>Frequently Asked Questions | Indoamerica</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<div ref={ref}></div>

			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<BreadCrumb
					backgroundImage={"/images/breadcrumb-bg/01.jpg"}
					finalName={"FAQ"}
					title={"F.A.Q"}
					links={[{link: "/", name: "HOME"}]}
				/>

				<div className="">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="">
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
										<Link href="/support">
											<a>
												<button className="lezada-button lezada-button--medium lezada-cta-button">
													contact us
												</button>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default index;

const Faq: React.FC<{faq: Faq_Titles}> = (props) => {
	const {faq} = props;
	return (
		<div className=" single-faq mb-80">
			<h2 className="faq-title mb-20">{faq.title}</h2>
			<div className="accordion">
				<Accordion allowZeroExpanded>
					{faq.faqs.map((element) => (
						<AccordionItem key={element.id} uuid={element.id.toString() + "5"}>
							<AccordionItemHeading>
								<AccordionItemButton>
									<div className="card-header">
										<h5>
											<button className="btn btn-link">{element.question}</button>
										</h5>
									</div>
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<div className="card-body">
									<p>{element.answer} </p>
								</div>
							</AccordionItemPanel>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
};

// const Faq: React.FC<{faq: Faq_Titles}> = (props) => {
// 	const {faq} = props;
// 	return (
// 		<div className="single-faq mb-80">
// 			<h2 className="faq-title mb-20">{faq.title}</h2>
// 			<div className="accordion" id={faq.title.split(" ")[0] + faq.id}>
// 				{faq.faqs.map((element) => (
// 					<div className="card">
// 						<div className="card-header" id={element.answer.split(" ")[0] + element.id}>
// 							<h5 className="mb-0">
// 								<button
// 									className="btn btn-link collapsed"
// 									data-toggle="collapse"
// 									data-target={`#${element.question.split(" ")[0] + element.id}`}
// 									aria-expanded="false"
// 									aria-controls={`${element.question}`}>
// 									{element.question}
// 								</button>
// 							</h5>
// 						</div>
// 						<div
// 							id={`${element.question.split(" ")[0] + element.id}`}
// 							className="collapse"
// 							aria-labelledby={element.answer.split(" ")[0] + element.id}
// 							data-parent={`#${faq.title.split(" ")[0] + faq.id}`}>
// 							<div className="card-body">
// 								<p>{element.answer} </p>
// 							</div>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

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

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			categories,
			storeLocations,
			faqTitles,
		},
		revalidate: 10,
	};
}
