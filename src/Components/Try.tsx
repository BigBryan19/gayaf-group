import "animate.css";
import FirstCarousel from "../assets/1.jpg";
import SecondCarousel from "../assets/2.jpg";
import ThirdCarousel from "../assets/3.jpg";
import FourthCarousel from "../assets/4.jpg";

function Try() {
  return (
    <>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-7">
            <section className="pt-5 pb-5">
              <div className="container">
                <div className="row mb-3">
                  <div className="col-6">
                    <h3 className="text-success mb-3 text-start">
                      News & Announcement{" "}
                    </h3>
                  </div>
                  <div className="col-6 text-end">
                    <button
                      className="btn btn-outline-success me-2"
                      type="button"
                      data-bs-target="#carouselExampleIndicators2"
                      data-bs-slide="prev"
                    >
                      <i className="fa fa-arrow-left"></i>
                    </button>
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      data-bs-target="#carouselExampleIndicators2"
                      data-bs-slide="next"
                    >
                      <i className="fa fa-arrow-right"></i>
                    </button>
                  </div>
                </div>

                <div
                  id="carouselExampleIndicators2"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        {/* Card 1 */}
                        <div className="col-md-4 mb-3">
                          <div className="card h-100 shadow-sm">
                            <img
                              src={FirstCarousel}
                              className="img-fluid"
                              alt="Mission"
                            />
                            <div className="card-body">
                              <h5 className="text-success">Empowering Youth</h5>
                              <p>
                                Equipping young adults with faith and purpose.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 2 */}
                        <div className="col-md-4 mb-3">
                          <div className="card h-100 shadow-sm">
                            <img
                              src={ThirdCarousel}
                              className="img-fluid"
                              alt="Bible"
                            />
                            <div className="card-body">
                              <h5 className="text-success">
                                Living the Gospel
                              </h5>
                              <p>
                                Spreading the message of Christ boldly and
                                proudly.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 3 */}
                        <div className="col-md-4 mb-3">
                          <div className="card h-100 shadow-sm">
                            <img
                              src={SecondCarousel}
                              className="img-fluid"
                              alt="Worship"
                            />
                            <div className="card-body">
                              <h5 className="text-success">Hope and Truth</h5>
                              <p>Declaring salvation to all generations.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Additional slides can be added below using same pattern */}
                    <div className="carousel-item">
                      <div className="row">
                        {/* Card 1 */}
                        <div className="col-md-4 mb-3">
                          <div className="card h-100 shadow-sm">
                            <img
                              src={FourthCarousel}
                              className="img-fluid"
                              alt="Mission"
                            />
                            <div className="card-body">
                              <h5 className="text-success">Empowering Youth</h5>
                              <p>
                                Equipping young adults with faith and purpose.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 2 */}
                        <div className="col-md-4 mb-3">
                          <div className="card h-100 shadow-sm">
                            <img
                              src={SecondCarousel}
                              className="img-fluid"
                              alt="Bible"
                            />
                            <div className="card-body">
                              <h5 className="text-success">
                                Living the Gospel
                              </h5>
                              <p>
                                Spreading the message of Christ boldly and
                                proudly.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Card 3 */}
                        <div className="col-md-4 mb-3">
                          <div className="card h-100 shadow-sm">
                            <img
                              src={ThirdCarousel}
                              className="img-fluid"
                              alt="Worship"
                            />
                            <div className="card-body">
                              <h5 className="text-success">Hope and Truth</h5>
                              <p>Declaring salvation to all generations.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-4 pt-5 pb-5">
            <div className="mb-3">
              <h3 className="text-success mb-3 text-start">Upcoming Event</h3>
            </div>

            <div className="card shadow-sm">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://via.placeholder.com/150" // Replace with actual image
                    className="img-fluid rounded-start h-100 object-fit-cover"
                    alt="Event"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-start">
                    <h5 className="card-title text-success">
                      Youth Worship Night
                    </h5>

                    <p className="card-text mb-1">
                      <i className="far fa-calendar-alt me-2 text-secondary"></i>
                      <strong>July 10, 2025</strong>
                    </p>

                    <p className="card-text mb-1">
                      <i className="far fa-clock me-2 text-secondary"></i>
                      <strong>6:00 PM – 8:00 PM</strong>
                    </p>

                    <p className="card-text mb-2">
                      <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                      <strong>Ga Presby Auditorium</strong>
                    </p>

                    <p className="card-text">
                      <small className="text-muted">Updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Try;
