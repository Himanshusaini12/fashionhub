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
const Header = ({ currentUser }) => (
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
        home
      </Link>
      <Link className="option" to="/shop">
        shop
      </Link>
      {currentUser ? (
        <button className="option" onClick={() => auth.signOut()}>
          Welcome {currentUser.displayName}
        </button>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
