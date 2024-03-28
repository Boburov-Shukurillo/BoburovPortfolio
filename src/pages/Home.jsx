import React, { useEffect } from "react";
import { projects } from "../data";
import About from "./About";
import sertifikat from "../assets/sertificat/Sertificat.png";
import htmlIcon from "../assets/html.png";
import gitIcon from "../assets/github.png";
import netlifyIcon from "../assets/netlify_logo_icon.png";
import Aos, { AOS } from "aos";
import "aos/dist/aos.css";
import Skils from "./Skils";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);
  return (
    <div>
      <About />
      <div className="bg-slate-700 py-10" id="projects">
        <div className="containerb">
          <ul className="grid grid-cols-3 gap-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-lg:px-16 max-md:p-0 max-sm:grid-cols-1 max-sm:px-20 max-mini_screen:px-0">
            {projects.map((project) => {
              return (
                <li
                  data-aos="zoom-in"
                  key={project.id}
                  className="h-450px rounded-xl overflow-hidden p-4 border-2 text-white border-white flex flex-col justify-between items-center text-center bg-white/20   transition-all"
                >
                  <img
                    src={project.img}
                    className="w-full h-1/2 object-cover rounded-lg"
                    alt={project.projectName + " "}
                  />
                  <h3 className="text-2xl font-bold">{project.projectName}</h3>
                  <p className=" font-semibold">{project.description}</p>
                  <div className="flex justify-between w-full gap-x-7">
                    <a
                      target="_blank"
                      href={project.gitHb}
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
                      href={project.netlify}
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
              );
            })}
          </ul>
        </div>
      </div>

      
      <Skils/>
    </div>
  );
};

export default Home;
