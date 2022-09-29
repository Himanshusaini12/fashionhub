import "./App.css";
import React from "react";
import Homepage from "../src/pages/homepage";
import ShopPage from "./pages/shop/shop";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/header";
import SignInandSignUpPage from "../src/pages/sign-in-and-signup/signin-signup.js";
import {
  auth,
  createUserDocumentFromAuth,
} from "./components/firebase/firebase.js";
import { onSnapshot, doc } from "firebase/firestore";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
class App extends React.Component {
  unSubscribeAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const docRef = await createUserDocumentFromAuth(userAuth);
        onSnapshot(docRef, (doc) => {
          setCurrentUser({
            id: doc.id,
            ...doc.data(),
          });
          console.log(this.state);
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeAuth();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/shop" element={<ShopPage />} />
            <Route path="/signin" element={<SignInandSignUpPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  CurrentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
