import React, { useState, useEffect } from "react";
import "./HomeAnalytics.css";
import happyImage from "../../../assets/happy-image.jpeg";

function HomeAnalytics() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 840);

  // Function to update the state based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 840);
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="aboutUs" className="home-analytics">
      <div className="ha-content">
        {isMobileView && (
          <div className="hac-text">
            <p>About Us</p>
            <p>Caring for Smiles,</p>
            <p>Big and Small</p>
            <p>Your Family’s Trusted Dental Home!</p>
          </div>
        )}

        <img src={happyImage} alt="happy" className="ha-happy-image" />

        <div className="hac-right">
          {!isMobileView && (
            <>
              <p>About Us</p>
              <p>Caring for Smiles,</p>
              <p>Big and Small</p>
              <p>Your Family’s Trusted Dental Home!</p>
            </>
          )}

          <div className="ha-analytics">
            <div className="haa-container">
              <p>17+</p>
              <p>Years of Experience</p>
            </div>
            <div className="haa-container">
              <p>1000+</p>
              <p>Happy Clients</p>
            </div>
            <div className="haa-container">
              <p>100%</p>
              <p>Transparent Rate</p>
            </div>
            <div className="haa-container">
              <p>100+</p>
              <p>Dental Implants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAnalytics;
