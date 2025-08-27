'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              MICHIGAN STOCKS AND BONDS
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                HOME
              </Link>
              <Link href="/about" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                ABOUT US
              </Link>
              <Link href="/team" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                TEAM
              </Link>
              <Link href="/placement" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                PLACEMENT
              </Link>
              <Link href="/apply" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 text-sm font-medium rounded-md transition-colors">
                APPLY
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link href="/" className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                HOME
              </Link>
              <Link href="/about" className="block text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                ABOUT US
              </Link>
              <Link href="/team" className="block text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                TEAM
              </Link>
              <Link href="/placement" className="block text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                PLACEMENT
              </Link>
              <Link href="/apply" className="block bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 text-sm font-medium rounded-md mx-3 mt-2">
                APPLY
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
