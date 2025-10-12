import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";
import {
  ArrowRight,
  ArrowLeft,
  Circle,
  CircleHalf,
} from "@phosphor-icons/react";

const ImageSlider = ({ imageUrls, textContent }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const slideInterval = useRef(null);
  const resumeTimeout = useRef(null);

  // Auto Slide Function
  useEffect(() => {
    if (isAutoSliding) {
      slideInterval.current = setInterval(() => {
        setImageIndex((prevIndex) =>
          prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // change every 3 seconds
    }

    return () => clearInterval(slideInterval.current);
  }, [isAutoSliding, imageUrls.length]);

  const resetAutoSlide = () => {
    setIsAutoSliding(false);
    clearTimeout(resumeTimeout.current);

    resumeTimeout.current = setTimeout(() => {
      setIsAutoSliding(true);
    }, 5000); // resume after 5 seconds
  };

  function showNextImage() {
    setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
    resetAutoSlide();
  }

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? imageUrls.length - 1 : index - 1));
    resetAutoSlide();
  }

  function goToImage(index) {
    setImageIndex(index);
    resetAutoSlide();
  }

  return (
    <div className="img-slider-container">
      <div className="img-slider-wrapper">
        {imageUrls.map((url, index) => (
          <div
            key={url}
            className="slide-container"
            style={{ translate: `${-100 * imageIndex}%` }}
          >
            <img
              src={url}
              alt={`slide ${index + 1}`}
              className="img-slider-img"
            />
            {textContent && textContent[index] && (
              <div className="slide-text-overlay">
                <div className="slide-text">{textContent[index]}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button onClick={showPrevImage} className="img-slider-btn prev-btn">
        <ArrowLeft size={10} color="#8C916C" weight="fill" />
      </button>
      <button onClick={showNextImage} className="img-slider-btn next-btn">
        <ArrowRight size={10} color="#8C916C" weight="fill" />
      </button>

      <div className="img-slider-dots">
        {imageUrls.map((_, index) => (
          <button
            className="img-slider-dot-btn"
            key={index}
            onClick={() => goToImage(index)}
          >
            {index === imageIndex ? (
              <CircleHalf size={10} color="#ffffff" />
            ) : (
              <Circle size={10} color="#ffffff" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
