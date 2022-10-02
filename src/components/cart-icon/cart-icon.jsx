import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { Logo } from "../../assets/shopping-bag.svg";

import "../cart-icon/cart-icon.scss";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <img
        className="shopping-icon"
        src={require("../../assets/shopping-bag.svg").default}
        alt="logo"
      />

      <span className="item-count">0</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
