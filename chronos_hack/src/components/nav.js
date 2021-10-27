import React from 'react';
import { Navbar } from "react-bootstrap";
import './navbar.css';
import Logo from '../assets/logo.JPG';

export default function NavBar() {
    return (
        <div id='nav-bar' className='nav-bar'
        >
        <span className="logo">
            <img src={Logo} height="20" width="30"/>
            <span style={{marginLeft:'20px'}}>Farmhouse</span>
        </span>    
        <div  className='nav-links'>
      
            <a  href="/">Home</a>
            <a  href="#aboutUs">About</a>       
            <a  href="/loginVendor" >Login as Vendor</a>
            <a  href="/loginFarmer" >Login as Farmer</a>
            <a  href="/shop" >Shop</a>

        </div>
        
        </div>
    )
}
