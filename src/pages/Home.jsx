import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import { AboutSection } from '../components/hero/about-section';
import { BrandsSection } from '../components/hero/  brands-section';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <BrandsSection/>
      <Footer />
    </div>
  );
};

export default Home;