import React from "react";

import "../signin/signin.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "hiii@msn.com",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    

    this.setState({ email: " ", password: "" });
  };
  handleChange = (event) => {
 //   alert("hii");
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>i already have an account</h2>
        <span>sign in with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>email</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            onChange={this.handleChange}
          />
          <label>password</label>
          <input
            type="submit"
            value="submit form"
            onSubmit={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default SignIn;
