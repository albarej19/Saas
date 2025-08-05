import React, { useState, useEffect, useRef } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState(1); // Professional plan highlighted by default
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);

  const plans = [
    {
      name: 'Starter',
      subtitle: 'Perfect for small businesses',
      price: { monthly: 29, annual: 24 },
      originalPrice: { monthly: 39, annual: 32 },
      description: 'Get started with AI marketing automation',
      badge: '🚀 Most Popular for Beginners',
      features: [
        { name: 'AI Content Generation', limit: '500 pieces/month', included: true },
        { name: 'Basic Analytics Dashboard', limit: 'Core metrics', included: true },
        { name: 'Email Campaign Automation', limit: '2 sequences', included: true },
        { name: 'Social Media Platforms', limit: '2 platforms', included: true },
        { name: 'A/B Testing', limit: '2 variants', included: true },
        { name: 'Email Support', limit: '48h response', included: true },
        { name: 'Custom Integrations', limit: '', included: false },
        { name: 'Priority Support', limit: '', included: false }
      ],
      gradient: 'from-blue-500 to-cyan-500',
      popular: false,
      cta: 'Start Free Trial',
      savings: '18%'
    },
    {
      name: 'Professional',
      subtitle: 'For growing marketing teams',
      price: { monthly: 99, annual: 79 },
      originalPrice: { monthly: 149, annual: 119 },
      description: 'Advanced AI tools for serious marketers',
      badge: '⭐ Most Popular Choice',
      features: [
        { name: 'Unlimited AI Content Generation', limit: 'No limits', included: true },
        { name: 'Advanced Analytics & Insights', limit: '50+ KPIs', included: true },
        { name: 'Multi-channel Campaign Management', limit: 'All channels', included: true },
        { name: 'Platform Integrations', limit: '10+ platforms', included: true },
        { name: 'Advanced A/B Testing', limit: 'Unlimited', included: true },
        { name: 'Predictive Audience Targeting', limit: 'AI-powered', included: true },
        { name: 'Priority Support', limit: '24h response', included: true },
        { name: 'Custom Integrations', limit: 'API access', included: true }
      ],
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
      cta: 'Get Started',
      savings: '20%'
    },
    {
      name: 'Enterprise',
      subtitle: 'For large organizations',
      price: { monthly: 299, annual: 239 },
      originalPrice: { monthly: 399, annual: 319 },
      description: 'Complete AI marketing suite with white-label options',
      badge: '👑 Enterprise Grade',
      features: [
        { name: 'Everything in Professional', limit: 'Full access', included: true },
        { name: 'White-label Solutions', limit: 'Custom branding', included: true },
        { name: 'Custom AI Model Training', limit: 'Your data', included: true },
        { name: 'Dedicated Account Manager', limit: '1-on-1 support', included: true },
        { name: 'Advanced Security & Compliance', limit: 'SOC 2, GDPR', included: true },
        { name: 'API Access & Custom Development', limit: 'Full API', included: true },
        { name: '24/7 Phone Support', limit: 'Instant response', included: true },
        { name: 'Team Training & Onboarding', limit: 'Included', included: true }
      ],
      gradient: 'from-indigo-500 to-purple-500',
      popular: false,
      cta: 'Contact Sales',
      savings: '20%'
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cardElements = sectionRef.current?.querySelectorAll('[data-index]');
    cardElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getPrice = (plan) => {
    return isAnnual ? plan.price.annual : plan.price.monthly;
  };

  const getOriginalPrice = (plan) => {
    return isAnnual ? plan.originalPrice.annual : plan.originalPrice.monthly;
  };

  const getSavings = (plan) => {
    const current = getPrice(plan);
    const original = getOriginalPrice(plan);
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 20s ease-in-out infinite' }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 25s ease-in-out infinite 5s' }} />
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/12 to-purple-500/12 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 30s ease-in-out infinite 10s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-white/10 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse" />
            <span className="text-sm font-semibold text-white/90 tracking-wide">💰 TRANSPARENT PRICING</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block text-white/95">Choose Your</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Success Plan
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed font-light">
            Start free, scale fast. Every plan includes our core AI features with{' '}
            <span className="relative text-white font-semibold">
              14-day money-back guarantee
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" />
            </span>
          </p>

          {/* Enhanced Billing Toggle */}
          <div className="flex items-center justify-center space-x-6 mb-32">
            <span className={`text-lg font-medium transition-colors duration-300 ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <div className="relative">
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/30 cursor-pointer ${
                  isAnnual ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-600'
                }`}
              >
                <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isAnnual ? 'translate-x-9' : 'translate-x-1'
                }`} />
              </button>
            </div>
            <span className={`text-lg font-medium transition-colors duration-300 ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            <div className="backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full px-4 py-2">
              <span className="text-green-400 text-sm font-bold flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Save up to 20%
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-index={index}
              className={`relative group transition-all duration-700 ${
                plan.popular ? 'scale-105 md:scale-110 z-10' : 'z-0'
              } ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(plan.popular ? 1 : null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500 to-pink-500 border border-purple-400/50 rounded-full px-6 py-2 shadow-lg">
                    <span className="text-white text-sm font-bold tracking-wide">✨ MOST POPULAR</span>
                  </div>
                </div>
              )}

              {/* Glowing Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${plan.gradient} rounded-3xl opacity-0 group-hover:opacity-30 transition-all duration-500 blur-sm ${
                plan.popular ? 'opacity-20' : ''
              }`} />
              
              {/* Main Card */}
              <div className={`relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border rounded-3xl p-8 h-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl ${
                plan.popular 
                  ? 'border-purple-400/50 shadow-lg shadow-purple-500/20 bg-gradient-to-br from-white/15 to-white/10' 
                  : 'border-white/10 group-hover:border-white/20'
              } ${
                hoveredPlan === index ? 'bg-white/15' : ''
              }`}>
                
                {/* Plan Header */}
                <div className="text-center mb-8">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${plan.gradient} p-0.5 mx-auto mb-6 group-hover:scale-110 transition-all duration-500 group-hover:rotate-3`}>
                    <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-500">
                      <span className="text-3xl">
                        {index === 0 ? '🚀' : index === 1 ? '⭐' : '👑'}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-500">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-2 group-hover:text-gray-200 transition-colors duration-500">{plan.subtitle}</p>
                  <p className="text-gray-300 text-sm mb-6 group-hover:text-gray-100 transition-colors duration-500">{plan.description}</p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <span className="text-gray-400 text-lg line-through">${getOriginalPrice(plan)}</span>
                      <div className="backdrop-blur-sm bg-red-500/20 border border-red-400/30 rounded-full px-2 py-1">
                        <span className="text-red-400 text-xs font-bold">-{getSavings(plan)}%</span>
                      </div>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-black text-white">${getPrice(plan)}</span>
                      <span className="text-gray-400 text-lg ml-1">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    </div>
                    {isAnnual && (
                      <div className="mt-2">
                        <span className="text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors duration-500">
                          💰 Save ${(getOriginalPrice(plan) - getPrice(plan)) * 12}/year
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} 
                         className={`flex items-start space-x-3 transition-all duration-300 ${
                           feature.included ? 'opacity-100' : 'opacity-50'
                         }`}>
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 ${
                        feature.included 
                          ? `bg-gradient-to-r ${plan.gradient}` 
                          : 'bg-gray-600'
                      }`}>
                        {feature.included ? (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <span className={`text-sm leading-relaxed transition-colors duration-500 ${
                          feature.included 
                            ? 'text-gray-200 group-hover:text-white' 
                            : 'text-gray-500 group-hover:text-gray-400'
                        }`}>
                          {feature.name}
                        </span>
                        {feature.limit && (
                          <div className={`text-xs mt-1 transition-colors duration-500 ${
                            feature.included 
                              ? `text-transparent bg-gradient-to-r ${plan.gradient} bg-clip-text font-medium group-hover:text-gray-300 group-hover:bg-none` 
                              : 'text-gray-600 group-hover:text-gray-500'
                          }`}>
                            {feature.limit}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <button className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 group-hover:scale-105 cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:from-purple-400 hover:to-pink-400'
                      : 'backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:border-white/40 hover:bg-white/20'
                  }`}>
                    {plan.cta}
                  </button>
                  
                  {/* Additional Info */}
                  <div className="text-center mt-4">
                    <div className="text-xs text-gray-400">
                      {index === 2 ? 'Custom pricing available' : '14-day free trial • No credit card required'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 text-center">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-3xl animate-pulse" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need a{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  custom solution?
                </span>
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our enterprise team can create a tailored AI marketing solution 
                that fits your specific needs and budget
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-lg font-bold px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer">
                  <span className="relative z-10 flex items-center">
                    📞 Schedule Consultation
                  </span>
                </button>
                
                <button className="group backdrop-blur-xl bg-white/10 border border-white/20 text-white text-lg font-semibold px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer">
                  <span className="flex items-center">
                    🎥 View Enterprise Demo
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-300">SSL Secured</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-300">GDPR Compliant</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-300">99.9% Uptime</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-300">24/7 Support</div>
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
    </section>
  );
};

export default Pricing;