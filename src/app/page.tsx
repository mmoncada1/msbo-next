import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/ScrollAnimations";
import { CountUp } from "@/components/Parallax";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Citadel Style */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/MSBO 2025 Recruitment (1) (1).jpg"
            alt="MSBO Team"
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
                  Michigan Stocks<br />
                  <span className="font-normal">and Bonds</span>
                </h1>
              </FadeInUp>
              <FadeInUp delay={300}>
                <div className="w-24 h-0.5 bg-white mb-8"></div>
              </FadeInUp>
              <FadeInUp delay={600}>
                <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl leading-relaxed font-light">
                  Founded out of the collective ambition of student investors, MSBO is a highly selective, 
                  leading undergraduate investment organization at the University of Michigan.
                </p>
              </FadeInUp>
              <FadeInUp delay={900}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link 
                    href="/about"
                    className="inline-flex items-center px-8 py-4 text-lg font-medium text-black bg-white hover:bg-gray-100 transition-all duration-300 group"
                  >
                    Learn More
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Citadel Style */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <FadeInUp delay={0}>
              <div className="group">
                <div className="text-6xl md:text-7xl font-light text-gray-900 mb-4 tabular-nums tracking-tight">
                  <CountUp end={15000} prefix="$" suffix="+" />
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-[0.2em] font-medium">Assets Under Management</div>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="group">
                <div className="text-6xl md:text-7xl font-light text-gray-900 mb-4 tabular-nums tracking-tight">
                  <CountUp end={100} suffix="+" />
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-[0.2em] font-medium">Active Members</div>
              </div>
            </FadeInUp>
            <FadeInUp delay={400}>
              <div className="group">
                <div className="text-6xl md:text-7xl font-light text-gray-900 mb-4 tabular-nums tracking-tight">
                  <CountUp end={100} suffix="%" />
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-[0.2em] font-medium">Placement Rate</div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* About Section - Citadel Style */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SlideInLeft>
              <div className="pr-0 lg:pr-8">
                <div className="w-16 h-0.5 bg-gray-900 mb-8"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-8 lg:mb-10 leading-[1.1] tracking-tight">
                  Welcome to MSBO
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Michigan Stocks and Bonds (MSBO) was founded out of the collective ambition of 
                    student investors to help students turn their own ideas and visions into 
                    successful investments.
                  </p>
                  <p>
                    Our focus is on actively investing through our eight sector 
                    desks, providing investing education, sharpening professional development skills, 
                    and giving back to the community.
                  </p>
                </div>
                <div className="mt-10">
                  <Link 
                    href="/about"
                    className="inline-flex items-center text-gray-900 hover:text-black group text-lg font-medium"
                  >
                    <span>Learn more about our mission</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div>
                <div className="relative">
                  <Image
                    src="/MSBO 2025 Recruitment (2) (1).jpg"
                    alt="MSBO Team Meeting"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* What We Do Section - Citadel Style */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-20">
              <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Our Pillars
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                MSBO was founded on four principles that serve as the North Star of our organization
              </p>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-16">
            <FadeInUp delay={0}>
              <Link href="/about" className="group flex cursor-pointer h-full">
                <div className="w-1 h-16 bg-gray-200 group-hover:bg-gray-900 transition-colors duration-300 mr-8 mt-2 flex-shrink-0"></div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight group-hover:text-black transition-colors">Investing</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 hyphens-none break-words group-hover:text-gray-700 transition-colors flex-grow">
                    We employ a diligent approach to generating returns on a risk-adjusted basis through 
                    top-down and bottom-up fundamental analysis. Teams across various sectors pitch ideas 
                    that are incorporated into MSBO&apos;s portfolio.
                  </p>
                  <div className="inline-flex items-center text-gray-900 group-hover:text-black transition-colors mt-auto">
                    <span className="text-sm font-medium uppercase tracking-wide">Learn More</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </FadeInUp>
            <FadeInUp delay={100}>
              <Link href="/about" className="group flex cursor-pointer h-full">
                <div className="w-1 h-16 bg-gray-200 group-hover:bg-gray-900 transition-colors duration-300 mr-8 mt-2 flex-shrink-0"></div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight group-hover:text-black transition-colors">Education</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 hyphens-none break-words group-hover:text-gray-700 transition-colors flex-grow">
                    We pride ourselves on our education program, teaching essential concepts in markets 
                    and investing. New members participate in weekly sessions covering Financial Markets, 
                    Fundamental Analysis, Accounting, and Valuation.
                  </p>
                  <div className="inline-flex items-center text-gray-900 group-hover:text-black transition-colors mt-auto">
                    <span className="text-sm font-medium uppercase tracking-wide">About Us</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </FadeInUp>
            <FadeInUp delay={200}>
              <Link href="/about" className="group flex cursor-pointer h-full">
                <div className="w-1 h-16 bg-gray-200 group-hover:bg-gray-900 transition-colors duration-300 mr-8 mt-2 flex-shrink-0"></div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight group-hover:text-black transition-colors">Philanthropy</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 hyphens-none break-words group-hover:text-gray-700 transition-colors flex-grow">
                    Our purpose goes beyond investing. We&apos;re committed to bettering the University of Michigan, 
                    Ann Arbor, and Detroit communities through volunteering, teaching personal finance, 
                    and fundraising initiatives.
                  </p>
                  <div className="inline-flex items-center text-gray-900 group-hover:text-black transition-colors mt-auto">
                    <span className="text-sm font-medium uppercase tracking-wide">Our Impact</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </FadeInUp>
            <FadeInUp delay={300}>
              <Link href="/placement" className="group flex cursor-pointer h-full">
                <div className="w-1 h-16 bg-gray-200 group-hover:bg-gray-900 transition-colors duration-300 mr-8 mt-2 flex-shrink-0"></div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight group-hover:text-black transition-colors">Professional Development</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 hyphens-none break-words group-hover:text-gray-700 transition-colors flex-grow">
                    Our members work at top firms worldwide across various industries. We provide strong 
                    alumni pipelines, exclusive speaker opportunities, recruiting events, and training 
                    in resume crafting, networking, and interviewing.
                  </p>
                  <div className="inline-flex items-center text-gray-900 group-hover:text-black transition-colors mt-auto">
                    <span className="text-sm font-medium uppercase tracking-wide">Our Placement</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Experience Section - Citadel Style */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/MSBO 2025 Recruitment (3) (1).jpg"
            alt="MSBO Experience"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SlideInLeft>
              <div className="pr-0 lg:pr-8">
                <div className="w-16 h-0.5 bg-white mb-8"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-12 leading-tight">
                  The MSBO Experience
                </h2>
                <blockquote className="text-xl md:text-2xl leading-relaxed font-light text-gray-200 mb-12">
                  &quot;MSBO differs from other Michigan investment clubs due to the immense value 
                  placed on culture and new member engagement. It provides an exceptional educational 
                  experience not found in the classroom, with members playing a critical role from 
                  day one by contributing to pitch theses, valuation models, or discussions. My 
                  involvement helped cultivate a family of like-minded individuals from which many 
                  of my closest friends at Michigan were found.&quot;
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-0.5 bg-gray-400 mr-6"></div>
                  <div>
                    <div className="text-lg font-medium text-white">John Fogel</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">MSBO Alumnus</div>
                  </div>
                </div>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div>
                <div className="relative">
                  <Image
                    src="/Jonathan-Fogel-Headshot.webp"
                    alt="John Fogel - MSBO Alumnus"
                    width={500}
                    height={600}
                    className="w-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Citadel Style */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Image
                src="/MSBO 2025 Recruitment (5) (1).jpg"
                alt="Join MSBO"
                width={600}
                height={800}
                className="w-full object-cover"
              />
            </div>
            <div className="pl-0 lg:pl-8">
              <div className="max-w-2xl">
                <FadeInUp>
                  <div className="w-16 h-0.5 bg-gray-900 mb-8"></div>
                  <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                    Ready to Join Michigan&apos;s Premier Investment Club?
                  </h2>
                </FadeInUp>
                <FadeInUp delay={300}>
                  <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                    Take the first step towards your career in finance. Join a community of 
                    ambitious students, learn from industry professionals, and gain hands-on 
                    investment experience.
                  </p>
                </FadeInUp>
                <FadeInUp delay={600}>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link 
                      href="/apply"
                      className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-black hover:bg-gray-800 transition-all duration-300 group"
                    >
                      Apply Now
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link 
                      href="/about"
                      className="inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 border border-gray-300 hover:border-gray-900 transition-all duration-300 group"
                    >
                      Learn More
                      <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </FadeInUp>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Citadel Style */}
      <footer className="bg-black text-white py-20 border-t border-gray-800">
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
              <h4 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-6">Quick Links</h4>
              <nav className="space-y-3">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/team" className="block text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
                <Link href="/placement" className="block text-gray-400 hover:text-white transition-colors">
                  Placement
                </Link>
                <Link href="/apply" className="block text-gray-400 hover:text-white transition-colors">
                  Apply
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-6">Connect</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800">
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
