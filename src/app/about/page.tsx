import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/ScrollAnimations";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Citadel Style */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/MSBO 2025 Recruitment (2) (1).jpg"
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
                  About<br />
                  <span className="font-normal">MSBO</span>
                </h1>
              </FadeInUp>
              <FadeInUp delay={300}>
                <div className="w-24 h-0.5 bg-white mb-8"></div>
              </FadeInUp>
              <FadeInUp delay={600}>
                <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl leading-relaxed font-light">
                  Learn about our history, mission, and the principles that guide Michigan's 
                  premier undergraduate investment organization.
                </p>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* President's Welcome Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SlideInLeft>
              <div className="pr-0 lg:pr-8">
                <div className="w-16 h-0.5 bg-gray-900 mb-8"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-8 lg:mb-10 leading-[1.1] tracking-tight">
                  President's Welcome
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Welcome to Michigan Stocks and Bonds! My name is Elliott Nederhood and I'm 
                    currently the President of MSBO, a premier undergraduate investment club. We pride 
                    ourselves on helping members gain a comprehensive understanding of investing and 
                    prepare for both internship and full-time recruitment across a variety of fields.
                  </p>
                  <p>
                    MSBO was founded on four principles: investing, education, philanthropy, and 
                    professional development. These principles are the North Star of our organization 
                    and are evident throughout every aspect of the club.
                  </p>
                  <p>
                    For those interested in applying, I encourage you all to come to events and meet 
                    the team. We look forward to getting to know you both personally and 
                    professionally while highlighting the tight-knit community and unparalleled 
                    opportunities that the club offers.
                  </p>
                </div>
                <div className="mt-10">
                  <div className="flex items-center">
                    <div className="w-12 h-0.5 bg-gray-400 mr-6"></div>
                    <div>
                      <div className="text-lg font-medium text-gray-900">Elliott Nederhood</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">President, 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInLeft>
            <SlideInRight>
              <div>
                <div className="relative">
                  <Image
                    src="/President Headshot.webp"
                    alt="Elliott Nederhood - MSBO President"
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

      {/* Our Pillars Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-20">
              <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Our Pillars
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Four fundamental principles that serve as the North Star of our organization
              </p>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <FadeInUp delay={0}>
              <div className="group">
                <div className="relative mb-8">
                  <Image
                    src="/Investing.webp"
                    alt="Investing"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Investing</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We employ a diligent approach to generating returns on a risk-adjusted basis through 
                  an investment style relying on top-down and bottom-up fundamental analysis. Through 
                  rigorous research and sourcing of investment ideas, teams across a variety of sectors 
                  pitch their ideas to the executive board and broader club.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={100}>
              <div className="group">
                <div className="relative mb-8">
                  <Image
                    src="/Education.webp"
                    alt="Education"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Education</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We pride ourselves on our education program, teaching the most important and 
                  applicable concepts in markets and investing. New members will participate in weekly 
                  education sessions which include both academic and practical applications of topics 
                  such as Financial Markets, Fundamental Analysis, Accounting, and Valuation.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="group">
                <div className="relative mb-8">
                  <Image
                    src="/Philanthropy.webp"
                    alt="Philanthropy"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Philanthropy</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our purpose goes beyond investing. We are committed to further the betterment of 
                  the University of Michigan, Ann Arbor, and Detroit community. Whether it's 
                  volunteering at the Ronald McDonald House, teaching personal finance at Ann Arbor 
                  high schools, or raising money for charitable causes.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={300}>
              <div className="group">
                <div className="relative mb-8">
                  <Image
                    src="/Professional Dev.webp"
                    alt="Professional Development"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Professional Development</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our members go on to work at the top firms throughout the world in a variety of 
                  industries and roles. We pride ourselves on our strong alumni pipeline, exclusive 
                  speaker opportunities, and recruiting events. Additionally, new members will learn 
                  skills in crafting a resume, networking, interviewing, and more.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Sector Desks Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-20">
              <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Sector Desks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                As an analyst, you will be placed into one of eight sectors to pitch an investment idea
              </p>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { name: "Power, Utilities, & Renewables", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop&auto=format" },
              { name: "Fixed Income", image: "https://images.unsplash.com/photo-1559589689-577aabd1db4f?w=400&h=300&fit=crop&auto=format" },
              { name: "Consumer & Retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&auto=format" },
              { name: "Healthcare", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&auto=format" },
              { name: "Technology, Media, & Telecommunications", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop&auto=format" },
              { name: "Real Estate, Gaming, & Lodging", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&auto=format" },
              { name: "Industrials", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&auto=format" },
              { name: "Special Situations", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&auto=format" }
            ].map((sector, index) => (
              <FadeInUp key={sector.name} delay={index * 50}>
                <div className="group">
                  <div className="relative mb-6 overflow-hidden">
                    <Image
                      src={sector.image}
                      alt={sector.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="flex">
                    <div className="w-1 h-16 bg-gray-200 group-hover:bg-gray-900 transition-colors duration-300 mr-4 mt-2 flex-shrink-0"></div>
                    <h3 className="text-xl font-light text-gray-900 leading-tight tracking-tight group-hover:text-black transition-colors pt-2">
                      {sector.name}
                    </h3>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/MSBO 2025 Recruitment (5) (1).jpg"
            alt="Join MSBO"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <div className="w-16 h-0.5 bg-white mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Ready to Join Our Community?
            </h2>
          </FadeInUp>
          <FadeInUp delay={300}>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-light">
              Take the first step towards your career in finance. Join a community of 
              ambitious students and gain hands-on investment experience.
            </p>
          </FadeInUp>
          <FadeInUp delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/apply"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-black bg-white hover:bg-gray-100 transition-all duration-300 group"
              >
                Apply Now
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white border border-white hover:bg-white hover:text-black transition-all duration-300 group"
              >
                Contact Us
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </FadeInUp>
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
