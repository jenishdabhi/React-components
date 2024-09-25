// src/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 p-4" ref={dropdownRef}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">MyApp</div>
        <div className="hidden md:flex space-x-4">
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('home')} 
              className="flex items-center text-white focus:outline-none"
            >
              Home <FaCaretDown className="ml-1" />
            </button>
            {activeDropdown === 'home' && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sub Home 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sub Home 2</a>
              </div>
            )}
          </div>

          <div className="relative">
            <button 
              onClick={() => toggleDropdown('page')} 
              className="flex items-center text-white focus:outline-none"
            >
              Page <FaCaretDown className="ml-1" />
            </button>
            {activeDropdown === 'page' && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sub Page 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sub Page 2</a>
              </div>
            )}
          </div>

          <div className="relative">
            <button 
              onClick={() => toggleDropdown('product')} 
              className="flex items-center text-white focus:outline-none"
            >
              Product <FaCaretDown className="ml-1" />
            </button>
            {activeDropdown === 'product' && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sub Product 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sub Product 2</a>
              </div>
            )}
          </div>

          <a href="#" className="text-white">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col mt-2 bg-gray-800 rounded-md shadow-lg">
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('home')} 
              className="flex items-center text-white w-full px-4 py-2 focus:outline-none"
            >
              Home <FaCaretDown className="ml-1" />
            </button>
            {activeDropdown === 'home' && (
              <div className="flex flex-col bg-white rounded-md shadow-lg z-10">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sub Home 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sub Home 2</a>
              </div>
            )}
          </div>

          <div className="relative">
            <button 
              onClick={() => toggleDropdown('page')} 
              className="flex items-center text-white w-full px-4 py-2 focus:outline-none"
            >
              Page <FaCaretDown className="ml-1" />
            </button>
            {activeDropdown === 'page' && (
              <div className="flex flex-col bg-white rounded-md shadow-lg z-10">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sub Page 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sub Page 2</a>
              </div>
            )}
          </div>

          <div className="relative">
            <button 
              onClick={() => toggleDropdown('product')} 
              className="flex items-center text-white w-full px-4 py-2 focus:outline-none"
            >
              Product <FaCaretDown className="ml-1" />
            </button>
            {activeDropdown === 'product' && (
              <div className="flex flex-col bg-white rounded-md shadow-lg z-10">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sub Product 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sub Product 2</a>
              </div>
            )}
          </div>

          <a href="#" className="text-white w-full text-left px-4 py-2 hover:bg-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
