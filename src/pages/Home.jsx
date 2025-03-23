import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import HomeAnalytics from "../components/Home/HomeAnalytics/HomeAnalytics";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <HomeAnalytics />
    </div>
  );
}

export default Home;
