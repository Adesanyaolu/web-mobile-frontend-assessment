import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="border-b border-border-subtle bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Left Side: Logo & Links */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-6 h-6 rounded-full bg-[#1e293b] relative flex items-center justify-center">
                {/* Visual approximation of the logo dot/icon */}
                <div className="w-2 h-2 rounded-full bg-white opacity-90"></div>
              </div>
              <span className="font-bold text-xl tracking-tight text-[#1e293b]">navlogo</span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Products
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Docs
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Right Side: Auth Actions */}
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden sm:block">
              Sign In
            </Link>
            <button className="bg-[#585bf1] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#4f51d6] transition-all shadow-sm">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
