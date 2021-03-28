import Document, {Html, Head, Main, NextScript, DocumentContext} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}
	

	render() {
		return (
			<Html className="no-js" lang="zxx">
				<Head>
					<link rel="icon" href="/images/favicon.ico" />
					<link href="/css/bootstrap.min.css" rel="stylesheet" />
					<link href="/css/font-awesome.min.css" rel="stylesheet" />
					<link href="/css/ionicons.min.css" rel="stylesheet" />
					<link href="/css/themify-icons.css" rel="stylesheet" />
					<link href="/css/plugins.css" rel="stylesheet" />
					<link href="/css/helper.css" rel="stylesheet" />
					<link href="/css/main.css" rel="stylesheet" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="/revolution/css/settings.css" rel="stylesheet" />
					<link href="/revolution/css/navigation.css" rel="stylesheet" />
					<link href="/revolution/custom-setting.css" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
					<link
						href="https://fonts.googleapis.com/css?family=Spectral:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap"
						rel="stylesheet"
					/>

					<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
					<a href="#" className="scroll-top"></a>
				
				</body>
			</Html>
		);
	}
}

export default MyDocument;

{
	/* <link href="/css/bootstrap.min.css" rel="stylesheet" />;

<link href="/css/font-awesome.min.css" rel="stylesheet" />;

<link href="/css/ionicons.min.css" rel="stylesheet" />;

<link href="/css/themify-icons.css" rel="stylesheet" />;

<link href="/css/plugins.css" rel="stylesheet" />;

<link href="/css/helper.css" rel="stylesheet" />;
<link href="/css/main.css" rel="stylesheet" />; */
}
