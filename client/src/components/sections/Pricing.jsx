import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      period: 'month',
      description: 'Perfect for small businesses getting started with AI marketing',
      features: [
        'AI Content Generation (500 pieces/month)',
        'Basic Analytics Dashboard',
        'Email Campaign Automation',
        '2 Social Media Platforms',
        'A/B Testing (2 variants)',
        'Email Support'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '99',
      period: 'month',
      description: 'Advanced AI tools for growing marketing teams',
      features: [
        'Unlimited AI Content Generation',
        'Advanced Analytics & Insights',
        'Multi-channel Campaign Management',
        '10+ Platform Integrations',
        'Advanced A/B Testing',
        'Predictive Audience Targeting',
        'Priority Support',
        'Custom Integrations'
      ],
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise',
      price: '299',
      period: 'month',
      description: 'Complete AI marketing suite for large organizations',
      features: [
        'Everything in Professional',
        'White-label Solutions',
        'Custom AI Model Training',
        'Dedicated Account Manager',
        'Advanced Security & Compliance',
        'API Access & Custom Development',
        '24/7 Phone Support',
        'Team Training & Onboarding'
      ],
      gradient: 'from-indigo-500 to-purple-500',
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            {/* <span className="text-sm font-medium text-gray-200">💰 Simple Pricing</span> */}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-200">
            Choose Your
            <span className="gradient-text block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Success Plan</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Start free, scale fast. Every plan includes our core AI features with 
            <span className="text-white font-medium"> 14-day money-back guarantee</span>.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className="text-gray-400">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-14 h-8 bg-gray-700 rounded-full cursor-pointer flex items-center">
                <div className="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ml-1"></div>
              </div>
            </div>
            <span className="text-white">Annual</span>
            <div className="glass px-3 py-1 rounded-full">
              <span className="text-green-400 text-sm font-medium">Save 20%</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${
                plan.popular ? 'scale-105 md:scale-110' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  {/* <div className="glass px-4 py-2 rounded-full border border-purple-400">
                    <span className="text-purple-300 text-sm font-medium">✨ Most Popular</span>
                  </div> */}
                </div>
              )}

              <div className={`glass-dark p-8 rounded-2xl border transition-all duration-300 cursor-pointer h-full ${
                plan.popular 
                  ? 'border-purple-400 shadow-lg shadow-purple-500/20' 
                  : 'border-gray-700 hover:border-gray-500'
              } group-hover:scale-105`}>
                
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} p-0.5 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">
                        {index === 0 ? '🚀' : index === 1 ? '⭐' : '👑'}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 text-lg">/{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <a 
                    href="#signup" 
                    className={`w-full block text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25'
                        : 'glass border border-gray-600 text-white hover:border-gray-400 hover:bg-gray-800'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="glass-dark p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-300 mb-6">
              Our enterprise team can create a tailored AI marketing solution 
              that fits your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="btn-primary text-gray-50">
                Schedule Consultation
              </a>
              <a href="#demo" className="btn-primary text-gray-50">
                View Enterprise Demo
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;