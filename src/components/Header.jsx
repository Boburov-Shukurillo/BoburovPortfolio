import React from "react";
import Portfolio from "../assets/Boburov.png";
import telegram from "../assets/telegram.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-slate-700 py-3">
      <div className=" containerb flex items-center justify-between">
        <img
          src={Portfolio}
          className="h-16  mix-blend-lighten"
          alt="Portfolio img"
        />
        <div className="w-full flex items-center justify-end gap-x-20">
          <nav className="w-1/4">
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
            className="px-4 py-2 rounded-xl border-2 flex items-center gap-x-5 text-white font-bold hover:opacity-60 transition-all "
          >
            <img
              src={telegram}
              className="rounded-full w-7 border-2"
              alt="telegram icon"
            />
            Telegram
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
