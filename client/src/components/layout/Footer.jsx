import React, { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const footerRef = useRef(null);

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features', icon: '⚡' },
      { name: 'Pricing', href: '#pricing', icon: '💰' },
      { name: 'Integrations', href: '#integrations', icon: '🔗' },
      { name: 'API Documentation', href: '#api', icon: '📚' },
      { name: 'Changelog', href: '#changelog', icon: '📝' }
    ],
    company: [
      { name: 'About Us', href: '#about', icon: '🏢' },
      { name: 'Careers', href: '#careers', icon: '💼' },
      { name: 'Press Kit', href: '#press', icon: '📰' },
      { name: 'Contact', href: '#contact', icon: '📧' },
      { name: 'Partners', href: '#partners', icon: '🤝' }
    ],
    resources: [
      { name: 'Blog', href: '#blog', icon: '✍️' },
      { name: 'Help Center', href: '#help', icon: '🆘' },
      { name: 'Video Tutorials', href: '#tutorials', icon: '🎥' },
      { name: 'Case Studies', href: '#cases', icon: '📊' },
      { name: 'Webinars', href: '#webinars', icon: '🎤' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy', icon: '🔒' },
      { name: 'Terms of Service', href: '#terms', icon: '📋' },
      { name: 'Cookie Policy', href: '#cookies', icon: '🍪' },
      { name: 'GDPR', href: '#gdpr', icon: '🛡️' },
      { name: 'Security', href: '#security', icon: '🔐' }
    ]
  };

  const socialLinks = [
    {
      name: 'Twitter',
      href: '#twitter',
      color: 'from-blue-400 to-cyan-400',
      hoverColor: 'hover:shadow-blue-500/25',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: '#linkedin',
      color: 'from-blue-600 to-blue-500',
      hoverColor: 'hover:shadow-blue-600/25',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#youtube',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:shadow-red-500/25',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: '#github',
      color: 'from-gray-400 to-gray-600',
      hoverColor: 'hover:shadow-gray-500/25',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'Discord',
      href: '#discord',
      color: 'from-indigo-500 to-purple-600',
      hoverColor: 'hover:shadow-indigo-500/25',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0188 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/>
        </svg>
      )
    }
  ];

  const achievements = [
    { icon: '🚀', label: 'Fastest Growing AI Marketing Platform' },
    { icon: '🏆', label: 'Best AI Tool 2024 - TechCrunch' },
    { icon: '⭐', label: '4.9/5 Rating - 10K+ Reviews' },
    { icon: '🔒', label: 'SOC 2 Type II Certified' }
  ];

  const stats = [
    { number: '10K+', label: 'Happy Customers', icon: '👥' },
    { number: '50M+', label: 'Content Pieces Generated', icon: '📝' },
    { number: '300%', label: 'Average ROI Increase', icon: '📈' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: '⚡' }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSections(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = footerRef.current?.querySelectorAll('[data-index]');
    sections?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="relative overflow-hidden" ref={footerRef}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-gray-800"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 25s ease-in-out infinite' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 30s ease-in-out infinite 5s' }} />
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/6 to-purple-500/6 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 35s ease-in-out infinite 10s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} />
      </div>

      <div className="relative z-10">
        {/* Stats Section */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-6 py-16">
            <div 
              className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${
                visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-index="0"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} 
                     className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
                     style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            
            {/* Enhanced Brand Section */}
            <div 
              className={`lg:col-span-2 transition-all duration-700 delay-200 ${
                visibleSections.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-index="1"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6 group cursor-pointer" onClick={() => smoothScrollTo('#hero-section')}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-pulse" />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110">
                    <span className="text-white font-black text-2xl">A</span>
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    ADmyBRAND
                  </span>
                  <div className="text-xs text-gray-400 font-medium tracking-wider">AI MARKETING SUITE</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                Transform your marketing with AI-powered precision. Join{' '}
                <span className="text-white font-semibold">10,000+ brands</span>{' '}
                using our cutting-edge AI suite to automate campaigns and{' '}
                <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text font-semibold">
                  boost ROI by 300%
                </span>.
              </p>
              
              {/* Achievements */}
              <div className="space-y-3 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={achievement.label} 
                       className="flex items-center space-x-3 text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300"
                       style={{ animationDelay: `${index * 100}ms` }}>
                    <span className="text-lg">{achievement.icon}</span>
                    <span>{achievement.label}</span>
                  </div>
                ))}
              </div>
              
              {/* Enhanced Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`group relative w-12 h-12 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 ${social.hoverColor}`}
                    aria-label={social.name}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${social.color} rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm`} />
                    <div className="relative z-10">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Link Sections */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <div key={category} 
                   className={`transition-all duration-700 ${
                     visibleSections.has(categoryIndex + 2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                   }`}
                   data-index={categoryIndex + 2}
                   style={{ transitionDelay: `${(categoryIndex + 1) * 200}ms` }}>
                <h3 className="text-white font-bold text-lg mb-6 capitalize relative">
                  {category}
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                </h3>
                <ul className="space-y-4">
                  {links.map((link, linkIndex) => (
                    <li key={link.name}>
                      <button
                        onClick={() => smoothScrollTo(link.href)}
                        className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 cursor-pointer"
                        style={{ animationDelay: `${linkIndex * 50}ms` }}
                      >
                        <span className="text-sm group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                        <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {link.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-12">
            <div 
              className={`backdrop-blur-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-700 ${
                visibleSections.has(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-index="6"
            >
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay ahead with{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AI insights
                  </span>
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get weekly tips, case studies, and feature updates delivered to your inbox. 
                  Join 50,000+ marketers who trust our insights.
                </p>
                
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-6 py-4 rounded-xl bg-black/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      required
                    />
                    <div className="absolute inset-y-0 right-4 flex items-center">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || isSubscribed}
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      {isLoading ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          <span>Subscribing...</span>
                        </>
                      ) : isSubscribed ? (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Subscribed!</span>
                        </>
                      ) : (
                        <>
                          <span>Subscribe</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </form>
                
                <p className="text-sm text-gray-400">
                  No spam, unsubscribe at any time. Read our{' '}
                  <button onClick={() => smoothScrollTo('#privacy')} className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer">
                    privacy policy
                  </button>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-8">
            <div 
              className={`transition-all duration-700 ${
                visibleSections.has(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-index="7"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                
                {/* Left Side - Copyright & Status */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                  <p className="text-gray-400 text-sm text-center md:text-left">
                    © 2025 ADmyBRAND. All rights reserved.
                  </p>
                  
                  {/* Status Indicators */}
                  <div className="flex items-center space-x-6 text-xs text-gray-500">
                    <div className="flex items-center space-x-2 group cursor-pointer">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-gray-400 transition-colors duration-300">All systems operational</span>
                    </div>
                    <span className="hidden md:inline">•</span>
                    <div className="flex items-center space-x-2 group cursor-pointer">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-gray-400 transition-colors duration-300">99.9% uptime</span>
                    </div>
                    <span className="hidden md:inline">•</span>
                    <div className="flex items-center space-x-2 group cursor-pointer">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="group-hover:text-gray-400 transition-colors duration-300">SOC 2 certified</span>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Made with Love & Quick Links */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                  {/* Quick Actions */}
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => smoothScrollTo('#hero-section')}
                      className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer"
                    >
                      <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      <span className="text-sm">Back to top</span>
                    </button>
                  </div>
                  
                  {/* Made with Love */}
                  {/* <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <span>Made with</span>
                    <span className="text-red-400 animate-pulse text-lg">❤️</span>
                    <span>for</span>
                    <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold">
                      marketers
                    </span>
                  </div> */}
                </div>
              </div>
              
              {/* Additional Footer Info */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                  
                  {/* Left - Legal Links */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-500">
                    {['Terms', 'Privacy', 'Cookies', 'Security'].map((item, index) => (
                      <button
                        key={item}
                        onClick={() => smoothScrollTo(`#${item.toLowerCase()}`)}
                        className="hover:text-gray-400 transition-colors duration-300 relative group cursor-pointer"
                      >
                        {item}
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    ))}
                  </div>
                  
                  {/* Right - Version & Build Info */}
                  <div className="flex items-center space-x-4 text-xs text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                      <span>v2.1.0</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-2">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>API v3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(2deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;