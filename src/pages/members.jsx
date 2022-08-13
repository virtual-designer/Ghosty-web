import React from "react";

export default function Members() {
  return (
    <div>
      <div className="container-sm">
        <section>
          <div className="container">
            <div className="row" id="cardsHolder">
              <div className="col-sm-12 col-lg-4 col-md-6">
                <div className="card" id="devCard">
                  <img
                    src="#"
                    alt="Members Image"
                    id="members"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center" id="devName">
                      Dev Name
                    </h5>
                    <div className="d-grid gap-2">
                      <a href="#" className="btn btn-primary" id="devLink">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JavaScript Bundle with Popper */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossorigin="anonymous"
        ></script>

        {/* Custom JS */}
        <script src="./res/js/fetch.js"></script>
        <script src="./res/js/members.js"></script>
      </div>
    </div>
  );
}
