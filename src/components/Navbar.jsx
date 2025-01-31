import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Clickable Home link */}
          <Link 
            to="/" 
            className="text-xl font-bold tracking-tight hover:text-blue-100 transition-colors"
          >
            CharityOrg
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                to="/" 
                className="hover:text-blue-100 transition-colors py-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="hover:text-blue-100 transition-colors py-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className="hover:text-blue-100 transition-colors py-2"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="hover:text-blue-100 transition-colors py-2"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? 'max-h-64' : 'max-h-0'
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <ul className="py-2 space-y-2">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;