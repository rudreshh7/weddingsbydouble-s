// ServiceCard.jsx
import React from "react";
import { motion } from "framer-motion";
import "./ServiceCard.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
      viewport={{ once: true }}
    >
      <img src={icon} alt={title} className="service-icon" />
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
