import Head from "next/head";
import React, {useState} from "react";
import {GetHeaderData} from "../../../queries/homeQuery";
import {initializeApollo} from "../../apollo";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import {Categories, Category, Product, Product_Type, Seasons, Store_Locations, SubCategory} from "../../generated/graphql";
import BreadCrumb from "../../Components/BreadCrumb";
import {
	GetCategories,
	GetProductsByCategoryId,
	GetSeasons,
	GetSubCategories,
	GetSubCategoriesDetails,
	GetTopPurchasedProducts,
} from "../../../queries/productQuery";
import Link from "next/link";
import {useEffect} from "react";
import Spinner from "../../Components/Utils/Spinner";
import {GetUserRatingByProductId} from "../../../queries/userQuery";

interface HeaderProps {
	categories: Categories[];
	storeLocations: Store_Locations[];
	product: Product[];
	categoriesHeader: Categories[];
	subCategory: SubCategory;
	seasons: Seasons[];
	productCount: number;
	topThreeProductTypes: Product_Type[];
}
const offset = 6;

const index: React.FC<HeaderProps> = (props: HeaderProps) => {
	const {
		categories,
		storeLocations,
		product: products,
		categoriesHeader,
		subCategory,
		seasons,
		productCount,
		topThreeProductTypes,
	} = props;

	console.log(products);
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>{subCategory.name} | Indoamerican</title>
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
			<Header categories={categoriesHeader as Category[]} storeLocations={storeLocations} />
			<main>
				<div>
					<BreadCrumb
						backgroundImage={subCategory.coverImageUrl}
						title={subCategory.name}
						finalName={subCategory.name}
						links={[{link: "/", name: "HOME"}]}
					/>
					<CategoryMain
						products={products}
						categories={categories}
						subCategory={subCategory}
						seasons={seasons}
						productCount={productCount}
						topThreeProductTypes={topThreeProductTypes}
					/>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default index;

interface MainProps {
	products: Product[];
	categories: Categories[];
	subCategory: SubCategory;
	seasons: Seasons[];
	productCount: number;
	topThreeProductTypes: Product_Type[];
}

const CategoryMain: React.FC<MainProps> = (props) => {
	const {products, categories, subCategory, seasons, productCount, topThreeProductTypes} = props;

	const [seasonId, setSeasonId] = useState<number | null>(null);
	const [productLoading, setProductLoading] = useState<boolean>(false);
	const apolloClient = initializeApollo();
	const [filteredProducts, setFilteredProducts] = useState<any | null>(products);
	const [orderObject, setOrderObject] = useState<any | null>({});
	const [valueChange, setValueChange] = useState<number>(6);
	const [searchString, setSearchString] = useState<string>("");
	const [limit, setLimit] = useState<number>(offset);

	useEffect(() => {
		console.log(products, "Products");
		setFilteredProducts(products);
	}, [products]);

	const getFilteredProducts = async () => {
		setProductLoading(true);
		const {
			data: {product},
		} = await apolloClient.query({
			query: GetProductsByCategoryId,
			variables: {
				subCategoryId: subCategory.id,
				seasonId,
				orderObject,
				searchString: `%${searchString}%`,
				expiry: new Date().toISOString(),
				limit,
			},
			fetchPolicy: "network-only",
		});
		const newProduct = [...product];

		setFilteredProducts(newProduct);
		setProductLoading(false);
	};

	useEffect(() => {
		getFilteredProducts();
	}, [seasonId, orderObject, valueChange, searchString, limit]);

	useEffect(() => {
		let newObject: any = null;
		setValueChange(valueChange);
		switch (valueChange) {
			case 0:
				newObject = {id: "asc"};
				setOrderObject(newObject);
				break;
			case 1:
				newObject = {id: "asc"};
				setOrderObject(newObject);
				break;
			case 2:
				newObject = {id: "asc"};
				setOrderObject({...newObject});
				break;
			case 3:
				newObject = {createdAt: "desc"};

				setOrderObject({...newObject});
				break;
			case 4:
				newObject = {productTypes_aggregate: {avg: {discountedPrice: "asc"}}};

				setOrderObject({...newObject});
				break;
			case 5:
				newObject = {productTypes_aggregate: {avg: {discountedPrice: "desc"}}};
				setOrderObject({...newObject});
				break;
		}
	}, [valueChange]);

	return (
		<div className="shop-page-wrapper">
			<CategoryHeader
				subCategory={subCategory}
				seasons={seasons}
				value={valueChange}
				setSeasonId={setSeasonId}
				setValueChange={setValueChange}
			/>

			<div className="shop-page-content mt-100 mb-100">
				<div className="container wide">
					<div className="row">
						<div className="col-xl-3 col-lg-3 order-2 order-lg-1">
							<CategorySidebar
								categories={categories}
								searchString={searchString}
								setSearchString={setSearchString}
								topThreeProductTypes={topThreeProductTypes}
							/>
						</div>
						<div className="col-xl-9 col-lg-9 order-1 order-lg-2 mb-md-80 mb-sm-80">
							<div className="row product-isotope shop-product-wrap five-column h-auto">
								{!productLoading ? (
									filteredProducts.map((product) => <CategoryCard key={product.id} product={product} />)
								) : (
									<div className="w-100 d-flex justify-content-center mt-5">
										<Spinner />
									</div>
								)}
							</div>
							{!productLoading && productCount > limit && (
								<div className="row d-block">
									<div className="col-lg-12 text-center mt-30 col-md-12 ">
										<a
											className="lezada-button lezada-button--medium lezada-button--icon--left "
											onClick={() => {
												setLimit((currentLimit) => currentLimit + offset);
											}}>
											<i className="ion-android-add" /> MORE
										</a>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			{/*=====  End of shop page content  ======*/}
		</div>
	);
};

interface CategoryHeader {
	subCategory: SubCategory;
	seasons: Seasons[];
	setSeasonId: (seasonId: number | null) => void;
	setValueChange: (number) => void;
	value: number;
}

const CategoryHeader: React.FC<CategoryHeader> = (props) => {
	const {seasons, setSeasonId, setValueChange, value} = props;

	return (
		<div className="shop-page-header">
			<div className="container wide">
				<div className="row align-items-center">
					<div className="col-12 col-lg-7 col-md-10 d-none d-md-block">
						{/*=======  filter titles  =======*/}
						<div className="filter-title filter-title--type-two">
							<ul className="product-filter-menu">
								<li className="active" onClick={() => setSeasonId(null)}>
									All
								</li>
								{seasons.map((season) => (
									<li data-filter=".hot" onClick={() => setSeasonId(season.id)} key={season.id}>
										{season.name}
									</li>
								))}
							</ul>
						</div>
						{/*=======  End of filter titles  =======*/}
					</div>
					<div className="col-12 col-lg-5 col-md-2">
						{/*=======  filter icons  =======*/}
						<div className="filter-icons">
							{/*=======  filter dropdown  =======*/}
							<div className="single-icon filter-dropdown">
								<select
									value={value}
									className="nice-select"
									onChange={(event) => {
										setValueChange(parseInt(event.target.value));
									}}>
									<option value={"6"}>Default sorting</option>
									{/* <option value={"2"}>Sort by average rating</option> */}
									<option value={"3"}>Sort by latest</option>
									<option value={"4"}>Sort by price: low to high</option>
									<option value={"5"}>Sort by price: high to low</option>
								</select>
							</div>
							{/*=======  End of filter dropdown  =======*/}
							{/*=======  grid icons  =======*/}
							<div className="single-icon grid-icons">
								<a data-target="five-column" className="active">
									<i className="ti-layout-grid4-alt" />
								</a>
								<a data-target="four-column">
									<i className="ti-layout-grid3-alt" />
								</a>
								<a data-target="three-column">
									<i className="ti-layout-grid2-alt" />
								</a>
								<a data-target="list">
									<i className="ti-view-list" />
								</a>
							</div>
						</div>
						{/*=======  End of filter icons  =======*/}
					</div>
				</div>
			</div>
		</div>
	);
};

const CategorySidebar: React.FC<{
	categories: Categories[];
	searchString: string;
	setSearchString: (string) => void;
	topThreeProductTypes: any[];
}> = (props) => {
	const {categories, searchString, setSearchString, topThreeProductTypes} = props;

	const getCount = (category: Categories): number => {
		let count = 0;

		category.sub_categories.forEach((subCategory) => {
			count += subCategory.products_aggregate.aggregate?.count ?? 0;
		});

		return count;
	};

	// let timeout;
	// const onChangeSearch = (value: string) => {
	// 	if (timeout) {
	// 		clearTimeout(timeout);
	// 	}
	// 	timeout = setTimeout(() => {
	// 		setSearchString(value);
	// 	}, 400);
	// };

	return (
		<div className="page-sidebar">
			{/*=======  single sidebar widget  =======*/}
			<div className="single-sidebar-widget mb-40">
				{/*=======  search widget  =======*/}
				<div className="search-widget">
					<form action="#">
						<input
							type="search"
							placeholder="Search products ..."
							value={searchString}
							onChange={(event) => setSearchString(event.target.value)}
						/>
						<button type="button">
							<i className="ion-android-search" />
						</button>
					</form>
				</div>
			</div>

			<div className="single-sidebar-widget mb-40">
				<h2 className="single-sidebar-widget--title">Categories</h2>
				<ul className="single-sidebar-widget--list single-sidebar-widget--list--category">
					{categories.map((category) => (
						<li className={category.sub_categories.length > 0 ? "has-children" : undefined} key={category.id}>
							<a>{category.name} </a> <span className="quantity">{getCount(category)}</span>
							<ul>
								{category.sub_categories &&
									category.sub_categories.map((subCategory) => (
										<li className={subCategory.products.length > 0 ? "has-children" : undefined} key={subCategory.id}>
											<Link href={`/category/${subCategory.id}`}>
												<a>{subCategory && subCategory.name ? subCategory.name : "name"} </a>
											</Link>
											<span className="quantity">{subCategory.products_aggregate.aggregate?.count}</span>
											<ul>
												{subCategory.products.map((product) => (
													<li key={product.id}>
														<Link href={`/product/${product.id}`}>
															<a>{product.name}</a>
														</Link>
													</li>
												))}
											</ul>
										</li>
									))}
							</ul>
						</li>
					))}
				</ul>
			</div>
			{/*=======  End of single sidebar widget  =======*/}
			{/*=======  single sidebar widget  =======*/}
			<div className="single-sidebar-widget mb-40">
				<h2 className="single-sidebar-widget--title">Popular products</h2>
				{/*=======  widget product wrapper  =======*/}

				<div className="widget-product-wrapper">
					{/*=======  single widget product  =======*/}
					{topThreeProductTypes.map((product) => (
						<ProductSideCard product={product} />
					))}
				</div>

				{/*=======  End of widget product wrapper  =======*/}
			</div>
			{/*=======  End of single sidebar widget  =======*/}
		</div>
	);
};

const ProductSideCard: React.FC<{product: any}> = (props) => {
	const {product} = props;



	const apolloClient = initializeApollo();
	const [rating, setRating] = useState<number>(1);

	useEffect(() => {
		apolloClient
			.query({
				query: GetUserRatingByProductId,
				variables: {
					productTypeId: product.productType.id,
				},
			})
			.then(({data}) => {
				setRating(data.user_ratings_aggregate.aggregate.avg.rating);
			});
	}, []);

	return (
		<div className="single-widget-product-wrapper">
			<div className="single-widget-product">
				{/*=======  image  =======*/}
				<div className="single-widget-product__image">
					<Link href={`/product/${product.productType.productId}`}>
						<a>
							<img src={product.productType.imageUrl} className="img-fluid" alt={product.productType.name} />
						</a>
					</Link>
				</div>
				{/*=======  End of image  =======*/}
				{/*=======  content  =======*/}
				<div className="single-widget-product__content">
					<div className="single-widget-product__content__top">
						<h3 className="product-title">
							<Link href={`/product/${product.productType.productId}`}>
								<a>{product.productType.name}</a>
							</Link>
						</h3>
						<div className="price">
							{product.productType.originalPrice && (
								<span className="main-price discounted">₹{product.productType.originalPrice}</span>
							)}
							<span className="discounted-price">₹{product.productType.discountedPrice}</span>
						</div>
						<div className="rating">
							{[1, 2, 3, 4, 5].map((element) => (
								<i className={element <= rating ? "ion-android-star" : "ion-android-star-outline"} />
							))}
						</div>
					</div>
				</div>
				{/*=======  End of content  =======*/}
			</div>
		</div>
	);
};

const CategoryCard: React.FC<{product: Product}> = (props) => {
	const {
		product: {name, hoverImageUrl, imageUrl, description, productTypes_aggregate, id},
	} = props;
	return (
		<div className="col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 hot new sale">
			<div className="single-product">
				{/*=======  single product image  =======*/}
				<div className="single-product__image">
					<Link href={`/product/${id}`}>
						<a className="image-wrap">
							<img src={imageUrl} className="img-fluid" alt={name + "Image "} />
							<img src={hoverImageUrl} className="img-fluid" alt={name + "Hover Image"} />
						</a>
					</Link>
				</div>
				{/*=======  End of single product image  =======*/}
				{/*=======  single product content  =======*/}
				<div className="single-product__content">
					<div className="title">
						<h3>
							<Link href={`/product/${id}`}>
								<a>{name}</a>
							</Link>
						</h3>
						<Link href={`/product/${id}`}>
							<a>View Options</a>
						</Link>
					</div>
					<div className="price">
						<span className="main-price discounted">{`₹${productTypes_aggregate.aggregate?.min?.originalPrice} - ₹${productTypes_aggregate.aggregate?.max?.originalPrice}`}</span>
						<span className="discounted-price">{`₹${productTypes_aggregate.aggregate?.min?.discountedPrice} - ₹${productTypes_aggregate.aggregate?.max?.discountedPrice}`}</span>
					</div>
				</div>
				{/*=======  End of single product content  =======*/}
			</div>
			<div className="single-product--list">
				{/*=======  single product image  =======*/}
				<div className="single-product__image">
					<Link href={`/product/${id}`}>
						<a className="image-wrap">
							<img src={imageUrl} className="img-fluid" alt={name + "Image "} />
							<img src={hoverImageUrl} className="img-fluid" alt={name + "Hover Image"} />
						</a>
					</Link>
				</div>
				{/*=======  End of single product image  =======*/}
				{/*=======  single product content  =======*/}
				<div className="single-product__content">
					<div className="title">
						<h3>
							<Link href={`/product/${id}`}>
								<a>{name}</a>
							</Link>
						</h3>
					</div>
					<div className="price">
						<span className="main-price discounted">{`₹${productTypes_aggregate.aggregate?.min?.originalPrice} - ₹${productTypes_aggregate.aggregate?.max?.originalPrice}`}</span>
						<span className="discounted-price">{`₹${productTypes_aggregate.aggregate?.min?.discountedPrice} - ₹${productTypes_aggregate.aggregate?.max?.discountedPrice}`}</span>
					</div>
					<p className="short-desc">{description}</p>

					<Link href={`/product/${id}`}>
						<a className="lezada-button lezada-button--medium">View Options</a>
					</Link>
				</div>
				{/*=======  End of single product content  =======*/}
			</div>
		</div>
	);
};

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const apolloClient = initializeApollo();

	// Get the paths we want to pre-render based on posts
	const {
		data: {sub_categories: subCategories},
	} = await apolloClient.query({
		query: GetSubCategories,
	});

	const paths = subCategories.map((subCategory: SubCategory) => ({
		params: {subCategoryId: subCategory.id.toString()},
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return {paths, fallback: false};
}

export async function getStaticProps({params}) {
	const apolloClient = initializeApollo();

	const {
		data: {store_locations: storeLocations, categories: categoriesHeader},
	} = await apolloClient.query({
		query: GetHeaderData,
	});

	const {
		data: {seasons},
	} = await apolloClient.query({
		query: GetSeasons,
	});

	const {
		data: {categories},
	} = await apolloClient.query({
		query: GetCategories,
	});
	const {
		data: {product, product_aggregate},
	} = await apolloClient.query({
		query: GetProductsByCategoryId,
		variables: {
			subCategoryId: params ? params.subCategoryId : null,
			expiry: new Date().toISOString(),
			limit: offset,
		},
		fetchPolicy: "network-only",
	});

	const {
		data: {sub_categories: subCategories},
	} = await apolloClient.query({
		query: GetSubCategoriesDetails,
		variables: {
			subCategoryId: params ? params.subCategoryId : null,
		},
	});

	const {
		data: {topThreeProductTypes},
	} = await apolloClient.query({
		query: GetTopPurchasedProducts,
	});
	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
			categories,
			storeLocations,
			product,
			seasons,
			categoriesHeader,
			subCategory: subCategories[0],
			productCount: product_aggregate.aggregate.count,
			topThreeProductTypes,
		},
		revalidate: 1,
	};
}
