import React from "react";
import spoti from "../images/spotimage.svg";
import genie from "../images/genie.svg";

function ProjectCrd(props) {
  return (
    <a href={props.link} className="cursor-pointer" target="_blank" rel="noreferrer"> 
    <div className="rounded-2xl shadow-lg shadow-stone-200 border border-gray-800 w-80 h-96 pt-11 flex flex-col gap-8 hover:shadow-stone-400 ease-in-out duration-300 max-sm:w-full">
      <img className="w-full" src={props.name === "genie" ? genie : spoti} alt="project illustartion"></img>
      <div className="px-8 py-4 flex flex-col gap-3">
        <h3 className=" text-2xl"  style={{color: props.name === "genie" ? "#582BE8" : "#1CD760"}}>{props.name}</h3>
        <p>{props.desc}</p>
        <div className="flex gap-3 flex-wrap">
          {props.tags.map((tag) => {
            return <span className="bg-stone-200 text-stone-700 px-3 py-1 rounded-md">{tag}</span>;
          })}
        </div>
      </div>
    </div>
    </a>

  );
}

export default ProjectCrd;
