import React from "react";
import "../../components/custome-button/custome-button.scss";

const CustomButton = ({ children, googleSignin, ...otherProps }) => (
  <button
    className={`${googleSignin ? "googleSignin" : " "} custom-button `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
