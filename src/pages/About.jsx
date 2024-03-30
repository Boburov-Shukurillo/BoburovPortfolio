import React, { useEffect, useState } from "react";
import PortfolioImg from "../assets/photo.png";
import email from "../assets/email.png";
import telegram from "../assets/telegram.png";
import GitHub from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instalog.png";

import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);
  const [blur, setBlur] = useState("");
  return (
    <div className="py-20" id="home" data-aos="zoom-in">
      <div className="containerb flex items-center justify-between max-sm:flex-col">
      <img
          src={PortfolioImg}
          alt="portfolio"
          className="w-2/5 h-full rounded-full object-cover max-sm:w-2/3 hidden max-sm:block " 
        />
        <div className="w-full max-md:w-4/5 max-sm:text-center">
          <h1 className="ZingDemo text-6xl font-bold myFont text-white mb-9 max-lg:text-4xl max-md:text-3xl max-sm:text-xl">
            Hi 👋 I'm <span>Boburov Shukurillo</span> I'm
            <span className="text-cyan-600"> Frontend React </span> Developer 🧑‍💻
          </h1>
          <div className="w-full flex justify-start gap-x-5 max-sm:gap-x-1 max-sm:justify-center">
            <a href="https://github.com/Boburov-Shukurillo" target="_blank">
              <img
                src={GitHub}
                className="w-10 border-2 rounded-full max-md:w-5"
                alt="email icon"
              />
            </a>

            <a
              href="https://gmail.com/boburovshukurilo@gmail.com"
              target="_blank"
            >
              <img
                src={email}
                className=" w-10 border-2 rounded-full max-md:w-5"
                alt="email icon"
              />
            </a>

            <a href="https://web.telegram.org/BoburovSh" target="_blank">
              <img
                src={telegram}
                className="w-10 border-2 rounded-full max-md:w-5"
                alt="email icon"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/shukurilo-boburov-a037222b8/"
              target="_blank"
            >
              <img
                src={linkedin}
                className="w-10 border-2 rounded-full max-md:w-5"
                alt="email icon"
              />
            </a>

            <a href="https://www.instagram.com/__im_better__" target="_blank">
              <img
                src={instagram}
                className="w-10 border-2 rounded-full max-md:w-5 p-1 bg-white"
                alt="email icon"
              />
            </a>
          </div>
        </div>
        <img
          src={PortfolioImg}
          alt="portfolio"
          className="w-2/5 h-full rounded-full object-cover max-sm:w-1/2 block max-sm:hidden" 
        />
      </div>
    </div>
  );
};

export default About;
