import Link from "next/link";
import React from "react";

interface linkType {
	link: string;
	name: string;
}
interface BreadCrumbProps {
	links: linkType[];
	finalName: string;
	backgroundImage: string;
	title: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = (props) => {
	const { links, finalName, backgroundImage, title } = props;

	return (
		<div className={`breadcrumb-area  pt-50 pb-70 mb-100`} style={{ backgroundImage: `url(${backgroundImage}), linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3))`, backgroundBlendMode: "overlay" }}>
			<div className="container">
				<div className="row">
					<div onContextMenu={(e) => e.preventDefault()} className="col-lg-12">
						<h1 className="breadcrumb-title" style={{ color: "white" }}>{title}</h1>
						{/*=======  breadcrumb list  =======*/}
						<ul className="breadcrumb-list">
							{links.map(({ link, name }, index) => (
								<li className="breadcrumb-list__item" key={index}>
									<Link href={link}>
										<a style={{color: '#f1f1f1'}}>{name}</a>
									</Link>
								</li>
							))}

							<li className="breadcrumb-list__item breadcrumb-list__item--active" style={{color: '#F5F5F5'}}>{finalName}</li>
						</ul>
						{/*=======  End of breadcrumb list  =======*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BreadCrumb;
