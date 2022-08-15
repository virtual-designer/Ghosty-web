// Imports
import React from "react";
import { releaseFetch } from "../scripts/js/fetch";
import { NavLink } from "react-router-dom";
import "../styles/css/custom/footer.min.css";
import discordLogo from "../images/Discord-Logo-White.png";
import globeLogo from "../images/globe.png";
// Functional Component
export default function Footer() {
  return (
    <div>
      {/* Footer Section */}
      <section className="footer-container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="footer-socials-container">
              <h2>Socials</h2>
              <ul>
                <li>
                  <NavLink to="#">
                    <img
                      src={discordLogo}
                      alt="Discord"
                      className="discordLogo"
                    />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <img src={globeLogo} alt="Website" className="globeLogo" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="links-container">
              <h2>Links</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row bottom-footer-container">
          <div className="col-sm-12 col-md-6 col-lg-6 credit-container">
            <code className="credit">With ♥ by Abir-Tx</code>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 version-container">
            <code className="version" id="version_footer"></code>
          </div>
        </div>
      </section>
      {/* End of Footer section */}

      {/* Scripts */}
      {releaseFetch()}
    </div>
  );
}
