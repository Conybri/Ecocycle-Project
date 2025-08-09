import React from 'react';
import Hero from '../components/Hero';
import QRSection from '../components/QRSection';
import Benefits from '../components/Benefits';
import About from '../components/About';
import CircularEconomy from '../components/CircularEconomy';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <QRSection />
      <Benefits />
      <About />
      <CircularEconomy />
      <Statistics />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;
