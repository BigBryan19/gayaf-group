import "animate.css";
import FirstCarousel from "../assets/1.jpg";
import SecondCarousel from "../assets/2.jpg";
import ThirdCarousel from "../assets/3.jpg";
import FourthCarousel from "../assets/4.jpg";
import YWN from "../assets/YWN.jpg";

function News() {
  return (
    <>
      <div className="container text-center">
        <div className="row align-items-start">
          {/* News & Announcements Section */}
          <div className="col-12 col-lg-8 animate__animated animate__fadeInLeft">
            <section className="pt-5 pb-5">
              <div className="container">
                <div className="row mb-3">
                  <div className="col-6">
                    <h3 className="text-success mb-3 text-start animate__animated animate__fadeInDown">
                      News & Announcements
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

                {/* Carousel with Animated Cards */}
                <div
                  id="carouselExampleIndicators2"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="carousel-item active">
                      <div className="row">
                        {[FirstCarousel, ThirdCarousel, SecondCarousel].map(
                          (img, idx) => (
                            <div
                              key={idx}
                              className="col-md-4 mb-3 animate__animated animate__fadeInUp animate__delay-1s"
                            >
                              <div className="card h-100 shadow-sm">
                                <img
                                  src={img}
                                  className="img-fluid"
                                  alt={`News ${idx + 1}`}
                                />
                                <div className="card-body">
                                  <h5 className="text-success">
                                    {idx === 0
                                      ? "Empowering Youth"
                                      : idx === 1
                                      ? "Living the Gospel"
                                      : "Hope and Truth"}
                                  </h5>
                                  <p>
                                    {idx === 0
                                      ? "Equipping young adults with faith and purpose."
                                      : idx === 1
                                      ? "Spreading the message of Christ boldly and proudly."
                                      : "Declaring salvation to all generations."}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item">
                      <div className="row">
                        {[FourthCarousel, SecondCarousel, ThirdCarousel].map(
                          (img, idx) => (
                            <div
                              key={idx}
                              className="col-md-4 mb-3 animate__animated animate__fadeInUp animate__delay-1s"
                            >
                              <div className="card h-100 shadow-sm">
                                <img
                                  src={img}
                                  className="img-fluid"
                                  alt={`News ${idx + 4}`}
                                />
                                <div className="card-body">
                                  <h5 className="text-success">
                                    {idx === 0
                                      ? "Empowering Youth"
                                      : idx === 1
                                      ? "Living the Gospel"
                                      : "Hope and Truth"}
                                  </h5>
                                  <p>
                                    {idx === 0
                                      ? "Equipping young adults with faith and purpose."
                                      : idx === 1
                                      ? "Spreading the message of Christ boldly and proudly."
                                      : "Declaring salvation to all generations."}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Upcoming Event Card with Animation */}
          <div className="col-12 col-lg-4 pt-5 pb-5 animate__animated animate__fadeInRight">
            <div className="mb-3">
              <h3 className="text-success mb-3 text-start animate__fadeInUp">
                Upcoming Event
              </h3>
            </div>

            <div className="card shadow-sm">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={YWN}
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

            <div className="pt-3 text-end">
              <button className="btn btn-success animate__animated animate__fadeIn">
                More Events{" "}
                <i className="far fa-calendar-alt ms-2 text-light"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
