import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import reference1 from '../assets/reference1.svg';
import reference2 from '../assets/reference2.svg';
import reference3 from '../assets/reference3.svg';
import reference4 from '../assets/reference4.svg';
import reference5 from '../assets/reference5.svg';
import reference6 from '../assets/reference6.svg';

const References = () => {
    const [speed, setSpeed] = useState(30);

    const handleMouseEnter = () => {
        setSpeed(100);
    };

    const handleMouseLeave = () => {
        setSpeed(30);
    };

    return (
        <Marquee
            className="references-container"
            play={true}
            pauseOnHover={false}
            direction="left"
            speed={speed}
            loop={0}
            gradient={false}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="references-item" id="references">
                <img src={reference1} alt="reference 1" className="references-image" />
                <div className="overlay">
                </div>
            </div>
            <div className="references-item">
                <img src={reference2} alt="reference 2" className="references-image" />
                <div className="overlay">
                </div>
            </div>
            <div className="references-item">
                <img src={reference3} alt="reference 3" className="references-image" />
                <div className="overlay">
                </div>
            </div>
            <div className="references-item">
                <img src={reference4} alt="reference 4" className="references-image" />
                <div className="overlay">
                </div>
            </div>
            <div className="references-item">
                <img src={reference5} alt="reference 5" className="references-image" />
                <div className="overlay">
                </div>
            </div>
            <div className="references-item">
                <img src={reference6} alt="reference 6" className="references-image" />
                <div className="overlay">
                </div>
            </div>
            <div className="references-item" id="works">
                <img src={reference1} alt="reference 1" className="references-image" />
                <div className="overlay">
                </div>
            </div>
            <div className="references-item">
                <img src={reference2} alt="reference 2" className="references-image" />
                <div className="overlay">
                </div>
            </div>
            <div className="references-item">
                <img src={reference3} alt="reference 3" className="references-image" />
                <div className="overlay">
                </div>
            </div>
            <div className="references-item">
                <img src={reference4} alt="reference 4" className="references-image" />
                <div className="overlay">
                </div>
            </div>
            <div className="references-item">
                <img src={reference5} alt="reference 5" className="references-image" />
                <div className="overlay">
                </div>
            </div>
            <div className="references-item">
                <img src={reference6} alt="reference 6" className="references-image" />
                <div className="overlay">
                </div>
            </div>

        </Marquee>
    );
};

export default References;
