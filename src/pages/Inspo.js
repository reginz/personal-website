import React from "react";
import Table from "../components/Table";

function Inspo() {
  const data = [
    {
      name: "Jakob Nielsen's New UX Articles | UX Tigers",
      category: "blog",
      link: "https://www.uxtigers.com",
    },
    {
      name: "Notion - Pioneers: Alan Kay",
      category: "podcast",
      link: "https://www.youtube.com/watch?v=LdMk0OP-0PA",
    },
    {
      name: "Star Trek: TNG",
      category: "show",
      link: "https://www.imdb.com/title/tt0092455/",
    },
    {
      name: "Art of Doing Science and Engineering",
      category: "book",
      link: "http://worrydream.com/refs/Hamming-TheArtOfDoingScienceAndEngineering.pdf",
    },
    {
      name: "Amusing Ourselves to Death",
      category: "book",
      link: "https://www.goodreads.com/book/show/74034.Amusing_Ourselves_to_Death",
    },
    {
      name: "Atomic Habits",
      category: "book",
      link: "https://www.goodreads.com/book/show/40121378-atomic-habits",
    },
    {
      name: "Dune",
      category: "book",
      link: "https://www.google.com/search?q=dune+frank+herbert",
    },
    {
      name: "Dynamic Land",
      category: "project",
      link: "https://dynamicland.org/",
    },
  ];
  return (
    <div className="w-3/4 m-auto max-sm:w-full">
      <h1 className="text-3xl text-[#582BE8] pb-8">inspo.</h1>
      <p className="pb-10">
        Some of those works have had extraordinary effects on my life or way of
        thinking. And I recommend to everyone.
      </p>
      <div className="flex flex-col gap-3">
        {data.map((d) => {
          return <Table first={d.name} last={d.category} link={d.link}></Table>;
        })}
      </div>
    </div>
  );
}

export default Inspo;
