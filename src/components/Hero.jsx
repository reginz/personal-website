import React from "react";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import twitter from "../images/twitter.svg";
import profile from "../images/profile.svg";

function Hero() {
  return (
    <div>
      <div className="flex gap-10 items-center">
        <div className="flex flex-col gap-10">
          <p>
            Hey, I am Zeynep. I am a Computer Engineering student who loves
            developing beautiful interfaces. In my free time I work on coding
            projects, read and learn to design human-centered interfaces.
          </p>

          <div className="flex gap-7 items-center">
            <button className="border-inherit border rounded-md px-6 py-1 shadow-sm hover:border-gray-400 ease-in-out duration-200">
                <a href="https://www.polywork.com/zeynep_evecen" target="_blank">
                View changelog
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
        <img src={profile} alt="profile photo"></img>
      </div>
    </div>
  );
}

export default Hero;