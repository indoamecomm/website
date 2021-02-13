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
					<meta charSet="utf-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />
					<meta name="description" content="" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
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
					<script defer src="/js/vendor/modernizr-2.8.3.min.js"></script>
					<link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Spectral:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<a href="#" className="scroll-top"></a>
					

					{/* <script defer src="/js/vendor/jquery.min.js"></script>
					<script defer src="/js/popper.min.js"></script>
					<script defer src="/js/bootstrap.min.js"></script>

					<script defer src="/js/plugins.js"></script>
					<script defer src="/js/main.js"></script> */}

					{/* <script defer src="/revolution/js/jquery.themepunch.revolution.min.js"></script>
					<script defer src="/revolution/js/jquery.themepunch.tools.min.js"></script>
					<script defer src="/revolution/revolution-active.js"></script> */}
{/* 
					<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
					<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
					<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.actions.min.js"></script>
					<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
					<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
					<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.parallax.min.js"></script> */}
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
