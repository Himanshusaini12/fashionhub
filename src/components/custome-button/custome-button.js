import React from "react";

import Button from "@mui/material/Button";

const CustomButton = ({ children, googleSignin, inverted, ...otherProps }) => (
  <Button variant="contained" {...otherProps}>
    {children}
  </Button>
);

export default CustomButton;
