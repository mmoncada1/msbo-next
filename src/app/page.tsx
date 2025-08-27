import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/ScrollAnimations";
import { CountUp } from "@/components/Parallax";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative text-white overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.7)), url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <FadeInUp>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Michigan Stocks and Bonds
              </h1>
            </FadeInUp>
            <FadeInUp delay={300}>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-blue-100 max-w-2xl leading-relaxed">
                Founded out of the collective ambition of student investors, MSBO is a highly selective, 
                leading undergraduate investment organization at the University of Michigan.
              </p>
            </FadeInUp>
            <FadeInUp delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/about"
                  className="inline-block border-2 border-white text-white font-semibold px-8 py-3 text-base hover:bg-white hover:text-blue-900 transition-all w-fit"
                >
                  Learn More
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FadeInUp delay={0}>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  <CountUp end={15000} prefix="$" suffix="+" />
                </div>
                <div className="text-gray-600 uppercase tracking-wide font-medium">AUM</div>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  <CountUp end={100} suffix="+" />
                </div>
                <div className="text-gray-600 uppercase tracking-wide font-medium">Members</div>
              </div>
            </FadeInUp>
            <FadeInUp delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  <CountUp end={100} suffix="%" />
                </div>
                <div className="text-gray-600 uppercase tracking-wide font-medium">Placement</div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Welcome to MSBO!
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Michigan Stocks and Bonds (MSBO) was founded out of the collective ambition of 
                  student investors to help students turn their own ideas and visions into 
                  successful investments.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our focus is on actively investing through our eight sector 
                  desks, providing investing education, sharpening professional development skills, 
                  and giving back to the community.
                </p>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="relative">
                <img
                  src="/university-building.jpg"
                  alt="University of Michigan Business School"
                  className="rounded-lg shadow-lg object-cover w-full h-80"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-20 rounded-lg"></div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              What We Do
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInUp delay={0}>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <span className="text-2xl">🎯</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Development</h3>
                <p className="text-gray-600 mb-6">
                  MSBO helps prepare members for unparalleled recruiting opportunities through 
                  workshops, alumni mentorship, and private recruiting events.
                </p>
                <Link href="/placement" className="text-blue-600 hover:text-blue-700 font-medium">
                  Our Placement →
                </Link>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <span className="text-2xl">💼</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Management</h3>
                <p className="text-gray-600 mb-6">
                  We actively invest through our eight sector desks, providing hands-on 
                  experience in equity research and portfolio management.
                </p>
                <Link href="/about" className="text-blue-600 hover:text-blue-700 font-medium">
                  About Us →
                </Link>
              </div>
            </FadeInUp>
            <FadeInUp delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <span className="text-2xl">🤝</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Impact</h3>
                <p className="text-gray-600 mb-6">
                  Beyond investing, we focus on giving back to the community and building 
                  lasting relationships among members and alumni.
                </p>
                <Link href="/team" className="text-blue-600 hover:text-blue-700 font-medium">
                  Our Team →
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div className="relative">
                <img
                  src="/team-meeting.jpg"
                  alt="MSBO team meeting"
                  className="rounded-lg shadow-lg object-cover w-full h-80"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-20 rounded-lg"></div>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="bg-blue-50 p-8 md:p-12 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Alumni Testimonial – John Fogel
                </h3>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  "MSBO differs from other Michigan investment clubs due to the immense value 
                  placed on culture and new member engagement. It provides an exceptional educational 
                  experience not found in the classroom, with members playing a critical role from 
                  day one by contributing to pitch theses, valuation models, or discussions. My 
                  involvement helped cultivate a family of like-minded individuals from which many 
                  of my closest friends at Michigan were found."
                </blockquote>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        className="relative py-20 text-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url(/stock-chart.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Michigan's Premier Investment Club?
            </h2>
          </FadeInUp>
          <FadeInUp delay={300}>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Take the first step towards your career in finance. Join a community of 
              ambitious students, learn from industry professionals, and gain hands-on 
              investment experience.
            </p>
          </FadeInUp>
          <FadeInUp delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/apply"
                className="inline-block bg-white text-blue-900 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Apply Now
              </Link>
              <Link 
                href="/about"
                className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-blue-900 transition-all"
              >
                Learn More
              </Link>
            </div>
          </FadeInUp>
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
