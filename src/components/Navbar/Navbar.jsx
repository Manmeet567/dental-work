import React from 'react'
import logo from '../../assets/logo.png';
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt="logo" />
      <div className="menu-items">
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">SERVICES</a>
        <a href="#">FAQs</a>
        <a href="#">TESTIMONIALS</a>
        <a href="#">CONTACT US</a>
      </div>
    </div>
  )
}

export default Navbar