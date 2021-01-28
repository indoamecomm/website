import Document, {Html, Head, Main, NextScript, DocumentContext} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/images/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
						integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
						crossOrigin="anonymous"></link>
					<link
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
						rel="stylesheet"
						integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
						crossOrigin="anonymous"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Spectral:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap" rel="stylesheet" />

					<link href="/revolution/css/settings.css" rel="stylesheet" />
					<link href="/revolution/css/navigation.css" rel="stylesheet" />
					<link href="/revolution/custom-setting.css" rel="stylesheet" />

					<script src="/js/vendor/jquery.min.js"></script>
					<script src="/js/vendor/modernizr-2.8.3.min.js"></script>
					<script defer src="/js/main.js"></script>

					<script
						src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
						integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
						crossOrigin="anonymous"></script>

					<script
						src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
						integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
						crossOrigin="anonymous"
					/>
					<script src="/js/plugins.js"></script>

					<script defer src="/revolution/js/jquery.themepunch.revolution.min.js"></script>
					<script defer src="/revolution/js/jquery.themepunch.tools.min.js"></script>
					<script defer src="/revolution/revolution-active.js"></script>

					<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
					<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
					<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.actions.min.js"></script>
					<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
					<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
					<script type="text/javascript" src="/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
					<script src="/js/popper.min.js"></script>
					<script src="/js/bootstrap.min.js"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
