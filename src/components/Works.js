import React, { useState } from "react";
import Marquee from "react-fast-marquee";

// Görselleri içe aktar
import image1 from '../assets/works-1.jpg';
import image2 from '../assets/works-2.jpg';
import image3 from '../assets/works-3.jpg';

const App = () => {
  const [speed, setSpeed] = useState(30);

  const handleMouseEnter = () => {
    setSpeed(100);
  };

  const handleMouseLeave = () => {
    setSpeed(30);
  };

  return (
    <Marquee
      style={{ backgroundColor: "white" }}
      className="marquee-container"
      play={true}
      pauseOnHover={false}
      direction="left"
      speed={speed}
      loop={0}
      gradient={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="marquee-item" id="works">
        <img src={image1} alt="Item 1" className="marquee-image" />
        <div className="overlay">
          <button className="detail-button">Detail</button>
        </div>
      </div>
      <div className="marquee-item">
        <img src={image2} alt="Item 2" className="marquee-image" />
        <div className="overlay">
          <button className="detail-button">Detail</button>
        </div>
      </div>
      <div className="marquee-item">
        <img src={image3} alt="Item 3" className="marquee-image" />
        <div className="overlay">
          <button className="detail-button">Detail</button>
        </div>
      </div>
      <div className="marquee-item">
        <img src={image1} alt="Item 1" className="marquee-image" />
        <div className="overlay">
          <button className="detail-button">Detail</button>
        </div>
      </div>
      <div className="marquee-item">
        <img src={image2} alt="Item 2" className="marquee-image" />
        <div className="overlay">
          <button className="detail-button">Detail</button>
        </div>
      </div>
      <div className="marquee-item">
        <img src={image3} alt="Item 3" className="marquee-image" />
        <div className="overlay">
          <button className="detail-button">Detail</button>
        </div>
      </div>
    </Marquee>
  );
};

export default App;
