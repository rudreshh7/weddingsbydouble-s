"use client";
import React from "react";
import Hero from "../components/Hero";
import HomeArt from "../components/ui/HomeArt";
import "../styles/Home.css";

import SelectedStory from "../components/ui/SelectedStory";
import ImageGallery from "../components/ui/ImageGallery";
import Testinomials from "../components/ui/Testinomials";
import FAQSection from "../components/ui/FAQSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* Writeup */}
      <img className="flower-blend" src="/Flower.svg" alt="Decorative Flower" />
      <div className="founder-note">
        <p className="founder-heading">
          YEARS OF MASTERING THE ART OF WEDDING MAGIC — CURATING MEMORIES THAT
          LAST FOREVER.
        </p>
        <p className="founder-description">
          At Double S Enterprises, every wedding we design is a symphony of
          love, luxury, and personalization. From lavish mandaps adorned with
          handpicked blooms to curated gourmet experiences, we turn
          once-in-a-lifetime dreams into tangible reality.
        </p>
      </div>
      <HomeArt />

      <img className="flower-blend" src="/Flower.svg" alt="Decorative Flower" />
      {/* Writeup */}
      <div>
        <p className="end-writeup">
          Every couple is unique, and so should be their celebration. We bring
          artistry, precision, and heartfelt passion to ensure your special day
          is an unforgettable masterpiece.
        </p>
      </div>
      {/* Selected Stories */}
      <div className="selected-stories">
        <h6 className="stories-heading">Moments we made magical</h6>
        <SelectedStory />
      </div>
      <img className="flower-blend" src="/Flower.svg" alt="Decorative Flower" />
      {/* Writeup */}
      <div>
        <p className="end-writeup">
          Love deserves to be celebrated in ways that feel personal and
          profound. Our bespoke wedding designs and flawless execution make sure
          your journey to forever begins beautifully.
        </p>
      </div>

      <div className="venue-card">
        <div className="venue-image">
          <img src="/images/whychoose.jpg" alt="Wedding venue" />
        </div>
        <div className="venue-content">
          <h2>Why Choose Double S Enterprises?</h2>

          <ul>
            <li>
              • Tailored to You: Every event is uniquely designed to reflect
              your story.
            </li>
            <li>
              • Creative and Elegant: We specialize in breathtaking, timeless
              decor.
            </li>
            <li>
              • Stress-Free Planning: We manage every detail so you can focus on
              making memories.
            </li>
            <li>
              • Global Expertise: Based in Mumbai, we plan weddings across India
              and worldwide.
            </li>
            <li>
              • Passionate Team: We are committed to bringing heart, style, and
              excellence to every celebration.
            </li>
          </ul>
        </div>
      </div>
      {/* Image Carousel */}
      <div>
        <h6 className="imagecarousel-heading"> see what we are upto </h6>
        <ImageGallery />
      </div>
      <img className="flower-blend" src="/Flower.svg" alt="Decorative Flower" />
      {/* Writeup */}
      <div>
        <p className="end-writeup">
          Welcome to <strong>Double S Enterprises</strong>
          <br />
          <em>Where Every Celebration Becomes a Dream Come True</em>
          <br />
          <br />
          At Double S Enterprises, we believe every love story deserves to be
          celebrated with beauty, elegance, and heart. Specializing in wedding
          planning and bespoke decor, we craft unforgettable experiences
          tailored to your unique vision. From romantic pastel setups to grand
          floral displays, our team brings creativity, passion, and meticulous
          attention to detail into every event we design.
          <br />
          <br />
          Whether you dream of an intimate ceremony or a lavish celebration,
          Double S Enterprises is here to bring your vision to life seamlessly,
          gracefully, and with a touch of magic.
          <br />
          <br />
          Let us handle the details while you focus on making memories that will
          last a lifetime.
          <br />
          <br />
          <strong>Your dream day starts here.</strong>
          <br />
          <em>Let's create something unforgettable.</em>
        </p>
      </div>

      {/* Testimonials */}
      <div>
        <h6 className="imagecarousel-heading"> Client Testimonials</h6>
        <Testinomials />
      </div>

      {/* FAQ Section */}
      <div>
        <h6 className="imagecarousel-heading">Frequently Asked Questions</h6>
        <FAQSection />
      </div>

      <p className="founder-heading">
        YEARS OF MASTERING THE ART OF WEDDING MAGIC — CURATING MEMORIES THAT
        LAST FOREVER.
      </p>
      <Footer />
    </div>
  );
};

export default Home;
