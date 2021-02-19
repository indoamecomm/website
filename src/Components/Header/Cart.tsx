import {useMutation} from "@apollo/client";
import Link from "next/link";
import React, {useContext, useEffect, useState} from "react";
import toast from "react-hot-toast";
import {GetProductTypesById} from "../../../queries/productQuery";
import {DeleteCartById, GetUserCartSubscription} from "../../../queries/userQuery";
import {initializeApollo} from "../../apollo";
import {Cart} from "../../generated/graphql";
import {useAuth} from "../../hooks/useAuth";
import {getDiscountedPrice} from "../Product/ProductTypes";
import Spinner from "../Utils/Spinner";
import CartContext from "../../Context/cartContext";
import {useRouter} from "next/router";
import overlayContext from "../../Context/overlayContext";

export const getSubTotal = (cartItems: Cart[], couponValue: number = 0): number => {
	let subTotal: number = 0;

	cartItems.forEach((cart) => {
		subTotal += (getDiscountedPrice(cart.product_type) ?? 0) * cart.count;
	});

	subTotal = subTotal - subTotal * (couponValue / 100);

	return subTotal;
};
const CartItems: React.FC = () => {
	const {user} = useAuth();
	const [cartItems, setCartItems] = useState<Cart[]>([]);
	const {cart: cartStore} = useContext(CartContext);
	const {cartActive, setCartActive} = useContext(overlayContext);

	const router = useRouter();
	const apolloClient = initializeApollo();

	const getUserCartItem = async () => {
		if (user) {
			const data = await apolloClient.subscribe({
				query: GetUserCartSubscription,
				variables: {
					userId: user.id,
					expiry: new Date().toISOString(),
				},
			});

			if (data) {
				data.subscribe(({data: {cart}}) => {
					setCartItems(cart);
				});
			}
		} else {
			const {
				data: {product_type},
			} = await apolloClient.query({
				query: GetProductTypesById,
				variables: {
					productTypeArray: cartStore.map((element) => element.productTypeId) ?? [],
					expiry: new Date().toISOString(),
				},
			});
			const newItems = product_type.map((product, index) => ({
				id: `${product.id}${index}`,
				count: cartStore[index].count,
				product_type: JSON.parse(JSON.stringify(product)),
			}));
			setCartItems(newItems);
		}
	};

	useEffect(() => {
		getUserCartItem();
	}, [cartStore, user]);

	const proceedToCheckout = () => {
		if (user) {
			router.push("/checkout");
		} else {
			toast.success("Please login before you proceed to Checkout, Don't worry your cart will saved ");
			router.push("/login?checkout=true");
		}
	};

	return (
		<div className={`cart-overlay ${cartActive ? "active-cart-overlay" : ""}`} id="cart-overlay">
			<div className={`cart-overlay-close ${cartActive ? "active" : "inactive"} `} />
			<div className="cart-overlay-content">
				{/*=======  close icon  =======*/}
				<span className="close-icon" id="cart-close-icon" onClick={() => setCartActive(false)}>
					<a>
						<i className="ion-android-close" />
					</a>
				</span>
				<div className="offcanvas-cart-content-container">
					<h3 className="cart-title">Cart</h3>
					{cartItems.length > 0 ? (
						<div className="cart-product-wrapper">
							<div className="cart-product-container ps-scroll">
								{cartItems.map((cart) => (
									<CartItem cart={cart} key={cart.id} />
								))}
							</div>
							<p className="cart-subtotal">
								<span className="subtotal-title">Subtotal:</span>
								<span className="subtotal-amount">₹{getSubTotal(cartItems)}</span>
							</p>
							<div className="cart-buttons">
								<Link href="/cart">
									<a onClick={() => setCartActive(false)}>view cart</a>
								</Link>

								<a onClick={proceedToCheckout}>checkout</a>
							</div>
							{/* <p className="free-shipping-text">Free Shipping on All Orders Over ₹100!</p> */}
						</div>
					) : (
						<p>No items added to cart yet</p>
					)}
				</div>
			</div>
		</div>
	);
};

const CartItem: React.FC<{cart: Cart}> = (props) => {
	const {cart} = props;

	const [deleteCartById] = useMutation(DeleteCartById);
	const [loading, setLoading] = useState<boolean>(false);
	const {cart: cartStore, setCart: setCartStore} = useContext(CartContext);

	const {user} = useAuth();

	const deleteCart = async () => {
		try {
			if (user) {
				setLoading(true);
				const {
					data: {delete_cart},
				} = await deleteCartById({
					variables: {
						cartId: cart.id,
					},
				});
				setLoading(false);

				if (delete_cart && delete_cart.affected_rows > 0) {
					toast.success("Cart item deleted successfully");
				} else {
					toast.error("Some unknown error occurred");
				}
			} else {
				let newCartStore: any = [...cartStore];
				newCartStore = newCartStore.filter((item) => item.productTypeId !== cart.product_type.id);
				setCartStore([...newCartStore]);
				toast.success("Cart item deleted successfully");
			}
		} catch (error) {
			setLoading(false);
			toast.error(error.message);
		}
	};

	return (
		<div className="single-cart-product">
			{!loading ? (
				<span className="cart-close-icon">
					<p style={{cursor: "pointer"}} onClick={deleteCart}>
						<i className="ti-close" />
					</p>
				</span>
			) : (
				<span className="cart-close-icon">
					<Spinner width="10px" height="10px" />
				</span>
			)}

			<div className="image">
				<Link href={`/product/${cart.product_type.product.id}`}>
					<a>
						<img src={cart.product_type.imageUrl ?? ""} className="img-fluid" alt={cart.product_type.name} />
					</a>
				</Link>
			</div>
			<div className="content">
				<h5>
					<Link href={`/product/${cart.product_type.product.id}`}>
						<a href="shop-product-basic.html">{cart.product_type.name}</a>
					</Link>
				</h5>
				<p>
					<span className="cart-count">{cart.count} x </span>{" "}
					<span className="discounted-price">₹{getDiscountedPrice(cart.product_type)}</span>
				</p>
			</div>
		</div>
	);
};

export default CartItems;
