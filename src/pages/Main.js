import React from "react";
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'

function Main() {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <p>
          Hey, I am Zeynep. I am a Computer Engineering student who loves
          developing beautiful interfaces. In my free time I work on coding
          projects, read and learn to design human-centered interfaces.
        </p>

        <div className="flex">
          <button className="border-inherit border rounded-md">
            View changelog
          </button>

          <img src={twitter} alt="twitter icon"></img>
          <img src={linkedin} alt="linkedin icon"></img>
          <img src={github} alt="github icon"></img>

        </div>
      </div>
      <img></img>
    </div>
  );
}

export default Main;
