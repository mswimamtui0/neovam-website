// src/pages/industries/Industries.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiArrowRight, FiHome, FiDollarSign, FiBook, FiGrid, FiSmartphone,
  FiTrendingUp, FiUsers, FiClock
} from 'react-icons/fi';
// Line 9 - CHANGE TO:
import Reveal from './Reveal';

const Industries = () => {
  const industries = [
    {
      id: 'banking',
      name: 'Banking',
      description: 'Modern banking solutions that transform how financial institutions serve their customers.',
      icon: FiHome,
      features: [
        'Digital Banking Platforms',
        'Mobile Banking Apps',
        'Core Banking Integration',
        'Customer Experience Management',
        'Fraud Detection Systems'
      ],
      products: ['Victory Financial Services', 'StockEx Pro']
    },
    {
      id: 'fintech',
      name: 'Fintech',
      description: 'Financial technology solutions that drive innovation and financial inclusion.',
      icon: FiDollarSign,
      features: [
        'Payment Processing Systems',
        'Digital Wallet Development',
        'Investment Platforms',
        'Blockchain Solutions',
        'Risk Management'
      ],
      products: ['Victory Financial Services', 'StockEx Pro', 'WhatsApp Chat Bot']
    },
    {
      id: 'education',
      name: 'Education',
      description: 'EdTech platforms that transform how educational institutions and agencies operate.',
      icon: FiBook,
      features: [
        'Student Management Systems',
        'Application Processing',
        'Partner Institution Management',
        'Learning Management Systems',
        'Document Management'
      ],
      products: ['African Western Education']
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce',
      description: 'Online retail solutions that connect businesses with customers across Africa.',
      icon: FiGrid,
      features: [
        'Multi-vendor Marketplaces',
        'Inventory Management',
        'Payment Gateway Integration',
        'Logistics & Shipping',
        'Vendor Analytics'
      ],
      products: ['Myshopii']
    },
    {
      id: 'telecommunications',
      name: 'Telecommunications',
      description: 'Telco solutions for messaging, communication, and customer engagement.',
      icon: FiSmartphone,
      features: [
        'Bulk SMS Platforms',
        'Chatbot Solutions',
        'Customer Engagement Tools',
        'Communication APIs',
        'Messaging Analytics'
      ],
      products: ['Bulk SMS Platform', 'WhatsApp Chat Bot']
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-50 dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Tailored solutions for Africa's most dynamic sectors
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Reveal key={industry.id} delay={index * 100}>
                <div className="group relative bg-white dark:bg-primary-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden p-6">
                  <div className="w-14 h-14 bg-gradient-aurora rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-xl text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {industry.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {industry.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {industry.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-primary-700/30 rounded-full text-gray-600 dark:text-gray-400">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {industry.products.length} products
                    </span>
                    <Link
                      to={`/industries/${industry.id}`}
                      className="text-primary-600 dark:text-primary-400 font-medium group-hover:underline flex items-center gap-1"
                    >
                      Learn More
                      <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={300} className="mt-16">
          <div className="bg-gradient-nav rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Not in Your Industry?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              We build custom solutions for any industry. Let's discuss how we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Contact Us
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Industries;
