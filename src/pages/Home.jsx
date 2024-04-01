import React, { useEffect } from "react";
import { games, projects } from "../data";
import gitIcon from "../assets/github.png";
import netlifyIcon from "../assets/netlify_logo_icon.png";
import Aos, { AOS } from "aos";
import "aos/dist/aos.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import boostrap from "../assets/bootstrap.png";
import javascript from "../assets/js.png";
import react from "../assets/react.png";
import PortfolioImg from "../assets/portfolioLogo.webp";
import Contact from "./Contact";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);
  return (
    <div className="bg-slate-700">
      <div
        className={`py-40 bg-slate-700  bg-contain bg-center max-1700:bg-cover`}
        id="home"
        data-aos="fade-in"
      >
        <div className="containerb flex items-center justify-between max-sm:flex-col">
          <img
            src={PortfolioImg}
            alt="portfolio"
            className="w-2/4 h-1/2 rounded-full object-cover max-sm:w-2/3 hidden max-sm:block mix-blend-color-burn"
          />
          <div className="w-full max-md:w-4/5 max-sm:text-center flex flex-col gap-y-7">
            <h1 className="text-7xl font-bold ZingDemo text-white max-lg:text-4xl max-md:text-3xl max-sm:text-xl">
              Front-End React <br />
              Developer 👋
            </h1>
            <p className="text-xl text-gray-400 mb-5 myFont w-2/3">
              Hi, I'm Boburov Shukurillo. A passionate Frontend React Developer
              based in Chinabod , Uzbekistan📍
            </p>
            <div className="w-full flex items-center justify-start gap-x-5">
              <span className="text-xl tracking-widest text-white myFont">
                Teach Stack
              </span>
              <span className="inline-block w-0.5 h-10 bg-gray-500"></span>
              <div className="w-1/2 flex justify-start gap-x-10 max-sm:gap-x-1 max-sm:justify-center">
                <img
                  src={html}
                  alt="html png"
                  className="w-12 h-10 object-contain"
                />
                <img
                  src={css}
                  alt="html png"
                  className="w-12 h-10 object-contain"
                />
                <img
                  src={javascript}
                  alt="html png"
                  className="w-12 h-10 object-contain"
                />
                <img
                  src={react}
                  alt="html png"
                  className="w-12 h-10 object-contain"
                />
                <img
                  src={tailwind}
                  alt="html png"
                  className="w-12 h-10 object-contain"
                />
                <img
                  src={boostrap}
                  alt="html png"
                  className="w-12 h-10 object-contain"
                />
              </div>
            </div>
          </div>
          <img
            src={PortfolioImg}
            alt="portfolio"
            className="w-96 h-96 rounded-full object-cover max-sm:w-1/2 block max-sm:hidden"
          />
        </div>
      </div>

      {/* <About /> */}

      <div id="projects">
        <div className="containerb">
          <h1 className="text-2xl myFont text-blue-300 tracking-widest mb-2">
            Projects
          </h1>
          <p className="text-4xl myFont text-white mb-10">
            Each project is a unique piece of development 🧩
          </p>
          <ul className="flex flex-col items-center gap-y-24">
            {projects.map((project, index) => {
              if (index % 2 == 0) {
                return (
                  <li
                    key={project.id}
                    className="flex items-start justify-between gap-x-10 h-96"
                  >
                    <img
                      src={project.img}
                      alt={project.projectName + " png"}
                      className="rounded-xl w-733 object-cover object-right h-full"
                    />
                    <div className="w-1/2 flex flex-col items-center justify-center h-full">
                      <h2
                        className="text-3xl myFont text-white tracking-widest mb-5"
                        data-aos="fade-in"
                      >
                        {project.projectName}
                      </h2>
                      <p className="text-lg font-mono font-semibold text-slate-400 mb-7 text-center">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-5 mb-5">
                        {project.usingLanguage.map((pl, index) => {
                          return (
                            <h4
                              key={index}
                              className="myFont text-xl text-white tracking-widest"
                            >
                              #{pl}
                            </h4>
                          );
                        })}
                      </div>

                      <div className="w-full flex items-center justify-center gap-x-5">
                        <a
                          href={project.gitHb}
                          className="text-white flex items-center justify-center gap-x-5 px-5 h-14 border-2 rounded-xl w-40 text-base myFont backdrop-blur-lg bg-white/20 stroke-black"
                        >
                          Code
                          <img
                            src={gitIcon}
                            className="w-7"
                            alt="git hub icon"
                          />
                        </a>

                        <a
                          href={project.netlify}
                          className="text-white flex items-center justify-center gap-x-2 px-5 h-14 border-2 rounded-xl w-40 text-base myFont backdrop-blur-lg bg-white/20 stroke-black"
                        >
                          Live Demo
                          <img
                            src={netlifyIcon}
                            className="w-7"
                            alt="open demo"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li
                    data-aos="fade-in"
                    key={project.id}
                    className="flex items-start justify-between gap-x-10 h-96"
                  >
                    <div className="w-1/3 flex flex-col items-start justify-center h-full">
                      <h2 className="text-3xl myFont text-white tracking-widest mb-5">
                        {project.projectName}
                      </h2>
                      <p className="text-lg font-mono font-semibold text-slate-400 mb-7 text-justify">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-5 mb-5">
                        {project.usingLanguage.map((pl) => {
                          return (
                            <h4 className="myFont text-xl text-white">{pl}</h4>
                          );
                        })}
                      </div>

                      <div className="w-full flex items-center justify-center gap-x-5">
                        <a
                          href={project.gitHb}
                          className="text-white flex items-center justify-center gap-x-5 px-5 h-14 border-2 rounded-xl w-40 text-base myFont backdrop-blur-lg bg-white/20 stroke-black"
                        >
                          Code
                          <img
                            src={gitIcon}
                            className="w-7"
                            alt="git hub icon"
                          />
                        </a>

                        <a
                          href={project.netlify}
                          className="text-white flex items-center justify-center gap-x-2 px-5 h-14 border-2 rounded-xl w-40 text-base myFont backdrop-blur-lg bg-white/20 stroke-black"
                        >
                          Live Demo
                          <img
                            src={netlifyIcon}
                            className="w-7"
                            alt="open demo"
                          />
                        </a>
                      </div>
                    </div>

                    <img
                      src={project.img}
                      alt={project.projectName + " png"}
                      className="rounded-xl w-2/3 h-full"
                    />
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>

      <div className="py-10">
        <div className="containerb">
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            modules={[Pagination, Navigation]}
            pagination
            navigation
            className="gamesSwiper"
          >
            {games.map((game) => {
              return (
                <SwiperSlide key={game.id}>
                  <li
                    data-aos="fade-in"
                    key={game.id}
                    className="h-450px rounded-xl overflow-hidden p-4 border-2 text-white border-white flex flex-col justify-between items-center text-center bg-white/20   transition-all"
                  >
                    <img
                      src={game.img}
                      className="w-full h-1/2 object-cover rounded-lg"
                      alt={game.projectName + " "}
                    />
                    <h3 className="text-2xl font-bold">{game.projectName}</h3>
                    <p className=" font-semibold">{game.description}</p>
                    <div className="flex justify-between w-full gap-x-7">
                      <a
                        target="_blank"
                        href={game.gitHb}
                        className="w-full py-3 border-2 rounded-xl bg-slate-900 text-white flex items-center justify-center gap-x-2"
                      >
                        <img
                          src={gitIcon}
                          className="rounded-full w-7"
                          alt="github icon"
                        />
                        Git Hub
                      </a>
                      <a
                        target="_blank"
                        href={game.netlify}
                        className="w-full py-3 border-2 rounded-xl bg-cyan-900 text-white flex items-center justify-center"
                      >
                        <img
                          src={netlifyIcon}
                          className="w-10"
                          alt="netlify icon"
                        />
                        Netlify
                      </a>
                    </div>
                  </li>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
