'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Integration } from '../types';
import IntegrationCard from './IntegrationCard';

interface IntegrationSelectorProps {
  origins: Integration[];
  destinations: Integration[];
  selectedOrigin: Integration | null;
  selectedDestination: Integration | null;
  onSelectOrigin: (integration: Integration) => void;
  onSelectDestination: (integration: Integration) => void;
  onSave: () => void;
}

const IntegrationSelector = ({
  origins,
  destinations,
  selectedOrigin,
  selectedDestination,
  onSelectOrigin,
  onSelectDestination,
  onSave,
}: IntegrationSelectorProps) => {
  const [lineCoords, setLineCoords] = useState<{ x1: number, y1: number, x2: number, y2: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Refs for selected cards to calculate line position
  const originRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const destRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Update line coordinates when selection changes
  useEffect(() => {
    if (selectedOrigin && selectedDestination && containerRef.current) {
      const originEl = originRefs.current.get(selectedOrigin.id);
      const destEl = destRefs.current.get(selectedDestination.id);
      const containerRect = containerRef.current.getBoundingClientRect();

      if (originEl && destEl) {
        const originRect = originEl.getBoundingClientRect();
        const destRect = destEl.getBoundingClientRect();

        // Calculate relative coordinates
        const x1 = originRect.right - containerRect.left;
        const y1 = originRect.top + (originRect.height / 2) - containerRect.top;
        const x2 = destRect.left - containerRect.left;
        const y2 = destRect.top + (originRect.height / 2) - containerRect.top;

        setLineCoords({ x1, y1, x2, y2 });
      }
    } else {
      setLineCoords(null);
    }
  }, [selectedOrigin, selectedDestination]);

  // Handle window resize to update line
  useEffect(() => {
    const handleResize = () => {
      // Trigger effect by briefly clearing then restoring or just re-running logic
      // In a real app we'd debounce this. simpler here:
      if (selectedOrigin && selectedDestination) {
         // force re-calc logic (duplicated for brevity, ideally shared function)
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedOrigin, selectedDestination]);


  return (
    <div className="relative" ref={containerRef}>
      {/* Connector Line SVG Layer */}
      <svg className="absolute inset-0 pointer-events-none w-full h-full z-0 hidden md:block">
        {lineCoords && (
          <path
            d={`M ${lineCoords.x1} ${lineCoords.y1} C ${lineCoords.x1 + 50} ${lineCoords.y1}, ${lineCoords.x2 - 50} ${lineCoords.y2}, ${lineCoords.x2} ${lineCoords.y2}`}
            fill="none"
            stroke="#818cf8"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="animate-pulse" // Optional animation
          />
        )}
        {/* Endpoints dots */}
         {lineCoords && (
            <>
               <circle cx={lineCoords.x1} cy={lineCoords.y1} r="3" fill="#818cf8" />
               <circle cx={lineCoords.x2} cy={lineCoords.y2} r="3" fill="#818cf8" />
            </>
         )}
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 lg:gap-40">
        {/* Origins Column */}
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-bold text-gray-900 mb-2">Origins</h2>
          <div className="flex flex-col gap-4 relative z-10">
            {origins.map((origin) => (
              <div 
                key={origin.id} 
                ref={(el) => {
                  if (el) originRefs.current.set(origin.id, el);
                  else originRefs.current.delete(origin.id);
                }}
              >
                <IntegrationCard
                  integration={origin}
                  isSelected={selectedOrigin?.id === origin.id}
                  onSelect={onSelectOrigin}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Destinations Column */}
        <div className="flex flex-col gap-4">
          <h2 className="text-sm font-bold text-gray-900 mb-2">Destinations</h2>
          <div className="flex flex-col gap-4 relative z-10">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                ref={(el) => {
                  if (el) destRefs.current.set(dest.id, el);
                  else destRefs.current.delete(dest.id);
                }}
              >
                <IntegrationCard
                  integration={dest}
                  isSelected={selectedDestination?.id === dest.id}
                  onSelect={onSelectDestination}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-12 flex justify-center pb-8 border-b border-gray-100">
        <button
          onClick={onSave}
          disabled={!selectedOrigin || !selectedDestination}
          className={`
            px-8 py-3 rounded-lg font-semibold text-white shadow-lg transition-all
            ${selectedOrigin && selectedDestination 
              ? 'bg-[#818cf8] hover:bg-[#6366f1] hover:shadow-xl transform hover:-translate-y-0.5' 
              : 'bg-gray-300 cursor-not-allowed opacity-70'
            }
          `}
        >
          Save combination
        </button>
      </div>
    </div>
  );
};

export default IntegrationSelector;
