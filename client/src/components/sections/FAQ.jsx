import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const faqs = [
    {
      question: 'How does ADmyBRAND AI actually work?',
      answer: 'Our AI uses advanced machine learning models, including GPT-4, to analyze your brand, audience, and market trends. It then generates high-converting content, optimizes campaigns in real-time, and provides predictive insights to maximize your marketing ROI. The system learns from your data to become more effective over time.'
    },
    {
      question: 'Can I try ADmyBRAND before committing to a paid plan?',
      answer: 'Absolutely! We offer a 14-day free trial with full access to our Professional plan features. No credit card required. You can generate unlimited content, run campaigns, and see real results before deciding. Plus, all paid plans come with a 14-day money-back guarantee.'
    },
    {
      question: 'Which platforms and tools does ADmyBRAND integrate with?',
      answer: 'We integrate with 50+ platforms including Facebook Ads, Google Ads, LinkedIn, TikTok, Instagram, Twitter, Shopify, WooCommerce, HubSpot, Salesforce, Mailchimp, and many more. Our API also allows custom integrations for enterprise clients with specific needs.'
    },
    {
      question: 'Is my data secure with ADmyBRAND?',
      answer: 'Yes, security is our top priority. We use enterprise-grade encryption, are SOC 2 Type II certified, GDPR compliant, and store data in secure AWS infrastructure. Your data is never shared with third parties or used to train models for other customers. You maintain full ownership and control.'
    },
    {
      question: 'How quickly will I see results from using ADmyBRAND?',
      answer: 'Most customers see improvements within the first week. Content generation is instant, A/B testing results appear within 48-72 hours, and campaign optimizations happen in real-time. On average, our customers report 150%+ ROI improvements within the first month of use.'
    },
    {
      question: 'Do I need technical expertise to use ADmyBRAND?',
      answer: 'Not at all! ADmyBRAND is designed for marketers, not developers. Our intuitive interface requires no coding or technical skills. We also provide comprehensive onboarding, video tutorials, and 24/7 support to ensure you succeed from day one.'
    },
    {
      question: 'Can ADmyBRAND handle multiple brands or clients?',
      answer: 'Yes! Our Professional and Enterprise plans support multiple workspaces, allowing agencies and multi-brand companies to manage different clients or brands separately. Each workspace has its own AI training, brand voice, and campaign management while maintaining data isolation.'
    },
    {
      question: 'What makes ADmyBRAND different from other AI marketing tools?',
      answer: 'Unlike basic AI tools that just generate content, ADmyBRAND provides end-to-end marketing automation with predictive analytics, real-time optimization, and cross-platform campaign management. Our AI learns your specific brand voice and audience preferences, delivering consistently better results than generic solutions.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            {/* <span className="text-sm font-medium text-gray-200">❓ FAQ</span> */}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-200">
            Got
            <span className="gradient-text block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Questions?</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite. 
            Can't find what you're looking for? 
            <a href="#contact" className="text-blue-400 hover:text-blue-300 font-medium"> Chat with our team</a>.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-dark rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-gray-500"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-300"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-dark p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI experts are here to help you succeed. Get personalized answers 
              and see how ADmyBRAND can transform your marketing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="btn-primary text-gray-50">
                💬 Chat with Expert
              </a>
              <a href="#demo" className="btn-primary text-gray-50">
                📅 Book Demo Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;