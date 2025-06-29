import President from "../assets/President.png";

function Head() {
  return (
    <>
      <div
        className="container text-center"
        style={{ marginTop: "-60px", zIndex: 10, position: "relative" }}
      >
        <div
          className="row align-items-start p-3 rounded"
          style={{ backgroundColor: "#d2fcd2" }}
        >
          {/* Text Section */}
          <div className="col-12 col-md-8 rounded p-4 text-start">
            <p className="text-muted mb-1">Welcome To</p>
            <h5 className="text-success">Ga YAF Group</h5>
            <p>
              Presbyterian Church Of Ghana – Young Adult’s Fellowship. One of
              the major decisions taken at the 2005 General Assembly held at the
              Kwame Nkrumah University of Science and Technology in the Asante
              Presbytery was to create a new ministry of young adults in the
              church. That upper youth age limit was to be reduced from 35 years
              to 30 years and Young adults’ age begins at 30 years plus one day
              to 40 years.
              <br />
              Some of the main objectives of that decision were to attract,
              sustain, and prepare for adult life the majority of the church’s
              young adults who fell out of active church membership.{" "}
              <a href="#" className="text-secondary">
                Read More
              </a>
            </p>
          </div>

          {/* Image + Name Section */}
          <div className="col-12 col-md-4 bg-success p-3 rounded d-flex flex-column align-items-center justify-content-center">
            <img
              src={President}
              alt="Ga YAF logo"
              style={{ height: "200px", width: "auto" }}
              className="img-fluid rounded mb-2"
            />
            <h6 className="text-white mb-0">Emmanuel Ovie</h6>
            <small className="text-light">Group President</small>
          </div>
        </div>
      </div>
    </>
  );
}
export default Head;
