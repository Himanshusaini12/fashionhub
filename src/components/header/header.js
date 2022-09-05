import React from "react";
import {  Logo } from  '../../assets/logo.svg'
import {BrowserRouter as Router,Link,Routes,Switch} from 'react-router-dom'
import '../header/header.scss'


const Header =()=>(
    <div className="header">
     <Router>
         <img  className="logo" src={require('../../assets/logo.svg').default} alt='logo' />
         <div className="options">
         
          <Link className="option" to="/shop">shop</Link>
          <Link className="option" to="/shop">shop</Link>
          
         

                 
    </div></Router>

       
    </div>
)  
export default Header