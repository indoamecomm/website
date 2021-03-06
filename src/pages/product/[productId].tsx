import Head from "next/head";
import React, {useEffect, useRef} from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Category, Product, Product_Type, Store_Locations} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import ProductDescription, {ProductDescriptionProps} from "../../Components/Product/ProductDescription";

import ProductInstruction from "../../Components/Product/ProductInstruction";
import ProductRecommendation from "../../Components/Product/ProductRecommendation";
import ProductHeader from "../../Components/Product/ProductHeader";
import {GetProductDetailsById, GetProducts, GetRecommendations} from "../../../queries/productQuery";
import {GetStaticProps} from "next";
import ProductTypes from "../../Components/Product/ProductTypes";
import {useScript} from "../../hooks/useScript";
import {useRouter} from "next/router";

interface ProductProps {
	categories: Category[];
	storeLocations: Store_Locations[];
	productDescription: ProductDescriptionProps;
	seasons: string;
	product: Product;
	productTypesRecommendation: Product_Type[];
}

const index: React.FC<ProductProps> = (props: ProductProps) => {
	const {categories, storeLocations, productDescription, seasons, product, productTypesRecommendation} = props;
	const ref = useRef<HTMLDivElement>(null);
	const router = useRouter();

	useEffect(() => {
		if (!product) {
			router.push("/404");
		}
	}, []);

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
				<title>{product?.name} | IndoAmerica</title>
				<meta name="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<div ref={ref}></div>
			<Header categories={categories} storeLocations={storeLocations} />
			<main>
				<BreadCrumb
					backgroundImage={product?.coverImageUrl}
					title={product?.name}
					finalName={product?.name}
					links={[
						{link: "/", name: "HOME"},
						{link: `/category/${product?.subCategoryId}`, name: product?.sub_category?.name.toUpperCase()},
					]}
				/>
				<ProductHeader seasons={seasons} productTypesLength={product?.productTypes.length} />
				<ProductDescription {...productDescription} />
				<div className="shop-page-wrapper mt-100 mb-100">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								{product?.productTypes.map((productType, index) => (
									<ProductTypes
										key={productType?.id}
										productType={productType}
										leftOrient={index % 2 === 0}
										subCategory={product?.sub_category.name}
									/>
								))}

								<ProductInstruction instructionTitles={product?.instruction_titles ?? []} />
							</div>
						</div>
						{/*=======  End of shop product content  =======*/}
					</div>
				</div>
				<div className="tab-product-navigation tab-product-navigation--product-desc mb-110">
					<div className="nav nav-tabs justify-content-center" id="nav-tab2" role="tablist"></div>
				</div>
				{/*=============================================            slider area         ==============================================*/}
				{/*=====  End of slider area  ======*/}
				<ProductRecommendation productTypesRecommendation={productTypesRecommendation ?? []} />
			</main>
			<Footer />
		</>
	);
};

export default index;

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const apolloClient = initializeApollo();

	// Get the paths we want to pre-render based on posts
	const {
		data: {product: products},
	} = await apolloClient.query({
		query: GetProducts,
	});

	const paths = products.map((product: Product) => ({
		params: {productId: product.id.toString()},
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return {paths, fallback: true};
}

export const getStaticProps: GetStaticProps = async ({params}) => {
	const apolloClient = initializeApollo();
	
	const {
		data: {categories, store_locations: storeLocations},
	} = await apolloClient.query({
		query: GetHeaderData,
	});

	const {
		data: {product: products},
	} = await apolloClient.query({
		query: GetProductDetailsById,
		variables: {
			productId: params ? params.productId : null,
			expiry: new Date().toISOString(),
		},
	});

	const product: Product = products[0] ?? null;

	const {
		data: {product_type: productTypesRecommendation},
	} = await apolloClient.query({
		query: GetRecommendations,
		variables: {
			productId: params ? params.productId : null,
			subCategoryId: product ? product?.subCategoryId: -1
		},
	});
	
	const productDescription: ProductDescriptionProps = {
		name: product?.name ?? null,
		categoryName: product?.sub_category.name ?? null,
		description: product?.description ?? null,
		nutritiveValue: product?.nutritiveValue ?? null,
		productImage: product?.imageUrl ?? null,
	};
	let seasonArray: any = product?.productTypes?.map((productType) => productType?.product_seasons.map((season) => season.season.name));
	seasonArray = [].concat(...(seasonArray ?? []));
	const seasonSet = new Set(seasonArray);
	const seasons = [...seasonSet].join(" | ");

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			categories,
			storeLocations,
			productDescription,
			seasons,
			product,
			productTypesRecommendation: shuffle(productTypesRecommendation.concat()),
		},
		revalidate: 1,
	};
};
