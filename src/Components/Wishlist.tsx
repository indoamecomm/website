import React from "react";

const Wishlist = () => {
	return (
		<div className="wishlist-overlay" id="wishlist-overlay">
			<div className="wishlist-overlay-close inactive" />
			<div className="wishlist-overlay-content">
				{/*=======  close icon  =======*/}
				<span className="close-icon" id="wishlist-close-icon">
					<a href="javascript:void(0)">
						<i className="ion-android-close" />
					</a>
				</span>
				{/*=======  End of close icon  =======*/}
				{/*=======  offcanvas wishlist content container  =======*/}
				<div className="offcanvas-cart-content-container">
					<h3 className="cart-title">Wishlist</h3>
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
										<img src="/images/cart-product-image/01.jpg" className="img-fluid" alt="" />
									</a>
								</div>
								<div className="content">
									<h5>
										<a href="shop-product-basic.html">Indam Hybrid</a>
									</h5>
									<p>
										<span className="main-price discounted">₹200.00</span> <span className="discounted-price">₹180.00</span>
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
										<img src="/images/cart-product-image/02.jpg" className="img-fluid" alt="" />
									</a>
								</div>
								<div className="content">
									<h5>
										<a href="shop-product-basic.html">INDAM MARSHALL</a>
									</h5>
									<p>
										<span className="main-price discounted">₹300.00</span> <span className="discounted-price">₹220.00</span>
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
										<img src="/images/cart-product-image/03.jpg" className="img-fluid" alt="" />
									</a>
								</div>
								<div className="content">
									<h5>
										<a href="shop-product-basic.html">INDAM GULAB</a>
									</h5>
									<p>
										<span className="main-price discounted">₹100.00</span> <span className="discounted-price">₹80.00</span>
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
										<img src="/images/cart-product-image/01.jpg" className="img-fluid" alt="" />
									</a>
								</div>
								<div className="content">
									<h5>
										<a href="shop-product-basic.html">INDAM REDSTONE</a>
									</h5>
									<p>
										<span className="main-price discounted">₹200.00</span> <span className="discounted-price">₹180.00</span>
									</p>
								</div>
							</div>
							{/*=======  End of single cart product  =======*/}
						</div>
						{/*=======  cart buttons  =======*/}
						<div className="cart-buttons">
							<a href="shop-wishlist.html">view wishlist</a>
						</div>
						{/*=======  End of cart buttons  =======*/}
					</div>
				</div>
				{/*=======  End of offcanvas wishlist content container   =======*/}
			</div>
		</div>
	);
};

export default Wishlist;
