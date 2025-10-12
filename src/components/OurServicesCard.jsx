import React from "react";
import "./OurServicesCard.css";

const VenueSelection = ({ image, title, description }) => {
  return (
    <div className="venue-card">
      <div className="venue-image">
        {/* Replace with your actual image component or img tag */}
        <img src={image} alt="Wedding venue" />
      </div>
      <div className="venue-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VenueSelection;
