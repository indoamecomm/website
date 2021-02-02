import React from "react";

const Cart: React.FC = () => {
	return (
		<div className="cart-overlay" id="cart-overlay">
			<div className="cart-overlay-close inactive" />
			<div className="cart-overlay-content">
				{/*=======  close icon  =======*/}
				<span className="close-icon" id="cart-close-icon">
					<a href="javascript:void(0)">
						<i className="ion-android-close" />
					</a>
				</span>
				{/*=======  End of close icon  =======*/}
				{/*=======  offcanvas cart content container  =======*/}
				<div className="offcanvas-cart-content-container">
					<h3 className="cart-title">Cart</h3>
					<div className="cart-product-wrapper">
						<div className="cart-product-container ps-scroll">
							{/*=======  single cart product  =======*/}
							<div className="single-cart-product">
								<span className="cart-close-icon">
									<a href="#">
										<i className="ti-close" />
									</a>
								</span>
								<div className="image">
									<a href="shop-product-basic.html">
										<img src="assets/images/cart-product-image/01.jpg" className="img-fluid" alt="" />
									</a>
								</div>
								<div className="content">
									<h5>
										<a href="shop-product-basic.html">INDAM MARSHALL</a>
									</h5>
									<p>
										<span className="cart-count">2 x </span> <span className="discounted-price">₹180.00</span>
									</p>
								</div>
							</div>
							{/*=======  End of single cart product  =======*/}
							{/*=======  single cart product  =======*/}
							<div className="single-cart-product">
								<span className="cart-close-icon">
									<a href="#">
										<i className="ti-close" />
									</a>
								</span>
								<div className="image">
									<a href="shop-product-basic.html">
										<img src="assets/images/cart-product-image/02.jpg" className="img-fluid" alt="" />
									</a>
								</div>
								<div className="content">
									<h5>
										<a href="shop-product-basic.html">INDAM GULAB</a>
									</h5>
									<p>
										<span className="cart-count">2 x </span> <span className="discounted-price">₹220.00</span>
									</p>
								</div>
							</div>
							{/*=======  End of single cart product  =======*/}
						</div>
						{/*=======  subtotal calculation  =======*/}
						<p className="cart-subtotal">
							<span className="subtotal-title">Subtotal:</span>
							<span className="subtotal-amount">₹200.00</span>
						</p>
						{/*=======  End of subtotal calculation  =======*/}
						{/*=======  cart buttons  =======*/}
						<div className="cart-buttons">
							<a href="shop-cart.html">view cart</a>
							<a href="shop-checkout.html">checkout</a>
						</div>
						{/*=======  End of cart buttons  =======*/}
						{/*=======  free shipping text  =======*/}
						<p className="free-shipping-text">Free Shipping on All Orders Over ₹100!</p>
						{/*=======  End of free shipping text  =======*/}
					</div>
				</div>
				{/*=======  End of offcanvas cart content container   =======*/}
			</div>
		</div>
	);
};

export default Cart;
