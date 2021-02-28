import Head from "next/head";
import React, {useEffect} from "react";
import {GetBlogsList, GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Blogs, Category, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import {formateISOToDate} from "../../Components/Home/BlogList";
import Link from "next/link";
import {useState} from "react";
import {useScript} from "../../hooks/useScript";
import { useRef } from "react";

interface HeaderProps {
	categories: Category[];
	storeLocations: Store_Locations[];
	blogs: Blogs[];
	count: number;
}

const index: React.FC<HeaderProps> = (props: HeaderProps) => {
	const {categories, storeLocations, blogs, count} = props;
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
				<title>Blogs</title>
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
						title={"Blog"}
						finalName={"BLOG"}
						links={[{link: "/", name: "HOME"}]}
					/>
					<BlogList blogs={blogs} count={count} />
				</div>
			</main>
			<Footer />
		</>
	);
};
export default index;

export const BlogList: React.FC<{blogs: Blogs[]; count: number}> = (props) => {
	const {blogs, count} = props;
	const totalNumber = Math.ceil(count / 6);
	const [activeIndex, setActiveIndex] = useState<number>(1);
	const apolloClient = initializeApollo();
	const [loading, setLoading] = useState(false);
	const [blogLists, setBlogList] = useState<Blogs[]>(blogs);
	const [firstRender, setFirstRender] = useState<boolean>(false);

	const getBlogs = async () => {
		setLoading(true);

		const {
			data: {blogs: newBlogs},
		} = await apolloClient.query({
			query: GetBlogsList,
			variables: {
				limit: 6,
				offset: (activeIndex - 1) * 6,
			},
		});

		setBlogList(newBlogs);
		setLoading(false);
	};

	useEffect(() => {
		if (firstRender) {
			getBlogs();
		} else {
			setFirstRender(true);
		}
	}, [activeIndex]);

	return (
		<div className="blog-page-wrapper mb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="row blog-post-wrapper blog-post-wrapper--masonry">
							{!loading && blogLists && blogLists.map((blog) => <BlogItem blog={blog} />)}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						{/*=======  pagination  =======*/}
						<div className="pagination text-center mt-50">
							<ul>
								{Array.from(Array(totalNumber).keys()).map((element) => (
									<li
										className={activeIndex === element + 1 ? "active" : ""}
										key={element}
										onClick={() => {
											setActiveIndex(element + 1);
										}}>
										<a>{element + 1}</a>
									</li>
								))}
								<li
									onClick={() => {
										activeIndex + 1 <= totalNumber && setActiveIndex(activeIndex + 1);
									}}>
									<a>NEXT</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const BlogItem: React.FC<{blog: Blogs}> = (props) => {
	const {blog} = props;

	return (
		<div className="col-lg-4 col-md-6 single-slider-post grid-item mb-40">
			{/*=======  image  =======*/}
			<div className="single-slider-post__image mb-30">
				<Link href={`/blogs/${blog.id}`}>
					<a>
						<img src={blog.imageUrl ?? undefined} className="img-fluid" alt={blog.title} />
					</a>
				</Link>
			</div>
			{/*=======  End of image  =======*/}
			{/*=======  content  =======*/}
			<div className="single-slider-post__content">
				<div className="post-date">
					<i className="ion-android-calendar" />
					<Link href={`/blogs/${blog.id}`}>
						<a>{formateISOToDate(blog.createdAt)}</a>
					</Link>
				</div>
				<h2 className="post-title">
					<Link href={`/blogs/${blog.id}`}>
						<a>{blog.title}</a>
					</Link>
				</h2>
				<p className="post-excerpt">{blog.summary}</p>
				<Link href={`/blogs/${blog.id}`}>
					<a className="blog-readmore-btn">read more</a>
				</Link>
			</div>
			{/*=======  End of content  =======*/}
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
		data: {blogs, blogs_aggregate},
	} = await apolloClient.query({
		query: GetBlogsList,
		variables: {
			limit: 6,
			offset: 0,
		},
	});

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			categories,
			storeLocations,
			blogs,
			count: blogs_aggregate.aggregate.count,
		},
	};
}
