import React from "react";

import { Logo } from "../../assets/shopping-bag.svg";

import "../cart-icon/cart-icon.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <img
        className="shopping-icon"
        src={require("../../assets/shopping-bag.svg").default}
        alt="logo"
      />

      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
