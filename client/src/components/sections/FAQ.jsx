import React, { useState, useEffect, useRef } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: 'How does ADmyBRAND AI actually work?',
      answer: 'Our AI uses advanced machine learning models, including GPT-4, to analyze your brand, audience, and market trends. It then generates high-converting content, optimizes campaigns in real-time, and provides predictive insights to maximize your marketing ROI. The system learns from your data to become more effective over time.',
      category: 'Technology',
      icon: '🤖',
      tags: ['AI', 'Machine Learning', 'GPT-4', 'Analytics']
    },
    {
      question: 'Can I try ADmyBRAND before committing to a paid plan?',
      answer: 'Absolutely! We offer a 14-day free trial with full access to our Professional plan features. No credit card required. You can generate unlimited content, run campaigns, and see real results before deciding. Plus, all paid plans come with a 14-day money-back guarantee.',
      category: 'Pricing',
      icon: '💳',
      tags: ['Free Trial', 'Pricing', 'Money-back Guarantee']
    },
    {
      question: 'Which platforms and tools does ADmyBRAND integrate with?',
      answer: 'We integrate with 50+ platforms including Facebook Ads, Google Ads, LinkedIn, TikTok, Instagram, Twitter, Shopify, WooCommerce, HubSpot, Salesforce, Mailchimp, and many more. Our API also allows custom integrations for enterprise clients with specific needs.',
      category: 'Integrations',
      icon: '🔗',
      tags: ['Integrations', 'API', 'Platforms', 'Social Media']
    },
    {
      question: 'Is my data secure with ADmyBRAND?',
      answer: 'Yes, security is our top priority. We use enterprise-grade encryption, are SOC 2 Type II certified, GDPR compliant, and store data in secure AWS infrastructure. Your data is never shared with third parties or used to train models for other customers. You maintain full ownership and control.',
      category: 'Security',
      icon: '🔒',
      tags: ['Security', 'GDPR', 'SOC 2', 'Privacy', 'Encryption']
    },
    {
      question: 'How quickly will I see results from using ADmyBRAND?',
      answer: 'Most customers see improvements within the first week. Content generation is instant, A/B testing results appear within 48-72 hours, and campaign optimizations happen in real-time. On average, our customers report 150%+ ROI improvements within the first month of use.',
      category: 'Results',
      icon: '📈',
      tags: ['Results', 'Timeline', 'ROI', 'Performance']
    },
    {
      question: 'Do I need technical expertise to use ADmyBRAND?',
      answer: 'Not at all! ADmyBRAND is designed for marketers, not developers. Our intuitive interface requires no coding or technical skills. We also provide comprehensive onboarding, video tutorials, and 24/7 support to ensure you succeed from day one.',
      category: 'Usability',
      icon: '👥',
      tags: ['User-friendly', 'No-code', 'Support', 'Training']
    },
    {
      question: 'Can ADmyBRAND handle multiple brands or clients?',
      answer: 'Yes! Our Professional and Enterprise plans support multiple workspaces, allowing agencies and multi-brand companies to manage different clients or brands separately. Each workspace has its own AI training, brand voice, and campaign management while maintaining data isolation.',
      category: 'Features',
      icon: '🏢',
      tags: ['Multi-brand', 'Agencies', 'Workspaces', 'Enterprise']
    },
    {
      question: 'What makes ADmyBRAND different from other AI marketing tools?',
      answer: 'Unlike basic AI tools that just generate content, ADmyBRAND provides end-to-end marketing automation with predictive analytics, real-time optimization, and cross-platform campaign management. Our AI learns your specific brand voice and audience preferences, delivering consistently better results than generic solutions.',
      category: 'Differentiation',
      icon: '⭐',
      tags: ['Unique Features', 'Competitive Advantage', 'Brand Voice', 'Automation']
    }
  ];

  const categories = ['All', ...new Set(faqs.map(faq => faq.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter FAQs based on search and category
  useEffect(() => {
    let filtered = faqs;
    
    if (activeCategory !== 'All') {
      filtered = filtered.filter(faq => faq.category === activeCategory);
    }
    
    if (searchQuery.trim()) {
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    setFilteredFaqs(filtered);
    
    // Reset open index when filters change
    if (filtered.length > 0) {
      setOpenIndex(0);
    } else {
      setOpenIndex(-1);
    }
  }, [searchQuery, activeCategory]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const faqElements = sectionRef.current?.querySelectorAll('[data-index]');
    faqElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredFaqs]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setActiveCategory('All');
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-[32rem] h-[32rem] bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 20s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 25s ease-in-out infinite 5s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" 
             style={{ animation: 'float 30s ease-in-out infinite 10s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
             }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-white/10 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3 animate-pulse" />
            <span className="text-sm font-semibold text-white/90 tracking-wide">❓ FREQUENTLY ASKED QUESTIONS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block text-white/95">Got</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Everything you need to know about ADmyBRAND AI Suite. 
            Can't find what you're looking for?{' '}
            <a href="#contact" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 relative group">
              Chat with our team
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </p>

          {/* Enhanced Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-2 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center">
                <div className="pl-4 pr-2">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-gray-400 px-2 py-3 focus:outline-none text-lg"
                />
                {(searchQuery || activeCategory !== 'All') && (
                  <button
                    onClick={clearSearch}
                    className="mr-2 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 group cursor-pointer"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg scale-105'
                    : 'backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced FAQ Grid */}
        <div className="max-w-5xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.069A8.001 8.001 0 014 12C4 7.582 7.582 4 12 4s8 3.582 8 8a7.962 7.962 0 01-2.709 5.291z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No questions found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={clearSearch}
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`group relative transition-all duration-700 ${
                    visibleItems.has(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Glowing Border Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  
                  <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/8 to-white/4 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/10 group-hover:scale-[1.02] group-hover:shadow-2xl">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center flex-1 pr-6">
                        {/* Category Icon */}
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl">{faq.icon}</span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-2 py-1 rounded-full mr-3">
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Enhanced Toggle Button */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        openIndex === index ? 'rotate-180 shadow-lg shadow-emerald-500/30' : 'shadow-md'
                      }`}>
                        <svg className="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {/* Enhanced Answer Section */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-8 pb-6">
                        {/* Answer Content */}
                        <div className="backdrop-blur-sm bg-gradient-to-r from-white/5 to-transparent border-l-4 border-gradient-to-b border-emerald-400 pl-6 py-4 rounded-r-xl mb-4">
                          <p className="text-gray-300 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {faq.tags.map((tag, tagIndex) => (
                            <span
                              key={tag}
                              className="text-xs font-medium text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full hover:bg-white/10 hover:text-gray-300 transition-all duration-200"
                              style={{ animationDelay: `${tagIndex * 50}ms` }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Help Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-400">Was this helpful?</span>
                            <div className="flex space-x-2">
                              <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-400/30 hover:text-emerald-400 transition-all duration-200 group cursor-pointer">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                              </button>
                              <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-red-500/10 hover:border-red-400/30 hover:text-red-400 transition-all duration-200 group cursor-pointer">
                                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                              </button>
                            </div>
                          </div>
                          
                          <button className="text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 flex items-center group cursor-pointer">
                            Need more help?
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative max-w-4xl mx-auto">
            {/* Animated Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl animate-pulse" />
            
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12">
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Still have questions?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Our AI experts are here to help you succeed. Get personalized answers 
                  and see how ADmyBRAND can transform your marketing.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white text-lg font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 cursor-pointer">
                  <span className="relative z-10 flex items-center">
                    💬 Chat with Expert
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button className="group backdrop-blur-xl bg-white/10 border border-white/20 text-white text-lg font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer">
                  <span className="flex items-center">
                    📅 Book Demo Call
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  <span>Live chat available</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
                  <span>Avg response: 2 mins</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" />
                  <span>98% satisfaction rate</span>
                </div>
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
        
        .border-gradient-to-b {
          border-image: linear-gradient(to bottom, #10b981, #06b6d4) 1;
        }
      `}</style>
    </section>
  );
};

export default FAQ;