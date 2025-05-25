import React from 'react';
import { FiHome, FiLayers, FiUsers, FiSettings, FiHelpCircle } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-sm hidden md:block">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-800">Workspace</h2>
      </div>
      
      <nav className="p-4 space-y-1">
        <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md group">
          <FiHome className="mr-3 text-blue-500" />
          Dashboard
        </a>
        <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md group">
          <FiLayers className="mr-3 text-gray-400 group-hover:text-gray-500" />
          Projects
        </a>
        <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md group">
          <FiUsers className="mr-3 text-gray-400 group-hover:text-gray-500" />
          Team
        </a>
        <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md group">
          <FiSettings className="mr-3 text-gray-400 group-hover:text-gray-500" />
          Settings
        </a>
        <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md group">
          <FiHelpCircle className="mr-3 text-gray-400 group-hover:text-gray-500" />
          Help
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;