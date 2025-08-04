import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI Content Generation',
      description: 'Generate high-converting ad copy, social media posts, and email campaigns in seconds using advanced GPT-4 technology.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📊',
      title: 'Smart Analytics Dashboard',
      description: 'Real-time insights with predictive analytics that help you make data-driven decisions and optimize performance.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🎯',
      title: 'Automated A/B Testing',
      description: 'Set up intelligent split tests that automatically optimize for your best-performing variants and maximize conversions.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: '🎪',
      title: 'Predictive Audience Targeting',
      description: 'AI-powered audience segmentation that identifies your highest-value prospects before your competitors do.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '⚡',
      title: 'Real-time Optimization',
      description: 'Campaigns that self-optimize based on performance data, automatically adjusting bids, targeting, and creative elements.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '🌐',
      title: 'Multi-channel Management',
      description: 'Manage Facebook, Google, LinkedIn, TikTok, and more from one unified dashboard with cross-platform insights.',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            {/* <span className="text-sm font-medium text-gray-200">✨ Powerful Features</span> */}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-200">
            Everything You Need to
            <span className="gradient-text block">Dominate Your Market</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI-powered suite combines cutting-edge technology with proven marketing strategies 
            to deliver results that traditional tools simply can't match.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-dark p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-gray-500"
            >
              {/* Icon with Gradient Background */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center text-blue-400 font-medium">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-dark p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to see these features in action?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of marketers who've already transformed their campaigns with AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#signup" className="btn-primary text-gray-50">
                Start Your Free Trial
              </a>
              <a href="#demo" className="btn-primary text-gray-50">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;