import React from "react";

function Table(props) {
  return (
    <a href={props.link} className="flex items-center space-x-4 group cursor-pointer" target="_blank">
      <span className="flex-none font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500">
        {props.first}
      </span>
      <span class="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800"></span>
      <span className="flex-none text-tertiary">
      {props.last}
      </span>
    </a>
  );
}

export default Table;
