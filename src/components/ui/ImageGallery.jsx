// ImageGallery.jsx
import React, { useEffect, useState } from "react";
import "./ImageGallery.css";

const images = [
  "/images/services/s1.jpg",
  "/images/services/s2.jpg",
  "/images/services/s3.jpg",
  "/images/services/s4.jpg",
  "/images/services/s5.jpg",
  "/images/services/s6.jpg",
  "/images/services/s7.jpg",
  "/images/services/s8.jpg",
  "/images/services/s9.jpg",
  "/images/services/s10.jpg",
  "/images/services/s11.jpg",
  "/images/services/s12.jpg",
];

const ImageGallery = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="auto-carousel-container">
      <img
        key={index}
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="auto-carousel-img fade-slide"
      />
    </div>
  );
};

export default ImageGallery;
