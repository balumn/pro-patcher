import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import { CheckCircle } from 'lucide-react';

const Drywall: React.FC = () => {
  return (
    <>
      <Hero 
        title="Drywall Repair & Surface Preparation"
        subtitle="Expert drywall repair services to restore damaged walls and ceilings."
        backgroundImage="https://images.pexels.com/photos/8107202/pexels-photo-8107202.jpeg"
      />
      
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Drywall Repair Services</h2>
            <p className="text-lg text-center mb-12">
              Our professional drywall repair services fix holes, cracks, water damage, and other imperfections
              to restore your walls and ceilings to like-new condition.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Drywall Repair</h3>
                <p className="mb-6">
                  From small nail holes to large water damage patches, our skilled team can repair any drywall issue
                  with precision and care. We match textures seamlessly for an invisible repair.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Patch small holes and cracks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Repair large holes and damaged areas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fix water-damaged drywall</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Replace damaged sections of drywall</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Repair corner bead damage</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Surface Preparation</h3>
                <p className="mb-6">
                  Proper surface preparation is essential for a flawless paint job. We ensure all surfaces 
                  are properly prepared, sanded, and primed before painting begins.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Wall and ceiling texture matching</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Surface cleaning and degreasing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Wall smoothing and leveling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proper sanding and dust control</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional priming services</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Our Drywall Repair Process</h3>
            <div className="mb-12">
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">1</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Assessment</h4>
                    <p className="text-secondary-600">
                      We thoroughly evaluate the damage to determine the best repair approach and provide you with a detailed estimate.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">2</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Preparation</h4>
                    <p className="text-secondary-600">
                      We prepare the work area by protecting your furniture and flooring, and we clean and prepare the damaged surface.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">3</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Repair</h4>
                    <p className="text-secondary-600">
                      Using professional techniques and materials, we repair the damaged area, whether it's patching, replacing, or texturing.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">4</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Finishing</h4>
                    <p className="text-secondary-600">
                      We apply joint compound, sand smooth, and texture match to create a seamless blend with the existing wall.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">5</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Priming & Painting</h4>
                    <p className="text-secondary-600">
                      We prime the repaired area and apply paint that matches your existing color for a complete, invisible repair.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-secondary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Common Drywall Problems We Fix</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Small nail and screw holes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Large holes from door handles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Water damage and stains</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cracks in drywall seams</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Popped nails and screws</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Corner bead damage</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Benefits of Professional Drywall Repair</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Seamless, invisible repairs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proper texture matching</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Long-lasting, durable results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prevention of future damage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Improved home appearance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Better painting results</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-accent-50 p-8 rounded-xl border border-accent-200">
              <h3 className="text-2xl font-bold mb-4 text-accent-800">Why Choose Pro Patcher for Drywall Repair?</h3>
              <p className="mb-6 text-accent-700">
                Our experienced team of drywall repair specialists has the skills, tools, and expertise
                to handle any drywall repair project, large or small. We pride ourselves on:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Attention to detail</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Quality materials</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Clean work environment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Professional results</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">On-time completion</span>
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

export default Drywall;