import React from "react";
import "./HomeArt.css";
import { motion } from "motion/react";

const HomeArt = () => {
  return (
    <div className="home-art">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-200px" }}
        transition={{ duration: 1 }}
        className="home-art-left"
      >
        <img src="/images/homeart1.png" alt="" />
      </motion.div>

      {/* WriteUp */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-200px" }}
        transition={{ duration: 1.2 }}
        className="home-art-writeup"
      >
        <p>Your Journey to flawless moments </p>
        <p>
          "A wedding is a work of art, created with love, care, and a touch of
          magic."
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-200px" }}
        transition={{ duration: 1, delay: 0.3 }}
        className="home-art-right"
      >
        <img src="/images/homeart2.png" alt="" />
      </motion.div>
    </div>
  );
};

export default HomeArt;
