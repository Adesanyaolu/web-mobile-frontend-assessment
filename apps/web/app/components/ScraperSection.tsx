import React from 'react';

const ScraperSection = () => {
  return (
    <div className="py-24 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-3 tracking-tight">
        Didn&apos;t see your target website?
      </h2>
      <p className="text-gray-500 font-medium mb-10 max-w-lg mx-auto">
        We can scrape any website on the internet. Try it out for free!
      </p>
      
      <div className="w-full max-w-xl mx-auto">
        <label htmlFor="url-scraper" className="block text-left text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
          URL to Scrape
        </label>
        <div className="flex gap-4">
          <input 
            type="text" 
            id="url-scraper"
            placeholder="https://www.amazon.com/b/ref=dp_bc_aui_C_4?ie=UTF8"
            className="flex-1 border-2 border-indigo-100 rounded-lg px-4 py-3 text-indigo-600 placeholder-indigo-300 focus:outline-none focus:border-indigo-400 focus:ring-0 font-medium bg-white"
            defaultValue="https://www.amazon.com/b/ref=dp_bc_aui_C_4?ie=UTF8"
          />
          <button className="bg-[#585bf1] hover:bg-[#4f51d6] text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors whitespace-nowrap">
            Scrape URL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScraperSection;
