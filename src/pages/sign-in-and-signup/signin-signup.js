import React from "react";
import SignIn from "../../components/signin/signin.js";
import SignUp from "../../components/sign-up/sign-up.js";
import "../sign-in-and-signup/sign-in-and-signup.scss";
const SignInandSignUpPage = () => (
  <div className="comp">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInandSignUpPage;
