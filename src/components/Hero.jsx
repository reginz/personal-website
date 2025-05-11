import React from "react";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import twitter from "../images/twitter.svg";
import profile from "../images/profile.svg";
import resume from "../images/resume.svg";

function Hero() {
  return (
    <div>
      <div className="flex gap-10 items-center max-sm:flex-col">
        <div className="flex flex-col gap-10">
          <p>
            Hey, I am Zey.  I'm a UX engineer 
            who loves blending creativity with technology. I’m all about crafting 
            intuitive digital experiences that feel just right.
          </p>

          <div className="flex gap-7 items-center max-sm:flex-col max-sm:items-start">
            <button className="border-inherit border rounded-md px-6 py-1 shadow-sm hover:border-gray-400 ease-in-out duration-200 max-sm:w-full">
                <a href="https://www.are.na/zeynep-evecen/channels" target="_blank">
                🧠   My brain dump 
                </a>
            </button>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/reginz_"
                className="w-8 h-8"
                target="_blank"
              >
                <img src={twitter} alt="twitter icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/zeynepevecen/"
                className="w-8 h-8"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin icon" />
              </a>
              <a
                href="https://github.com/reginz"
                className="w-8 h-8"
                target="_blank"
              >
                <img src={github} alt="github icon" />
              </a>

            </div>
          </div>
        </div>
        <img width="300" height="300" className="max-sm:w-full" src={profile} alt="profile photo"></img>
      </div>
    </div>
  );
}

export default Hero;
