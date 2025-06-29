function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start text-light">
        <div className="bg-success">
          <section className="d-flex justify-content-center justify-content-lg-between p-4">
            {/* <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div> */}

            {/* <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
          </div> */}
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Ga YAF Group
                  </h6>
                  <p>
                    One of the major decisions taken at the 2005 General
                    Assembly held at the Kwame Nkrumah University of Science and
                    Technology in the Asante Presbytery was to create a new
                    ministry of young adults in the church….
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    {" "}
                    Important Links
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">
                      About Yaf Group
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Local Churches
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Souvenirs
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Contact Us
                    </a>
                  </p>
                </div>

                {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div> */}

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> Ga Central, Accra
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    pcgyafonline@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> +223 12 345 6789
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> Post Office Box GP
                    1800, Accra
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center py-3 text-success small"
          style={{ backgroundColor: "#d2fcd2" }}
        >
          © 2025 Ga YAF Group. Built by{" "}
          <a
            href="https://bz-studio.net"
            className="text-success fw-bold text-decoration-none"
          >
            bz-studio.net
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
