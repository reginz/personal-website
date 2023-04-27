import React from "react";
import Hero from "../components/Hero";
import Table from "../components/Table";
import Sidebysided from "../components/layout/Sidebysided";
import ProjectCrd from "../components/ProjectCrd";

function Main() {
  const work = [
    {
      name: "Freelencing on Contra",
      position: "Web Developer (Dec 2022 - Apr 2023)",
      link: "https://contra.com/zeynep_evecen",
    },
    {
      name: "Oslo Philantrophic Exchange",
      position: "Frontend Engineer (Dec 2022 - Apr 2023)",
      link: "https://www.opx.org/",
    },
    {
      name: "Brieferr",
      position: "Web Developer (Dec 2022 - Apr 2023)",
      link: "https://brieferr.com/home",
    },
  ];

  const projects = [
    {
      name: "genie",
      desc: "AI powered custom app generator.",
      tools: ["React", "Node", "Chat GPT"],
    },
    {
      name: "spotimage",
      desc: "A web app that generates Spotify playlists from the images mood.",
      tools: ["Flask", "Python", "Tensorflow"],
    },
  ];
  function WorkTable() {
    return work.map((w) => {
      return <Table first={w.name} last={w.position} link={w.link} />;
    });
  }

  function Projects() {
    return (
      <div className="flex gap-28">
        {projects.map((p) => {
          return <ProjectCrd name={p.name} desc={p.desc} tags={p.tools} />;
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <Sidebysided title="Work" table={WorkTable} />
      <Sidebysided title="Projects" table={Projects}/>
    </div>
  );
}

export default Main;
