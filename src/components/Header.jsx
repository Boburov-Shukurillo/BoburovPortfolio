import React, { useEffect, useState } from "react";
import telegram from "../assets/telegram.png";
import hamburgerBtn from "../assets/hamburgerBtn.svg";
import logo from "../assets/logo.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import close from "../assets/close.png";
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

  const [menu, setMenu] = useState("-left-full");
  const [top, setTop] = useState(0);

  const upTo = () => {
    window.scrollTo({ top: top, behavior: "smooth" });
  };
  return (
    <header>
      <div
        className={`py-3 ${
          blur ? "backdrop-blur-xl bg-darkenBlue/80" : ""
        } myFont w-full z-30 fixed top-0 bg-darkenBlue backdrop-blur-xl`}
      >
        <div className="containerb flex items-center justify-between h-14">
          <Link className="flex items-center justify-between w-1/2">
            <h1 className="text-2xl text-white w-full leading-5">
              <Link to="/"> Boburov.Dev</Link>
            </h1>
          </Link>
          <div className="w-full flex items-center justify-end gap-x-20 max-md:justify-end max-md:mr-5">
            <nav className="w-1/4 max-mini_screen:hidden">
              <ul className="flex items-center justify-end gap-x-10 text-white font-bold">
                <li onClick={() => setTop(0)}>
                  <span onClick={upTo} className="cursor-pointer">
                    Home
                  </span>
                </li>
                <li onClick={() => setTop(1300)}>
                  <span onClick={upTo} className="cursor-pointer">
                    About
                  </span>
                </li>
                <li onClick={() => setTop(2000)}>
                  <span onClick={upTo} className="cursor-pointer">
                    Projects
                  </span>
                </li>
                <li onClick={() => setTop(2500)}>
                  <span onClick={upTo} className="cursor-pointer">
                    Contact
                  </span>
                </li>
              </ul>
            </nav>
          </div>

          <button
            onClick={() => setMenu("left-0")}
            className="transition-all hidden max-mini_screen:block"
          >
            <img src={hamburgerBtn} className="w-20" alt="" />
          </button>
        </div>
      </div>
      <div
        className={`fixed z-50 w-full h-full bg-white transition-all  items-center justify-center ${menu}`}
      >
        <nav className="w-full px-10 myFont relative ">
          <img
            src={close}
            className="w-5 absolute right-6 top-8 cursor-pointer"
            onClick={() => setMenu("-left-full")}
            alt="close"
          />
          <ul className="max-w-[500px] flex flex-col items-start justify-end gap-x-10 text-black font-bold gap-y-10 text-2xl py-20">
            <li className="cursor-pointer">
              <span>
                <a>Home</a>
              </span>
            </li>
            <li className="cursor-pointer">
              <span>
                <a>About</a>
              </span>
            </li>
            <li className="cursor-pointer">
              <span>
                <a>Projects</a>
              </span>
            </li>
            <li className="cursor-pointer">
              <span>
                <a>Contact</a>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
