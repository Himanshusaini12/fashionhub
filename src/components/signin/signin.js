import React from "react";

import '../signin/signin.scss'

class SignIn extends React.Component{

    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }

    }

    handleSubmit=event=>{
        event.preventDefault();
       
        this.setstate({email:' ',password:''});

    };

    
    render(){
        return(
            <div className="sign-in">
                <h2>i already have an account</h2>
                <span>sign in with your email and password </span>


                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" value={this.state.email} required onChange={this.handleChange}/>
                    <label>email</label>
                    <input type="password" name="password" value={this.state.password}required onChange={this.handleChange}/>
                    <label>password</label>
                    <input type="submit" value="submit form" onSubmit={this.handleSubmit}/>
                </form>
            </div>
        )
    }
    }



    export default SignIn   