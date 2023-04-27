import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <div className=" flex items-center py-16">
      <div className="w-full flex justify-between items-center">
        <NavLink to="/">
          <h2 className="text-2xl font-medium">Zeynep Evecen</h2>
        </NavLink>
        <div className="flex gap-8">
        <NavLink to="/about">about</NavLink>
        <NavLink to="/inspo">inspo</NavLink>
        <NavLink to="/writing">writing</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
