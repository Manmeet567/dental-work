import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import HomeAnalytics from "../components/Home/HomeAnalytics/HomeAnalytics";
import HomeServices from "../components/Home/HomeServices/HomeServices";
import HomeFaq from "../components/Home/HomeFaq/HomeFaq";
import Footer from "../components/Footer/Footer";
import HomeTestimonials from "../components/Home/HomeTestimonials/HomeTestimonials";

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <HomeAnalytics />
      <HomeServices />
      <HomeFaq />
      <HomeTestimonials />
      <Footer />
    </div>
  );
}

export default Home;
