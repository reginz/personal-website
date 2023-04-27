import React from "react";
import spoti from "../images/spotimage.svg";
import genie from "../images/genie.svg";

function ProjectCrd(props) {
  return (
    <div className="rounded-2xl border border-gray-800 w-80 h-96 pt-11 flex flex-col gap-8">
      <img src={props.name === "genie" ? genie : spoti}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <div>
          {props.tags.map((tag) => {
            return <span>{tag}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCrd;
