import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import image1 from "../../assets/images.jpg";
import image2 from "../../assets/images (1).jpg";
import image3 from "../../assets/images (2).jpg";

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
        index = 0; // Reset index to start from the first image
        setTimeout(() => {
          scrollToNextImage();
        }, 3000); // Delay before transitioning to the next image
      }
    }, 3000); // Change the interval as needed
  };
  

  const scrollToNextImage = () => {
    const nextImageIndex = (currentImage + 1) % images.length;
    const transitionDuration = nextImageIndex === 0 ? "0.5s" : "1s"; // Change duration for last image transition
    setCurrentImage(nextImageIndex);
    imageRef.current.style.transitionDuration = transitionDuration;
    imageRef.current.style.transform = `translateX(-${nextImageIndex * 100}%)`;
  };

  const handleDotClick = (index) => {
    setCurrentImage(index);
    imageRef.current.style.transitionDuration = "1s"; // Default duration for dot click
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
  Another bold content text goes here...
</div>
<div className="content-text">
  Your content text goes here...
</div>


    </div>
  );
};

export default Home;
