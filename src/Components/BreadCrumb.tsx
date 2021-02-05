import Link from "next/link";
import React from "react";

interface BreadCrumbProps {
	links: [{link: string; name: string}];
	finalName: string;
	backgroundImage: string;
	title: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = (props) => {
	const {links, finalName, backgroundImage, title} = props;

	return (
		<div className="breadcrumb-area  pt-50 pb-70 mb-100" style={{backgroundImage: `url(${backgroundImage})`}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h1 className="breadcrumb-title">{title}</h1>
						{/*=======  breadcrumb list  =======*/}
						<ul className="breadcrumb-list">
							{links.map(({link, name}) => (
								<li className="breadcrumb-list__item">
									<Link href={link}>
										<a>{name}</a>
									</Link>
								</li>
							))}

							<li className="breadcrumb-list__item breadcrumb-list__item--active">{finalName}</li>
						</ul>
						{/*=======  End of breadcrumb list  =======*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BreadCrumb;
