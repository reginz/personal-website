import React from "react";
import Hero from "../components/Hero";
import Table from "../components/Table";
import Sidebysided from "../components/layout/Sidebysided";

function Main() {
  const work = [
    {
      name: "Saga",
      position: "UX Engineer (Mar 2024 - Current)",
      link: "https://www.linkedin.com/company/sagalegal-io/",
    },
    {
      name: "Concide",
      position: "UI Developer (Apr 2023 - Apr 2024)",
      link: "https://www.linkedin.com/company/concide-io/",
    },
    {
      name: "Freelencing on Contra",
      position: "Web Developer (Dec 2022 - Apr 2023)",
      link: "https://contra.com/zeynep_evecen",
    },
    {
      name: "Oslo Philantrophic Exchange",
      position: "Frontend Engineer (Apr 2022 - Mar 2023)",
      link: "https://www.opx.org/",
    },
    {
      name: "Brieferr",
      position: "Web Developer (Feb 2021 - Jun 2022)",
      link: "https://brieferr.com/home",
    },
  ];

  const projects = [
    {
      name: "genie",
      desc: "AI powered custom app generator.",
      tools: ["React", "Node", "Chat GPT"],
      link: "https://webappgenie.com/",
    },
    {
      name: "spotimage",
      desc: "A web app that generates Spotify playlists from the images mood.",
      tools: ["Flask", "Python", "Tensorflow"],
      link: "https://github.com/reginz/spotimage",
    },
  ];
  const writing = [
    {
      name: "The Next Interface",
      time: "15 Aug 2024",
      link: "/writing/interface",
    },
    {
      name: "The lie of music discovery",
      time: "29 Jul 2024",
      link: "/writing/music",
    },
    {
      name: "A Web Developer's Journey: From Coding to Crafting User Experiences",
      time: "4 Jul 2023",
      link: "/writing/my-journey",
    },
    {
      name: "Everything I’ve learnt from decorating my tiny room",
      time: "10 Mar 2023",
      link: "/writing/decorating",
    },
    { name: "Boxing An AI", time: "24 Apr 2021", link: "/writing/boxing" },
    {
      name: "Do Things That Will Surpass Your Life",
      time: "20 Apr 2021",
      link: "/writing/surpass",
    },
  ];
  function WorkTable() {
    return work.map((w) => {
      return <Table first={w.name} last={w.position} link={w.link} />;
    });
  }

  function WritingTable() {
    return writing.map((w) => {
      return <Table first={w.name} last={w.time} link={w.link}></Table>;
    });
  }

  return (
    <div className="flex flex-col gap-32 pb-10">
      <Hero /> 
      <Sidebysided title="Writing" table={WritingTable} />
      <Sidebysided title="Work" table={WorkTable} />
    </div>
  );
}

export default Main;
