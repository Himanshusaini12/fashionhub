import React from "react";
import CartItem from "../../components/cart-item/cart-item.jsx";
import { connect } from "react-redux";
import "./../checkout/checkout.scss";
const CheckoutPage = ({ cartItems }) =>

  cartItems.map((cartItem) => <CartItem  key={cartItem.id} item={cartItem} />);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CheckoutPage);
