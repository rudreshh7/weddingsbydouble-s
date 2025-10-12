import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQSection.css";

const faqs = [
  {
    question: "How can you get in Touch with Us ?",
    answer: `
      <p>Ready to start planning your dream event? We’d love to hear from you!</p>
      <p>Reach out to Double S Enterprises today to schedule a consultation.</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:shanaya@double-s.in">shanaya@double-s.in</a></li>
        <li><strong>Phone:</strong> <a href="tel:+919833568957">9833568957</a></li>
        <li><strong>Instagram:</strong> <a href="https://www.instagram.com/weddingsby_double_s?igsh=MWN5OGtmYjRhY2VvYg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">weddingsby_double_s</a></li>
        <li><strong>Location:</strong> Mumbai</li>
      </ul>
    `,
  },
  {
    question: "What are the services your provide?",
    answer: `
      <p>At Double S Enterprises, we offer a complete range of services to make your special day truly unforgettable:</p>
      <ul>
        <li><strong>Wedding Planning:</strong> From concept to execution, we manage every detail so you can enjoy every moment stress-free.</li>
        <li><strong>Custom Wedding Decor:</strong> Elegant, romantic, and personalized — we design breathtaking setups that reflect your unique style and story.</li>
        <li><strong>Event Styling & Design:</strong> Beyond weddings, we bring creativity and sophistication to engagements, anniversaries, and private parties.</li>
        <li><strong>Vendor Coordination:</strong> We work with trusted vendors to deliver flawless experiences from florists to caterers and more.</li>
        <li><strong>On-Site Event Management:</strong> Our experienced team ensures your event runs smoothly, handling all the behind-the-scenes logistics.</li>
        <li><strong>Destination Wedding Services:</strong> Dreaming of a wedding away from home? We can help plan and execute beautiful celebrations at stunning destinations.</li>
      </ul>
    `,
  },
  {
    question: "Where are we located at ?",
    answer: `
      <p>Double S Enterprises is proudly based in Mumbai, India.</p>
      <ol>
        <li>While we are rooted in the heart of Mumbai, our passion for creating unforgettable celebrations knows no boundaries. We offer wedding planning and decor services across India and around the world, bringing your dream event to life wherever love takes you.</li>
        <li>No destination is too near or too far — if you can dream it, we can make it happen.</li>
      </ol>
    `,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="faq-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            onClick={() => toggleFAQ(index)}
            className={`faq-question ${openIndex === index ? "active" : ""}`}
          >
            <span>{faq.question}</span>
            <motion.span
              className="faq-icon"
              animate={{ rotate: openIndex === index ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▸
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                className="faq-answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                  style={{ padding: "10px 0" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
}
