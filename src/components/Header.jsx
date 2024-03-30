import React, { useEffect } from "react";
import telegram from "../assets/telegram.png";
import hamburgerBtn from "../assets/hamburgerBtn.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Header = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);
  return (
    <header className="bg-slate-700 py-3 ZingDemo">
      <div className=" containerb flex items-center justify-between">
        <div className="w-full flex items-center justify-end gap-x-20 max-md:justify-end max-md:mr-5">
          <nav className="w-1/4 max-md:hidden">
            <ul className="flex items-center justify-end gap-x-10 text-white font-bold">
              <li className="cursor-pointer">
                <a href="#home">Home</a>
              </li>

              <li className="cursor-pointer">
                <a href="#projects">Projects</a>
              </li>

              <li className="cursor-pointer">
                <a href="#skils">Skill</a>
              </li>
            </ul>
          </nav>

          <a
            href="https://t.me/BoburovSh"
            className="px-4 py-2 rounded-xl border-2 flex items-center gap-x-5 text-white font-bold hover:opacity-60 transition-all max-md:px-2 max-md:py-2  max-md:text-sm"
          >
            <img
              src={telegram}
              className="rounded-full w-7 border-2 max-md:w-5"
              alt="telegram icon"
            />
            <span className="max-md:hidden">Telegram</span>
          </a>
        </div>
        <button className="hidden max-sm:block">
          <img src={hamburgerBtn} className="w-20" alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
