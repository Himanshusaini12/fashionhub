import React from "react";

import CustomButton from "../custome-button/custome-button";

import "../cart-dropdown/cart-dropdown.scss";
import { connect } from "react-redux";
import CartItem from "./../cart-item/cart-item.jsx";
const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>

    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
