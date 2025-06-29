function MiniInfo() {
  return (
    <>
      <div className="d-flex justify-content-center p-4"></div>
      <div className="p-5 animate__animated animate__fadeInUp animate__slow">
        <div className="container text-center p-3 rounded">
          <h3 className="text-success mb-4 animate__animated animate__fadeInDown">
            About Ga YAF Group
          </h3>

          <div className="row gy-4">
            {/* Ministries */}
            <div className="col-6 col-md text-center animate__animated animate__zoomIn">
              <div className="p-3 rounded shadow-sm">
                <i className="fas fa-church fa-2x text-success mb-2"></i>
                <h4 className="fw-bold mb-1">12</h4>
                <small className="text-muted">Ministries</small>
              </div>
            </div>

            {/* Local Churches */}
            <div className="col-6 col-md text-center animate__animated animate__zoomIn animate__delay-1s">
              <div className="p-3 rounded shadow-sm">
                <i className="fas fa-building fa-2x text-success mb-2"></i>
                <h4 className="fw-bold mb-1">18</h4>
                <small className="text-muted">Local Churches</small>
              </div>
            </div>

            {/* Districts */}
            <div className="col-6 col-md text-center animate__animated animate__zoomIn animate__delay-2s">
              <div className="p-3 rounded shadow-sm">
                <i className="fas fa-map-marked-alt fa-2x text-success mb-2"></i>
                <h4 className="fw-bold mb-1">6</h4>
                <small className="text-muted">Districts</small>
              </div>
            </div>

            {/* Executives */}
            <div className="col-6 col-md text-center animate__animated animate__zoomIn animate__delay-3s">
              <div className="p-3 rounded shadow-sm">
                <i className="fas fa-users fa-2x text-success mb-2"></i>
                <h4 className="fw-bold mb-1">9</h4>
                <small className="text-muted">Executives</small>
              </div>
            </div>

            {/* Search Dropdown */}
            <div className="col-12 col-md-auto text-start animate__animated animate__fadeInUp animate__delay-4s">
              <div className="p-3 rounded shadow-sm">
                <p className="mb-2 fw-semibold text-success">
                  <i className="fas fa-compass me-2"></i>Browse through the
                  districts
                </p>

                <form className="d-flex align-items-center" role="search">
                  <select
                    className="form-select me-2 rounded-pill border-success"
                    style={{ maxWidth: "300px", minWidth: "250px" }}
                    aria-label="Search Filter"
                  >
                    <option>--Select District--</option>
                    <option value="ministries">D1</option>
                    <option value="churches">D2</option>
                    <option value="districts">D3</option>
                    <option value="executives">D4</option>
                  </select>

                  <button
                    className="btn btn-success rounded-circle"
                    type="submit"
                    style={{ width: "42px", height: "42px" }}
                  >
                    <i className="fas fa-search text-white"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiniInfo;
