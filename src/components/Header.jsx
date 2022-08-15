import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/css/custom/header.min.css";
import moonIcon from "../images/dark_mode.png";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-container ">
        <div className="container-fluid">
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
          <NavLink className="navbar-brand" to="/home">
            Ghosty Dev
          </NavLink>

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

          <div className="theme">
            <img src={moonIcon} alt="Mode Switcher" />
          </div>
        </div>
      </nav>
    </div>
  );
}
