"use client";
import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import "../../styles/Decor.css";

const Decor = () => {
  const images = Array.from(
    { length: 46 },
    (_, index) => `/images/gallery/g${index + 1}.jpg`
  );

  return (
    <div>
      {/* Banner */}
      <div className="decor-banner">
        <div className="overlay">
          <h1>Decor</h1>
        </div>
      </div>
      {/* Decor Heading */}
      <div>
        <h3 className="founder-heading">
          "Transform your special moments with breathtaking decor that blends
          elegance, creativity, and your unique vision."
        </h3>
      </div>
      <div className="decor-main-writeup">
        {/* Writeup */}
        <motion.div
          className="decor-writeup"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p>
            At Double S Enterprises, we don't just design events — we curate
            experiences that linger in memory long after the final toast.
            Whether you envision an opulent wedding, an intimate reception, or a
            sophisticated corporate soirée, our passionate team weaves artistry
            and precision into every detail. From ethereal floral cascades and
            sumptuous drapery to awe-inspiring thematic installations, we
            transform ordinary venues into spellbinding backdrops that echo your
            personality and dreams. Every event we touch becomes a canvas —
            where elegance embraces imagination and every corner whispers your
            story.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src="/images/decor/writeup-decor.png" alt="" />
        </motion.div>
      </div>
      <div className="decor-main-writeup">
        <div className="hahadecor">
          <img src="/images/decor/hahadecor.jpg" alt="" />
        </div>
        <div className="decor-writeup">
          <p>
            We bring your dream events to life with stunning and bespoke decor.
            Whether it's a grand wedding, an elegant reception, or a corporate
            gala, our expert team crafts mesmerizing setups that reflect your
            style and vision. From enchanting floral arrangements and luxurious
            drapes to breathtaking themed installations, we create unforgettable
            atmospheres tailored to your special moments. Let us transform your
            venue into a masterpiece—where elegance meets creativity, and every
            detail tells a story.
          </p>
        </div>
      </div>

      {/* Decor Themes */}

      {/* Writeup */}

      <div>
        <p className="end-writeup">
          At our core, we are storytellers of love and celebration. We
          understand that weddings are not just events — they are
          once-in-a-lifetime moments where hearts and dreams intertwine. That's
          why we pour the same passion and care into your special day as we
          would for our own. Our promise is simple: to craft unforgettable
          experiences and turn your dreams into reality, with elegance, warmth,
          and joy in every detail.
        </p>
      </div>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-container">
          <video
            className="responsive-iframe"
            src="/images/aboutus/video1.mp4"
            title="About Us Video"
            autoPlay // controlled via JavaScript
            loop
            muted // Necessary for autoplay in most browsers
            playsInline
          />
        </div>
      </section>

      {/* Gallery */}
      <section>
        <h3 className="gallery-heading">Gallery</h3>
        {/* <div className="gallery">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Gallery ${idx + 1}`} />
          ))}
        </div> */}
        <motion.div
          className="gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {images.map((src, idx) => (
            <motion.img
              key={idx}
              src={src}
              alt={`Gallery ${idx + 1}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            />
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Decor;