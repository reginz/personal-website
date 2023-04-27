import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setActive("about");
    } else if (location.pathname === "/inspo") {
      setActive("inspo");
    } else if (location.pathname === "/writing") {
      setActive("writing");
    } else {
      setActive("");
    }
  }, [location]);

  return (
    <div className=" flex items-center py-16">
      <div className="w-full flex justify-between items-center max-sm:flex-col max-sm:items-start">
        <NavLink to="/">
          <h2 className="text-2xl font-medium">Zeynep Evecen</h2>
        </NavLink>
        <div className="flex gap-8">
          <NavLink to="/about">
            about
            {active === "about" ? (
              <svg
                width="50"
                height="7"
                viewBox="0 0 58 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="path"
                  d="M1 5.5L12 1.5L17 4L25.5 5.5L34 3H41.5L46.5 4H57"
                  stroke="#582BE8"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            ) : (
              <div></div>
            )}
          </NavLink>
          <NavLink to="/inspo">
            inspo
            {active === "inspo" ? (
              <svg
                width="50"
                height="7"
                viewBox="0 0 58 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="path"
                  d="M1 5.5L12 1.5L17 4L25.5 5.5L34 3H41.5L46.5 4H57"
                  stroke="#582BE8"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            ) : (
              <div></div>
            )}
          </NavLink>
          <NavLink to="/writing">
            writing
            {active === "writing" ? (
              <svg
                width="50"
                height="7"
                viewBox="0 0 58 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="path"
                  d="M1 5.5L12 1.5L17 4L25.5 5.5L34 3H41.5L46.5 4H57"
                  stroke="#582BE8"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            ) : (
              <div></div>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
