import { useState, useEffect } from "react";
import "../ui/Testinomials.css";

export default function TestimonialCards() {
  const testimonials = [
    {
      quote:
        "Thank you team Double S for a wonderful and memorable evening and supporting us in every aspect, being there at a beck and call, and helping us in the best way possible 🥰",
      name: "Deepali",
      rating: 5,
    },
    {
      quote:
        "Shez and Shanaya thank you very much for making our function a grand success. You guys were really supportive throughout the process and showed lots of patience with us.",
      name: "Manoj Sawla",
      rating: 5,
    },
    {
      quote:
        "Shanaya, I didn't get to see you the day we were leaving. I wanted to say a huge thank you for everything. The decorations looked so beautiful and everything came to fruition beyond my expectations.",
      name: "Nikita Ramchandani",
      rating: 5,
    },
    {
      quote:
        "Hello Shanaya and Shez, thank you so much for the wonderful events. We would like to thank you from the bottom of our hearts for your wholehearted support in making the occasion so beautiful.",
      name: "Sanjay Patel",
      rating: 5,
    },
    {
      quote:
        "Shanaya and Shez, words can't express my gratitude for you. Thank you so much for everything. It couldn't be more perfect and it couldn't be possible without you.",
      name: "Arnavaz Ghista",
      rating: 5,
    },
    {
      quote:
        "Thank you guys! Each and every function looked beautiful. Thank you for going out of your way to make this wedding so beautiful and a success.",
      name: "Tina Puga",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="star">
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <h2 className="what">What</h2>
        <h2 className="they">They</h2>
        <h2 className="say">Say</h2>
      </div>

      <div className="testimonial-card-container">
        <div className="testimonial-card">
          <div className="card-content">
            <div className="quote-container">
              <div className="quote-marks left-quote">❝</div>
              <p className="quote">{testimonials[currentIndex].quote}</p>
              <div className="quote-marks right-quote">❞</div>
            </div>

            <div className="card-footer">
              <h3 className="name">{testimonials[currentIndex].name}</h3>
              <div className="rating">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
            </div>
          </div>

          <div className="card-background">
            <div className="card-decoration left-decoration"></div>
            <div className="card-decoration right-decoration"></div>
          </div>
        </div>
      </div>

      <div className="navigation-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
