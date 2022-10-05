import React from "react";
import { Logo } from "../../assets/logo.svg";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Switch,
} from "react-router-dom";
import "../header/header.scss";
import { auth } from "../firebase/firebase";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/">
      <img
        className="logo"
        src={require("../../assets/logo.svg").default}
        alt="logo"
      />
    </Link>
    <div className="options">
      <Link className="option" to="/">
        <img
          className="logo"
          src={require("../../assets/home.svg").default}
          alt="logo"
        />
      </Link>
      <Link className="option" to="/shop">
        <img
          className="logo"
          src={require("../../assets/shop.svg").default}
          alt="logo"
        />
      </Link>
      {currentUser ? (
        <button className="option" onClick={() => auth.signOut()}>
          Hi{currentUser.displayName}
        </button>
      ) : (
        <Link className="option" to="/signin">
          <img
            className="logo"
            src={require("../../assets/account.svg").default}
            alt="logo"
          />
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Header);
