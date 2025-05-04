import React from 'react';
import ServiceCard from './ServiceCard';
import { Paintbrush, Hammer, Droplets, PaintBucket, Wrench, Rocket } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Painting',
      description: 'Professional interior and exterior painting services for residential and commercial properties.',
      icon: <Paintbrush className="w-6 h-6" />,
      imageSrc: 'https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg',
      linkTo: '/services/painting'
    },
    {
      title: 'Drywall Repair',
      description: 'Expert drywall repair and surface preparation to restore damaged walls and ceilings.',
      icon: <Hammer className="w-6 h-6" />,
      imageSrc: 'https://images.pexels.com/photos/8107202/pexels-photo-8107202.jpeg',
      linkTo: '/services/drywall'
    },
    {
      title: 'Pressure Washing',
      description: 'High-quality pressure washing services to clean and revitalize exterior surfaces.',
      icon: <Droplets className="w-6 h-6" />,
      imageSrc: 'https://images.pexels.com/photos/6195085/pexels-photo-6195085.jpeg',
      linkTo: '/services/pressure-washing'
    },
    {
      title: 'Wood Staining',
      description: 'Professional wood staining and deck/fence restoration to protect and beautify outdoor structures.',
      icon: <PaintBucket className="w-6 h-6" />,
      imageSrc: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg',
      linkTo: '/services/staining'
    },
    {
      title: 'Epoxy Coating',
      description: 'Durable epoxy floor coatings for garages, basements, and commercial spaces.',
      icon: <Rocket className="w-6 h-6" />,
      imageSrc: 'https://images.pexels.com/photos/6432075/pexels-photo-6432075.jpeg',
      linkTo: '/services/epoxy'
    },
    {
      title: 'Caulking & Sealing',
      description: 'Professional caulking and sealing services to protect your home from water damage and air leaks.',
      icon: <Wrench className="w-6 h-6" />,
      imageSrc: 'https://images.pexels.com/photos/7218719/pexels-photo-7218719.jpeg',
      linkTo: '/services/caulking'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container-custom">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer a wide range of professional services to keep your property 
          looking its best, inside and out.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageSrc={service.imageSrc}
              linkTo={service.linkTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;