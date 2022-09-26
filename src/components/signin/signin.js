import React from "react";
import FormInput from "../../components/form-input/form-input.js";
import "../signin/signin.scss";
import CustomButton from "../../components/custome-button/custome-button.js";
import { auth, signInWithGoogle } from "../../components/firebase/firebase";
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(auth,email, password);
    } catch (error) {
      console.log(error);
    }

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
          <FormInput
            name="email"
            type="email"
            lable="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <label>email</label>
          <FormInput
            type="password"
            name="password"
            lable="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <label>password</label>
          <CustomButton type="submit">Sign in</CustomButton>
        </form>
        <CustomButton googleSignin onClick={signInWithGoogle}>
          Sign in with google
        </CustomButton>
      </div>
    );
  }
}

export default SignIn;
