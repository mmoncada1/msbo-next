import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { FadeInUp } from "@/components/ScrollAnimations";

export default function Team() {
  const executiveBoard = [
    {
      name: "Elliott Nederhood",
      position: "President",
      email: "ened@umich.edu",
      linkedin: "https://www.linkedin.com/in/elliott-nederhood/",
      image: "/President Headshot.webp",
      bio: "Elliott is a junior from Detroit, Michigan majoring in Business Administration and minoring in Philosophy. On campus, he is involved in Michigan Private Equity & Venture Capital and Alpha Kappa Psi. This past summer, he interned at Province, a strategic advisory firm based in Las Vegas. This upcoming summer, Elliott will join Lazard in New York as an Investment Banking Summer Analyst. In his free time, he enjoys golfing, running, watching movies, and reading."
    },
    {
      name: "Zoya Makkar",
      position: "VP of Internal Relations",
      email: "zmakkar@umich.edu",
      linkedin: "https://www.linkedin.com/in/zoya-makkar/",
      image: "/cropped-Zoya-Makkar-Headshot.webp",
      bio: "Zoya is a junior from Dallas, Texas majoring in Business Administration with minors in Religion and Entrepreneurship. On campus, she is involved in Alpha Kappa Psi and Atlas Consulting. This past summer, she interned at Prudential PGIM in Dallas, TX as a Private Credit Analyst. This upcoming summer, Zoya will join TD Securities in New York as an Investment Banking Summer Analyst. In her free time, she enjoys going on runs, thrifting, and making matcha lattes."
    },
    {
      name: "Kiran Shah",
      position: "VP of External Relations",
      email: "kirshah@umich.edu",
      linkedin: "https://www.linkedin.com/in/kiranpshah/",
      image: "/kiran-shah.webp",
      bio: "Kiran is a junior from West Windsor, New Jersey majoring in Economics. On campus, he is involved in Sigma Chi. This past summer, he interned at J.F. Lehman & Co. as a Private Equity Summer Analyst. This upcoming summer, Kiran will join RBC in New York as an Investment Banking Summer Analyst. In his free time, he enjoys golfing, cooking, watching soccer, and spending time at the beach."
    },
    {
      name: "Benson Klein",
      position: "VP of Investments",
      email: "bensonn@umich.edu",
      linkedin: "https://www.linkedin.com/in/benson-klein/",
      image: "/benson-klein.webp",
      bio: "Benson is a junior from Los Angeles, California majoring in Economics and minoring in Art History. On campus, he is involved in Alpha Kappa Psi, Wolverine Capital Investments, and The Side Door. This past summer, he worked at Les Belles Perdrix in Bordeaux, France. This upcoming summer, Benson will join Moelis & Co. in New York as an Investment Banking Summer Analyst. In his free time, he enjoys cooking, skiing, and reading."
    },
    {
      name: "Olivia Suh",
      position: "VP of Recruitment",
      email: "osuh@umich.edu",
      linkedin: "https://www.linkedin.com/in/oliviasuh/",
      image: "/olivia-suh.webp",
      bio: "Olivia is a junior from Los Angeles, California majoring in Cognitive Science and minoring in UX Design. On campus, she is involved in Michigan Innovative Marketing, Kappa Phi Lambda, and Korea Leadership Group. This past summer, she interned as a Marketing Manager for Havenly Ventures. In her free time, she loves reading, playing volleyball, learning new languages, and traveling."
    },
    {
      name: "Kaan Lacin",
      position: "VP of Professional Development",
      email: "klacin@umich.edu",
      linkedin: "https://www.linkedin.com/in/kaan-lacin/",
      image: "/kaan-lacin.webp",
      bio: "Kaan is a junior from Ann Arbor, Michigan majoring in Business Administration. On campus, he is involved in Phi Gamma Nu, Michigan Private Credit Group, and Futsal Club. This past summer, he interned for The Kraft Heinz Company in Chicago, Illinois. This upcoming summer, Kaan will join Ares Management in New York as a Summer Analyst in their U.S. Direct Lending Group. In his free time, he enjoys playing soccer, reading fantasy books, and cheering on his favorite sports team, Galatasaray."
    },
    {
      name: "Jared Goodman",
      position: "Co-VP of Education",
      email: "jgoodm@umich.edu",
      linkedin: "https://www.linkedin.com/in/jared-goodman1/",
      image: "/jared-goodman.webp",
      bio: "Jared is a junior from Marlboro, New Jersey majoring in Economics and minoring in Statistics. On campus, he is involved in Michigan Investment Banking Club and TAMID Group. This past summer, he interned for Marula Capital. This upcoming summer, Jared will join Guggenheim Securities in New York as an Investment Banking Summer Analyst. In his free time, he enjoys watching college basketball, golfing, and spending time with family and friends."
    },
    {
      name: "Drew Mleczko",
      position: "Co-VP of Education",
      email: "amleczko@umich.edu",
      linkedin: "https://www.linkedin.com/in/drewmleczko/",
      image: "/drew-mleczko.webp",
      bio: "Drew is a junior from Royal Oak, Michigan majoring in Business Administration and minoring in International Studies. On campus, he is involved in Global Investments Committee and Michigan Private Equity & Venture Capital. This past summer, he interned for Amherst Partners, a middle market investment bank in Birmingham, Michigan. This upcoming summer, Drew will join TD Securities in New York as an Investment Banking Summer Analyst In his free time, he enjoys playing golf, cooking, and spending time with family and friends."
    }
  ];

  const analysts2026 = [
    "Aanya Gupta", "Adam Fischer", "Quinn Cassar", "Collin Krueger", "Ethan Marcus",
    "George Perkins", "Grant Moorhead", "Sam Huntley", "Jing Li", "Simran Kalra",
    "Kyra Santhana", "Leila Kezelman", "Lucas Feller", "Matthew Macauley", "Praveena Mohanraj",
    "Alex Moon", "Prah Pant", "Shreya Bhargava", "Shreyul Patel", "Siri Pattipati",
    "Vedika Narla", "Victoria van Woerkom", "Victoria Ivanoff", "John Wang", "Will Xiao",
    "Zachary Hart", "Zach Post"
  ];

  const analysts2027 = [
    "Aadit Jain", "Aadit Bhavsar", "Kaan Lacin", "Max Arzt", "Nihar Mothikuru",
    "Olivia (Livvie) Suh", "Zoya Makkar", "Levi Kaplan", "Adélaïde Sainte-Rose", "Jared Goodman",
    "Angeni Kabilan", "Alison Jiang", "Benson Klein", "Ethan Axelrod", "Luca Harmenil",
    "Elliott Nederhood", "Amani Khan", "Laura Schloegl", "Nikita Grigoryev", "Drew Mleczko",
    "Sawyer Golub", "Joseph Ounsley", "Kiran Shah"
  ];

  const analysts2028 = [
    "Harry Shaevsky", "Sebastian Dubey", "Anika Parthiban", "Avi Shah", "Ishan Dixit",
    "Leah Kang", "Lily Pine", "Arav Rajesh", "Sloan Steinberg", "Meaghan Lu",
    "Ian Weinberg", "Henry Balasia", "Luke Scheible", "Brooklyn Ugorowski", "Sarah Sinoimeri",
    "Nicholas Asmar", "Benjamin Ladetsky", "Ash Abrahamson", "Tommy Cavanaugh", "Noah Finkelstein",
    "Saanvi Jingilipalem", "Ayaan Sheikh", "Natalia Dyszkiewicz", "Charlie Beard", "Molly Burke",
    "Alisha Tercius"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Citadel Style */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/MSBO 2025 Recruitment (4) (1).jpg"
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
                  Our<br />
                  <span className="font-normal">Team</span>
                </h1>
              </FadeInUp>
              <FadeInUp delay={300}>
                <div className="w-24 h-0.5 bg-white mb-8"></div>
              </FadeInUp>
              <FadeInUp delay={600}>
                <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl leading-relaxed font-light">
                  Meet the exceptional leaders and dedicated analysts who drive MSBO&apos;s success 
                  and embody our commitment to excellence in investment education.
                </p>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Board Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-20">
              <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                2025 Executive Board
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The leadership team guiding MSBO&apos;s strategic direction and organizational excellence
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {executiveBoard.map((member, index) => (
              <FadeInUp key={member.name} delay={index * 100}>
                <div className="group">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                    <div className="md:col-span-2">
                      <div className="relative aspect-[4/5] overflow-hidden mb-6">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <div className="flex items-center mb-4">
                        <div className="w-1 h-12 bg-gray-200 group-hover:bg-gray-900 transition-colors duration-300 mr-4 flex-shrink-0"></div>
                        <div>
                          <h3 className="text-2xl font-light text-gray-900 mb-1 tracking-tight group-hover:text-black transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-gray-600 font-medium tracking-wide uppercase text-sm">
                            {member.position}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6 hyphens-none break-words">
                        {member.bio}
                      </p>
                      <div className="flex space-x-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center text-gray-900 hover:text-black transition-colors"
                          title="Email"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-900 hover:text-black transition-colors"
                          title="LinkedIn"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Analysts Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-20">
              <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Our Investment Analysts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Talented students driving investment research and analysis across our sector desks
              </p>
            </div>
          </FadeInUp>

          {/* Class of 2026 */}
          <div className="mb-16">
            <FadeInUp>
              <div className="flex items-center mb-8">
                <div className="w-1 h-12 bg-gray-900 mr-6"></div>
                <h3 className="text-3xl font-light text-gray-900 tracking-tight">Class of 2026</h3>
              </div>
            </FadeInUp>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {analysts2026.map((name, index) => (
                <FadeInUp key={name} delay={index * 25}>
                  <div className="text-center p-4 bg-white hover:bg-gray-50 transition-colors duration-200">
                    <p className="text-gray-900 font-medium">{name}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>

          {/* Class of 2027 */}
          <div className="mb-16">
            <FadeInUp>
              <div className="flex items-center mb-8">
                <div className="w-1 h-12 bg-gray-900 mr-6"></div>
                <h3 className="text-3xl font-light text-gray-900 tracking-tight">Class of 2027</h3>
              </div>
            </FadeInUp>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {analysts2027.map((name, index) => (
                <FadeInUp key={name} delay={index * 25}>
                  <div className="text-center p-4 bg-white hover:bg-gray-50 transition-colors duration-200">
                    <p className="text-gray-900 font-medium">{name}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>

          {/* Class of 2028 */}
          <div>
            <FadeInUp>
              <div className="flex items-center mb-8">
                <div className="w-1 h-12 bg-gray-900 mr-6"></div>
                <h3 className="text-3xl font-light text-gray-900 tracking-tight">Class of 2028</h3>
              </div>
            </FadeInUp>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {analysts2028.map((name, index) => (
                <FadeInUp key={name} delay={index * 25}>
                  <div className="text-center p-4 bg-white hover:bg-gray-50 transition-colors duration-200">
                    <p className="text-gray-900 font-medium">{name}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/MSBO 2025 Recruitment (6).jpg"
            alt="Join MSBO"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <div className="w-16 h-0.5 bg-white mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Ready to Join Our Team?
            </h2>
          </FadeInUp>
          <FadeInUp delay={300}>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-light">
              Become part of Michigan&apos;s premier investment organization and develop 
              skills that will define your career in finance.
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
                href="/about"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white border border-white hover:bg-white hover:text-black transition-all duration-300 group"
              >
                Learn More
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
