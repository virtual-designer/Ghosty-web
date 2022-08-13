import React from "react";

export default function Home() {
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link " href="./projects.html">
                  Projects
                </a>
                <a className="nav-link " href="./members.html">
                  Members
                </a>
                <a className="nav-link" href="about.html">
                  About
                </a>
                <a className="nav-link" href="https://discord.gg/ghostydev">
                  Discord
                </a>
              </div>
            </div>
          </div>
        </nav>

        <section className="welcome">
          <div className="h-100 welcome-box">
            <div className="row h-100 align-items-center">
              <div className="col order-2 order-lg-1 order-md-1">
                <h3 className="h3 welcome-title">Welcome To</h3>
                <h1 className="h1 title-text">Ghosty Developement</h1>
              </div>
              <div className="col order-1 order-lg-2 order-md-2">
                <img
                  className="ghosty-logo rounded mx-auto d-block"
                  src="res/images/ghosty_logo.jpg"
                  alt="Ghosty Organization Logo"
                />
              </div>
            </div>
          </div>
        </section>
        {/* End of Welcome/Landing section */}
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
                  © Abir | 2022
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

      <script src="../scripts/js/fetch.js"></script>
      <script src="../scripts/js/index.js"></script>
    </div>
  );
}
