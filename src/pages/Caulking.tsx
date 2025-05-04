import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import { CheckCircle, Droplets, ThermometerSun, Wind } from 'lucide-react';

const Caulking: React.FC = () => {
  return (
    <>
      <Hero 
        title="Caulking & Sealing Services"
        subtitle="Protect your home from water damage, drafts, and pests with our professional caulking services."
        backgroundImage="https://images.pexels.com/photos/7218719/pexels-photo-7218719.jpeg"
      />
      
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Professional Caulking Services</h2>
            <p className="text-lg text-center mb-12">
              Our expert caulking and sealing services protect your home from moisture infiltration,
              improve energy efficiency, and enhance the appearance of finished surfaces.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Interior Caulking</h3>
                <p className="mb-6">
                  Our interior caulking services create clean, finished transitions between surfaces
                  while preventing moisture damage in wet areas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Bathroom fixtures and tile</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Kitchen countertops and backsplashes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Window and door trim</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Crown molding and baseboards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Interior drywall cracks</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Exterior Caulking</h3>
                <p className="mb-6">
                  Our exterior caulking services provide essential protection against water infiltration,
                  drafts, and pest entry points.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Window and door frames</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Siding joints and penetrations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Trim and fascia boards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Foundation cracks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Expansion joints</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">The Importance of Professional Caulking</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Droplets className="w-10 h-10 text-primary-600 mr-3" />
                    <h4 className="text-xl font-semibold">Water Protection</h4>
                  </div>
                  <p className="text-secondary-600">
                    Properly applied caulk prevents water infiltration that can lead to mold, rot, and structural damage.
                    This protection is essential in bathrooms, kitchens, and exterior joints.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <ThermometerSun className="w-10 h-10 text-primary-600 mr-3" />
                    <h4 className="text-xl font-semibold">Energy Efficiency</h4>
                  </div>
                  <p className="text-secondary-600">
                    Sealing gaps and cracks around windows, doors, and other penetrations reduces air leakage,
                    improving your home's energy efficiency and reducing heating and cooling costs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Wind className="w-10 h-10 text-primary-600 mr-3" />
                    <h4 className="text-xl font-semibold">Pest Prevention</h4>
                  </div>
                  <p className="text-secondary-600">
                    Properly sealed exteriors prevent insects, rodents, and other pests from finding their way
                    into your home through small gaps and cracks in the building envelope.
                  </p>
                </div>
              </div>
              
              <p className="text-lg">
                Professional caulking is about more than just appearance—it's a critical component of home maintenance
                that protects your investment and creates a more comfortable living environment. Our skilled technicians
                know which type of caulk to use for each application and how to apply it for maximum durability and effectiveness.
              </p>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Our Caulking & Sealing Process</h3>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">1</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Inspection & Assessment</h4>
                    <p className="text-secondary-600">
                      We thoroughly inspect all areas requiring caulking or re-caulking, identifying gaps, cracks,
                      and failing seals that need attention.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">2</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Surface Preparation</h4>
                    <p className="text-secondary-600">
                      We remove old caulk, clean all surfaces thoroughly, and ensure they are completely dry before
                      applying new caulk for maximum adhesion and longevity.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">3</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Material Selection</h4>
                    <p className="text-secondary-600">
                      We choose the appropriate type of caulk for each application, considering factors like flexibility,
                      water resistance, paintability, and UV stability.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">4</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Professional Application</h4>
                    <p className="text-secondary-600">
                      Our skilled technicians apply caulk with precision, ensuring consistent bead size and proper
                      adhesion to both surfaces for a watertight seal.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">5</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Tooling & Finishing</h4>
                    <p className="text-secondary-600">
                      We tool each caulk bead for a smooth, professional finish that enhances appearance and ensures
                      proper sealing against both surfaces.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">6</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Cleanup & Inspection</h4>
                    <p className="text-secondary-600">
                      We clean up any excess caulk and conduct a thorough inspection to ensure all areas have been
                      properly sealed and finished to our high standards.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Types of Caulk We Use</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Silicone Caulk</h4>
                      <p className="text-sm text-secondary-600">
                        Excellent for wet areas like bathrooms and kitchens, with superior water resistance and flexibility.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Acrylic Latex Caulk</h4>
                      <p className="text-sm text-secondary-600">
                        Paintable caulk ideal for trim work, moldings, and interior applications where painting is needed.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Polyurethane Caulk</h4>
                      <p className="text-sm text-secondary-600">
                        Extremely durable exterior caulk for areas with high movement, like foundation and masonry joints.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Hybrid Caulks</h4>
                      <p className="text-sm text-secondary-600">
                        Advanced formulations that combine the best properties of silicone and acrylic caulks.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Specialty Caulks</h4>
                      <p className="text-sm text-secondary-600">
                        Fire-rated, concrete, roof, and other specialized caulks for specific applications.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Signs You Need Caulking Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Visible Gaps or Cracks</h4>
                      <p className="text-sm text-secondary-600">
                        Noticeable openings around windows, doors, trim, or in other seams.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Cracked or Peeling Caulk</h4>
                      <p className="text-sm text-secondary-600">
                        Existing caulk that has deteriorated, cracked, or pulled away from surfaces.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Water Stains or Damage</h4>
                      <p className="text-sm text-secondary-600">
                        Signs of water infiltration on walls, ceilings, or around windows and doors.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Drafts or Increased Energy Bills</h4>
                      <p className="text-sm text-secondary-600">
                        Noticeable air leakage or unexplained increases in heating or cooling costs.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Pest Intrusions</h4>
                      <p className="text-sm text-secondary-600">
                        Insects or other pests finding their way into your home through small openings.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-accent-50 p-8 rounded-xl border border-accent-200">
              <h3 className="text-2xl font-bold mb-4 text-accent-800">Why Choose Pro Patcher for Caulking & Sealing?</h3>
              <p className="mb-6 text-accent-700">
                Our professional caulking and sealing services provide long-lasting protection with
                meticulous attention to detail:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Skilled application techniques</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Premium caulking materials</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Thorough surface preparation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Comprehensive seal inspection</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Knowledge of proper caulk types</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Clean, professional finish</span>
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

export default Caulking;