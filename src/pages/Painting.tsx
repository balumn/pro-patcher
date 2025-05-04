import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import { CheckCircle, AlertCircle } from 'lucide-react';

const Painting: React.FC = () => {
  return (
    <>
      <Hero 
        title="Professional Painting Services"
        subtitle="High-quality interior and exterior painting for residential and commercial properties."
        backgroundImage="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg"
      />
      
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Our Painting Services</h2>
            <p className="text-lg text-center mb-12">
              At Pro Patcher, we offer comprehensive painting services to transform your space.
              From residential to commercial projects, our team of experienced painters delivers exceptional results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Interior Painting</h3>
                <p className="mb-6">
                  Our interior painting services are designed to refresh and revitalize your living spaces.
                  We use premium paints and materials to ensure a smooth, even finish that will last for years to come.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Wall and ceiling painting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Trim, baseboards, and molding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cabinet painting and refinishing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Accent walls and decorative finishes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Wallpaper removal</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Exterior Painting</h3>
                <p className="mb-6">
                  Our exterior painting services are designed to protect your property from the elements 
                  while enhancing its curb appeal. We use durable, weather-resistant paints that withstand harsh conditions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Siding and trim painting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Door and window painting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Deck and fence staining</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Garage and outbuilding painting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pressure washing and prep work</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Our Painting Process</h3>
            <div className="mb-12">
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">1</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Consultation & Estimate</h4>
                    <p className="text-secondary-600">
                      We begin with a thorough consultation to understand your needs and provide a detailed, no-obligation estimate.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">2</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Surface Preparation</h4>
                    <p className="text-secondary-600">
                      Proper preparation is key to a quality finish. We clean, sand, patch, and prime all surfaces before painting.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">3</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Color Selection</h4>
                    <p className="text-secondary-600">
                      We help you choose the perfect colors for your space, offering color consultations and sample testing.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">4</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Expert Painting</h4>
                    <p className="text-secondary-600">
                      Our skilled painters use professional techniques and high-quality materials to deliver a flawless finish.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">5</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Final Inspection</h4>
                    <p className="text-secondary-600">
                      We conduct a thorough inspection with you to ensure complete satisfaction with our work.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-secondary-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us for Your Painting Project?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Licensed and insured professionals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Premium, eco-friendly paints</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Meticulous attention to detail</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>On-time project completion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Thorough clean-up after completion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Satisfaction guarantee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h3>
            <div className="space-y-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold mb-2">How long will my painting project take?</h4>
                <p className="text-secondary-600">
                  Project timelines vary based on the size and complexity of the job. A single room might take 1-2 days, while a full exterior could take 1-2 weeks. We'll provide a specific timeline during your consultation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold mb-2">Do I need to move my furniture?</h4>
                <p className="text-secondary-600">
                  We'll move most furniture to the center of the room and cover it with protective plastic. For valuable or fragile items, we recommend moving them before we arrive.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold mb-2">What kind of paint do you use?</h4>
                <p className="text-secondary-600">
                  We use premium, long-lasting paints from trusted brands like Sherwin-Williams and Benjamin Moore. We can discuss specific paint types and finishes during your consultation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold mb-2">How should I prepare for my painting project?</h4>
                <p className="text-secondary-600">
                  Remove personal items, pictures, and wall hangings. Clear working areas of small items and breakables. We'll handle furniture moving and surface preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
    </>
  );
};

export default Painting;