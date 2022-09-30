import React from "react";

import CustomButton from "../custome-button/custome-button";

import "../cart-dropdown/cart-dropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>

      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
