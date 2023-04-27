import React from "react";
import Table from "../components/Table";

function Inspo() {
  const data = [
    { name: "Star Trek: TNG", category: "show", link: "https://www.imdb.com/title/tt0092455/" },
    { name: "Art of Doing Science and Engineering", category: "book", link: "http://worrydream.com/refs/Hamming-TheArtOfDoingScienceAndEngineering.pdf" },
    { name: "Farklı Düşün", category: "podcast" ,link:"https://farkli-dusun.simplecast.com/"},
  ];
  return (
    <div className="w-3/4 m-auto">
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
