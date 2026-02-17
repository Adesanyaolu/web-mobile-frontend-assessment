'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import IntegrationSelector from './components/IntegrationSelector';
import SavedCombinations from './components/SavedCombinations';
import ScraperSection from './components/ScraperSection';
import Footer from './components/Footer';
import { origins, destinations } from './data/integrations';
import { Integration, SavedCombination } from './types';

export default function Home() {
  const [selectedOrigin, setSelectedOrigin] = useState<Integration | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Integration | null>(null);
  const [savedCombinations, setSavedCombinations] = useState<SavedCombination[]>([]);

  const handleSaveCombination = () => {
    if (selectedOrigin && selectedDestination) {
      const newCombo: SavedCombination = {
        id: Date.now().toString(),
        origin: selectedOrigin,
        destination: selectedDestination,
      };
      setSavedCombinations([...savedCombinations, newCombo]);
      
      // Optional: clear selection after save
      setSelectedOrigin(null);
      setSelectedDestination(null);
    }
  };

  const handleRemoveCombination = (id: string) => {
    setSavedCombinations(savedCombinations.filter(combo => combo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <IntegrationSelector
              origins={origins}
              destinations={destinations}
              selectedOrigin={selectedOrigin}
              selectedDestination={selectedDestination}
              onSelectOrigin={setSelectedOrigin}
              onSelectDestination={setSelectedDestination}
              onSave={handleSaveCombination}
            />

            <SavedCombinations
              combinations={savedCombinations}
              onRemove={handleRemoveCombination}
            />
          </div>
        </section>

        <section className="bg-white border-t border-gray-100">
           <div className="container-custom">
             <ScraperSection />
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
