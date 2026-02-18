import React from 'react';

const ScraperSection = () => {
  return (
    <div className="py-24 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl md:text-4xl font-extrabold font-grotesk text-[#001414] mb-3 tracking-tight">
        Didn&apos;t see your target website?
      </h2>
      <p className="text-[#515867] text-base font-medium mb-10 max-w-lg mx-auto">
        We can scrape any website on the internet. Try it out for free!
      </p>
      
      <div className="w-full max-w-xl mx-auto mt-8">
        <label htmlFor="url-scraper" className="block text-left text-base font-medium text-[#515867] mb-2 tracking-wide">
          URL to Scrape
        </label>
        <div className="flex flex-col md:flex-row gap-4">
          <div 
            className="flex-1 rounded-lg p-[1.5px]" 
            style={{ 
              background: 'linear-gradient(to bottom, #14B8B8, #7575F0)',
              boxShadow: '0 4px 15px -3px rgba(117, 117, 240, 0.4), 0 2px 8px -2px rgba(20, 184, 184, 0.3)',
            }}
          >
            <input 
              type="text" 
              id="url-scraper"
              placeholder="https://www.amazon.com/b/ref=dp_bc_aui_C_4?ie=UTF8"
              className="w-full rounded-[5.5px] px-4 py-3 text-indigo-600 placeholder-indigo-300 focus:outline-none font-medium bg-white"
              defaultValue="https://www.amazon.com/b/ref=dp_bc_aui_C_4?ie=UTF8"
            />
          </div>
          <button className="bg-[#5050EC] hover:bg-[#4f51d6] text-white text-sm font-bold px-8 py-3 rounded-xl shadow-sm transition-colors whitespace-nowrap">
            Scrape URL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScraperSection;
