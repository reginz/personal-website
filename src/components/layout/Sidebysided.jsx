import React from "react";

function Sidebysided(props) {
    return (
      <div>
        <div className="flex gap-10">
          <span className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40">
            {props.title}
          </span>
          <div className="flex flex-col gap-3 w-full">
              {props.table()}
          </div>
        </div>
      </div>
    );
  }
  

export default Sidebysided;
