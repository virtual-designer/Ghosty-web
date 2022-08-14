import React from "react";

export default function Projects() {
  return (
    <div>
      <div className="container-sm">
        <section>
          <h1 className="h1 text-center">Our Projects</h1>

          {/* Show the GhostyORG projects here using github API */}
          <div id="orgProjects"></div>
        </section>

        {/* Custom JS */}
      </div>
    </div>
  );
}
