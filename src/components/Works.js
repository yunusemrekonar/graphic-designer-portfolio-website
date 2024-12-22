import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Brooklyn from "../assets/works-1.jpg";
import Macao from "../assets/works-2.jpg";
import Navada from "../assets/works-1.jpg";

function CarouselGames() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  const images = [Brooklyn, Macao, Navada, Brooklyn, Macao, Navada];

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img
                src={image}
                alt={`Poster ${image.split("/").pop().split(".")[0]}`}
                className="carousel-image"
              />
              <div className="overlay">
                <button className="details-btn">Details</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselGames;
