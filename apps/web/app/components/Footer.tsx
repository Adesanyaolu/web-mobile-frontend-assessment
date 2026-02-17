import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#020b10] text-gray-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          {/* Logo & Description */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-5 h-5 rounded-full bg-white relative flex items-center justify-center">
                 {/* Footer logo variant white */}
                 <div className="w-1.5 h-1.5 rounded-full bg-[#020b10]"></div>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">navlogo</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Web scraping API handles all anti-bot bypass for you with rotating proxies, headless browsers and more.
            </p>
          </div>

          {/* Ratings */}
          <div className="flex gap-8">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                 <span className="text-white font-bold text-lg">Capterra</span>
              </div>
              <div className="flex text-amber-500">★★★★★</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                 <span className="text-white font-bold text-lg">G2</span>
              </div>
              <div className="flex text-amber-500">★★★★★</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-medium text-gray-400">All services are online</span>
          </div>

          <p className="text-xs text-gray-500">
            © 2024 Navlogo. All rights reserved.
          </p>
          
          <div className="flex gap-4">
             <Link href="#" className="hover:text-white transition-colors">
               <span className="sr-only">X (Twitter)</span>
               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
               </svg>
             </Link>
             <Link href="#" className="hover:text-white transition-colors">
               <span className="sr-only">LinkedIn</span>
               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
               </svg>
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
