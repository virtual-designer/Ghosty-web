// imports
import React from "react";
import { Helmet } from "react-helmet";
// Custom imports
import logo from "../images/ghosty_logo.jpg";
import config from "../config.json";
import pagesDesc from "../data/pageDesc.json";

// Driver codes
const TITLE = "About | " + config.SITE_TITLE;
const DESC = pagesDesc.AboutDesc;
const CANONICAL = config.SITE_DOMAIN + "/;";
export default function About() {
  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
        <link rel="canonical" href={CANONICAL} />
        <meta name="description" content={DESC} />
      </Helmet>
      <div className="container-sm">
        <section>
          <div className="row my-5">
            <div className="col-sm-12 col-md-6 col-lg-6 rounded mx-auto d-block">
              <img src={logo} alt="Ghosty Dev Logo" />
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
    </div>
  );
}
