import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // This one is for tracking which section is active
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effects 
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Make header background appear when scrolling
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hide header when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // close menu when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    // Track which section is currently visible 
    const checkActiveSection = () => {
      const sections = ['hero', 'features', 'pricing', 'testimonials', 'faq'];
      
      for (let i = 0; i < sections.length; i++) {
        const sectionName = sections[i];
        let elementId = sectionName;
        
        if (sectionName === 'hero') {
          elementId = 'hero-section'; // different id for hero
        }
        
        const element = document.getElementById(elementId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionName);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', checkActiveSection);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', checkActiveSection);
    };
  }, [lastScrollY]);

  // Navigation items
  const navigationItems = [
    { 
      href: '#features', 
      label: 'Features', 
      icon: '⚡'
    },
    { 
      href: '#pricing', 
      label: 'Pricing', 
      icon: '💰'
    },
    { 
      href: '#testimonials', 
      label: 'Reviews', 
      icon: '⭐'
    },
    { 
      href: '#faq', 
      label: 'FAQ', 
      icon: '❓'
    }
  ];

  // Smooth scroll function 
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false); // close mobile menu after clicking
  };

  const scrollToTop = () => {
    scrollToSection('#hero-section');
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        {/* Background with blur effect */}
        <div 
          className={`absolute inset-0 transition-all duration-700 ${
            isScrolled 
              ? 'backdrop-blur-xl bg-black/80 border-b border-white/10' 
              : 'bg-transparent'
          }`}
        />

        {/* animated border at bottom */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        )}

        <nav className="relative z-10 container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={scrollToTop}>
              <div className="relative">
                
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-black text-2xl">A</span>
                </div>
              </div>
              
              {/* Brand text - hidden on small screens */}
              <div className="hidden sm:block">
                <span className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  ADmyBRAND
                </span>
                <div className="text-xs text-gray-400 font-medium tracking-wider">
                  AI MARKETING SUITE
                </div>
              </div>
            </div>

            {/* Desktop navigation - only show on large screens */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((link, index) => {
                const isActive = activeSection === link.href.replace('#', '');
                
                return (
                  <div key={link.href} className="relative">
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {/* Active state background */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl" />
                      )}
                      
                      <div className="relative z-10 flex items-center space-x-2">
                        <span className="text-lg">{link.icon}</span>
                        <span>{link.label}</span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* CTA buttons for desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Login button - simple style */}
              <button className="text-gray-300 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/5 cursor-pointer">
                <span className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Log In</span>
                </span>
              </button>
              
              {/* Sign up button with gradient - mobile friendly */}
              <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer touch-manipulation min-h-[44px]">
                <span className="flex items-center space-x-2">
                  <span>Get Started</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden relative p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer min-w-[48px] min-h-[48px] touch-manipulation"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative mx-auto">
                {/* Hamburger lines transform to X*/}
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

                  {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Dark backdrop - tap to close */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu content - better positioning for mobile */}
          <div className="relative z-50 flex flex-col h-full overflow-y-auto">
            {/* Space for fixed header */}
            <div className="h-20 flex-shrink-0" />
          
            <div className="flex-1 px-4 py-6 min-h-0">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 max-w-sm mx-auto">
                
                {/* Navigation links - mobile optimized */}
                <div className="space-y-3 mb-6">
                  {navigationItems.map((link, index) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-left hover:bg-white/10 active:bg-white/15 transition-all duration-200 cursor-pointer touch-manipulation"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">{link.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-semibold text-base truncate">
                            {link.label}
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Mobile CTA buttons - better touch targets */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                  <button 
                    className="w-full bg-white/5 border border-white/10 text-white font-medium py-4 rounded-xl hover:bg-white/10 active:bg-white/15 transition-all duration-200 cursor-pointer touch-manipulation min-h-[48px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Log In</span>
                    </div>
                  </button>
                  
                  <button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer touch-manipulation min-h-[48px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>Get Started Free</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </button>
                </div>
                
                {/* Mobile contact info */}
                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <div className="text-gray-400 text-sm mb-3">Need help?</div>
                  <div className="flex items-center justify-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-200 text-sm cursor-pointer touch-manipulation">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Email</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-200 text-sm cursor-pointer touch-manipulation">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>Chat</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-8 flex-shrink-0" />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
