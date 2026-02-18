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
        h-full p-5 rounded-xl border cursor-pointer transition-all duration-200 relative
        ${isSelected 
          ? 'border-border-highlight bg-[#EBEBFE] card-selected-shadow z-10' 
          : 'bg-white border-[#E7E9EF] hover:border-gray-200 card-shadow hover:shadow-md hover:bg-[#F3F4F7]'
        }
      `}
    >
      <div className="flex gap-4">
        <div className="shrink-0">
          <IntegrationIcon id={integration.id} />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-[#001414] mb-1">{integration.name}</h3>
          <p className="text-xs text-[#515867] leading-relaxed font-normal">
            {integration.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCard;
