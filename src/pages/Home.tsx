import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero 
        title="Pro Patcher Building Services"
        subtitle="Professional painting, repair, and restoration services for your home or business."
      />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;