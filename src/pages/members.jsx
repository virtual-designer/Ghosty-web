import React from "react";
import { NavLink } from "react-router-dom";
import { membersFetch } from "../scripts/js/members";
import "../styles/css/custom/members.min.css";

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
                    alt="Members"
                    id="members"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center" id="devName">
                      Dev Name
                    </h5>
                    <div className="d-grid gap-2">
                      <NavLink to="#" className="btn btn-primary" id="devLink">
                        GitHub
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom JS */}
        {membersFetch()}
      </div>
    </div>
  );
}
