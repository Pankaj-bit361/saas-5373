import React from 'react';
import { FiMenu, FiSearch, FiBell, FiUser } from 'react-icons/fi';
import { FaTrello } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <FiMenu size={20} />
            </button>
            <div className="flex items-center">
              <FaTrello className="text-blue-500 text-2xl" />
              <span className="ml-2 text-xl font-bold text-gray-800">Jeera</span>
            </div>
          </div>
          
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search..."
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <FiBell size={20} />
            </button>
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <FiUser size={18} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;