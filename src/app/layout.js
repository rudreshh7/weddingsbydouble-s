import Navbar from "../components/Navbar";
import PerformanceMonitor from "../components/PerformanceMonitor";
import "../styles/App.css";
import "../styles/Home.css";
import "../styles/NikitaAndPhilippe.css";

export const metadata = {
  title: {
    default: "Weddings by Double S - Premier Wedding Planners & Decorators in Mumbai",
    template: "%s | Weddings by Double S"
  },
  description: "Transform your dream wedding into reality with Double S Enterprises. Premier wedding planners and decorators in Mumbai, India. Specializing in luxury weddings, mandap decoration, and bespoke celebration planning.",
  keywords: [
    "wedding planners Mumbai",
    "wedding decorators Mumbai", 
    "mandap decoration",
    "luxury wedding planning",
    "Indian wedding planners",
    "destination wedding planners",
    "wedding decor Mumbai",
    "bridal decoration",
    "haldi ceremony decoration",
    "mehendi decoration",
    "wedding photography",
    "Double S Enterprises"
  ],
  authors: [{ name: "Double S Enterprises" }],
  creator: "Double S Enterprises",
  publisher: "Double S Enterprises",
  metadataBase: new URL('https://weddingsbydouble-s.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Weddings by Double S - Premier Wedding Planners Mumbai",
    description: "Transform your dream wedding into reality with Mumbai's premier wedding planners and decorators. Luxury weddings, mandap decoration & bespoke celebrations.",
    url: 'https://weddingsbydouble-s.com',
    siteName: 'Weddings by Double S',
    images: [
      {
        url: '/images/bannermain.jpg',
        width: 1200,
        height: 630,
        alt: 'Weddings by Double S - Luxury Wedding Planning Mumbai',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Weddings by Double S - Premier Wedding Planners Mumbai",
    description: "Transform your dream wedding into reality with Mumbai's premier wedding planners and decorators.",
    images: ['/images/bannermain.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&family=Cinzel:wght@400..900&family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Dancing+Script:wght@400..700&family=Great+Vibes&family=Italianno&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Pacifico&family=Parisienne&family=Pinyon+Script&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Double S Enterprises - Weddings by Double S",
              "image": "https://weddingsbydouble-s.com/images/Logo.png",
              "description": "Premier wedding planners and decorators in Mumbai, India. Specializing in luxury weddings, mandap decoration, and bespoke celebration planning.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "url": "https://weddingsbydouble-s.com",
              "telephone": "+91-XXXXXXXXXX",
              "priceRange": "₹₹₹",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 19.0760,
                  "longitude": 72.8777
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Wedding Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wedding Planning",
                      "description": "Complete wedding planning services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Wedding Decoration",
                      "description": "Mandap and venue decoration services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Event Coordination",
                      "description": "Complete event coordination and management"
                    }
                  }
                ]
              },
              "areaServed": [
                "Mumbai",
                "Maharashtra", 
                "India",
                "International"
              ],
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Professional Experience",
                "competencyRequired": "Wedding Planning & Event Management"
              }
            })
          }}
        />
      </head>
      <body>
        <PerformanceMonitor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
