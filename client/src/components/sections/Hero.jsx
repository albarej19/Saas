import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Browser button functions
  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh animation
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const handleClose = () => {
    // Add a subtle shake animation to indicate it's a demo
    const hero = document.querySelector('#hero-section');
    if (hero) {
      hero.classList.add('animate-pulse');
      setTimeout(() => {
        if (hero) {
          hero.classList.remove('animate-pulse');
        }
      }, 500);
    }
  };

  const handleMinimize = () => {
    // Add a subtle scale animation
    const dashboard = document.querySelector('#dashboard-preview');
    if (dashboard) {
      dashboard.style.transform = 'scale(0.95)';
      setTimeout(() => {
        if (dashboard) {
          dashboard.style.transform = 'scale(1)';
        }
      }, 300);
    }
  };

  const stats = [
    { number: "10K+", label: "Active Users", gradient: "from-blue-400 to-cyan-400" },
    { number: "300%", label: "Avg ROI", gradient: "from-purple-400 to-pink-400" },
    { number: "2.4M", label: "Revenue Generated", gradient: "from-green-400 to-emerald-400" },
    { number: "99.9%", label: "Uptime", gradient: "from-orange-400 to-red-400" }
  ];

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Gradient Background */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(79, 70, 229, 0.15), 
              rgba(147, 51, 234, 0.1), 
              transparent 50%),
            linear-gradient(135deg, 
              #0a0a0a 0%, 
              #1a1a2e 25%, 
              #16213e 50%, 
              #0f3460 75%, 
              #0a0a0a 100%)
          `
        }}
      />

      {/* Animated Mesh Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 10s ease-in-out infinite 2s' }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 12s ease-in-out infinite 4s' }} />
      </div>

      {/* Particle Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)
               `,
               backgroundSize: '50px 50px'
             }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          
          {/* Animated Badge */}
          <div className={`inline-flex items-center px-6 py-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3 animate-pulse" />
            <span className="text-sm font-medium text-white/90 tracking-wide">✨ AI-POWERED MARKETING REVOLUTION</span>
            <div className="ml-3 px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
              <span className="text-xs font-bold text-white">NEW</span>
            </div>
          </div>

          {/* Hero Headlines with Staggered Animation */}
          <div className="space-y-4 mb-8">
            <h1 className={`text-7xl md:text-9xl font-black leading-none transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              <span className="block text-white/95 tracking-tight">Transform</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Marketing
              </span>
            </h1>
            
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              <h2 className="text-4xl md:text-6xl font-bold text-white/90 tracking-tight">
                with <span className="relative">
                  AI Precision
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                </span>
              </h2>
            </div>
          </div>

          {/* Enhanced Subheadline */}
          <div className={`mb-12 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Automate content creation, optimize campaigns instantly, and{' '}
              <span className="relative text-white font-semibold">
                boost ROI by 300%
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" />
              </span>
              {' '}with our AI suite trusted by{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold">
                10,000+ brands
              </span>
            </p>
          </div>

          {/* Enhanced CTA Section */}
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-lg font-bold px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer">
              <span className="relative z-10 flex items-center">
                🚀 Start Free Trial
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group relative overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 text-white text-lg font-semibold px-12 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer">
              <span className="flex items-center">
                <div className="w-6 h-6 mr-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                Watch Demo
              </span>
            </button>
          </div>

          {/* Trust Logos with Animation */}
          <div className={`mb-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <p className="text-sm text-gray-400 mb-6 tracking-wide">TRUSTED BY INDUSTRY LEADERS</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 hover:opacity-80 transition-opacity duration-300">
              {['TechFlow', 'InnovateLab', 'GrowthCorp', 'ScaleUp', 'FutureAI'].map((company, index) => (
                <div key={company} 
                     className="backdrop-blur-sm bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                     style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}>
                  <span className="font-semibold text-gray-300 tracking-wide">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Dashboard Preview */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div id="dashboard-preview" className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 shadow-2xl transition-transform duration-300">
            {/* Enhanced Browser Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              {/* Left Side - Interactive Traffic Lights */}
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <button 
                    onClick={handleClose}
                    className="w-3.5 h-3.5 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-sm hover:scale-110 hover:shadow-md hover:from-red-300 hover:to-red-500 transition-all duration-200 cursor-pointer group"
                    title="Close (Demo Mode)"
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </button>
                  <button 
                    onClick={handleMinimize}
                    className="w-3.5 h-3.5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-sm hover:scale-110 hover:shadow-md hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 cursor-pointer group"
                    title="Minimize Dashboard"
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-2 h-0.5 bg-white rounded-full"></div>
                    </div>
                  </button>
                  <div className="w-3.5 h-3.5 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-sm hover:scale-110 transition-transform duration-200 cursor-pointer group"
                       title="Maximize (Already Maximized)">
                    <div className="w-full h-full rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-1.5 h-1.5 border border-white rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center - URL Bar */}
              <div className="flex-1 max-w-md mx-4">
                <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center">
                  <div className="w-4 h-4 mr-3 opacity-60">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="text-green-400">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300 font-mono flex-1">dashboard.admybrand.com</span>
                  <div className="w-4 h-4 ml-2 opacity-40">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Side - Interactive Browser Controls */}
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleRefresh}
                  className="w-6 h-6 backdrop-blur-sm bg-white/5 border border-white/10 rounded-md flex items-center justify-center hover:bg-white/10 transition-all duration-200 cursor-pointer group"
                  title="Refresh Dashboard"
                  disabled={isRefreshing}
                >
                  <svg className={`w-3 h-3 text-gray-400 group-hover:text-white transition-colors duration-200 ${isRefreshing ? 'animate-spin' : ''}`} 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <div className="relative">
                  <button 
                    onClick={() => setShowMenu(!showMenu)}
                    className="w-6 h-6 backdrop-blur-sm bg-white/5 border border-white/10 rounded-md flex items-center justify-center hover:bg-white/10 transition-all duration-200 cursor-pointer group"
                    title="Browser Menu"
                  >
                    <svg className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors duration-200" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {showMenu && (
                    <div className="absolute right-0 top-8 w-48 backdrop-blur-xl bg-black/80 border border-white/20 rounded-xl py-2 shadow-2xl z-50">
                      <div className="px-4 py-2 text-xs text-gray-400 border-b border-white/10">Browser Menu</div>
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/10 transition-colors duration-200">
                        📊 View Full Dashboard
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/10 transition-colors duration-200">
                        🔗 Share Dashboard
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/10 transition-colors duration-200">
                        📱 Mobile View
                      </button>
                      <div className="border-t border-white/10 mt-2">
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/10 transition-colors duration-200">
                          ⚙️ Dashboard Settings
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={stat.label} 
                     className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                     style={{ animation: `slideInUp 0.6s ease-out ${index * 0.1 + 1.4}s both` }}>
                  <div className={`text-3xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium tracking-wide">{stat.label}</div>
                  <div className={`mt-3 h-1 bg-gradient-to-r ${stat.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              ))}
            </div>

            {/* Pulse Animation for Dashboard */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 animate-pulse -z-10" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-full p-3">
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(50px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;