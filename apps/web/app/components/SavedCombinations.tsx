import React from 'react';
import { SavedCombination } from '../types';
import IntegrationIcon from './IntegrationIcon';
import { IoClose } from 'react-icons/io5';

interface SavedCombinationsProps {
  combinations: SavedCombination[];
  onRemove: (id: string) => void;
}

const SavedCombinations = ({ combinations, onRemove }: SavedCombinationsProps) => {
  if (combinations.length === 0) return null;

  return (
    <div className="mt-8 space-y-3">
      {combinations.map((combo) => (
        <div 
          key={combo.id}
          className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-between shadow-sm card-shadow hover:bg-[#F9FAFB] hover:cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-3">
               <div className="transform scale-75 origin-left">
                  <IntegrationIcon id={combo.origin.id} />
               </div>
               <div className="transform scale-75 origin-left -ml-2">
                  <IntegrationIcon id={combo.destination.id} />
               </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#001414]">
                {combo.origin.name} + {combo.destination.name}
              </span>
              <span className="text-sm text-[#515867]">
                {combo.origin.description}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             {/* Delete button */}
             <button 
               onClick={() => onRemove(combo.id)}
               className="text-gray-400 hover:text-red-500 transition-colors"
             >
               <IoClose className="w-5 h-5" />
             </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedCombinations;
