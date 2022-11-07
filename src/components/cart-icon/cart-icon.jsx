import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { Logo } from "../../assets/shopping-bag.svg";

import "../cart-icon/cart-icon.scss";

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <img
        className="shopping-icon"
        src={require("../../assets/shopping-bag.svg").default}
        alt="logo"
      />
      {cartItems.price}
      <span className="item-count">{cartItems.name}</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
