import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Painting', path: '/services/painting' },
    { name: 'Drywall', path: '/services/drywall' },
    { name: 'Pressure Washing', path: '/services/pressure-washing' },
    { name: 'Staining', path: '/services/staining' },
    { name: 'Epoxy Coating', path: '/services/epoxy' },
    { name: 'Caulking', path: '/services/caulking' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-primary-800 flex items-center"
          >
            Pro<span className="text-accent-500">Patcher</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            
            <div className="relative group">
              <button 
                className="nav-link flex items-center"
                onClick={toggleServices}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {services.map((service) => (
                    <NavLink
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-700"
                    >
                      {service.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            
            <a href="/#gallery" className="nav-link">
              Gallery
            </a>
            
            <a href="/#about" className="nav-link">
              About
            </a>
            
            <a href="/#contact" className="nav-link">
              Contact
            </a>
            
            <a href="/#contact" className="btn-accent ml-2">
              Get a Quote
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-secondary-800" />
            ) : (
              <Menu className="w-6 h-6 text-secondary-800" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white absolute w-full shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden py-0'
        }`}
      >
        <div className="container-custom flex flex-col space-y-4">
          <NavLink to="/" className="nav-link block">
            Home
          </NavLink>
          
          <div>
            <button 
              className="nav-link block w-full text-left flex items-center justify-between"
              onClick={toggleServices}
            >
              Services <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`pl-4 mt-2 space-y-2 ${servicesOpen ? 'block' : 'hidden'}`}>
              {services.map((service) => (
                <NavLink
                  key={service.path}
                  to={service.path}
                  className="nav-link block"
                >
                  {service.name}
                </NavLink>
              ))}
            </div>
          </div>
          
          <a href="/#gallery" className="nav-link block">
            Gallery
          </a>
          
          <a href="/#about" className="nav-link block">
            About
          </a>
          
          <a href="/#contact" className="nav-link block">
            Contact
          </a>
          
          <a href="/#contact" className="btn-accent w-full text-center">
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;