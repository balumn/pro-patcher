import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  linkTo: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  imageSrc, 
  linkTo 
}) => {
  return (
    <div className="card group overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <div className="flex items-center text-white">
            {icon}
            <h3 className="text-xl font-semibold ml-2">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-secondary-600 mb-4">{description}</p>
        <Link 
          to={linkTo} 
          className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 transition-colors"
        >
          Learn more <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;