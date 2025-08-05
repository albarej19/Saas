import React, { useState, useEffect, useRef } from 'react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [visibleFeatures, setVisibleFeatures] = useState(new Set());
  const sectionRef = useRef(null);

  const features = [
    {
      icon: '🤖',
      title: 'AI Content Generation',
      description: 'Generate high-converting ad copy, social media posts, and email campaigns in seconds using advanced GPT-4 technology.',
      gradient: 'from-blue-500 to-cyan-500',
      metrics: { speed: '10x faster', quality: '95% accuracy', output: '1000+ pieces/day' },
      demo: '✨ "Transform your boring product into must-have solution..."'
    },
    {
      icon: '📊',
      title: 'Smart Analytics Dashboard',
      description: 'Real-time insights with predictive analytics that help you make data-driven decisions and optimize performance.',
      gradient: 'from-purple-500 to-pink-500',
      metrics: { insights: '50+ KPIs', prediction: '94% accuracy', savings: '15hrs/week' },
      demo: '📈 ROI increased by 247% this month'
    },
    {
      icon: '🎯',
      title: 'Automated A/B Testing',
      description: 'Set up intelligent split tests that automatically optimize for your best-performing variants and maximize conversions.',
      gradient: 'from-green-500 to-teal-500',
      metrics: { tests: 'Unlimited', optimization: 'Real-time', improvement: '+185% CTR' },
      demo: '🏆 Variant B is winning with 34% higher conversion'
    },
    {
      icon: '🎪',
      title: 'Predictive Audience Targeting',
      description: 'AI-powered audience segmentation that identifies your highest-value prospects before your competitors do.',
      gradient: 'from-orange-500 to-red-500',
      metrics: { accuracy: '96% match', reach: '2M+ profiles', conversion: '+340% ROAS' },
      demo: '🔮 Found 12,847 high-intent prospects in your niche'
    },
    {
      icon: '⚡',
      title: 'Real-time Optimization',
      description: 'Campaigns that self-optimize based on performance data, automatically adjusting bids, targeting, and creative elements.',
      gradient: 'from-indigo-500 to-purple-500',
      metrics: { speed: '0.2s response', adjustments: '24/7 active', efficiency: '+280% ROI' },
      demo: '⚡ Auto-adjusted bid from $2.40 to $1.85 (+23% profit)'
    },
    {
      icon: '🌐',
      title: 'Multi-channel Management',
      description: 'Manage Facebook, Google, LinkedIn, TikTok, and more from one unified dashboard with cross-platform insights.',
      gradient: 'from-pink-500 to-rose-500',
      metrics: { platforms: '15+ channels', sync: 'Real-time', management: '80% time saved' },
      demo: '🔄 Synced campaign across 8 platforms in 3 seconds'
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleFeatures(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const featureElements = sectionRef.current?.querySelectorAll('[data-index]');
    featureElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 15s ease-in-out infinite' }} />
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-r from-green-500/15 to-cyan-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 18s ease-in-out infinite 3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 20s ease-in-out infinite 6s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse" />
            <span className="text-sm font-semibold text-white/90 tracking-wide">✨ POWERFUL FEATURES</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block text-white/95">Everything You Need to</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dominate Your Market
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Our AI-powered suite combines cutting-edge technology with proven marketing strategies 
            to deliver results that traditional tools simply{' '}
            <span className="relative text-white font-semibold">
              can't match
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
            </span>
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative transition-all duration-700 ${
                visibleFeatures.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Glowing Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />
              
              {/* Main Card */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:scale-105 group-hover:shadow-2xl">
                
                {/* Animated Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} p-0.5 group-hover:scale-110 transition-all duration-500 group-hover:rotate-3`}>
                    <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-500">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </span>
                    </div>
                  </div>
                  
                  {/* Floating Metrics Badge */}
                  {hoveredFeature === index && (
                    <div className="absolute -top-2 -right-2 backdrop-blur-xl bg-black/80 border border-white/20 rounded-lg px-3 py-1 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="text-xs text-green-400 font-mono">
                        {Object.values(feature.metrics)[0]}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-500">
                  {feature.description}
                </p>

                {/* Demo Preview */}
                <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl p-4 mb-6 group-hover:bg-black/40 group-hover:border-white/20 transition-all duration-500">
                  <div className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature.demo}
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {Object.entries(feature.metrics).map(([key, value], metricIndex) => (
                    <div key={key} 
                         className="text-center backdrop-blur-sm bg-white/5 rounded-lg py-2 group-hover:bg-white/10 transition-all duration-500"
                         style={{ transitionDelay: `${metricIndex * 100}ms` }}>
                      <div className={`text-sm font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Interactive Arrow */}
                <div className="flex items-center justify-between">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 cursor-pointer">
                    <div className="flex items-center text-blue-400 font-medium text-sm">
                      <span>Explore Feature</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Feature Number */}
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white text-sm font-bold opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                    {index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 text-center">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl animate-pulse" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to see these features in{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  action?
                </span>
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of marketers who've already transformed their campaigns with AI
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-lg font-bold px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer">
                  <span className="relative z-10 flex items-center">
                    🚀 Start Your Free Trial
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                
                <button className="group backdrop-blur-xl bg-white/10 border border-white/20 text-white text-lg font-semibold px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer">
                  <span className="flex items-center">
                    📅 Schedule Demo
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(3deg); }
        }
        
        @keyframes animate-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in { animation: animate-in 0.3s ease-out; }
        .slide-in-from-top-2 { animation: animate-in 0.3s ease-out; }
      `}</style>
    </section>
  );
};

export default Features;