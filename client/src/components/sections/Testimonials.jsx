import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleStats, setVisibleStats] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      avatar: '👩‍💼',
      location: 'San Francisco, CA',
      companySize: '500+ employees',
      rating: 5,
      text: 'ADmyBRAND completely transformed our marketing workflow. We went from spending 20 hours a week on content creation to just 2 hours, while our conversion rates skyrocketed by 340%. The AI understands our brand voice perfectly and generates content that our customers actually engage with.',
      metrics: {
        roi: '+340%',
        timeSaved: '18hrs/week', 
        revenue: '$2.1M',
        period: '6 months'
      },
      highlight: 'Reduced content creation time by 90%',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder & CEO',
      company: 'GrowthLab',
      avatar: '👨‍💻',
      location: 'Austin, TX',
      companySize: 'Startup',
      rating: 5,
      text: 'The predictive analytics feature is absolutely game-changing. We can now identify high-value customers before our competitors even know they exist. Our customer acquisition cost dropped by 60% while our lifetime value increased by 280%. This platform pays for itself within weeks.',
      metrics: {
        roi: '+280%',
        timeSaved: '25hrs/week',
        revenue: '$1.8M',
        period: '4 months'
      },
      highlight: 'Identified 12,000+ high-intent prospects',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Jennifer Walsh',
      role: 'VP of Marketing',
      company: 'ScaleUp Solutions',
      avatar: '👩‍🚀',
      location: 'New York, NY',
      companySize: '1000+ employees',
      rating: 5,
      text: 'Our team was initially skeptical about AI marketing tools, but ADmyBRAND proved us completely wrong. The quality of generated content is indistinguishable from our best copywriters, and it never gets tired or needs coffee breaks. Our campaign performance improved across all channels.',
      metrics: {
        roi: '+425%',
        timeSaved: '30hrs/week',
        revenue: '$3.2M',
        period: '8 months'
      },
      highlight: 'Content quality matches top copywriters',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'David Park',
      role: 'Growth Marketing Lead',
      company: 'InnovateCorp',
      avatar: '👨‍🎯',
      location: 'Seattle, WA',
      companySize: '250+ employees',
      rating: 5,
      text: 'The multi-channel automation is phenomenal. We manage campaigns across 8 platforms effortlessly, and the AI optimizes everything in real-time. Our ROAS improved by 300% while we actually reduced our ad spend. The cross-platform insights are incredibly valuable.',
      metrics: {
        roi: '+300%',
        timeSaved: '22hrs/week',
        revenue: '$1.6M',
        period: '5 months'
      },
      highlight: 'Manages 8 platforms simultaneously',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Lisa Thompson',
      role: 'Digital Marketing Manager',
      company: 'FutureMedia',
      avatar: '👩‍💻',
      location: 'Los Angeles, CA',
      companySize: '150+ employees',
      rating: 5,
      text: 'I was drowning in repetitive marketing tasks before ADmyBRAND. Now I focus on strategy while the AI handles execution flawlessly. My productivity increased dramatically, and our results speak for themselves. The learning curve was surprisingly smooth too.',
      metrics: {
        roi: '+380%',
        timeSaved: '28hrs/week',
        revenue: '$2.7M',
        period: '7 months'
      },
      highlight: 'Focus shifted from tasks to strategy',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const overallStats = [
    { number: "10K+", label: "Happy Customers", icon: "👥", gradient: "from-blue-400 to-cyan-400" },
    { number: "300%", label: "Avg ROI Increase", icon: "📈", gradient: "from-green-400 to-emerald-400" },
    { number: "$2.1M", label: "Avg Revenue Generated", icon: "💰", gradient: "from-yellow-400 to-orange-400" },
    { number: "24hrs", label: "Avg Time Saved/Week", icon: "⏰", gradient: "from-purple-400 to-pink-400" }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    
    return () => clearInterval(timer);
  }, [testimonials.length, isAutoPlaying]);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStats(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 25s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/12 to-cyan-500/12 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 30s ease-in-out infinite 5s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 35s ease-in-out infinite 10s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-white/10 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3 animate-pulse" />
            <span className="text-sm font-semibold text-white/90 tracking-wide">💬 CUSTOMER STORIES</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block text-white/95">Loved by</span>
            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              10,000+ Marketers
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            See how leading brands are transforming their marketing with AI and achieving{' '}
            <span className="relative text-white font-semibold">
              remarkable results
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full" />
            </span>
          </p>
        </div>

        {/* Enhanced Main Testimonial Card */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-12 transition-all duration-500">
            {/* Glowing Border Effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${currentTestimonial.gradient} rounded-3xl opacity-20 blur-sm animate-pulse`} />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                {/* Company Info Bar */}
                <div className="flex items-center justify-between mb-6 p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentTestimonial.gradient} animate-pulse`} />
                    <span className="text-white font-semibold">{currentTestimonial.company}</span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm">{currentTestimonial.companySize}</span>
                  </div>
                  <div className="text-gray-400 text-sm">{currentTestimonial.location}</div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-3 text-gray-400 text-sm">Verified Customer</span>
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 font-light relative">
                  <span className="text-4xl text-purple-400 absolute -top-2 -left-2 opacity-50">"</span>
                  {currentTestimonial.text}
                  <span className="text-4xl text-purple-400 opacity-50">"</span>
                </blockquote>

                {/* Highlight */}
                <div className="backdrop-blur-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse" />
                    <span className="text-purple-200 font-medium">{currentTestimonial.highlight}</span>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentTestimonial.gradient} flex items-center justify-center text-3xl shadow-lg`}>
                    {currentTestimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-gray-400">
                      {currentTestimonial.role}
                    </div>
                    <div className="text-gray-500 text-sm">
                      Customer for {currentTestimonial.metrics.period}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Metrics Panel */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <h4 className="text-lg font-bold text-white mb-6 text-center">Results Achieved</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(currentTestimonial.metrics).slice(0, 3).map(([key, value], index) => (
                      <div key={key} 
                           className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105"
                           style={{ animationDelay: `${index * 100}ms` }}>
                        <div className={`text-3xl font-black mb-2 bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                          {value}
                        </div>
                        <div className="text-sm text-gray-400 font-medium capitalize">
                          {key === 'timeSaved' ? 'Time Saved' : key === 'roi' ? 'ROI Increase' : 'Revenue Generated'}
                        </div>
                        <div className={`mt-3 h-1 bg-gradient-to-r ${currentTestimonial.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                      </div>
                    ))}
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-6 backdrop-blur-sm bg-green-500/10 border border-green-400/30 rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-green-400 font-semibold text-sm">Verified Results</span>
                    </div>
                    <div className="text-xs text-gray-400">Results verified by third-party audit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Controls */}
        <div className="flex items-center justify-center space-x-6 mb-16">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="group backdrop-blur-xl bg-white/10 border border-white/20 p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Enhanced Dots Indicator */}
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`relative transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 h-4'
                    : 'w-4 h-4 hover:w-6'
                }`}
              >
                <div className={`w-full h-full rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? `bg-gradient-to-r ${currentTestimonial.gradient} shadow-lg`
                    : 'bg-gray-600 hover:bg-gray-500'
                }`} />
                {index === currentIndex && (
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="group backdrop-blur-xl bg-white/10 border border-white/20 p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Auto-play Indicator */}
          <div className="ml-4 flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-500'
            }`} />
            <span className="text-xs text-gray-400">
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </span>
          </div>
        </div>

        {/* Enhanced Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {overallStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-700 hover:scale-105 hover:bg-white/10 ${
                visibleStats 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className={`text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              <div className={`mt-3 h-1 bg-gradient-to-r ${stat.gradient} rounded-full opacity-60`} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;