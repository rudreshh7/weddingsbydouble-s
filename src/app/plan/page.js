"use client";
import React from "react";
import "../../styles/Plan.css";
import Footer from "../../components/Footer";

const Plan = () => {
  const images = [
    "/images/plan/planend1.jpg", // Update with your actual image paths
    "/images/plan/planend2.jpg",
    "/images/plan/planend3.jpg",
  ];

  const services = [
    {
      title: "CONSULTATION",
      description:
        "From your very first vision board to tailored vendor suggestions, our consultation sessions craft a personalized blueprint for your perfect day turning your dreams into a detailed plan.",
    },
    {
      title: "COORDINATION",
      description:
        "On the big day, our expert coordinators seamlessly connect every dot synchronizing vendors, guests, and schedules so that you simply bask in the joy without worrying about the details.",
    },
    {
      title: "EXECUTION",
      description:
        "Watch your vision unfold flawlessly as our team orchestrates every element, from the grand entrance to the final toast ensuring an effortless, unforgettable celebration.",
    },
  ];

  return (
    <div>
      {" "}
      <div className="plan-banner">
        <div className="overlay">
          <h1>Wedding Planning</h1>
        </div>
      </div>
      {/* Writeup */}
      <div className="founder-note">
        <div className="vertical-line"></div>

        <p className="founder-heading">
          WITH YEARS OF EXPERTISE IN WEDDING PLANNING, WE ARE DEDICATED TO
          CREATING BEAUTIFULLY ORCHESTRATED EXPERIENCES
        </p>
        <p className="founder-description">
          At Double S Enterprises, we don't just design weddings, we curate
          unforgettable experiences. Every element, from exquisite mandaps and
          lush floral arrangements to bespoke wedding favors, is thoughtfully
          crafted to reflect your unique story.
        </p>
      </div>
      {/* Other sections */}
      <div className="intro-plan">
        <div className="intro-plan-large">
          <img src="/images/plan/planmain1.jpg" alt="" />
        </div>
        <div className="intro-plan-small">
          <img src="/images/plan/plan2.jpg" alt="" />
          <img src="/images/plan/plan3.jpg" alt="" />
          <img src="/images/plan/plan4.jpg" alt="" />
        </div>
      </div>
      {/* Writeup */}
      <div className="only-mobile-plan">
        <img src="/images/plan/plan2.jpg" alt="" />
        <img src="/images/plan/plan3.jpg" alt="" />
        <img src="/images/plan/plan4.jpg" alt="" />
      </div>
      <div>
        <p className="plan-writeup">
          We are true romantics at heart. We know when it comes to the matter of
          the heart, and that to for an occasion like weddings, we would have
          wanted the best for ourselves. And that's the promise we go out with.
          Deliver the best and make dreams come true.
        </p>
      </div>
      <div className="bell-divider">
        <hr className="line" />
        <img src="/bell.svg" alt="Bell" className="bell-icon" />
        <hr className="line" />
      </div>
      {/* Plan Heading big */}
      <div>
        <p className="founder-heading">
          DISCOVER THE PERFECT SETTING FOR YOUR LOVE STORY WITH OUR EXQUISITE
          VENUE SELECTION SERVICE
        </p>
      </div>
      {/* Wrtiteup */}
      <div>
        <p className="mid-writeup">
          At Double S Enterprises, we believe that the right venue sets the tone
          for your entire wedding. Whether you envision a grand palace, a serene
          beach, a lush garden, or a chic banquet hall, our Venue Selection
          Service ensures that your special day takes place in the perfect
          setting that reflects your love story.
        </p>
      </div>
      {/* Mid Writeup img */}
      <div className="mid-writeup-img">
        <img src="/images/plan/midwriteup.jpg" alt="" />
      </div>
      {/* Write para */}
      <div>
        <p className="mid-writeup">
          We don't just design weddings we craft timeless memories, heartfelt
          moments, and experiences you'll cherish forever. Every detail we
          create is inspired by your unique love story.
        </p>
      </div>
      {/* Our Work Process */}
      <section className="work-process-section">
        <div className="work-process-text">
          <h2>Our Work Process</h2>
          <p>
            Uncover the artistry behind the magic of your wedding day from the
            initial consultation to the final dance.
          </p>
        </div>
        <div className="work-process-image">
          <img src="/images/plan/workprocess.jpg" alt="Wedding Dance" />
        </div>
      </section>
      <div className="services-section">
        {services.map((service, index) => (
          <div className="service-card-with-image" key={index}>
            <div className="service-card">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <div className="image-wrapper">
              <img src={images[index]} alt={`${service.title} Image`} />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Plan;