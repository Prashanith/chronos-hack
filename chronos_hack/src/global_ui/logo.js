import React from 'react';
import './logo.css'
import logo from '../assets/logo.JPG';
/**
 * 
 * @returns ReliefRider's Logo
 */
const Logo = ( {height}) => {
    return (

        <div className="logo-container" >
        <img src={logo} height={height} alt="logo" />
        </div>
     );
}
 
export default Logo;