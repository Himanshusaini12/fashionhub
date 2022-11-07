import React from "react";
import CartItem from "../../components/cart-item/cart-item.jsx";
import { connect } from "react-redux";
import "./../checkout/checkout.scss";
const CheckoutPage = ({ cartItems }) => (
  <div>
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>

      <div className="header-block">
        <span>Description</span>
      </div>

      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Price</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <div className="checkout">
        {cartItem.id}
        <img className="img" src={cartItem.imageUrl} alt="item" />
        <span className="name">{cartItem.name}</span>
        <span className="quantity">{cartItem.quantity}</span>
        <span className="price">{cartItem.price}</span>
      </div>
    ))}
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CheckoutPage);
