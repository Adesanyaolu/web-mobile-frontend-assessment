import React from 'react';

interface IntegrationIconProps {
  id: string;
}

const IntegrationIcon = ({ id }: IntegrationIconProps) => {
  // Map IDs to specific colors/icons
  // In a real app these would be proper SVG imports
  
  const getIconContent = () => {
    switch (id) {
      case 'zillow':
        return (
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center border border-blue-200">
            <span className="text-blue-600 font-bold text-lg">Z</span>
          </div>
        );
      case 'redfin':
        return (
          <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center border border-red-200">
            <span className="text-red-500 font-bold text-lg">R</span>
          </div>
        );
      case 'trulia':
        return (
          <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center border border-orange-200">
            <span className="text-orange-500 font-bold text-lg">Tr</span>
          </div>
        );
      case 'realtor':
        return (
          <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center border border-sky-200">
             <span className="text-sky-600 font-bold text-lg">H</span>
          </div>
        );
      case 's3':
        return (
          <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-200">
            <span className="text-orange-600 font-bold text-lg">S3</span>
          </div>
        );
      case 'mysql':
        return (
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-200">
             <span className="text-blue-600 font-bold text-xs">SQL</span>
          </div>
        );
      case 'mongodb':
        return (
          <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center border border-green-200">
            <span className="text-green-600 font-bold text-lg">M</span>
          </div>
        );
      case 'postgres':
        return (
          <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center border border-indigo-200">
             <div className="w-6 h-6 rounded-full border-2 border-indigo-500"></div>
          </div>
        );
      default:
        return <div className="w-12 h-12 rounded-xl bg-gray-100"></div>;
    }
  };

  return getIconContent();
};

export default IntegrationIcon;
