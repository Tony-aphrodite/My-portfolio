'use client'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  role="img"
                  aria-label="Steve Chen monogram"
                  className="w-full h-full animate-fade-in"
                >
                  <defs>
                    <linearGradient id="sc-ink" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#667eea" />
                      <stop offset="100%" stopColor="#764ba2" />
                    </linearGradient>
                    <linearGradient id="sc-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#9333ea" stopOpacity="0.15" />
                    </linearGradient>
                    <radialGradient id="sc-glow" cx="50%" cy="38%" r="62%">
                      <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#0b1120" stopOpacity="0" />
                    </radialGradient>
                    {/* user-space: a horizontal line has a zero-height bbox, which degenerates
                        an objectBoundingBox gradient and leaves the rule unpainted */}
                    <linearGradient id="sc-rule" gradientUnits="userSpaceOnUse" x1="150" y1="253" x2="250" y2="253">
                      <stop offset="0%" stopColor="#667eea" stopOpacity="0.15" />
                      <stop offset="50%" stopColor="#8b7ce8" />
                      <stop offset="100%" stopColor="#764ba2" stopOpacity="0.15" />
                    </linearGradient>
                    <path id="sc-arc" d="M 50 200 A 150 150 0 0 0 350 200" fill="none" />
                  </defs>

                  <circle cx="200" cy="200" r="200" fill="#0f172a" />
                  <circle cx="200" cy="200" r="200" fill="url(#sc-glow)" />
                  <circle cx="200" cy="200" r="189" fill="none" stroke="url(#sc-ring)" strokeWidth="1.5" />
                  <circle
                    cx="200"
                    cy="200"
                    r="171"
                    fill="none"
                    stroke="url(#sc-ring)"
                    strokeWidth="1"
                    strokeDasharray="2 9"
                    opacity="0.65"
                  />

                  {/* Initials built from the name */}
                  <text
                    x="200"
                    y="178"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize="146"
                    fontWeight="800"
                    letterSpacing="-2"
                    fill="url(#sc-ink)"
                  >
                    SC
                  </text>

                  <line x1="150" y1="253" x2="250" y2="253" stroke="url(#sc-rule)" strokeWidth="2" />

                  {/* Full name arced along the lower edge */}
                  <text
                    fontSize="19"
                    fontWeight="600"
                    letterSpacing="6.5"
                    fill="#94a3b8"
                  >
                    <textPath href="#sc-arc" startOffset="50%" textAnchor="middle">
                      STEVE CHEN
                    </textPath>
                  </text>

                  <circle cx="200" cy="285" r="3" fill="#a78bfa" />
                </svg>
              </div>
            </div>
            
            {/* Floating elements around photo */}
            <div className="absolute top-10 -right-5 w-20 h-20 bg-indigo-600/20 rounded-lg rotate-12 blur-sm"></div>
            <div className="absolute bottom-10 -left-5 w-16 h-16 bg-purple-600/20 rounded-full blur-sm"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Hello! I&apos;m Steve Chen
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a passionate full-stack developer with expertise in web and mobile application development. 
                  I love creating digital experiences that are not only functional but also beautiful and intuitive.
                </p>
                <p>
                  With years of experience in modern technologies, I specialize in building scalable applications 
                  using React, Next.js, Node.js, and various other cutting-edge tools. I&apos;m always eager to learn 
                  new technologies and take on challenging projects.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 card-hover">
                <h4 className="text-3xl font-bold gradient-text mb-2">50+</h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 card-hover">
                <h4 className="text-3xl font-bold gradient-text mb-2">5+</h4>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-6">
              <button className="px-6 py-3 bg-gray-900 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 font-semibold">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About