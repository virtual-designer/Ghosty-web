import React from "react";

export default function Footer() {
  return (
    <div>
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
    </div>
  );
}
