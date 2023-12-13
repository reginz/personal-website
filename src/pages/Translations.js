import React from "react";
import Table from "../components/Table";

function Translations() {
  const translations =[{
    name: "Konformizmin Dört Çeyreğİ",
    time: "12 Jul 2021",
    link: "/writing/four-quadrants-of-conformism",
    author: "Paul Graham"
  }]
  return (
    <div className="w-3/4 m-auto max-sm:w-full">
      <h1 className="text-3xl text-[#582BE8] pb-8">translations.</h1>
      <div className="flex flex-col gap-3 ">
        {translations.map((w) => {
          return <Table author={w.author} first={w.name} last={w.time} link={w.link}></Table>;
        })}
      </div>
    </div>
  );
}

export default Translations;
