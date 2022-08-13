import React from "react";

export default function Home() {
  return (
    <div>
      <div className="container-sm">
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
