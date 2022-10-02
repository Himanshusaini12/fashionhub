import React from "react";
import "../../components/custome-button/custome-button.scss";

const CustomButton = ({ children, googleSignin, inverted,...otherProps }) => (
  <button
    className={`${inverted ? "googleSignin" : " "}${googleSignin ? "googleSignin" : " "} custom-button `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
