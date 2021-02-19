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
import React, {useEffect} from "react";
import {ApolloProvider} from "@apollo/client";
import {AuthProvider} from "../hooks/useAuth";
import Modal from "react-modal";
import useLocalStorage from "@rooks/use-localstorage";
import WishlistContext from "../Context/wishlistContext";
import CartContext from "../Context/cartContext";
import OverlayContext from "../Context/overlayContext";
import {useState} from "react";

// import "../styles/css/plugins.css";

function MyApp({Component, pageProps}: any) {
	const client = useApollo(pageProps.initialApolloState);
	const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
	const [cart, setCart] = useLocalStorage("cart", []);
	const [wishlistActive, setWishlistActive] = useState<boolean>(false);
	const [cartActive, setCartActive] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const rootEl: any = document.getElementById("__next");

			Modal.setAppElement(rootEl);
		}

		// Modal.setAppElement(rootEl);
	}, []);

	return (
		<OverlayContext.Provider value={{wishlistActive, setWishlistActive, cartActive, setCartActive}}>
			<CartContext.Provider
				value={{
					cart,
					setCart,
				}}>
				<WishlistContext.Provider
					value={{
						wishlist,
						setWishlist,
					}}>
					<AuthProvider>
						<ApolloProvider client={client}>
							<Component {...pageProps} />
						</ApolloProvider>
					</AuthProvider>
				</WishlistContext.Provider>
			</CartContext.Provider>
		</OverlayContext.Provider>
	);
}

export default MyApp;
