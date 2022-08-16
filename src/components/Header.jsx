import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/css/custom/header.min.css";
import moonIcon from "../images/dark_mode.png";
import sunIcon from "../images/light_mode.png";

export default function Header() {
  const [darkmode, setDarkmode] = React.useState(false);

  if (darkmode) {
    console.log("Darkmode is enabled now");
    document.getElementById("navbar").classList.add("navbar-dark");
  } else {
    console.log("Light Mode is enabled now");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav-container " id="navbar">
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
            {darkmode ? (
              <img
                src={sunIcon}
                alt="Mode Switcher"
                onClick={() => {
                  setDarkmode(!darkmode);
                }}
              />
            ) : (
              <img
                src={moonIcon}
                alt="Mode Switcher"
                onClick={() => {
                  setDarkmode(!darkmode);
                }}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
