import {useMutation} from "@apollo/client";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {DeleteCartById, GetUserCartSubscription} from "../../../queries/userQuery";
import {initializeApollo} from "../../apollo";
import {Cart} from "../../generated/graphql";
import {useAuth} from "../../hooks/useAuth";
import Spinner from "../Utils/Spinner";

const CartItems: React.FC = () => {
	const {user} = useAuth();
	const [cartItems, setCartItems] = useState<Cart[]>([]);

	const apolloClient = initializeApollo();

	const getUserCartItem = async () => {
		const data = await apolloClient.subscribe({
			query: GetUserCartSubscription,
			variables: {
				userId: user.id,
			},
		});

		if (data) {
			data.subscribe(({data: {cart}}) => {
				setCartItems(cart);
			});
			// setCartItems(data.data.cart);
		}
	};

	useEffect(() => {
		if (user) {
			getUserCartItem();
		}
	}, [user]);

	const getSubTotal = (cartItems: Cart[]): number => {
		let subTotal: number = 0;

		cartItems.forEach((cart) => {
			subTotal += (cart.product_type.discountedPrice ?? 0) * cart.count;
		});

		return subTotal;
	};

	return (
		<div className="cart-overlay" id="cart-overlay">
			<div className="cart-overlay-close inactive" />
			<div className="cart-overlay-content">
				{/*=======  close icon  =======*/}
				<span className="close-icon" id="cart-close-icon">
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
									<a>view cart</a>
								</Link>
								<Link href="/checkout">
									<a>checkout</a>
								</Link>
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

	const deleteCart = async () => {
		try {
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
					<span className="cart-count">{cart.count} x </span> <span className="discounted-price">₹{cart.product_type.discountedPrice}</span>
				</p>
			</div>
		</div>
	);
};

export default CartItems;
