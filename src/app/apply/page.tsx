import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/ScrollAnimations";

export default function Apply() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Citadel Style */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/MSBO 2025 Recruitment (2) (1).jpg"
            alt="MSBO Application"
            fill
            className="object-cover object-center opacity-85"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-screen flex items-center">
            <div className="max-w-4xl py-32">
              <FadeInUp>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-[1.1] tracking-tight">
                  Apply to<br />
                  <span className="font-normal">MSBO</span>
                </h1>
              </FadeInUp>
              <FadeInUp delay={300}>
                <div className="w-24 h-0.5 bg-white mb-8"></div>
              </FadeInUp>
              <FadeInUp delay={600}>
                <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl leading-relaxed font-light">
                  Join Michigan&apos;s premier undergraduate investment organization and begin your journey 
                  in finance with our selective Fall 2025 recruitment process.
                </p>
              </FadeInUp>
              <FadeInUp delay={900}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href="https://forms.gle/4JXFh1mAUBztTbRD9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 text-lg font-medium text-black bg-white hover:bg-gray-100 transition-all duration-300 group"
                  >
                    Apply Now
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://umich-my.sharepoint.com/:b:/g/personal/ened_umich_edu/EdmE8TC2aSxJquitiagZT2YBJyfV_dYLXlUbySowl03gAw?e=u3X4Zq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 text-lg font-medium text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Interview Guide
                  </a>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Information Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 tracking-tight">
                Fall 2025 Recruitment
              </h2>
              <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Thank you for your interest in MSBO! Our application for Fall 2025 recruitment cycle is currently live. 
                If you have any questions, please contact board@michiganstocksandbonds.org.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <SlideInLeft>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-light mb-6 text-gray-900 tracking-tight">
                    Application Process
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our comprehensive application process is designed to identify passionate students 
                    who are committed to excellence in investment management and financial analysis.
                  </p>
                  <a 
                    href="https://forms.gle/4JXFh1mAUBztTbRD9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors group"
                  >
                    Complete Application
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-light mb-6 text-gray-900 tracking-tight">
                    Interview Preparation
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Prepare for your technical interview with our comprehensive guide covering 
                    essential financial concepts and analytical frameworks.
                  </p>
                  <a 
                    href="https://umich-my.sharepoint.com/:b:/g/personal/ened_umich_edu/EdmE8TC2aSxJquitiagZT2YBJyfV_dYLXlUbySowl03gAw?e=u3X4Zq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors group"
                  >
                    Download Guide
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-8"></div>
            </div>
          </FadeInUp>

          <div className="space-y-16 lg:space-y-24">
            <FadeInUp delay={200}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight">
                    Why should I join MSBO?
                  </h3>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Through a diverse group of members, Michigan Stocks and Bonds complements your overall Michigan experience. 
                    College is more than what you learn in the classroom; college teaches you how to develop personally and 
                    professionally and MSBO serves as a tool to do so.
                  </p>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={400}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight">
                    Does MSBO only take Business majors?
                  </h3>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    No! In fact, MSBO takes majors from all different colleges at Michigan. Though it is true a majority of 
                    our members are studying business, MSBO at its core is composed of members who are simply passionate about 
                    investing and furthering their knowledge.
                  </p>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={600}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight">
                    What is the expected time commitment?
                  </h3>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    As a new member, you will have to dedicate at least two to three hours per week in MSBO. Each week, 
                    our members have an education meeting, a general team meeting, and coffee chats. As you take on a bigger 
                    role in MSBO, the time commitment will increase.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeInUp>
              <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
                Ready to Get Started?
              </h2>
              <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
              <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
                Michigan Stocks and Bonds was founded out of the collective ambition of student investors. 
                Our goal is to help students turn their own ideas and visions into successful investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://forms.gle/4JXFh1mAUBztTbRD9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium text-black bg-white hover:bg-gray-100 transition-all duration-300 group"
                >
                  Apply Now
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="mailto:board@michiganstocksandbonds.org"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <Image
                  src="/MSBO-Logo-White-Transparent-1.webp"
                  alt="MSBO Logo"
                  width={50}
                  height={50}
                  className="h-12 w-auto"
                />
                <h3 className="text-2xl font-light tracking-tight">Michigan Stocks and Bonds</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
                A highly selective, leading undergraduate investment organization at the University of Michigan.
              </p>
              <div className="space-y-2">
                <p className="text-gray-400">
                  <span className="text-white font-medium">Email:</span> board@michiganstocksandbonds.org
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-6">Quick Links</h4>
              <div className="space-y-3">
                <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/team" className="block text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
                <Link href="/placement" className="block text-gray-400 hover:text-white transition-colors">
                  Placement
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-6">Connect</h4>
              <div className="space-y-3">
                <a href="https://www.instagram.com/michigansbo/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/company/michigan-stocks-and-bonds/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="https://www.facebook.com/michiganstocksandbonds/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © 2025 Michigan Stocks and Bonds. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="https://sitesbymiguel.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                  Powered by SitesByMiguel
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}