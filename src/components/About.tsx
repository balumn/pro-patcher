import React from 'react';
import { Clock, Check, Award, Drill } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary-50">
      <div className="container-custom">
        <h2 className="section-title">About Pro Patcher</h2>
        <p className="section-subtitle">
          We're a team of experienced professionals dedicated to providing top-quality
          painting and restoration services for residential and commercial properties.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="mb-6 text-secondary-700">
              Founded in 2015, Pro Patcher began with a simple mission: to provide exceptional
              painting and repair services at fair prices. What started as a small family business
              has grown into a trusted name in the industry, serving hundreds of satisfied customers.
            </p>
            <p className="mb-6 text-secondary-700">
              We take pride in our work and believe that every project, no matter how small,
              deserves our full attention and expertise. Our team of skilled professionals is
              committed to delivering outstanding results that exceed your expectations.
            </p>
            <p className="text-secondary-700">
              Whether you need a fresh coat of paint for your home, repairs for damaged drywall,
              or want to revitalize your deck with professional staining, Pro Patcher is here to
              help bring your vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card p-6">
              <Clock className="w-10 h-10 text-primary-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">10+ Years Experience</h4>
              <p className="text-secondary-600">
                A decade of professional experience delivering quality results.
              </p>
            </div>
            
            <div className="card p-6">
              <Check className="w-10 h-10 text-primary-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h4>
              <p className="text-secondary-600">
                We're not happy until you're completely satisfied with our work.
              </p>
            </div>
            
            <div className="card p-6">
              <Award className="w-10 h-10 text-primary-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Licensed & Insured</h4>
              <p className="text-secondary-600">
                Fully licensed contractors with comprehensive insurance coverage.
              </p>
            </div>
            
            <div className="card p-6">
              <Drill className="w-10 h-10 text-primary-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Quality Materials</h4>
              <p className="text-secondary-600">
                We use only premium materials for lasting, professional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;