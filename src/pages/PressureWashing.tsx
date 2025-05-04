import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const PressureWashing: React.FC = () => {
  return (
    <>
      <Hero 
        title="Professional Pressure Washing"
        subtitle="Restore your property's exterior surfaces with our expert pressure washing services."
        backgroundImage="https://images.pexels.com/photos/9810659/pexels-photo-9810659.jpeg"
      />
      
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Pressure Washing Services</h2>
            <p className="text-lg text-center mb-12">
              Our professional pressure washing services remove dirt, grime, mold, mildew, and stains
              from exterior surfaces, restoring their appearance and extending their lifespan.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Residential Pressure Washing</h3>
                <p className="mb-6">
                  Enhance your home's curb appeal and protect your investment with our comprehensive
                  residential pressure washing services.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Siding and exterior walls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Driveways and walkways</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Decks and patios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fences and gates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Roofs and gutters</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Commercial Pressure Washing</h3>
                <p className="mb-6">
                  Make a great impression on customers and maintain your commercial property with our
                  professional commercial pressure washing services.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Storefronts and building exteriors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Parking lots and garages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sidewalks and entrances</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Drive-throughs and service areas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dumpster pads and loading docks</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Our Professional Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">Soft Washing</h4>
                  <p className="text-secondary-600 mb-4">
                    For delicate surfaces, we use low-pressure washing with specialized cleaning solutions
                    to safely remove dirt, mold, and mildew without causing damage.
                  </p>
                  <p className="text-sm text-secondary-500">
                    Ideal for: Vinyl siding, stucco, roofs, painted surfaces
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">Power Washing</h4>
                  <p className="text-secondary-600 mb-4">
                    For tough stains and heavy buildup, we use high-pressure washing that effectively removes
                    stubborn dirt, grime, and contaminants from durable surfaces.
                  </p>
                  <p className="text-sm text-secondary-500">
                    Ideal for: Concrete, brick, masonry, stone, unpainted metal
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">Surface-Specific Solutions</h4>
                  <p className="text-secondary-600 mb-4">
                    We use environmentally friendly, professional-grade cleaning solutions tailored to
                    specific surfaces and contaminants for optimal results.
                  </p>
                  <p className="text-sm text-secondary-500">
                    Specialized for: Mold removal, oil stains, rust, graffiti, algae
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <div className="bg-secondary-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Benefits of Professional Pressure Washing</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Enhanced Curb Appeal</h4>
                      <p className="text-sm text-secondary-600">Dramatically improves your property's appearance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Preventative Maintenance</h4>
                      <p className="text-sm text-secondary-600">Extends the life of your exterior surfaces</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Healthier Environment</h4>
                      <p className="text-sm text-secondary-600">Removes allergens, mold, and mildew</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Preparation for Painting</h4>
                      <p className="text-sm text-secondary-600">Creates clean surfaces for better paint adhesion</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Increased Property Value</h4>
                      <p className="text-sm text-secondary-600">Makes a significant difference in property appraisals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Cost-Effective Cleaning</h4>
                      <p className="text-sm text-secondary-600">More affordable than replacing damaged materials</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Our Pressure Washing Process</h3>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">1</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Inspection</h4>
                    <p className="text-secondary-600">
                      We thoroughly assess your property to identify surface types, contaminants, and any areas requiring special attention.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">2</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Preparation</h4>
                    <p className="text-secondary-600">
                      We protect landscaping, electrical fixtures, and other sensitive areas, and pre-treat stubborn stains with specialized solutions.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">3</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Cleaning</h4>
                    <p className="text-secondary-600">
                      Using appropriate pressure levels and techniques for each surface, we methodically clean your property to remove all contaminants.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">4</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Rinsing</h4>
                    <p className="text-secondary-600">
                      We thoroughly rinse all surfaces to remove any remaining cleaning solutions and loosened debris.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">5</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Final Inspection</h4>
                    <p className="text-secondary-600">
                      We conduct a thorough review with you to ensure complete satisfaction with our cleaning results.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-warning-50 p-6 rounded-lg border border-warning-200">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-warning-600 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-warning-800">Why DIY Pressure Washing Can Be Risky</h4>
                  <p className="text-warning-700 mb-4">
                    While DIY pressure washing might seem tempting, it can lead to:
                  </p>
                  <ul className="space-y-2 text-warning-700">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Surface damage from excessive pressure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Water intrusion into siding or windows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Personal injury from high-pressure equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Incomplete cleaning of stubborn contaminants</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-warning-700">
                    Our professional service ensures safe, effective cleaning that protects your property's value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
    </>
  );
};

export default PressureWashing;