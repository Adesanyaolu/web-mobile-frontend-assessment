import React from 'react';
import { Integration } from '../types';
import IntegrationIcon from './IntegrationIcon';

interface IntegrationCardProps {
  integration: Integration;
  isSelected?: boolean;
  onSelect: (integration: Integration) => void;
}

const IntegrationCard = ({ integration, isSelected, onSelect }: IntegrationCardProps) => {
  return (
    <div
      onClick={() => onSelect(integration)}
      className={`
        bg-white p-5 rounded-xl border cursor-pointer transition-all duration-200 relative
        ${isSelected 
          ? 'border-border-highlight card-selected-shadow z-10' 
          : 'border-white hover:border-gray-200 card-shadow hover:shadow-md'
        }
      `}
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <IntegrationIcon id={integration.id} />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-gray-900 mb-1">{integration.name}</h3>
          <p className="text-xs text-gray-500 leading-relaxed font-medium">
            {integration.description}
          </p>
        </div>
      </div>
      
      {/* Selection indicator line/dot could go here if design requires it, 
          but border styling handles the main indication */}
    </div>
  );
};

export default IntegrationCard;
