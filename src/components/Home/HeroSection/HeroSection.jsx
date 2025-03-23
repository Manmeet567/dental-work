import React from "react";
import "./HeroSection.css";
import bg from "../../../assets/bg-3.png";
import smile from "../../../assets/smile.png";
import girl from "../../../assets/girl.png";

function HeroSection() {
  return (
    <div className="hero-section container-wrapper">
      <img src={bg} alt="bg" />
      <img src={smile} alt="smile" />
      <img src={girl} alt="girl" />
      <div className="hs-content">
        <p>Smiles That Sparkle,</p>
        <p>Care That Shines!</p>
        <p>Your Beautiful Smile is Just a Visit Away!</p>
        <button>Book a Smile :)</button>
      </div>
    </div>
  );
}

export default HeroSection;
