import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1 className="cont_head">CONTACT ME</h1>
        <div
          className="contact-icon "
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <a
            href="https://www.instagram.com/w_a_s_h_i_m57/profilecard/?igsh=MXJkeHg5cDE1dGxuMQ=="
            className="items"
          >
            <FaSquareInstagram className="icons" />
          </a>
          <a
            href="https://www.facebook.com/washim.choudhury.3/"
            className="items icons"
          >
            <FaFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/washim-choudhury-724455192?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="items icons"
          >
            <FaLinkedin className="icons" />
          </a>
          <a href="https://wa.me/qr/Q37GXE6R7DVQD1" className="items icons">
            <FaWhatsappSquare className="icons" />
          </a>
          <a href="mailto:washimchoudhury3@gmail.com " className="items icons">
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
//for icon we will write npm i react-icons
