import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import HomeAnalytics from "../components/Home/HomeAnalytics/HomeAnalytics";
import HomeServices from "../components/Home/HomeServices/HomeServices";
import HomeFaq from "../components/Home/HomeFaq/HomeFaq";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <HomeAnalytics />
      <HomeServices />
      <HomeFaq />
      <Footer />
    </div>
  );
}

export default Home;
