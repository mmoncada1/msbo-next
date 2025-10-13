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
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/MSBO 2025 Recruitment (1) (1).jpg"
            alt="MSBO Team"
            fill
            className="object-cover object-center opacity-60"
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
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <SlideInLeft>
              <div className="lg:col-span-5">
                <div className="w-16 h-0.5 bg-gray-900 mb-8"></div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-10 leading-tight">
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
                    className="inline-flex items-center text-gray-900 hover:text-black group"
                  >
                    <span className="text-lg font-medium">Learn more about our mission</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="lg:col-span-7">
                <div className="relative">
                  <Image
                    src="/MSBO 2025 Recruitment (2) (1).jpg"
                    alt="MSBO Team Meeting"
                    width={800}
                    height={600}
                    className="w-full object-cover"
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
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Three core pillars that define our commitment to excellence and member development
              </p>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <FadeInUp delay={0}>
              <div className="group">
                <div className="mb-8">
                  <div className="w-1 h-16 bg-gray-200 group-hover:bg-gray-900 transition-colors duration-300 mb-6"></div>
                  <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">Professional Development</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    MSBO helps prepare members for unparalleled recruiting opportunities through 
                    workshops, alumni mentorship, and private recruiting events.
                  </p>
                  <Link 
                    href="/placement" 
                    className="inline-flex items-center text-gray-900 hover:text-black group/link"
                  >
                    <span className="text-sm font-medium uppercase tracking-wide">Our Placement</span>
                    <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="group">
                <div className="mb-8">
                  <div className="w-1 h-16 bg-gray-200 group-hover:bg-gray-900 transition-colors duration-300 mb-6"></div>
                  <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">Investment Management</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    We actively invest through our eight sector desks, providing hands-on 
                    experience in equity research and portfolio management.
                  </p>
                  <Link 
                    href="/about" 
                    className="inline-flex items-center text-gray-900 hover:text-black group/link"
                  >
                    <span className="text-sm font-medium uppercase tracking-wide">About Us</span>
                    <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeInUp>
            <FadeInUp delay={400}>
              <div className="group">
                <div className="mb-8">
                  <div className="w-1 h-16 bg-gray-200 group-hover:bg-gray-900 transition-colors duration-300 mb-6"></div>
                  <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">Community Impact</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Beyond investing, we focus on giving back to the community and building 
                    lasting relationships among members and alumni.
                  </p>
                  <Link 
                    href="/team" 
                    className="inline-flex items-center text-gray-900 hover:text-black group/link"
                  >
                    <span className="text-sm font-medium uppercase tracking-wide">Our Team</span>
                    <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <SlideInLeft>
              <div className="lg:col-span-7">
                <div className="max-w-4xl">
                  <div className="w-16 h-0.5 bg-white mb-8"></div>
                  <h2 className="text-4xl md:text-5xl font-light mb-12 leading-tight">
                    The MSBO Experience
                  </h2>
                  <blockquote className="text-xl md:text-2xl leading-relaxed font-light text-gray-200 mb-12">
                    "MSBO differs from other Michigan investment clubs due to the immense value 
                    placed on culture and new member engagement. It provides an exceptional educational 
                    experience not found in the classroom, with members playing a critical role from 
                    day one by contributing to pitch theses, valuation models, or discussions. My 
                    involvement helped cultivate a family of like-minded individuals from which many 
                    of my closest friends at Michigan were found."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-0.5 bg-gray-400 mr-6"></div>
                    <div>
                      <div className="text-lg font-medium text-white">John Fogel</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wide">MSBO Alumnus</div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="lg:col-span-5">
                <div className="relative">
                  <Image
                    src="/MSBO 2025 Recruitment (4) (1).jpg"
                    alt="MSBO Team Culture"
                    width={600}
                    height={800}
                    className="w-full object-cover"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <Image
                src="/MSBO 2025 Recruitment (5) (1).jpg"
                alt="Join MSBO"
                width={600}
                height={800}
                className="w-full object-cover"
              />
            </div>
            <div className="lg:col-span-7">
              <div className="max-w-2xl lg:ml-16">
                <FadeInUp>
                  <div className="w-16 h-0.5 bg-gray-900 mb-8"></div>
                  <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                    Ready to Join Michigan's Premier Investment Club?
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <h3 className="text-2xl font-light mb-8 tracking-tight">Michigan Stocks and Bonds</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
                A highly selective, leading undergraduate investment organization at the University of Michigan.
              </p>
              <div className="space-y-2">
                <p className="text-gray-400">
                  <span className="text-white font-medium">Email:</span> board@michiganstocksandbonds.org
                </p>
              </div>
            </div>
            <div className="lg:col-span-3">
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
            <div className="lg:col-span-3">
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
                <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
