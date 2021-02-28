import React, {useRef} from "react";

const Layout: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);

	// useScript("/js/vendor/modernizr-2.8.3.min.js", ref);
	// useScript("/js/vendor/jquery.min.js", ref);
	// useScript("/js/popper.min.js", ref);
	// useScript("/js/bootstrap.min.js", ref);
	// useScript("/js/plugins.js", ref);
	// useScript("/js/main.js", ref);
	// useScript("/revolution/js/jquery.themepunch.revolution.min.js", ref);
	// useScript("/revolution/js/jquery.themepunch.tools.min.js", ref);
	// useScript("/revolution/revolution-active.js", ref);
	// useScript("/revolution/js/extensions/revolution.extension.kenburn.min.js", ref);
	// useScript("/revolution/js/extensions/revolution.extension.slideanims.min.js", ref);
	// useScript("/revolution/js/extensions/revolution.extension.actions.min.js", ref);
	// useScript("/revolution/js/extensions/revolution.extension.layeranimation.min.js", ref);
	// useScript("/revolution/js/extensions/revolution.extension.navigation.min.js", ref);
	// useScript("/revolution/js/extensions/revolution.extension.parallax.min.js", ref);

	return (
		<>
			<link href="/revolution/css/settings.css" rel="stylesheet" />
			<link href="/revolution/css/navigation.css" rel="stylesheet" />
			<link href="/revolution/custom-setting.css" rel="stylesheet" />
			<link href="/css/themify-icons.css" rel="stylesheet" />
			<link href="/css/plugins.css" rel="stylesheet" />
			<link href="/css/helper.css" rel="stylesheet" />
			<link href="/css/main.css" rel="stylesheet" />
			{/* <script defer src="/js/vendor/modernizr-2.8.3.min.js"></script>
			<script defer src="/js/vendor/jquery.min.js"></script>
			<script defer src="/js/popper.min.js"></script>
			<script defer src="/js/bootstrap.min.js"></script>

			<script defer src="/js/plugins.js"></script>
			<script defer src="/js/main.js"></script>

			<script defer src="/revolution/js/jquery.themepunch.revolution.min.js"></script>
			<script defer src="/revolution/js/jquery.themepunch.tools.min.js"></script>
			<script defer src="/revolution/revolution-active.js"></script>

			<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
			<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
			<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.actions.min.js"></script>
			<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
			<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
			<script defer type="text/javascript" src="/revolution/js/extensions/revolution.extension.parallax.min.js"></script> */}
			<div ref={ref}></div>
		</>
	);
};

export default Layout;
