import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show header based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or at top - show header
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    // Track active section
    const handleSectionChange = () => {
      const sections = ['hero', 'features', 'pricing', 'testimonials', 'faq'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section === 'hero' ? 'hero-section' : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Mouse tracking for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleSectionChange, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  const navLinks = [
    { 
      href: '#features', 
      label: 'Features', 
      icon: '⚡',
      description: 'AI-powered tools'
    },
    { 
      href: '#pricing', 
      label: 'Pricing', 
      icon: '💰',
      description: 'Transparent plans'
    },
    { 
      href: '#testimonials', 
      label: 'Reviews', 
      icon: '⭐',
      description: 'Customer stories'
    },
    { 
      href: '#faq', 
      label: 'FAQ', 
      icon: '❓',
      description: 'Get answers'
    }
  ];

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        {/* Dynamic background with mouse tracking */}
        <div 
          className={`absolute inset-0 transition-all duration-700 ${
            isScrolled 
              ? 'backdrop-blur-xl bg-black/80 border-b border-white/10' 
              : 'bg-transparent'
          }`}
          style={{
            background: isScrolled 
              ? 'rgba(0,0,0,0.8)' 
              : `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.03), transparent 50%)`
          }}
        />

        {/* Animated border gradient */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-pulse" />
        )}

        <nav className="relative z-10 container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => smoothScrollTo('#hero-section')}>
              <div className="relative">
                {/* Animated logo background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-pulse" />
                
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-black text-2xl group-hover:scale-110 transition-transform duration-300">A</span>
                  
                  {/* Floating particles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
              
              <div className="hidden sm:block">
                <span className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  ADmyBRAND
                </span>
                <div className="text-xs text-gray-400 font-medium tracking-wider group-hover:text-gray-300 transition-colors duration-300">
                  AI MARKETING SUITE
                </div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace('#', '');
                
                return (
                  <div key={link.href} className="relative group">
                    <button
                      onClick={() => smoothScrollTo(link.href)}
                      className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl animate-pulse" />
                      )}
                      
                      <div className="relative z-10 flex items-center space-x-2">
                        <span className="text-lg">{link.icon}</span>
                        <span>{link.label}</span>
                      </div>
                      
                      {/* Hover tooltip */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                        <div className="backdrop-blur-xl bg-black/80 border border-white/20 rounded-lg px-3 py-2 text-sm text-gray-300 whitespace-nowrap shadow-lg">
                          {link.description}
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 border-l border-t border-white/20 rotate-45" />
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Login Button */}
              <button className="group relative overflow-hidden text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/5 cursor-pointer">
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Log In</span>
                </span>
              </button>
              
              {/* Sign Up Button */}
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 cursor-pointer">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Started</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="lg:hidden relative z-20 p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`} />
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Enhanced Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="relative z-50 flex flex-col h-full">
            {/* Spacer for header */}
            <div className="h-20" />
            
            {/* Menu Items */}
            <div className="flex-1 px-6 py-8">
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 shadow-2xl">
                
                {/* Navigation Links */}
                <div className="space-y-4 mb-8">
                  {navLinks.map((link, index) => (
                    <button
                      key={link.href}
                      onClick={() => smoothScrollTo(link.href)}
                      className="w-full group relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-4 text-left hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl">{link.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors duration-300">
                            {link.label}
                          </div>
                          <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                            {link.description}
                          </div>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Mobile CTA Buttons */}
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <button 
                    className="w-full backdrop-blur-sm bg-white/5 border border-white/10 text-white font-medium py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Log In</span>
                    </div>
                  </button>
                  
                  <button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>Get Started Free</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </button>
                </div>
                
                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <div className="text-gray-400 text-sm mb-4">Need help? Get in touch</div>
                  <div className="flex items-center justify-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">Email</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="text-sm">Chat</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </>
  );
};

export default Header;