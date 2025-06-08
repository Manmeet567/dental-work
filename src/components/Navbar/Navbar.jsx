import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import publiclogo from "../../assets/publiclogo.png";
import "./Navbar.css";

const links = [
  { label: "HOME", id: "home" },
  { label: "ABOUT US", id: "aboutUs" },
  { label: "SERVICES", id: "services" },
  { label: "FAQs", id: "faq" },
  { label: "TESTIMONIALS", id: "testimonials" },
  { label: "CONTACT US", id: "contactUs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock/unlock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  return (
    <header className="navbar">
      <img src={logo} alt="logo" />

      {/* Desktop Navigation */}
      <nav className="menu-items">
        {links.map((link) => (
          <a key={link.id} href={`#${link.id}`}>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu */}
      <div className="responsive-menu">
        <button
          aria-label="Open menu"
          className="rm-menu-icon"
          onClick={() => setMenuOpen(true)}
        >
          <TbMenuDeep className="rmi-icon" />
        </button>

        {menuOpen && (
          <>
            {/* Blur Overlay (20% width) */}
            <div className="rm-overlay" onClick={() => setMenuOpen(false)} />

            {/* Slide-in Drawer */}
            <nav className="rm-menu rm-menu--anim-in">
              <button
                aria-label="Close menu"
                className="rm-close-icon"
                onClick={() => setMenuOpen(false)}
              >
                <IoClose />
              </button>
              <img style={{marginBottom:"30px"}} src={publiclogo} alt="logo" />
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
