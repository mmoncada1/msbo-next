'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className={`text-lg font-light tracking-tight transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            } hover:opacity-80`}>
              MICHIGAN STOCKS AND BONDS
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <Link href="/" className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-gray-200 hover:text-white'
              }`}>
                Home
              </Link>
              <Link href="/about" className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-gray-200 hover:text-white'
              }`}>
                About Us
              </Link>
              <Link href="/team" className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-gray-200 hover:text-white'
              }`}>
                Team
              </Link>
              <Link href="/placement" className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-gray-200 hover:text-white'
              }`}>
                Placement
              </Link>
              <Link href="/apply" className={`px-6 py-2 text-sm font-medium transition-all ${
                isScrolled 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}>
                Apply
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200">
              <Link href="/" className="block text-gray-700 hover:text-black px-3 py-3 text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-black px-3 py-3 text-sm font-medium">
                About Us
              </Link>
              <Link href="/team" className="block text-gray-700 hover:text-black px-3 py-3 text-sm font-medium">
                Team
              </Link>
              <Link href="/placement" className="block text-gray-700 hover:text-black px-3 py-3 text-sm font-medium">
                Placement
              </Link>
              <Link href="/apply" className="block bg-black text-white hover:bg-gray-800 px-3 py-3 text-sm font-medium mx-3 mt-2">
                Apply
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
