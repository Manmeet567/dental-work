import { useState, useEffect } from "react";
import Slider from "react-slick";
import "./HomeTestimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    id: 1,
    name: "Rohit Kumar",
    stars: 5,
    review:
      "“I got recommended for Unique Dental Care by one of my friend. I had a very nice and safe experience. It was one of the very few clinics open during this pandemic, following strict sanitization measures. Also, the doctor reasons out and explains to us our ailment and its most suitable remedy at best price.”",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUfeOmdg-jc7qqqzT_urFJho3BrVOrRALs_FsGVviYk7wH2_W45=w60-h60-p-rp-mo-br200",
  },
  {
    id: 2,
    name: "kapil choudhary",
    stars: 5,
    review:
      "“Pain less treatment was performed by Dr Amit.. Dr Amit is a very humble human being he listens to your concerns and advises which is best treatment for you.. I’ve full faith in his diagnosis”",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWYgGWkzPhdRxu_XR-fkF_xPZNqEIZiPyf3rLLovjQQq7Zrr55R=w60-h60-p-rp-mo-br100",
  },
  {
    id: 3,
    name: "Sandeep Khurana",
    stars: 5,
    review:
      "“Two years back I visited at my relative place at Dwarka with my family ..my dad was facing issues with his teeths from long time we have visited multiple of the dental clinics in Faridabad but no one is able to fix my dad tooth properly in every 15-20 days i have to visit clinic for the same issue...my relatives told me about unique dental clinic in dwarka...trust me Dr. Amit Verma is the best dentist in whole Delhi NCR.”",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjU8kbts47uPof-mlkHis89uUIHQx_HwMLZQ1Mc4sdx_jEEYIYyU=w60-h60-p-rp-mo-br100",
  },
];

function StarRating({ count }) {
  return (
    <div className="star-rating">
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </div>
  );
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

function TestimonialCard({ testimonial }) {
  const [showFull, setShowFull] = useState(false);
  const width = useWindowWidth();
  const maxLength = width <= 500 ? 150 : 300;

  const shouldTrim = testimonial.review.length > maxLength;
  const trimmedText = testimonial.review.slice(0, maxLength);

  return (
    <div className="hts-card">
      <StarRating count={testimonial.stars} />
      <p>
        {showFull || !shouldTrim ? testimonial.review : `${trimmedText}...`}
        {shouldTrim && (
          <span
            className="read-more"
            onClick={() => setShowFull((prev) => !prev)}
          >
            {showFull ? " Show less" : " Read more"}
          </span>
        )}
      </p>
      <div className="ht-user">
        <img src={testimonial.img} alt={testimonial.name} />
        <div className="ht-user-info">
          <p>{testimonial.name}</p>
        </div>
      </div>
    </div>
  );
}

function HomeTestimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home-testimonials" id="testimonials">
      <p>Trusted By Families, from Kids To Your Grandparents</p>
      <div className="ht-slider">
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeTestimonials;
