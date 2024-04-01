import React from "react";
import gitHub from "../assets/github.png";
import telegram from "../assets/telegram.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instalog.png";

const Contact = () => {
  return (
    <div id="contact" className="bg-darkenBlue py-20">
      <div className="containerb">
        <h1 className="myFont text-3xl text-white tracking-widest mb-5">
          Connect With Me
        </h1>
        <form action="" className=" flex justify-between">
          <div className="w-full flex flex-col gap-5 items-center justify-center">
            <div className="w-full flex items-center gap-x-5">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 h-14 px-5 bg-white/20 placeholder:text-white rounded-xl myFont text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 h-14 px-5 bg-white/20 placeholder:text-white rounded-xl myFont text-white"
              />
            </div>
            <textarea
              cols="30"
              rows="30"
              placeholder="Write You Quession"
              className="w-full min-h-80 max-h-80 rounded-xl p-10 col-start-1 col-end-3 bg-white/20 text-white myFont"
            ></textarea>
          </div>
          <div className="w-1/2 px-10">
            <div className="grid grid-cols-1  gap-7 w-3/4">
              <a
                target="_blank"
                href="https://github.com/Boburov-Shukurillo/"
                className="flex items-center justify-between gap-x-5"
              >
                <img
                  src={gitHub}
                  alt="gitHub png"
                  className="w-1/4 rounded-full"
                />
                <p className="w-44 truncate myFont text-white">
                  Boburov-Shukurillo
                </p>
              </a>
              <a
                target="_blank"
                href="https://www.t.me/BoburovSh"
                className="flex items-center justify-between gap-x-5"
              >
                <img
                  src={telegram}
                  alt="email png"
                  className="w-1/4 rounded-full"
                />
                <p className="w-44 truncate myFont text-white">BoburovSh</p>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/shukurilo-boburov-a037222b8/"
                className="flex items-center justify-between gap-x-5"
              >
                <img
                  src={linkedin}
                  alt="linkedin png"
                  className="w-1/4 rounded-full"
                />
                <p className="w-44 truncate myFont text-white">
                  shukurilo-boburov
                </p>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/boburov.dev/"
                className="flex items-center justify-between gap-x-5"
              >
                <img
                  src={instagram}
                  alt="linkedin png"
                  className="w-1/4 rounded-full"
                />
                <p className="w-44 truncate myFont text-white">boburov.dev</p>
              </a>
              <button className="bg-black/75 py-4 rounded-lg text-white">
                Submit Request
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
