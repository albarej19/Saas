import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url(&quot;data:image/svg+xml,%3Csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20fill='none'%20fill-rule='evenodd'%3E%3Cg%20fill='%239C92AC'%20fill-opacity='0.05'%3E%3Ccircle%20cx='30'%20cy='30'%20r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;)] opacity-30"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full glass mb-8 animate-glow">
              {/* <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-sm font-medium text-white">✨ AI-Powered</span> */}
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white">Transform Your</span>
              <span className="gradient-text block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Marketing Game
              </span>
              <span className="block text-white text-5xl md:text-6xl mt-2">with AI Precision</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              Automate content creation, optimize campaigns instantly, and 
              <span className="text-white font-medium"> boost ROI by 300%</span> with our AI suite trusted by 
              <span className="text-blue-400 font-medium"> 10,000+ brands</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <a href="#signup" className="group relative btn-primary text-lg px-10 py-5 animate-glow hover:scale-105 transition-all duration-300">
                <span className="relative z-10">🚀 Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#demo" className="group relative btn-secondary text-lg px-10 py-5 flex items-center hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col items-center space-y-4">
              <p className="text-sm text-gray-400">Trusted by leading brands worldwide</p>
              <div className="flex items-center space-x-8 opacity-60">
                {/* Mock Company Logos */}
                <div className="glass px-4 py-2 rounded-lg">
                  <span className="font-bold text-gray-300">TechCorp</span>
                </div>
                <div className="glass px-4 py-2 rounded-lg">
                  <span className="font-bold text-gray-300">InnovateLab</span>
                </div>
                <div className="glass px-4 py-2 rounded-lg">
                  <span className="font-bold text-gray-300">GrowthCo</span>
                </div>
                <div className="glass px-4 py-2 rounded-lg">
                  <span className="font-bold text-gray-300">ScaleUp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual/Mockup */}
          <div className="relative mt-16">
            <div className="glass-dark p-8 rounded-2xl max-w-4xl mx-auto animate-float">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 shadow-2xl">
                {/* Mock Dashboard Preview */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-sm text-gray-400">ADmyBRAND Dashboard</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="glass p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-300">↗ 247%</div>
                    <div className="text-sm text-gray-400">ROI Increase</div>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">$2.4M</div>
                    <div className="text-sm text-gray-400">Revenue Generated</div>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">10K+</div>
                    <div className="text-sm text-gray-400">Campaigns Optimized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;