import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About MSBO</h1>
          <p className="text-xl text-blue-100">
            Learn more about our history, mission, and values
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Michigan Stocks and Bonds (MSBO) was founded out of the collective ambition of 
              student investors. Our goal is to help students turn their own ideas and visions 
              into successful investments while building lasting relationships and professional skills.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Focus</h3>
                <p className="text-gray-600">
                  We actively invest through our eight sector desks, providing hands-on 
                  experience in equity research, valuation models, and portfolio management.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                <p className="text-gray-600">
                  We provide investing education that goes beyond the classroom, with 
                  real-world application and mentorship from experienced members and alumni.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Development</h3>
                <p className="text-gray-600">
                  We help sharpen professional development skills through workshops, 
                  networking events, and recruiting opportunities.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
                <p className="text-gray-600">
                  We give back to the community while fostering a culture of collaboration, 
                  learning, and lasting friendships among members.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-4 mb-12">
              <li><strong>Excellence:</strong> We strive for the highest standards in everything we do</li>
              <li><strong>Collaboration:</strong> We believe in the power of teamwork and shared knowledge</li>
              <li><strong>Integrity:</strong> We conduct ourselves with honesty and ethical principles</li>
              <li><strong>Innovation:</strong> We embrace new ideas and creative approaches to investing</li>
              <li><strong>Growth:</strong> We are committed to continuous learning and development</li>
            </ul>

            <div className="text-center">
              <Link 
                href="/apply"
                className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-6">
              Email: board@michiganstocksandbonds.org
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Michigan Stocks and Bonds. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
