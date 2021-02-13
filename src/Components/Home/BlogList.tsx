import {format} from "date-fns";
import React from "react";
import {Blogs} from "../../generated/graphql";

interface BlogsListProps {
	blogs: Blogs[];
}

const BlogList: React.FC<BlogsListProps> = ({blogs}) => {
	return (
		<>
			<div className="blog-post-area mb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-4 mb-50 mb-lg-0">
							{/*=======  blog intro  =======*/}
							<div className="blog-intro">
								<h2>
									From our <br />
									Knowledge Base
								</h2>
								<p>Lorem ipsum dolor sit amet, consecte tur cing elit. Suspe ndisse suscipit sagittis leo sit met condim entum.</p>
								<a href="blog-standard-left-sidebar.html" className="lezada-button lezada-button--medium">
									view all
								</a>
							</div>
							{/*=======  End of blog intro  =======*/}
						</div>
						<div className="col-lg-8">
							{/*=======  blog post slider container  =======*/}
							<div className="blog-post-slider-container">
								<div
									className="lezada-slick-slider blog-post-slider"
									data-slick-setting='{
							"slidesToShow": 2,
							"arrows": true,
							"speed": 800,
							"prevArrow": {"buttonClass": "slick-prev", "iconClass": "ti-angle-left" },
							"nextArrow": {"buttonClass": "slick-next", "iconClass": "ti-angle-right" }
						}'
									data-slick-responsive='[
							{"breakpoint":1501, "settings": {"slidesToShow": 2} },
							{"breakpoint":1199, "settings": {"slidesToShow": 2} },
							{"breakpoint":991, "settings": {"slidesToShow": 2, "arrows": false} },
							{"breakpoint":767, "settings": {"slidesToShow": 1, "arrows": false} },
							{"breakpoint":575, "settings": {"slidesToShow": 1, "arrows": false} },
							{"breakpoint":479, "settings": {"slidesToShow": 1, "arrows": false} }
						]'>
									{blogs.map((blog) => (
										<Blog blog={blog} key={blog.id} />
									))}
								</div>
							</div>
							{/*=======  End of blog post slider container  =======*/}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogList;

const Blog: React.FC<{blog: Blogs}> = ({blog}) => {
	return (
		<div className="col">
			<div className="single-slider-post">
				{/*=======  image  =======*/}
				<div className="single-slider-post__image mb-30">
					<a href="blog-single-post-left-sidebar.html">
						<img src={blog.imageUrl ?? " "} className="img-fluid" alt={blog.title} />
					</a>
				</div>
				{/*=======  End of image  =======*/}
				{/*=======  content  =======*/}
				<div className="single-slider-post__content">
					<div className="post-date">
						<i className="ion-android-calendar" />
						<a href="blog-standard-left-sidebar.html">{formateISOToDate(blog.createdAt)}</a>
					</div>
					<h2 className="post-title">
						<a href="blog-single-post-left-sidebar.html">{blog.title}</a>
					</h2>
					<p className="post-excerpt">{blog.summary}</p>
					<a href="blog-single-post-left-sidebar.html" className="blog-readmore-btn">
						read more
					</a>
				</div>
				{/*=======  End of content  =======*/}
			</div>
		</div>
	);
};

const formateISOToDate = (isoString: string): string => {
	const date = new Date(isoString);
	return format(date, "LLLL d, y");
};
