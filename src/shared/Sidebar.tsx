import React from "react";
import { Link, useLocation } from "react-router-dom";
import "global/sidebar.scss";
import { bottomNavList, topNavList } from "./navList";

const SidebarComp = () => {
  const { pathname } = useLocation();
  return (
    <div className="side-bar d-flex flex-column justify-content-center">
      <nav>
        <ul className="nav flex-column">
          {topNavList.map((nav, i) => (
            <li className="nav-item py-2" key={i}>
              <Link
                to={"/"}
                className={`nav-link ${
                  pathname?.includes(nav.link) ? "active" : ""
                }`}
              >
                <i className={`fas ${nav.icon}`}></i>
                {nav.name}
              </Link>
            </li>
          ))}

          <hr className="text-light" />

          {bottomNavList.map((nav, i) => (
            <li className="nav-item py-2" key={i}>
              <Link to={"/"} className="nav-link">
                <i className={`fas ${nav.icon}`}></i>
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarComp;
