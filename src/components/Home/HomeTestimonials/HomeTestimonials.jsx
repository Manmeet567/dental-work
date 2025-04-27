import React from "react";
import Slider from "react-slick";
import "./HomeTestimonials.css";
import userpfp from "../../../assets/user-pfp.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    id: 1,
    name: "Aman Sharma",
    role: "Business",
    review:
      "“Artbox transformed our outdated website into a modern, user-friendly platform. Their attention to detail and innovative solutions exceeded our expectations. Highly recommend their services!”",
    img: userpfp,
  },
  {
    id: 2,
    name: "Aman Sharma",
    role: "Business",
    review:
      "“Artbox transformed our outdated website into a modern, user-friendly platform. Their attention to detail and innovative solutions exceeded our expectations. Highly recommend their services!”",
    img: userpfp,
  },
  {
    id: 3,
    name: "Aman Sharma",
    role: "Business",
    review:
      "“Artbox transformed our outdated website into a modern, user-friendly platform. Their attention to detail and innovative solutions exceeded our expectations. Highly recommend their services!”",
    img: userpfp,
  },
  {
    id: 4,
    name: "Aman Sharma",
    role: "Business",
    review:
      "“Artbox transformed our outdated website into a modern, user-friendly platform. Their attention to detail and innovative solutions exceeded our expectations. Highly recommend their services!”",
    img: userpfp,
  },
];

function HomeTestimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // <== Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // tablet and below
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home-testimonials">
      <p>Trusted By Families, from Kids To Your Grandparents</p>
      <div className="ht-slider">
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="hts-card">
              <p>{testimonial.review}</p>
              <div className="ht-user">
                <img src={testimonial.img} alt="pfp" />
                <div className="ht-user-info">
                  <p>{testimonial.name}</p>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeTestimonials;
