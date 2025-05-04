import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  showScrollIndicator?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = 'https://images.pexels.com/photos/8005368/pexels-photo-8005368.jpeg', 
  showScrollIndicator = true 
}) => {
  return (
    <div 
      className="relative h-screen min-h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="btn-accent">
            Get a Free Quote
          </a>
          <a href="#services" className="btn bg-white text-secondary-800 hover:bg-secondary-100">
            Our Services
          </a>
        </div>
      </div>
      
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-white text-sm mb-2">Scroll to explore</p>
          <ChevronDown className="text-white w-6 h-6 animate-bounce-slow" />
        </div>
      )}
    </div>
  );
};

export default Hero;