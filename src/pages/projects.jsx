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

        {/* JavaScript Bundle with Popper */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossorigin="anonymous"
        ></script>

        {/* Custom JS */}
        <script src="./res/js/fetch.js"></script>
        <script src="./res/js/projects.js"></script>
      </div>
    </div>
  );
}
