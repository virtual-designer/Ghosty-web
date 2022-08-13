import React from "react";

export default function About() {
  return (
    <div>
      <div className="container-sm">
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
                <a className="nav-link " aria-current="page" href="index.html">
                  Home
                </a>
                <a className="nav-link" href="./projects.html">
                  Projects
                </a>
                <a className="nav-link " href="./members.html">
                  Members
                </a>
                <a className="nav-link active" href="#">
                  About
                </a>
                <a className="nav-link" href="https://discord.gg/ghostydev">
                  Discord
                </a>
              </div>
            </div>
          </div>
        </nav>

        <section>
          <div className="row my-5">
            <div className="col-sm-12 col-md-6 col-lg-6 rounded mx-auto d-block">
              <img src="res/images/ghosty_logo.jpg" alt="Ghosty Dev Logo" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 my-3">
              <h1 className="h1">About Us</h1>
              Welcome to Ghosty Development! We make high quality projects for
              the community to use and learn from. We make stuff from apps, to
              websites, to even bots! We have a team of 4 constantly working to
              improve the projects. We hope you learn something from our
              projects, and star them!
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <section className="footer">
        <div className="card-footer">
          <div className="row">
            <div className="col">
              <code>
                <a
                  className="footer-link"
                  id="by_abir"
                  href="https://github.com/abir-tx"
                >
                  By Abir
                </a>
              </code>
            </div>
            <div className="col text-end">
              <code>
                <a href="#" className="footer-link" id="version_footer">
                  v1.0.0
                </a>
              </code>
            </div>
          </div>
        </div>
      </section>
      {/* End of Footer section */}

      {/* JavaScript Bundle with Popper */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"
      ></script>

      {/* Custom JS */}
      <script src="./res/js/fetch.js"></script>
    </div>
  );
}
