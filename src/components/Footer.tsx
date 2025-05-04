import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Pro<span className="text-accent-500">Patcher</span>
            </h3>
            <p className="text-secondary-300 mb-4">
              Professional painting, repair, and restoration services for your home or business. Quality work, guaranteed satisfaction.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-accent-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-accent-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-accent-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/painting" className="text-secondary-300 hover:text-accent-500 transition-colors">
                  Painting
                </Link>
              </li>
              <li>
                <Link to="/services/drywall" className="text-secondary-300 hover:text-accent-500 transition-colors">
                  Drywall Repair
                </Link>
              </li>
              <li>
                <Link to="/services/pressure-washing" className="text-secondary-300 hover:text-accent-500 transition-colors">
                  Pressure Washing
                </Link>
              </li>
              <li>
                <Link to="/services/staining" className="text-secondary-300 hover:text-accent-500 transition-colors">
                  Wood Staining
                </Link>
              </li>
              <li>
                <Link to="/services/epoxy" className="text-secondary-300 hover:text-accent-500 transition-colors">
                  Epoxy Coating
                </Link>
              </li>
              <li>
                <Link to="/services/caulking" className="text-secondary-300 hover:text-accent-500 transition-colors">
                  Caulking & Sealing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-accent-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-secondary-300 hover:text-accent-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#gallery" className="text-secondary-300 hover:text-accent-500 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-secondary-300 hover:text-accent-500 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-accent-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-accent-500 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-accent-500 mr-2 mt-0.5" />
                <p className="text-secondary-300">
                  Pro Patcher<br />
                  1234 Example Street<br />
                  Cityville, ST 56789
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-accent-500 mr-2" />
                <a href="tel:+15551234567" className="text-secondary-300 hover:text-accent-500 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent-500 mr-2" />
                <a href="mailto:info@propatcher.com" className="text-secondary-300 hover:text-accent-500 transition-colors">
                  info@propatcher.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 pt-8 text-center text-secondary-400">
          <p>&copy; {currentYear} Pro Patcher. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;