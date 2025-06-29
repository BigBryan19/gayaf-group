import "animate.css";

function Subscribe() {
  return (
    <div
      className="container text-center animate__animated animate__fadeInUp"
      style={{ marginBottom: "-60px", zIndex: 10, position: "relative" }}
    >
      <div
        className="row align-items-center p-4 rounded shadow-lg"
        style={{ backgroundColor: "#d2fcd2" }}
      >
        {/* Text Section */}
        <div className="col-12 col-md-8 text-start mb-3 mb-md-0">
          <h4 className="text-success fw-bold d-flex align-items-center animate__animated animate__fadeInLeft">
            <i className="fas fa-envelope me-2 text-success fs-4"></i>
            <span>Stay Connected</span>
          </h4>

          <p className="text-muted mb-0">
            Subscribe to our newsletter to receive the latest updates, events,
            and more.
          </p>
        </div>

        {/* Form Section */}
        <div className="col-12 col-md-4 d-flex justify-content-md-end justify-content-center">
          <form className="d-flex w-100" role="search">
            <input
              type="email"
              required
              className="form-control me-2 rounded-pill border-success"
              placeholder="Enter your email"
              style={{
                maxWidth: "280px",
                minWidth: "220px",
              }}
            />
            <button className="btn btn-success rounded-pill px-4" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
