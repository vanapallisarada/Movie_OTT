import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Carousel = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
      </ol>

      {/* Wrapper for slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="la.jpg" alt="Los Angeles" className="d-block w-100" />
        </div>

        <div className="carousel-item">
          <img src="chicago.jpg" alt="Chicago" className="d-block w-100" />
        </div>

        <div className="carousel-item">
          <img src="ny.jpg" alt="New York" className="d-block w-100" />
        </div>
      </div>

      {/* Left and right controls */}
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
