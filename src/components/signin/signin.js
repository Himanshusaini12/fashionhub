import React from "react";
import FormInput from "../../components/form-input/form-input.js";
import "../signin/signin.scss";
import CustomButton from "../../components/custome-button/custome-button.js";
import { auth, signInWithGoogle } from "../../components/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
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
      await signInWithEmailAndPassword(auth, email, password);
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
        <h2> Already have an account?</h2>
        <span>Sign in with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          <label>email</label>
          <FormInput
            name="email"
            type="email"
            lable="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <label>password</label>
          <FormInput
            type="password"
            name="password"
            lable="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

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
