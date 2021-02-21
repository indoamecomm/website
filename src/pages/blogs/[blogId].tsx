import Head from "next/head";
import React from "react";
import {GetBlogDetail, GetBlogsParams, GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Blogs, Category, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import parse from "html-react-parser";
import {formateISOToDate} from "../../Components/Home/BlogList";

interface HeaderProps {
	categories: Category[];
	storeLocations: Store_Locations[];
	blog: Blogs;
}

const index: React.FC<HeaderProps> = (props: HeaderProps) => {
	const {categories, storeLocations, blog} = props;
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>{blog.title} | Indoamerican</title>
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
						title={"Blogs"}
						finalName={"Blogs"}
						links={[{link: "/", name: "HOME"}]}
					/>
					<BlogMain blog={blog} />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default index;

const BlogMain: React.FC<{blog: Blogs}> = (props) => {
	const {blog} = props;
	return (
		<div className="blog-page-wrapper mb-100">
			<div className="container">
				<div className="col-lg-12 order-1 mb-md-70 mb-sm-70">
					<div className="row">
						<div className="col-md-12 mb-40">
							<div className="single-slider-post single-slider-post--sticky pb-60">
								{/*=======  image  =======*/}
								{/*=======  End of image  =======*/}
								{/*=======  content  =======*/}
								<div className="single-slider-post__content single-slider-post--sticky__content">
									{/*=======  post category  =======*/}
									{/* <div className="post-category mb-10">
										<a href="#">plants</a>
									</div> */}
									<h2 className="post-title">
										<a>{blog.title}</a>
									</h2>
									{/*=======  End of post category  =======*/}
									{/*=======  post info  =======*/}
									<div className="post-info d-flex flex-wrap align-items-center mb-50">
										<div className="post-user">
											<i className="ion-android-person" /> By
											<a>&nbsp;{blog.author}</a>
										</div>
										<div className="post-date mb-0 pl-30">
											<i className="ion-android-calendar" />
											<a> {formateISOToDate(blog.createdAt)}</a>
										</div>
									</div>
								</div>
								<div className="single-blog-post-section">
									<div className="col-12">{parse(blog.body)}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const apolloClient = initializeApollo();

	// Get the paths we want to pre-render based on posts
	const {
		data: {blogs},
	} = await apolloClient.query({
		query: GetBlogsParams,
	});

	const paths = blogs.map((blog: Blogs) => ({
		params: {blogId: blog.id.toString()},
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return {paths, fallback: false};
}

export async function getStaticProps({params}) {
	const apolloClient = initializeApollo();

	const {
		data: {store_locations: storeLocations, categories},
	} = await apolloClient.query({
		query: GetHeaderData,
	});
	const {
		data: {blogs: blog},
	} = await apolloClient.query({
		query: GetBlogDetail,
		variables: {
			blogId: params ? params.blogId : null,
		},
		fetchPolicy: "network-only",
	});
	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			storeLocations,
			categories,
			blog: blog[0],
		},
		revalidate: 1,
	};
}
