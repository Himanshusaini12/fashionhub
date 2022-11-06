import React from "react";
import CartItem from "../../components/cart-item/cart-item.jsx";
import { connect } from "react-redux";
import "./../checkout/checkout.scss";
const CheckoutPage = ({ cartItems }) => (
  <div>
    {cartItems.map((cartItem) => (
      <div className="checkout">
        {cartItem.id}
        <img className="img" src={cartItem.imageUrl} alt="item" />
        <span className="name">{cartItem.name}</span>
      </div>
    ))}
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CheckoutPage);
