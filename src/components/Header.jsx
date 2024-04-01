import React, { useEffect, useState } from "react";
import telegram from "../assets/telegram.png";
import hamburgerBtn from "../assets/hamburgerBtn.svg";
import logo from "../assets/logo.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Header = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);
  const [blur, setBlur] = useState();
  window.onscroll = (e) => {
    if (window.pageYOffset > 80) {
      setBlur(true);
    } else {
      setBlur(false);
    }
  };
  return (
    <header
      className={`py-3 ${
        blur ? "backdrop-blur-xl bg-darkenBlue/80" : ""
      } myFont w-full z-30 fixed top-0 bg-darkenBlue backdrop-blur-xl`}
    >
      <div className="containerb flex items-center justify-between h-14">
        <Link className="flex items-center justify-between w-1/2">
          <h1 className="text-2xl text-white w-full leading-5">Boburov.Dev</h1>
        </Link>
        <div className="w-full flex items-center justify-end gap-x-20 max-md:justify-end max-md:mr-5">
          <nav className="w-1/4 max-md:hidden">
            <ul className="flex items-center justify-end gap-x-10 text-white font-bold">
              <li className="cursor-pointer">
                <a href="#home">Home</a>
              </li>
              <li className="cursor-pointer">
                <a href="#about">About</a>
              </li>
              <li className="cursor-pointer">
                <a href="#projects">Projects</a>
              </li>
              <li className="cursor-pointer">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <button className="hidden max-sm:block">
          <img src={hamburgerBtn} className="w-20" alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
