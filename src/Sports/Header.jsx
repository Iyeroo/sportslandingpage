import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";


import image1 from "../assets/image1.JPG";
import image3 from "../assets/image3.JPG";

import image4 from "../assets/image4.JPG";
import trophy1 from "../assets/trophy1.png";
import "./Header.css";
import DropdownMenu from "./Profile";

import { Link } from "react-router-dom";

const images = [
  { src: image1, title: "Cricket", subtitle: "Sportsmanship" },
  { src: image3, title: "Volleyball", subtitle: "Design" },
  
  { src: image4, title: "Football", subtitle: "Design" },
  
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handlers for navigation
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const currentSlide = (index) => {
    setActiveIndex(index);
  };


  return (
    <>
      <header>
        {/* <Image src={logo} width={90} height={90} style={{ marginTop: "50px" }} /> */}
        
        <ul className="menu">
          <li>Events</li>
          <li>Gallery</li>
          <li><Link to="/schedule">Schedule</Link></li>
          
          <li>Login</li>
        </ul>
        
      </header>

      {/* Slider Section */}
      <div className="slider">
        <div className="list">
          {images.map((image, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? "active" : ""}`}
            >
              <img src={image.src} alt={image.title} />
             
            </div>
          ))}
        </div>
<div className="Trophy">
  <img src={trophy1}></img>
</div>
        {/* Arrows */}
        <div className="arrows">
          <button onClick={handlePrev} className="prev">
            {"<"}
          </button>
          <button onClick={handleNext} className="next">
            {">"}
          </button>
        </div>

        <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>

        
      </div>
    </>
  );
};

export default HeroSection;
