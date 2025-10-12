"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "../../styles/About.css";
import Footer from "../../components/Footer";

const About = () => {
  const tableRows = [
    { year: "2024", title: "Times applaud Trendsetters award" },
    { year: "2023", title: "Wedding Sutra's Favourite" },
    { year: "2023", title: "Innovating Wedding Design Award" },
  ];
  // Video Playback Controller
  const videoRef = useRef(null);
  const [isItVisible, setIsItVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsItVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5, // Play when 50% of the video is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isItVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isItVisible]);

  // Number Animations Controller

  const statsRef = useRef(null);
  // State to track if the stats are visible
  const [isVisible, setIsVisible] = useState(false);
  // State for counting up the numbers
  const [counts, setCounts] = useState({
    couples: 0,
    members: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    // Create intersection observer to trigger animation when element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Count-up animation effect
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // Duration in ms
    const interval = 20; // Update interval in ms
    const steps = duration / interval;

    let step = 0;
    const timer = setInterval(() => {
      step++;

      setCounts({
        visits: Math.min(Math.floor((120 * step) / steps), 120),
        couples: Math.min(Math.floor((250 * step) / steps), 250),
        members: Math.min(Math.floor((15 * step) / steps), 15),
        satisfaction: Math.min(Math.floor((95 * step) / steps), 95),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const teamMembers = [
    {
      name: "Shehzarin Udwadia",
      role: "Founder & Lead Wedding Planner",
      image: "/images/aboutus/teammain1.jpg", // replace with correct path
    },
    {
      name: "Shanaya Udwadia",
      role: "Vendor Logistics Coordinator",
      image: "/images/aboutus/team1.jpg", // replace with correct path
    },
  ];
  return (
    <div>
      {/* About Us Banner */}
      <div className="about-us-banner">
        <div className="overlay">
          <h1>ABOUT US</h1>
        </div>
      </div>
      {/* Our Story */}
      <div className="our-story-section">
        <div className="our-story-text">
          <h2>Our Story</h2>
          <p>
            Meet Shanaya, the creative force behind our extraordinary decor and
            design endeavors. Imbued with an unbridled passion and a discerning
            eye for perfection, Shanaya has immersed herself in the art of decor
            since 2017. Her journey, which commenced at a young age, has evolved
            into a testament of unwavering dedication and unparalleled
            creativity. Breathing life into spaces with an innate sense of
            style, she has curated breathtaking designs that have graced
            significant weddings.
          </p>
          <p>
            With an extensive background and an artistic prowess, Shanaya brings
            a unique blend of experience and youthful innovation to elevate your
            events to the pinnacle of elegance. Welcome to a world where each
            detail is meticulously crafted to reflect your distinct vision.
          </p>
        </div>
        <div className="our-story-image">
          <img src="/images/aboutus/about2.jpg" alt="Shehzarìn and Shanaya" />
        </div>
      </div>
      {/* Team Section */}
      <section className="team-section">
        <div
          className="team-image-container"
          style={{ position: "relative", zIndex: 5 }}
        >
          <img src="/images/aboutus/about1.jpg" alt="wedding" className="team-image" />
        </div>

        <div className="team-text-container">
          <p>
            {" "}
            Embark on a journey with the dynamic mother-daughter duo, Shehzarin
            and Shanaya, whose collective expertise weaves an enchanting
            tapestry of hospitality and design. With a rich and extensive
            23-year background in the hotel industry, Shehzarin transitioned
            seamlessly into the enchanting realm of wedding planning. Her
            journey led her to spearhead the wedding vertical of a prominent
            planning company, where her passion for creating unforgettable
            moments flourished. Fueled by a deep understanding of hospitality
            and an unwavering commitment to crafting seamless celebrations,
            Shehzarin embarked on a new chapter, founding her own company to
            bring distinct elegance and expertise to every wedding she touches.
          </p>
        </div>
        {/* Achievments Secton */}
        <div className="achievements-section" ref={statsRef}>
          <motion.div
            className="stats"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div className="stat" variants={itemVariants}>
              {/* <p style={{ fontSize: "24px", color: "green" }}>Happiness</p> */}

              <h2>
                {counts.visits}
                <span>+</span>
              </h2>
              <p>Smiles on clients face </p>
            </motion.div>
            <motion.div className="stat" variants={itemVariants}>
              <h2>
                {counts.couples}
                <span>+</span>
              </h2>
              <p>Wedding Couples</p>
            </motion.div>

            <motion.div className="stat" variants={itemVariants}>
              <h2>
                {counts.members}
                <span>+</span>
              </h2>
              <p>Expert Members</p>
            </motion.div>

            <motion.div className="stat" variants={itemVariants}>
              <h2>
                {counts.satisfaction}
                <span>%</span>
              </h2>
              <p>Satisfaction Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Hide it in above mobile */}
      <div className="special-img">
        <img src="/images/aboutus/about1.jpg" alt="" />
      </div>

      {/* Writeup Mid About */}

      {/* Writeup */}
      <div>
        <p className="end-writeup">
          With a rich and extensive 23-year background in the hotel industry,
          Shehzarin transitioned seamlessly into the enchanting realm of wedding
          planning. Her journey led her to spearhead the wedding vertical of a
          prominent planning company, where her passion for creating
          unforgettable moments flourished. Fueled by a deep understanding of
          hospitality and an unwavering commitment to crafting seamless
          celebrations, Shehzarin embarked on a new chapter, founding her own
          company to bring distinct elegance and expertise to every wedding she
          touches. Welcome to a world where experience meets innovation, curated
          by a seasoned professional dedicated to turning your dream wedding
          into a timeless reality.
        </p>
      </div>
      {/* Video Section */}
      <section className="video-section">
        <div className="video-container">
          <video
            ref={videoRef}
            className="responsive-iframe"
            src="/video/videoaboutmain.mp4"
            title="About Us Video"
            autoPlay={false} // controlled via JavaScript
            loop
            // muted // Necessary for autoplay in most browsers
            playsInline
          />
        </div>
      </section>

      {/* Writeup Mid About */}

      {/* Achievement 2 section */}

      {/* Our Founders */}
      <section className="our-founders">
        <h6 className="founder-heading">Our Founders</h6>

        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="profile-image"
                />
              </div>
              <div className="member-info">
                <p className="name">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <section className="achievement-section">
        <div className="achievements-container">
          <div className="achievements-image">
            <img src="/images/aboutus/about3.jpg" alt="Wedding Achievement" />
          </div>
          <div className="achievements-content">
            <h2>Our Achievements</h2>
            <table>
              <tbody>
                <tr>
                  <td>2024</td>
                  <td>Times applaud Trendsetters award</td>
                </tr>
                <tr>
                  <td>2023</td>
                  <td>Customer Satisfaction Award</td>
                </tr>
                <tr>
                  <td>2023</td>
                  <td>Innovating Wedding Design Award</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* Writeup One */}
      <div>
        <p className="end-writeup">
          We don't just plan weddings — we weave dreams into reality, turning
          your love story into unforgettable moments and lasting memories. Every
          celebration we create echoes the beauty of your journey together.
        </p>
      </div>

      <div className="magaz">
        <img src="/images/aboutus/aboutmagaz.jpg" alt="" />
      </div>
      {/* Magazine */}
      {/* <div className="magazine-cover">
        <img src={coverone} alt="" />
        <img src={covertwo} alt="" />
      </div> */}
      {/* Writeup Two */}
      <div>
        <p className="about-writeup-one">
          Together, Shehzarin and Shanaya form the heart and mind of our
          company, where hospitality meets design, and every celebration
          is a masterpiece. Complementing this seasoned matriarch is Shanaya the
          creative luminary. A true aficionado of décor, she breathes life into
          spaces with an unrivaled passion. A creative wonder child, Shanaya's
          love for design was nurtured at a young age, endowing her with a
          wealth of experience that manifests in her meticulous attention to
          detail.
        </p>
      </div>

      <section className="achievement-section">
        <div className="achievements-container flex flex-col md:flex-row gap-8">
          {/* Image Animation */}
          <motion.div
            className="achievements-image"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src="/images/aboutus/about3.jpg" alt="Wedding Achievement" />
          </motion.div>

          {/* Content Animation */}
          <motion.div
            className="achievements-content"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4">Our Achievements</h2>
            <table className="w-full text-left border-separate border-spacing-y-2">
              <tbody>
                {tableRows.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <td className="pr-4 font-medium">{row.year}</td>
                    <td>{row.title}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Ending */}
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="tagline">
          Reach out to <strong>Double S Enterprises</strong> today to schedule a
          consultation.
        </p>

        <div className="contact-info">
          <div className="info-box">
            <label>Email:</label>
            <a href="mailto:shanaya@double-s.in">shanaya@double-s.in</a>
          </div>

          <div className="info-box">
            <label>Phone:</label>
            <a href="tel:9833568957">9833568957</a>
          </div>

          <div className="info-box">
            <label>Instagram:</label>
            <a
              href="https://www.instagram.com/weddingsby_double_s"
              target="_blank"
              rel="noreferrer"
            >
              @weddingsby_double_s
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
