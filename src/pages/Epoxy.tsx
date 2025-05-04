import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import { CheckCircle, Award } from 'lucide-react';

const Epoxy: React.FC = () => {
  return (
    <>
      <Hero 
        title="Epoxy Floor Coating"
        subtitle="Transform your concrete floors with our durable, attractive epoxy coating solutions."
        backgroundImage="https://images.pexels.com/photos/5845463/pexels-photo-5845463.jpeg"
      />
      
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Epoxy Flooring Services</h2>
            <p className="text-lg text-center mb-12">
              Our professional epoxy floor coating services transform plain concrete into beautiful,
              highly durable surfaces for garages, basements, and commercial spaces.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Residential Epoxy Services</h3>
                <p className="mb-6">
                  Upgrade your home's concrete floors with our beautiful, long-lasting epoxy coating solutions
                  that resist stains, chemicals, and everyday wear.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Garage floor epoxy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Basement floor coating</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Laundry room floors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Workshop floors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Home gym floors</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Commercial Epoxy Services</h3>
                <p className="mb-6">
                  Our commercial epoxy floor coatings provide exceptional durability and safety for
                  high-traffic business environments.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Retail store floors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Warehouse & factory floors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Restaurant kitchen floors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Auto shop floors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Healthcare facility floors</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Epoxy Floor Types & Styles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">Solid Color Epoxy</h4>
                  <p className="text-secondary-600">
                    Clean, consistent color for a polished, professional look. Available in a wide range of colors
                    to complement any space.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">Metallic Epoxy</h4>
                  <p className="text-secondary-600">
                    Stunning three-dimensional effects with swirls and patterns that create a unique, high-end appearance.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">Flake Epoxy</h4>
                  <p className="text-secondary-600">
                    Decorative color flakes embedded in clear epoxy for an attractive, slip-resistant finish with excellent durability.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">Quartz Epoxy</h4>
                  <p className="text-secondary-600">
                    Colored quartz aggregates create a textured, extremely durable surface ideal for high-traffic commercial areas.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">Self-Leveling Epoxy</h4>
                  <p className="text-secondary-600">
                    Perfect for uneven concrete, creating a perfectly level surface with a glossy, seamless finish.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">Anti-Slip Epoxy</h4>
                  <p className="text-secondary-600">
                    Textured additives provide enhanced safety in areas prone to moisture or spills without sacrificing appearance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Our Epoxy Installation Process</h3>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">1</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Thorough Inspection</h4>
                    <p className="text-secondary-600">
                      We evaluate your concrete floor for cracks, moisture issues, and other conditions that may affect
                      the application or performance of the epoxy coating.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">2</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Surface Preparation</h4>
                    <p className="text-secondary-600">
                      We thoroughly clean and mechanically prep the concrete using diamond grinding or shot blasting
                      to create the optimal profile for epoxy adhesion.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">3</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Concrete Repair</h4>
                    <p className="text-secondary-600">
                      We fill cracks, holes, and imperfections with specialized epoxy fillers to create a smooth,
                      consistent substrate for the coating.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">4</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Primer Application</h4>
                    <p className="text-secondary-600">
                      We apply an epoxy primer coat to ensure maximum adhesion and seal the concrete surface.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">5</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Base Coat & Decorative Elements</h4>
                    <p className="text-secondary-600">
                      We apply the main epoxy layer and add any decorative elements like color flakes, metallic pigments,
                      or quartz aggregates according to your chosen design.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">6</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Clear Topcoat</h4>
                    <p className="text-secondary-600">
                      We apply a final clear polyurethane or polyaspartic topcoat to seal and protect the epoxy
                      system, enhancing its durability and appearance.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">7</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Curing & Final Inspection</h4>
                    <p className="text-secondary-600">
                      We allow the floor to properly cure and conduct a thorough final inspection to ensure perfection
                      before returning the space to service.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-secondary-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-6">Benefits of Epoxy Floor Coatings</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-start mb-4">
                    <Award className="w-6 h-6 text-primary-600 mr-2" />
                    <h4 className="text-xl font-semibold">Exceptional Durability</h4>
                  </div>
                  <p className="text-secondary-600 mb-4">
                    Epoxy floors withstand heavy traffic, impact, and abrasion for years of reliable service in demanding environments.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Resistance to vehicle traffic</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Stands up to heavy equipment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Won't chip or crack easily</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-start mb-4">
                    <Award className="w-6 h-6 text-primary-600 mr-2" />
                    <h4 className="text-xl font-semibold">Chemical Resistance</h4>
                  </div>
                  <p className="text-secondary-600 mb-4">
                    Epoxy floors resist damage from automotive fluids, household chemicals, and cleaning products.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Oil and gasoline resistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Acid and alkali resistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cleaning solution resistance</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-start mb-4">
                    <Award className="w-6 h-6 text-primary-600 mr-2" />
                    <h4 className="text-xl font-semibold">Low Maintenance</h4>
                  </div>
                  <p className="text-secondary-600 mb-4">
                    Epoxy floors are incredibly easy to clean and maintain, saving you time and effort.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Simple dust mopping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Occasional wet cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No waxing or polishing needed</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-start mb-4">
                    <Award className="w-6 h-6 text-primary-600 mr-2" />
                    <h4 className="text-xl font-semibold">Aesthetic Appeal</h4>
                  </div>
                  <p className="text-secondary-600 mb-4">
                    Epoxy floors provide a professional, attractive finish that enhances any space.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Wide range of colors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Decorative finish options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Customizable designs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-accent-50 p-8 rounded-xl border border-accent-200">
              <h3 className="text-2xl font-bold mb-4 text-accent-800">Why Choose Pro Patcher for Epoxy Flooring?</h3>
              <p className="mb-6 text-accent-700">
                Our specialized epoxy flooring team delivers exceptional results with professional-grade
                materials and meticulous application techniques:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Specialized epoxy installers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Commercial-grade materials</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Thorough surface preparation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Multi-layer application</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Extended warranty options</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Satisfaction guarantee</span>
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

export default Epoxy;