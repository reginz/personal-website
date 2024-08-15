import React from "react";
import Table from "../components/Table";

function Writing() {
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
  return (
    <div className="w-3/4 m-auto max-sm:w-full">
      <h1 className="text-3xl text-[#582BE8] pb-8">writing.</h1>
      <div className="flex flex-col gap-3">
        {writing.map((w) => {
          return <Table first={w.name} last={w.time} link={w.link}></Table>;
        })}
      </div>
    </div>
  );
}

export default Writing;
