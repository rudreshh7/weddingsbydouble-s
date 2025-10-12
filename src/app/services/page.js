"use client";
import React from "react";
import ServiceCard from "../../components/ui/ServiceCard";
import Footer from "../../components/Footer";

const Services = () => {
  const services = [
    {
      icon: "/images/s1.png",
      title: "Wedding Planning",
      description:
        "We specialize in weaving your love story into a breathtaking visual experience — from themed backdrops to tailor-made decor settings.",
    },
    {
      icon: "/images/s2.png",
      title: "Custom Wedding Decor",

      description:
        "From the very first invitation to the last dance, our team meticulously handles every detail so you can truly live your dream day stress-free.",
    },
    {
      icon: "/images/s3.png",
      title: "Event Styling & Design",
      description:
        "From elegant floral arrangements to breathtaking tablescapes, our creative stylists transform your vision into a captivating setting that reflects your personal style and story.",
    },
    {
      icon: "/images/s4.png",
      title: "Vendor Coordination",
      description:
        "We seamlessly manage communications and logistics with trusted vendors — ensuring that every caterer, photographer, and entertainer aligns perfectly with your event timeline and expectations.",
    },
    {
      icon: "/images/s5.png",
      title: "On-Site Event Management",
      description:
        "Our expert coordinators are on the ground from start to finish, ensuring every detail runs smoothly — so you can relax and fully immerse yourself in every special moment.",
    },
    {
      icon: "/images/s6.png",
      title: "Destination Wedding Services",
      description:
        "Whether it's a beachside vow exchange or a majestic palace celebration, we handle travel, logistics, and local arrangements to curate unforgettable weddings anywhere in the world.",
    },

    {
      icon: "/images/s7icon.png",
      title: "Collateral Design",
      description:
        "Crafting captivating visuals and branded assets that tell your story with style and sophistication — because first impressions matter.",
    },
    {
      icon: "/images/s8icon.png",
      title: "Food and Beverages",
      description:
        "From gourmet delights to signature drinks, we curate culinary experiences that are as unforgettable as the occasion itself.",
    },
    {
      icon: "/images/s9icon.png",
      title: "Styling and Makeup",
      description:
        "Transforming looks into statements — our expert stylists and makeup artists bring out the best version of you, flawless and radiant.",
    },
  ];

  return (
    <div>
      <div className="ourservices-banner">
        <div className="overlay">
          <h1>Our Services</h1>
        </div>
      </div>
      {/* Our Services */}

      <div className="home-services">
        <div className="services-list">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;