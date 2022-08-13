import React from "react";

export default function About() {
  return (
    <div>
      <div className="container-sm">
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
