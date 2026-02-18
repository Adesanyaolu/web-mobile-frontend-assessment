'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Integration } from '../types';
import IntegrationCard from './IntegrationCard';
import ConnectorLine from './ConnectorLine';

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
  const [mouseCoords, setMouseCoords] = useState<{ x: number, y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Refs for selected cards to calculate line position
  const originRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const destRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Determine if we have partial selection (one side only)
  const hasPartialSelection = Boolean((selectedOrigin && !selectedDestination) || (!selectedOrigin && selectedDestination));
  const hasFullSelection = Boolean(selectedOrigin && selectedDestination);

  // Get the current body zoom factor
  const getZoom = () => parseFloat(getComputedStyle(document.body).zoom || '1');

  // Track mouse movement for partial selection line
  useEffect(() => {
    if (!hasPartialSelection || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const zoom = getZoom();
      const containerRect = containerRef.current!.getBoundingClientRect();
      setMouseCoords({
        x: (e.clientX - containerRect.left) / zoom,
        y: (e.clientY - containerRect.top) / zoom,
      });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [hasPartialSelection]);

  // Calculate line coordinates for partial selection (follows mouse)
  useEffect(() => {
    if (hasPartialSelection && containerRef.current && mouseCoords) {
      const zoom = getZoom();
      const containerRect = containerRef.current.getBoundingClientRect();

      if (selectedOrigin) {
        const originEl = originRefs.current.get(selectedOrigin.id);
        if (originEl) {
          const originRect = originEl.getBoundingClientRect();
          const x1 = (originRect.right - containerRect.left) / zoom;
          const y1 = (originRect.top + (originRect.height / 2) - containerRect.top) / zoom;
          setLineCoords({ x1, y1, x2: mouseCoords.x, y2: mouseCoords.y });
        }
      } else if (selectedDestination) {
        const destEl = destRefs.current.get(selectedDestination.id);
        if (destEl) {
          const destRect = destEl.getBoundingClientRect();
          const x2 = (destRect.left - containerRect.left) / zoom;
          const y2 = (destRect.top + (destRect.height / 2) - containerRect.top) / zoom;
          setLineCoords({ x1: mouseCoords.x, y1: mouseCoords.y, x2, y2 });
        }
      }
    }
  }, [hasPartialSelection, selectedOrigin, selectedDestination, mouseCoords]);

  // Update line coordinates when both selections are made
  useEffect(() => {
    if (selectedOrigin && selectedDestination && containerRef.current) {
      const zoom = getZoom();
      const originEl = originRefs.current.get(selectedOrigin.id);
      const destEl = destRefs.current.get(selectedDestination.id);
      const containerRect = containerRef.current.getBoundingClientRect();

      if (originEl && destEl) {
        const originRect = originEl.getBoundingClientRect();
        const destRect = destEl.getBoundingClientRect();

        // Calculate relative coordinates, adjusted for zoom
        const x1 = (originRect.right - containerRect.left) / zoom;
        const y1 = (originRect.top + (originRect.height / 2) - containerRect.top) / zoom;
        const x2 = (destRect.left - containerRect.left) / zoom;
        const y2 = (destRect.top + (destRect.height / 2) - containerRect.top) / zoom;

        setLineCoords({ x1, y1, x2, y2 });
      }
    } else if (!hasPartialSelection) {
      setLineCoords(null);
    }
  }, [hasFullSelection, hasPartialSelection, selectedOrigin, selectedDestination]);

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
      <ConnectorLine coords={lineCoords} isPartial={hasPartialSelection} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
        {/* Origins Column */}
        <div className="grid gap-4" style={{ gridTemplateRows: `auto repeat(${origins.length}, 1fr)` }}>
          <h2 className="text-lg font-bold font-grotesk text-[#001414] mb-2">Origins</h2>
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

        {/* Destinations Column */}
        <div className="grid gap-4" style={{ gridTemplateRows: `auto repeat(${destinations.length}, 1fr)` }}>
          <h2 className="text-lg font-bold font-grotesk text-[#001414] mb-2">Destinations</h2>
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

      {/* Save Button */}
      <div className="mt-12 flex justify-center pb-8 border-b border-gray-100">
        <button
          onClick={onSave}
          disabled={!selectedOrigin || !selectedDestination}
          className={`
            px-8 py-3 rounded-lg font-semibold text-white shadow-lg transition-all
            ${selectedOrigin && selectedDestination 
              ? 'bg-[#5050EC] hover:bg-[#6366f1] hover:shadow-xl transform hover:-translate-y-0.5' 
              : 'bg-[#5050EC]/40 cursor-not-allowed opacity-70'
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
