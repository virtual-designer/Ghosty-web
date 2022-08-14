import React from "react";
import { projectsFetch } from "../scripts/js/projects";
import "../styles/css/custom/projects.min.css";

export default function Projects() {
  return (
    <div>
      <div className="container-sm">
        <section>
          <h1 className="h1 text-center">Our Projects</h1>

          {/* Show the GhostyORG projects here using github API */}
          <div id="orgProjects"></div>
        </section>
      </div>
      {/* Custom JS */}
      {projectsFetch()}
    </div>
  );
}
