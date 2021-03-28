import React, {useRef} from "react";

const Layout: React.FC = () => {
	const ref = useRef<HTMLDivElement>(null);

	

	return (
		<>
			<link href="/revolution/css/settings.css" rel="stylesheet" />
			<link href="/revolution/css/navigation.css" rel="stylesheet" />
			<link href="/revolution/custom-setting.css" rel="stylesheet" />
			<link href="/css/themify-icons.css" rel="stylesheet" />
			<link href="/css/plugins.css" rel="stylesheet" />
			<link href="/css/helper.css" rel="stylesheet" />
			<link href="/css/main.css" rel="stylesheet" />
		
			<div ref={ref}></div>
		</>
	);
};

export default Layout;
