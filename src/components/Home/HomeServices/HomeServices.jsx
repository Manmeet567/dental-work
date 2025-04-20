import React, { useState, useEffect } from "react";
import "./HomeServices.css";
import img1 from "../../../assets/services-1.jpeg";
import img2 from "../../../assets/services-2.jpeg";
import img3 from "../../../assets/services-3.jpeg";

function HomeServices() {
  const services = [
    {
      id: 0,
      title: "Redefine Your Smile",
      description: "with Cosmetic Dentistry!",
      sub_title: "Cosmetic Dentistry",
      sub_desc:
        "Transform Your Smile with Veneers, Whitening, and Smile Makeovers!",
      image: img1,
    },
    {
      id: 1,
      title: "Invest in Your Smile’s Future",
      description: "with Preventive Care!",
      sub_title: "Preventive Care",
      sub_desc:
        "Routine Checkups, Cleanings, and Exams to Keep Your Teeth Healthy for Life!",
      image: img2,
    },
    {
      id: 2,
      title: "Bringing Back Your Perfect Smile",
      description: "with Restorative Dentistry!",
      sub_title: "Restorative Dentistry",
      sub_desc:
        "Restore Function and Beauty with Fillings, Crowns, and Implants!",
      image: img3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="home-services"
      style={{
        backgroundImage: `url(${services[activeIndex].image})`,
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div className="hs-overlay"></div>
      <div className="hsv-content">
        <p>{services[activeIndex].title}</p>
        <p>{services[activeIndex].description}</p>
      </div>
      <div className="hsv-footer">
        <div
          className="hsv-active-bar"
          style={{
            left: `${activeIndex * 33.3}%`,
            transition: "left 0.3s ease-in-out",
          }}
        ></div>

        {screenWidth < 800 ? (
          <div
            key={services[activeIndex].id}
            className={`hsvf-item active`}
            style={{ opacity: 1 }}
          >
            <p>{services[activeIndex].sub_title}</p>
            <p>{services[activeIndex].sub_desc}</p>
          </div>
        ) : (
          services.map((service, index) => (
            <div
              key={service.id}
              className={`hsvf-item ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              style={{
                opacity: index === activeIndex ? 1 : 0.6,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <p>{service.sub_title}</p>
              <p>{service.sub_desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomeServices;
