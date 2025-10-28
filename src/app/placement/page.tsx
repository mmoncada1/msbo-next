import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/ScrollAnimations";

export default function Placement() {
  const successFactors = [
    {
      title: "MSBO-Exclusive Events",
      description: "Recruiting Treks, exclusive events at U-M Ross, and guest speakers help MSBO analysts forge stronger connections with leading companies."
    },
    {
      title: "Interview Preparation",
      description: "Analysts interview in real-world simulations during weekly meetings and receive feedback from their peers and experienced upperclassmen."
    },
    {
      title: "Technical Workshops",
      description: "Weekly workshops and exclusive resources compiled by MSBO over several years help analysts master their finance technicals."
    },
    {
      title: "Diverse Alumni Network",
      description: "Our alumni span across multiple industries and are more than happy to chat on their career, experiences, and advice."
    }
  ];

  const placementStats = [
    { label: "Investment Banking", percentage: "40%" },
    { label: "Private Equity & Venture Capital", percentage: "25%" },
    { label: "Consulting", percentage: "20%" },
    { label: "Technology", percentage: "10%" },
    { label: "Other Finance Roles", percentage: "5%" }
  ];

  const topFirms = [
    "Goldman Sachs", "J.P. Morgan", "Morgan Stanley", "Citigroup", "Bank of America",
    "Lazard", "Moelis & Co.", "Guggenheim Securities", "TD Securities", "RBC Capital Markets",
    "Blackstone", "KKR", "Apollo Global Management", "Bain Capital", "Carlyle Group",
    "McKinsey & Company", "Bain & Company", "Boston Consulting Group", "Deloitte", "PwC",
    "Google", "Microsoft", "Amazon", "Meta", "Apple"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Citadel Style */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/MSBO 2025 Recruitment (3) (1).jpg"
            alt="MSBO Success"
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
                  Career<br />
                  <span className="font-normal">Placement</span>
                </h1>
              </FadeInUp>
              <FadeInUp delay={300}>
                <div className="w-24 h-0.5 bg-white mb-8"></div>
              </FadeInUp>
              <FadeInUp delay={600}>
                <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl leading-relaxed font-light">
                  We pride ourselves on our recent placement across a variety of industries. 
                  From buy-side to sell-side roles, as well as consulting and tech, our members 
                  place at leading firms.
                </p>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Statistics Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SlideInLeft>
              <div className="pr-0 lg:pr-8">
                <div className="w-16 h-0.5 bg-gray-900 mb-8"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-8 lg:mb-10 leading-[1.1] tracking-tight">
                  Outstanding Outcomes
                </h2>
                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                  Our members consistently secure positions at top-tier firms across multiple industries, 
                  demonstrating the effectiveness of our comprehensive education and professional 
                  development programs.
                </p>
                <div className="space-y-6">
                  {placementStats.map((stat, index) => (
                    <FadeInUp key={stat.label} delay={index * 100}>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 font-medium">{stat.label}</span>
                        <span className="text-2xl font-light text-gray-900">{stat.percentage}</span>
                      </div>
                      <div className="w-full bg-gray-200 h-1 mt-2">
                        <div 
                          className="bg-gray-900 h-1 transition-all duration-1000"
                          style={{ width: stat.percentage }}
                        ></div>
                      </div>
                    </FadeInUp>
                  ))}
                </div>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div>
                <div className="relative">
                  <Image
                    src="/placement-stats.webp"
                    alt="MSBO Placement Statistics"
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

      {/* Success Factors Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-20">
              <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                The Secret of Our Success
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                MSBO provides countless resources for members to apply their classroom knowledge 
                and gain real-world experience.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {successFactors.map((factor, index) => (
              <FadeInUp key={factor.title} delay={index * 150}>
                <div className="group">
                  <div className="flex items-center mb-6">
                    <div className="w-1 h-16 bg-gray-200 group-hover:bg-gray-900 transition-colors duration-300 mr-6 flex-shrink-0"></div>
                    <h3 className="text-2xl font-light text-gray-900 tracking-tight group-hover:text-black transition-colors">
                      {factor.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg hyphens-none break-words">
                    {factor.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Testimonial Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/MSBO 2025 Recruitment (1) (1).jpg"
            alt="MSBO Alumni Success"
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
                  Alumni Success Story
                </h2>
                <blockquote className="text-xl md:text-2xl leading-relaxed font-light text-gray-200 mb-12">
                  "As an economics major in LSA, I thought I was at a significant disadvantage 
                  compared to my BBA peers in Ross when it comes to finance recruiting. MSBO's 
                  extensive education program proved me wrong, covering all of the grounds from the 
                  fundamentals of the markets to complex corporate valuations. MSBO also created a 
                  culture of camaraderie with other likeminded individuals to further that passion for 
                  business, and one where a new member can make a real impact on day one. The 
                  club provided me with the tools to go above and beyond my previous expectations, 
                  and helped me land a job at Citigroup, which I truly don't think would have been 
                  possible otherwise."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-0.5 bg-gray-400 mr-6"></div>
                  <div>
                    <div className="text-lg font-medium text-white">Ryan Bonomi</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">MSBO Alumnus • Citigroup</div>
                  </div>
                </div>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div className="flex justify-center">
                <div className="relative w-80 max-w-sm">
                  <Image
                    src="/cropped-Ryan-Bonomi.webp"
                    alt="Ryan Bonomi - MSBO Alumnus"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
                    Ready to Launch Your Finance Career?
                  </h2>
                </FadeInUp>
                <FadeInUp delay={300}>
                  <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                    Join MSBO and gain access to exclusive opportunities, comprehensive training, 
                    and a powerful alumni network that will accelerate your career in finance.
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

      {/* Footer - Matching Homepage */}
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