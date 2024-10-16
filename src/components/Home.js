//here we have install a new library called typed.js to show text typed in browser

// and for animation  we install library animatioin on scroll typing npm i aos
import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";
const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My name is Washim",
        "I am a new web developer",
      ],
      typeSpeed: 70,
      back: 70,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-4"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
