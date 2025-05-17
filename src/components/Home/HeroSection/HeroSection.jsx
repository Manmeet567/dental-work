import React from "react";
import "./HeroSection.css";
import bg from "../../../assets/bg-3.png";
import smile from "../../../assets/smile.png";
import girl from "../../../assets/girl.png";
import Navbar from "../../Navbar/Navbar";

function HeroSection() {
  return (
    <div id="home" className="hero-section container-wrapper">
      <Navbar />
      <img src={bg} alt="bg" />
      <img src={smile} alt="smile" />
      <img src={girl} alt="girl" />
      <div className="hs-content">
        <p>Smiles That Sparkle,</p>
        <p>Care That Shines!</p>
        <p>Your Beautiful Smile is Just a Visit Away!</p>
        <button
          type="button"
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send/?phone=919555578910&text=Hello%2C+I%27d+like+to+book+a+dental+appointment.+Could+you+please+assist+me%3F&type=phone_number&app_absent=0",
              "_blank"
            );
          }}
        >
          Book a Smile :)
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
