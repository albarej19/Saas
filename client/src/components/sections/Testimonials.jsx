import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      avatar: '👩‍💼',
      rating: 5,
      text: 'ADmyBRAND transformed our marketing completely. We went from spending 20 hours a week on content creation to just 2 hours, while our conversion rates increased by 340%. The AI is incredibly smart.',
      metrics: {
        roi: '+340%',
        timeSaved: '18hrs/week',
        revenue: '$2.1M'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder & CEO',
      company: 'GrowthLab',
      avatar: '👨‍💻',
      rating: 5,
      text: 'The predictive analytics alone paid for itself in the first month. We can now identify high-value customers before our competitors even know they exist. Game-changing technology.',
      metrics: {
        roi: '+280%',
        timeSaved: '25hrs/week',
        revenue: '$1.8M'
      }
    },
    {
      name: 'Jennifer Walsh',
      role: 'VP of Marketing',
      company: 'ScaleUp Solutions',
      avatar: '👩‍🚀',
      rating: 5,
      text: 'Our team was skeptical about AI marketing tools, but ADmyBRAND proved us wrong. The quality of generated content is indistinguishable from our best copywriters, and it never gets tired.',
      metrics: {
        roi: '+425%',
        timeSaved: '30hrs/week',
        revenue: '$3.2M'
      }
    },
    {
      name: 'David Park',
      role: 'Growth Marketing Lead',
      company: 'InnovateCorp',
      avatar: '👨‍🎯',
      rating: 5,
      text: 'The multi-channel automation is phenomenal. We manage campaigns across 8 platforms effortlessly, and the AI optimizes everything in real-time. Our ROAS improved by 300%.',
      metrics: {
        roi: '+300%',
        timeSaved: '22hrs/week',
        revenue: '$1.6M'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'Digital Marketing Manager',
      company: 'FutureMedia',
      avatar: '👩‍💻',
      rating: 5,
      text: 'I was spending most of my time on repetitive tasks. Now I focus on strategy while ADmyBRAND handles execution. My productivity increased dramatically and so did our results.',
      metrics: {
        roi: '+380%',
        timeSaved: '28hrs/week',
        revenue: '$2.7M'
      }
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            {/* <span className="text-sm font-medium text-gray-200">💬 Customer Stories</span> */}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-200">
            Loved by
            <span className="gradient-text block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">10,000+ Marketers</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how leading brands are transforming their marketing with AI and achieving 
            <span className="text-white font-medium"> remarkable results</span>.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="glass-dark p-8 md:p-12 rounded-2xl border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              
              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                {/* Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 font-light">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="lg:col-span-1">
                <div className="grid grid-cols-1 gap-4">
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {testimonials[currentIndex].metrics.roi}
                    </div>
                    <div className="text-sm text-gray-400">ROI Increase</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                      {testimonials[currentIndex].metrics.timeSaved}
                    </div>
                    <div className="text-sm text-gray-400">Time Saved</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      {testimonials[currentIndex].metrics.revenue}
                    </div>
                    <div className="text-sm text-gray-400">Revenue Generated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="glass p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="glass p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-400">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
            <div className="text-gray-400">Avg ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$2.1M</div>
            <div className="text-gray-400">Avg Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24hrs</div>
            <div className="text-gray-400">Avg Time Saved/Week</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;