import React from "react";
import logo from "../../assets/logo.png";
import { HiLocationMarker } from "react-icons/hi";
import { FaClock, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="f-header">
        <p>Your perfect smile starts here. </p>
        <div className="fh-mail">
          <input type="email" placeholder="Email Address" />
          <a href="mailto:dr_amitverma@yahoo.co.in">Book a Smile</a>
        </div>
      </div>
      <div className="f-content">
        <div className="fc-box">
          <img src={logo} alt="logo" />
          <p>
            Unique Dental Care makes oral health hassle-free with a
            user-friendly platform for booking dental appointments.
          </p>
          <p style={{ fontSize: "14px" }}>
            <i>
              "Please note that the clinic is closed on{" "}
              <strong>Tuesdays</strong>."
            </i>
          </p>
        </div>
        <div className="fc-box">
          <p>LOCATION</p>
          <div className="fc-location">
            <HiLocationMarker
              style={{
                color: "#fff",
                opacity: "60%",
                fontSize: "30px",
                marginRight: "10px",
              }}
            />
            <a href="https://maps.app.goo.gl/oPtsNR6yEKet6AXb7" target="_blank">
              Clinic 1 :<br />S - 97, Vishwas Park, Sector - 3, Dwarka, New
              Delhi - 59
            </a>
          </div>
          <div className="fc-location">
            <HiLocationMarker
              style={{
                color: "#fff",
                opacity: "60%",
                fontSize: "30px",
                marginRight: "10px",
              }}
            />
            <a
              href="https://maps.app.goo.gl/zhtBqVzoReS3rJQZ6?g_st=aw"
              target="_blank"
            >
              Clinic 2 :<br />D - Block, Kothi No. 122, Sector - 8, New Delhi -
              77
            </a>
          </div>
        </div>
        <div className="fc-box">
          <p>OPENING HOURS</p>
          <div className="ft-time">
            <FaClock
              style={{
                color: "#fff",
                opacity: "60%",
                fontSize: "24px",
                marginRight: "10px",
              }}
            />
            <p>
              Monday to Saturday
              <br />
              11:30 AM to 03:15 PM
            </p>
          </div>
          <div className="ft-time">
            <FaClock
              style={{
                color: "#fff",
                opacity: "60%",
                fontSize: "24px",
                marginRight: "10px",
              }}
            />
            <p>
              Monday to Saturday
              <br />
              06:00 PM to 9:00 PM
            </p>
          </div>
        </div>
        <div className="fc-box" id="contactUs">
          <p>CONTACT</p>
          <div className="ff-mail">
            <MdEmail
              style={{
                color: "#fff",
                opacity: "60%",
                fontSize: "24px",
                marginRight: "10px",
              }}
            />
            <a href="mailto:amitverma.dentist@gmail.com">
              amitverma.dentist@gmail.com
            </a>
          </div>
          <div className="ff-conatct">
            <FaPhone
              style={{
                color: "#fff",
                opacity: "60%",
                fontSize: "24px",
                marginRight: "10px",
              }}
            />
            <a href="tel:+919555578910">+91 9555578910</a>
          </div>
        </div>
      </div>
      <div className="f-bar">
        <div className="fb-menu">
          <a href="#home">HOME</a>
          <a href="#aboutUs">ABOUT US</a>
          <a href="#services">SERVICE</a>
          <a href="#faq">FAQ</a>
          <a href="#testimonials">TESTIMONIALS</a>
        </div>
        <p>Copyright © 2025 • UniqueDentalCare</p>
      </div>
    </div>
  );
}

export default Footer;
