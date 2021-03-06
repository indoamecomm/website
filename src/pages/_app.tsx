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
// import "react-accessible-accordion/dist/fancy-example.css";

import {useApollo} from "../apollo";
import React, {useEffect} from "react";
import {ApolloProvider} from "@apollo/client";
import {AuthProvider} from "../hooks/useAuth";
import Modal from "react-modal";
import useLocalStorage from "@rooks/use-localstorage";
import WishlistContext from "../Context/wishlistContext";
import CartContext from "../Context/cartContext";
import OverlayContext from "../Context/overlayContext";
import OrderUserContext from "../Context/orderUserContext";
import tawkTo from "tawkto-react";
import {useState} from "react";

// import "../styles/css/plugins.css";

const tawkToPropertyId = "605c4afbf7ce18270933bbd2";
const tawkToKey = "1f1k89q7l";

const MyApp = ({Component, pageProps}: any) => {
	const client =  useApollo(pageProps.initialApolloState);
	const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
	const [cart, setCart] = useLocalStorage("cart", []);
	const [wishlistActive, setWishlistActive] = useState<boolean>(false);
	const [cartActive, setCartActive] = useState<boolean>(false);
	const [orderUserId, setOrderUserId] = useState<number | undefined>();

	useEffect(() => {
		if (typeof window !== "undefined") {
			const rootEl: any = document.getElementById("__next");
			Modal.setAppElement(rootEl);
		}

		tawkTo(tawkToPropertyId, tawkToKey);

		// Modal.setAppElement(rootEl);
	}, []);

	return (
		<ApolloProvider client={client}>
			<AuthProvider>
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
						<OverlayContext.Provider value={{wishlistActive, setWishlistActive, cartActive, setCartActive}}>
							<OrderUserContext.Provider
								value={{
									orderUserId,
									setOrderUserId,
								}}>
								<Component {...pageProps} />
							</OrderUserContext.Provider>
						</OverlayContext.Provider>
					</WishlistContext.Provider>
				</CartContext.Provider>
			</AuthProvider>
		</ApolloProvider>
	);
};

export default MyApp;
