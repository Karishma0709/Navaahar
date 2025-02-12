import React from 'react';
import HeroSection from '../components/HeroSection'
import WhyChooseUs from './WhyChooseUs';
import ProductSlider from './ProductSlider';
import FeatureSection from './FeatureSection';
import ProcessSection from './ProcessSection';
import TestimonialSection from './TestimonialSection';

const Home = () => {
  return (
   <>
     
      <HeroSection/>
      <WhyChooseUs/>
      <ProductSlider/>
      <FeatureSection/>
      <ProcessSection/>
      <TestimonialSection/>
     
    </>
  );
};

export default Home;
