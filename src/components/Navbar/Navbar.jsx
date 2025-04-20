import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <div className="menu-items">
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">SERVICES</a>
        <a href="#">FAQs</a>
        <a href="#">TESTIMONIALS</a>
        <a href="#">CONTACT US</a>
      </div>

      {/* Responsive menu */}
      <div className="responsive-menu">
        <div className="rm-menu-icon" onClick={() => setMenuOpen(true)}>
          <TbMenuDeep className="rmi-icon" />
        </div>

        <div className={`rm-menu ${menuOpen ? "open" : ""}`}>
          <div className="rm-close-icon" onClick={() => setMenuOpen(false)}>
            <IoClose />
          </div>
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">SERVICES</a>
          <a href="#">FAQs</a>
          <a href="#">TESTIMONIALS</a>
          <a href="#">CONTACT US</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
