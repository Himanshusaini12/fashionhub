import "./App.css";
import React from "react";
import Homepage from "../src/pages/homepage";
import ShopPage from "./pages/shop/shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Signin from "./pages/sign-in/sign-in";
import SignInandSignUpPage from "../src/pages/sign-in-and-signup/signin-signup.js";
import {
  auth,
  createUserDocumentFromAuth,
} from "./components/firebase/firebase.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unSubscribeAuth = null;

  componentDidMount() {
    this.unSubscribeAuth = auth.onAuthStateChanged(async (user) => {
      createUserDocumentFromAuth(user);
      //console.log(user);
    });
  }
  componentWillUnmount() {
    this.unSubscribeAuth();
  }

  render() {
    return (
      <Router>
        <div>
          <Header currentUser={this.state.currentUser} />

          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/shop" element={<ShopPage />} />
            <Route exact path="/signin" element={<SignInandSignUpPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
