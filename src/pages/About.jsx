import React, { useState } from "react";
import PortfolioImg from "../assets/photo.png";
import email from "../assets/email.png";
import telegram from "../assets/telegram.png";
import GitHub from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instalog.png";
const About = () => {
  const [blur, setBlur] = useState("");
  return (
    <div className="py-20" id="home">
      <div className=" containerb flex items-center justify-between">
        <div className="w-full">
          <h1 className="text-6xl font-bold myFont text-white mb-9 ">
            Hi 👋 I'm <span>Boburov Shukurillo</span> I'm
            <span className="text-cyan-600"> Frontend React </span> Developer 🧑‍💻
          </h1>
          <div className="w-full flex justify-start gap-x-5">
            <a href="https://github.com/Boburov-Shukurillo" target="_blank">
              <img
                src={GitHub}
                className="w-10 border-2 rounded-full"
                alt="email icon"
              />
            </a>

            <a
              href="https://gmail.com/boburovshukurilo@gmail.com"
              target="_blank"
            >
              <img
                src={email}
                className=" w-10 border-2 rounded-full"
                alt="email icon"
              />
            </a>

            <a href="https://web.telegram.org/BoburovSh" target="_blank">
              <img
                src={telegram}
                className="w-10 border-2 rounded-full"
                alt="email icon"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/shukurilo-boburov-a037222b8/"
              target="_blank"
            >
              <img
                src={linkedin}
                className="w-10 border-2 rounded-full"
                alt="email icon"
              />
            </a>

            <a href="https://www.instagram.com/__im_better__" target="_blank">
              <img
                src={instagram}
                className="w-10 border-2 rounded-full p-1 bg-white"
                alt="email icon"
              />
            </a>
          </div>
        </div>
        <img
          src={PortfolioImg}
          alt="portfolio"
          className="w-2/5 h-full rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
