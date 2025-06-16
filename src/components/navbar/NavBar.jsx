import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, User, LogIn } from 'lucide-react';
// import { Link } from 'react-router-dom'; 
import { Link } from 'react-router-dom';


const InsuranceNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation (md and above) */}
      <nav className="hidden md:block bg-white shadow-sm border-b border-gray-300 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg italic">i</span>
                <div className="w-2 h-2 bg-orange-500 rounded-full absolute translate-x-2 -translate-y-2"></div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium">Home</Link>
              <Link to="/get-insurance" className="text-gray-700 hover:text-purple-600 font-medium">Get Insurance</Link>
              <Link to="" className="text-gray-700 hover:text-purple-600 font-medium">Claims</Link>
              <Link to="/about" className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 font-medium">About</Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-medium">
                <MessageCircle size={18} />
                <span>Connect WhatsApp</span>
              </button>
              <button className="bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-medium">
                <Phone size={18} />
                <span>Call Our Agent</span>
              </button>
              <button className="bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 rounded-lg flex items-center space-x-2 font-medium">
                <User size={18} />
                <span>Agent Log In</span>
              </button>
              <button className="text-purple-900 px-4 py-2 rounded-lg flex items-center space-x-2 font-medium">
                <LogIn size={18} />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation (below md) */}
      <nav className="md:hidden bg-gray-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg italic">i</span>
                </div>
                <div className="w-2 h-2 bg-orange-500 rounded-full absolute -top-1 -right-1"></div>
              </div>
              <div className="text-2xl font-light">
                <span className="text-gray-800">Insurance </span>
                <span className="text-blue-500 font-normal">World</span>
              </div>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-purple-800 hover:bg-gray-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium py-2">Home</Link>
                <Link to="/get-insurance" className="text-gray-700 hover:text-purple-600 font-medium py-2">Get Insurance</Link>
                <Link to="/claims" className="text-gray-700 hover:text-purple-600 font-medium py-2">Claims</Link>
                <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium py-2">About</Link>
                
                <div className="pt-3 border-t border-gray-200 space-y-2">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 font-medium">
                    <MessageCircle size={18} />
                    <span>Connect WhatsApp</span>
                  </button>
                  <button className="w-full bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 font-medium">
                    <Phone size={18} />
                    <span>Call Our Agent</span>
                  </button>
                  <button className="w-full bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 font-medium">
                    <User size={18} />
                    <span>Agent Log In</span>
                  </button>
                  <button className="w-full bg-purple-800 hover:bg-purple-900 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 font-medium">
                    <LogIn size={18} />
                    <span>Sign In</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Demo Content */}
      {/* <div className="p-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Insurance World</h1>
          <p className="text-gray-600 mb-4">
            This is a responsive navigation that changes layout based on screen size. 
            On desktop (md and above), you'll see the full navigation bar with all buttons. 
            On mobile devices, you'll see the simplified header with hamburger menu.
          </p>
          <p className="text-gray-600">
            Try resizing your browser window or viewing on different devices to see the responsive behavior.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default InsuranceNavigation;