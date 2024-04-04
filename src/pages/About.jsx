import React from "react";
import second from "../assets/aboutMe.webp";
const About = () => {
  return (
    <div
      id="about"
      className="text-white containerb flex flex-col justify-between items-center"
    >
      <h1 className="montserrat-medium text-4xl tracking-widest self-start mb-10">
        About
      </h1>
      <div className="flex mb-20 gap-x-20">
        <div className="w-full py-1">
          <img src={second} className="rounded-2xl w-full" alt="" />
        </div>
        <div className="w-full py-10 flex items-center justify-start flex-col">
          <p className="montserrat-light tracking-widest w-full  text-xl text-center mb-5">
            Hi I'm Frontend React Developer,
          </p>
          <p className="montserrat-light tracking-widest w-full text-xl  text-center mb-10">
            {" "}
            My name is Boburov Shukurillo, I'm Junior Young Developer I am
            Ecommers Sites{" "}
          </p>
          <p className="montserrat-light tracking-widest w-full text-xl  text-center">
            My freeTime I like create game in Javascroipt and React beacuse I
            like thi programming Language
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
