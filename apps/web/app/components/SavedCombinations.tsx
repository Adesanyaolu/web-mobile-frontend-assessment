import React from 'react';
import { SavedCombination } from '../types';
import IntegrationIcon from './IntegrationIcon';

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
          className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-between shadow-sm card-shadow"
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
              <span className="text-sm font-bold text-gray-900">
                {combo.origin.name} + {combo.destination.name}
              </span>
              <span className="text-xs text-gray-500">
                {combo.origin.description}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             {/* Settings/Edit icon placeholder */}
             <button className="text-gray-400 hover:text-gray-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <circle cx="12" cy="12" r="3"></circle>
                 <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
               </svg>
             </button>
             
             {/* Delete button */}
             <button 
               onClick={() => onRemove(combo.id)}
               className="text-gray-400 hover:text-red-500 transition-colors"
             >
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <line x1="18" y1="6" x2="6" y2="18"></line>
                 <line x1="6" y1="6" x2="18" y2="18"></line>
               </svg>
             </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedCombinations;
