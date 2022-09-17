import React from "react";

import "../form-input/form-input.scss";

const FormInput = ({ handleChange, lable, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
