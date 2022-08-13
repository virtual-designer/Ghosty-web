import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Ghosty</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/projects"
              >
                Projects
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/members"
              >
                Members
              </NavLink>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
              <a className="nav-link" href="https://discord.gg/ghostydev">
                Discord
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
