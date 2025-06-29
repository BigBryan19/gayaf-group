import FirstCarousel from "../assets/1.jpg";
import SecondCarousel from "../assets/2.jpg";
import ThirdCarousel from "../assets/3.jpg";
import FourthCarousel from "../assets/4.jpg";

function Hero() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="position-relative text-white text-center">
              {/* Background Image */}
              <img
                src={FirstCarousel}
                alt="Banner"
                className="img-fluid w-100"
                style={{ height: "400px", objectFit: "cover" }}
              />

              {/* Overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              ></div>

              {/* Animated Text Over Image */}
              <div
                className="position-absolute top-50 start-0 translate-middle-y px-4 text-start"
                style={{ maxWidth: "600px" }}
              >
                <h1 className="fw-bold text-success animate__animated animate__fadeInLeft">
                  Good News for Every Soul
                </h1>
                <p className="lead animate__animated animate__fadeInUp animate__delay-1s">
                  Empowered to share His love and truth to the nations.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="position-relative text-white text-center">
              {/* Background Image */}
              <img
                src={SecondCarousel}
                alt="Banner"
                className="img-fluid w-100"
                style={{ height: "400px", objectFit: "cover" }}
              />

              {/* Overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              ></div>

              {/* Animated Text Over Image */}
              <div
                className="position-absolute top-50 start-0 translate-middle-y px-4 text-start"
                style={{ maxWidth: "600px" }}
              >
                <h1 className="fw-bold text-success animate__animated animate__fadeInLeft">
                  Spreading the Gospel of Christ
                </h1>
                <p className="lead animate__animated animate__fadeInUp animate__delay-1s">
                  Bringing light to the world through His Word.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="position-relative text-white text-center">
              {/* Background Image */}
              <img
                src={ThirdCarousel}
                alt="Banner"
                className="img-fluid w-100"
                style={{ height: "400px", objectFit: "cover" }}
              />

              {/* Overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              ></div>

              {/* Animated Text Over Image */}
              <div
                className="position-absolute top-50 start-0 translate-middle-y px-4 text-start"
                style={{ maxWidth: "600px" }}
              >
                <h1 className="fw-bold text-success animate__animated animate__fadeInLeft">
                  Hope, Truth, Life
                </h1>
                <p className="lead animate__animated animate__fadeInUp animate__delay-1s">
                  Declaring the name of Jesus across every generation.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="position-relative text-white text-center">
              {/* Background Image */}
              <img
                src={FourthCarousel}
                alt="Banner"
                className="img-fluid w-100"
                style={{ height: "400px", objectFit: "cover" }}
              />

              {/* Overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              ></div>

              {/* Animated Text Over Image */}
              <div
                className="position-absolute top-50 start-0 translate-middle-y px-4 text-start"
                style={{ maxWidth: "600px" }}
              >
                <h1 className="fw-bold text-success animate__animated animate__fadeInLeft">
                  Unashamed of the Gospel
                </h1>
                <p className="lead animate__animated animate__fadeInUp animate__delay-1s">
                  “For it is the power of God unto salvation.” — Romans 1:16
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Hero;
