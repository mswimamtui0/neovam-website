// src/pages/industries/IndustryDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCheck } from 'react-icons/fi';
// Line 9 - CHANGE TO:
import Reveal from './Reveal';

const IndustryDetail = () => {
  const { industryId } = useParams();
  const navigate = useNavigate();
  const [industry, setIndustry] = useState(null);
  const [loading, setLoading] = useState(true);

  const industriesData = {
    banking: {
      id: 'banking',
      name: 'Banking',
      description: 'Modern banking solutions that transform how financial institutions serve their customers.',
      fullDescription: 'We help banks and financial institutions modernize their operations, enhance customer experience, and stay competitive in the digital age. Our solutions are designed to be secure, scalable, and compliant with regulatory requirements.',
      icon: 'FiHome',
      features: [
        'Digital Banking Platforms',
        'Mobile Banking Apps',
        'Core Banking Integration',
        'Customer Experience Management',
        'Fraud Detection Systems',
        'Compliance & Security'
      ],
      products: ['Victory Financial Services', 'StockEx Pro'],
      technologies: ['React', 'Node.js', 'Java', 'AWS', 'PostgreSQL'],
      caseStudies: [
        'Victory Financial Services - Full brokerage platform',
        'StockEx Pro - Trading and HR management suite'
      ]
    },
    fintech: {
      id: 'fintech',
      name: 'Fintech',
      description: 'Financial technology solutions that drive innovation and financial inclusion.',
      fullDescription: 'We build cutting-edge fintech solutions that are transforming the financial services landscape across Africa. From digital payments to investment platforms, our solutions are designed for the future of finance.',
      icon: 'FiDollarSign',
      features: [
        'Payment Processing Systems',
        'Digital Wallet Development',
        'Investment Platforms',
        'Blockchain Solutions',
        'Risk Management',
        'Regulatory Compliance'
      ],
      products: ['Victory Financial Services', 'StockEx Pro', 'WhatsApp Chat Bot'],
      technologies: ['React Native', 'Node.js', 'Blockchain', 'AWS', 'Microservices'],
      caseStudies: [
        'Victory Financial Services - Investment platform',
        'StockEx Pro - Full brokerage operations'
      ]
    },
    education: {
      id: 'education',
      name: 'Education',
      description: 'EdTech platforms that transform how educational institutions and agencies operate.',
      fullDescription: 'We develop comprehensive education management platforms that streamline operations, enhance student experience, and improve outcomes for educational institutions across Africa.',
      icon: 'FiBook',
      features: [
        'Student Management Systems',
        'Application Processing',
        'Partner Institution Management',
        'Learning Management Systems',
        'Document Management',
        'Communication Tools'
      ],
      products: ['African Western Education'],
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'AWS'],
      caseStudies: [
        'African Western Education - Education agency platform'
      ]
    }
  };

  useEffect(() => {
    const found = industriesData[industryId];
    setIndustry(found);
    setLoading(false);
  }, [industryId]);

  if (loading) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!industry) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Industry Not Found</h1>
          <Link to="/industries" className="text-primary-600 hover:underline">Back to Industries</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-50 dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <button
          onClick={() => navigate('/industries')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 mb-6 transition-colors"
        >
          <FiArrowLeft />
          Back to Industries
        </button>

        <Reveal>
          <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-lg p-8 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {industry.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {industry.fullDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <FiCheck className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {industry.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-primary-700/30 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3">Our Products</h3>
                <div className="flex flex-wrap gap-2">
                  {industry.products.map((product, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full text-sm text-primary-700 dark:text-primary-300">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-glow transition-all"
              >
                Get Started
              </Link>
              <Link
                to="/products"
                className="px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all"
              >
                View Products →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default IndustryDetail;
