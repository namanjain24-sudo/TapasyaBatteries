import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import { AboutSection } from '../components/hero/about-section';
import { BrandsSection } from '../components/hero/  brands-section';
import Footer from '../components/Footer';

const Home = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tapasya Batteries",
    "image": "https://tapasyabatteries.shop/image.png",
    "telephone": "+91-XXXXXXXXXX", // Add your actual phone number
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "E-20/205, Ground Floor, Near Mother Dairy, Rohini Sector 3",
      "addressLocality": "Delhi",
      "postalCode": "110085",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "description": "Leading supplier of high-quality car batteries, automotive batteries, and battery solutions in Delhi. Authorized dealer for Luminous, Su-Kam, Exide, Microtek, Amaron, and Okaya.",
    "url": "https://tapasyabatteries.shop/",
    "priceRange": "₹500 - ₹50,000",
    "areaServed": "Delhi, India",
    "productSupported": ["Car Battery", "Inverter Battery", "UPS Battery", "Solar Battery", "E-Rickshaw Battery"]
  };

  return (
    <div>
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      <HeroSection />
      <AboutSection/>
      <BrandsSection/>
      <Footer />
    </div>
  );
};

export default Home;