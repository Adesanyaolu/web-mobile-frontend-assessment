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
              <div className="w-4 h-4 rounded-full bg-[#0A415C] relative flex items-center justify-center">
              </div>
              <span className="font-normal text-xl tracking-tight text-[#001414]">navlogo</span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#" className="text-sm font-medium text-[#515867] hover:text-[#001414] transition-colors">
                Products
              </Link>
              <Link href="#" className="text-sm font-medium text-[#515867] hover:text-[#001414] transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-sm font-medium text-[#515867] hover:text-[#001414] transition-colors">
                Docs
              </Link>
              <Link href="#" className="text-sm font-medium text-[#515867] hover:text-[#001414] transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Right Side: Auth Actions */}
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-[#515867] hover:text-[#001414] hidden sm:block">
              Sign In
            </Link>
            <button className="bg-[#5050EC] text-white px-4 py-2.5 rounded-md text-sm font-bold hover:bg-[#4f51d6] transition-all shadow-sm">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
