// Imports
import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
// Custom Imports
import { membersFetch } from "../scripts/js/members";
import "../styles/css/custom/members.min.css";
import config from "../config.json";
import pagesDesc from "../data/pageDesc.json";
const TITLE = "Members | " + config.SITE_TITLE;

// Driver Codes
const DESC = pagesDesc.MembersDesc;
const CANONICAL = config.SITE_DOMAIN + "/;";
// Members Component
export default function Members() {
  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
      </Helmet>
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
