import React from "react";
import Table from "../components/Table";

function Writing() {
  const writing = [
    {
      name: "Do Things That Will Surpass Your Life",
      time: "20 Apr 2021",
      link: "/writing/surpass",
    },
    { name: "Boxing An AI", time: "24 Apr 2021", link: "/writing/boxing" },
    {
      name: "Everything I’ve learnt from decorating my tiny room",
      time: "10 Mar 2023",
      link: "/writing/decorating",
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
