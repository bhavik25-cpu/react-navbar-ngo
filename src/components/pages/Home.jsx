// Home.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.jpeg";
import ship from "../../assets/logo.png";
import Footer from "./Footer"; 
const Home = () => {
  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);
  const imageRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoScroll();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const startAutoScroll = () => {
    let index = 0;
    intervalRef.current = setInterval(() => {
      if (index < images.length) {
        setCurrentImage(index);
        imageRef.current.style.transform = `translateX(-${index * 100}%)`;
        index++;
      } else {
        index = 0; 
        setTimeout(() => {
          scrollToNextImage();
        }, 3000); 
      }
    }, 3000); 
  };

  const scrollToNextImage = () => {
    const nextImageIndex = (currentImage + 1) % images.length;
    const transitionDuration = nextImageIndex === 0 ? "0.5s" : "1s"; 
    setCurrentImage(nextImageIndex);
    imageRef.current.style.transitionDuration = transitionDuration;
    imageRef.current.style.transform = `translateX(-${nextImageIndex * 100}%)`;
  };

  const handleDotClick = (index) => {
    setCurrentImage(index);
    imageRef.current.style.transitionDuration = "1s"; 
    imageRef.current.style.transform = `translateX(-${index * 100}%)`;
  };

  return (
    <div className="home-container">
      <div className="image-slider" ref={imageRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="slider-image"
          />
        ))}
      </div>
      <div className="pagination-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentImage === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      <div className="content-text bold">
        Non-governmental organizations, or NGOs, were first called such in Article 71 in the Charter of the newly formed United Nations in 1945. While NGOs have no fixed or formal definition, they are generally defined as nonprofit entities independent of governmental influence (although they may receive government funding).

As one can tell from the basic definition above, the difference between nonprofit organizations (NPOs) and NGOs is slim. However, the term "NGO" is not typically applied to U.S.-based nonprofit organizations. Generally, the NGO label is given to organizations operating on an international level although some countries classify their own civil society groups as NGOs.      </div>
      <div className="box-container">
        <div className="space-button"></div>
        <div className="square-box left-box">
          <button className="box-button">NGO in need of help:</button>
        </div>
        <div className="square-box right-box">
          <button className="box-button">NGO that can provide assistance:</button>
        </div>
      </div>
      <div className="logo-box">
        <img src={ship} alt="Logo" className="logo" />
      </div>
      <Footer /> 
    </div>
  );
};

export default Home;
