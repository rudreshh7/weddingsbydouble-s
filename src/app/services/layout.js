import "../../styles/Services.css";

export const metadata = {
  title: "Wedding Services - Complete Planning & Decoration | Double S Enterprises",
  description: "Discover our comprehensive wedding services: luxury planning, mandap decoration, venue selection, floral arrangements, and complete event coordination. Creating magical celebrations in Mumbai and beyond.",
  keywords: "wedding services Mumbai, mandap decoration, venue selection, floral arrangements, wedding coordination, luxury wedding planning, event management Mumbai",
  openGraph: {
    title: "Wedding Services - Double S Enterprises Mumbai",
    description: "Complete wedding planning and decoration services for your perfect celebration.",
    images: ['/images/services.jpg'],
  },
};

export default function ServicesLayout({ children }) {
  return children;
}