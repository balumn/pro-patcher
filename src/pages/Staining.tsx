import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import { CheckCircle } from 'lucide-react';

const Staining: React.FC = () => {
  return (
    <>
      <Hero 
        title="Wood Staining & Restoration"
        subtitle="Protect and beautify your decks, fences, and wooden structures with our professional staining services."
        backgroundImage="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg"
      />
      
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Wood Staining Services</h2>
            <p className="text-lg text-center mb-12">
              Our professional wood staining services protect your outdoor wooden structures from the elements
              while enhancing their natural beauty and extending their lifespan.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Deck Staining</h3>
                <p className="mb-6">
                  Our deck staining services revitalize weathered decks and protect new ones, creating a beautiful
                  outdoor living space you can enjoy for years to come.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Deck surface staining</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Railings and balusters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Stairs and landings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pergolas and gazebos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Built-in benches and planters</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Fence Staining</h3>
                <p className="mb-6">
                  Our fence staining services enhance the appearance of your property while providing essential
                  protection against moisture, UV damage, and insects.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Privacy fences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Picket fences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ranch and split-rail fences</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Gates and arbors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lattice and decorative elements</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Wood Restoration Services</h3>
              <p className="mb-6">
                For weathered and damaged wood, our restoration services can bring new life to your outdoor structures
                before applying protective stains or sealants.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">Cleaning & Preparation</h4>
                  <p className="text-secondary-600">
                    We thoroughly clean wood surfaces using specialized cleaners and pressure washing techniques
                    to remove dirt, mildew, and old finishes.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">Sanding & Smoothing</h4>
                  <p className="text-secondary-600">
                    We sand rough, splintered surfaces to create a smooth finish that's safe to touch
                    and ready to accept new stain or sealant.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold mb-3">Repair & Replacement</h4>
                  <p className="text-secondary-600">
                    We repair or replace damaged boards, balusters, and other components to restore
                    structural integrity and appearance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Our Staining Process</h3>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">1</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Inspection & Assessment</h4>
                    <p className="text-secondary-600">
                      We thoroughly evaluate your wood surfaces to identify needed repairs, cleaning requirements,
                      and the most suitable stain products.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">2</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Surface Preparation</h4>
                    <p className="text-secondary-600">
                      We clean, repair, sand, and prepare the wood to ensure proper stain adhesion and a long-lasting finish.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">3</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Stain Selection</h4>
                    <p className="text-secondary-600">
                      We help you choose the best stain type and color for your project, considering factors like
                      exposure, usage, and desired appearance.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">4</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Professional Application</h4>
                    <p className="text-secondary-600">
                      Our skilled technicians apply stain using professional techniques that ensure even coverage
                      and optimal penetration.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold mr-3">5</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Inspection & Touch-ups</h4>
                    <p className="text-secondary-600">
                      We carefully inspect all stained surfaces to ensure complete coverage and consistent appearance,
                      performing any needed touch-ups.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Types of Wood Stains We Offer</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Transparent Stains</h4>
                      <p className="text-sm text-secondary-600">
                        Highlight natural wood grain with minimal color change
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Semi-Transparent Stains</h4>
                      <p className="text-sm text-secondary-600">
                        Add color while allowing wood grain to show through
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Semi-Solid Stains</h4>
                      <p className="text-sm text-secondary-600">
                        Provide more color coverage while showing some wood texture
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Solid Stains</h4>
                      <p className="text-sm text-secondary-600">
                        Offer paint-like coverage while still protecting wood
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Water-Based Stains</h4>
                      <p className="text-sm text-secondary-600">
                        Eco-friendly with easy cleanup and lower VOCs
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Oil-Based Stains</h4>
                      <p className="text-sm text-secondary-600">
                        Deeper penetration with excellent durability
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Benefits of Professional Wood Staining</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">UV Protection</h4>
                      <p className="text-sm text-secondary-600">
                        Prevents sun damage and graying of wood
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Water Resistance</h4>
                      <p className="text-sm text-secondary-600">
                        Repels water to prevent warping, swelling, and rot
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Mold & Mildew Prevention</h4>
                      <p className="text-sm text-secondary-600">
                        Inhibits growth of fungus and algae
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Enhanced Beauty</h4>
                      <p className="text-sm text-secondary-600">
                        Highlights natural grain and adds rich color
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Extended Lifespan</h4>
                      <p className="text-sm text-secondary-600">
                        Significantly increases the durability of wooden structures
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Increased Property Value</h4>
                      <p className="text-sm text-secondary-600">
                        Enhances curb appeal and outdoor living spaces
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-accent-50 p-8 rounded-xl border border-accent-200">
              <h3 className="text-2xl font-bold mb-4 text-accent-800">Why Choose Pro Patcher for Wood Staining?</h3>
              <p className="mb-6 text-accent-700">
                Our experienced team of wood staining specialists delivers exceptional results with
                meticulous attention to detail and quality materials:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Premium stain products</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Thorough preparation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Skilled application techniques</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Comprehensive clean-up</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-accent-700">Detailed maintenance advice</span>
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

export default Staining;