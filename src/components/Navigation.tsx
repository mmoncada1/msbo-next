'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full absolute top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image
                src="/MSBO-Logo-White-Transparent-1.webp"
                alt="MSBO Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-lg font-light tracking-tight text-white">
                MICHIGAN STOCKS AND BONDS
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <Link href="/" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/team" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
                Team
              </Link>
              <Link href="/placement" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
                Placement
              </Link>
              <Link href="/apply" className="px-6 py-2 text-sm font-medium bg-white text-black hover:bg-gray-100 transition-all">
                Apply
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 transition-colors"
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
