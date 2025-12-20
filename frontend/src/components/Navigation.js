import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Programs', path: '/programs' },
    { name: 'R&D', path: '/research' },
  ];

  const moreLinks = [
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Internships', path: '/internships' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="https://customer-assets.emergentagent.com/job_0afa4b6f-648f-43be-9f28-1ca6171a4f9c/artifacts/gz40ovum_hovernest%20logo%20-%20Edited.png"
              alt="Hovernest"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#6E44FF] to-[#7C3AED] bg-clip-text text-transparent">
              Hovernest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#6E44FF] bg-[#F5F3FF]'
                    : 'text-gray-700 hover:text-[#6E44FF] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-[#6E44FF] hover:bg-gray-50 transition-all duration-200 flex items-center space-x-1"
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMoreDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMoreDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-[#6E44FF] hover:bg-[#F5F3FF] transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/contact?type=demo"
              className="px-6 py-2.5 bg-[#6E44FF] text-white rounded-full text-sm font-semibold hover:bg-[#5D35E6] transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
            >
              Request a Demo
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 border-2 border-[#6E44FF] text-[#6E44FF] rounded-full text-sm font-semibold hover:bg-[#6E44FF] hover:text-white transition-all duration-200 hover:scale-105"
            >
              Talk to Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#6E44FF] bg-[#F5F3FF]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2 border-t border-gray-100 mt-2">
              <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">More</p>
              {moreLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 space-y-2">
              <Link
                to="/contact?type=demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-[#6E44FF] text-white rounded-full text-sm font-semibold text-center hover:bg-[#5D35E6] transition-colors duration-200"
              >
                Request a Demo
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-3 border-2 border-[#6E44FF] text-[#6E44FF] rounded-full text-sm font-semibold text-center hover:bg-[#6E44FF] hover:text-white transition-colors duration-200"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
