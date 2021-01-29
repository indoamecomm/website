import "../../styles/scss/helper.scss";
// import "../../styles/css/main.css";

// import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/scss/main.scss";
import "../../styles/css/ionicons.min.css";
import "../../styles/css/themify-icons.css";
import "../../styles/css/font-awesome.min.css";
import "../../styles/css/plugins.css";

// import "../../styles/css/bootstrap.min.css";
import "../../styles/css/navigation.css";
import "../../public/revolution/custom-setting.css";

import {useApollo} from "../apollo";
import React from "react";
import {ApolloProvider} from "@apollo/client";

// import "../styles/css/plugins.css";

function MyApp({Component, pageProps}: any) {
	const client = useApollo(pageProps.initialApolloState);

	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
