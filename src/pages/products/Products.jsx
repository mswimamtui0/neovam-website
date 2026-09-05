// src/pages/products/Products.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiArrowRight, FiBook, FiGrid, FiDollarSign, FiMessageCircle, 
  FiZap, FiTrendingUp, FiSearch, FiX, FiStar, FiUsers, 
  FiClock, FiCheckCircle, FiExternalLink, FiBookOpen, FiPlay,
  FiHeadphones, FiCalendar, FiAward
} from 'react-icons/fi';
import Reveal from './Reveal';

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Product data with Hadithi App
  const products = [
    {
      id: 'african-western-education',
      name: 'African Western Education',
      shortDescription: 'Education agency management platform for student registration and university applications.',
      fullDescription: 'A comprehensive management platform for educational agencies that streamlines student registration, university application management, and partner/institution services in one place.',
      category: 'Education',
      icon: FiBook,
      features: [
        'Student Registration & Management',
        'University Application Processing',
        'Partner Institution Management',
        'Real-time Application Tracking',
        'Document Management System',
        'Reporting & Analytics Dashboard'
      ],
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'AWS'],
      results: [
        '1,000+ students managed',
        '50% faster application processing',
        'Real-time partner institution updates'
      ],
      liveUrl: 'https://africanwesterneducation.com',
      status: 'Live',
      year: '2023'
    },
    {
      id: 'myshopii',
      name: 'Myshopii',
      shortDescription: 'Multi-vendor eCommerce marketplace connecting buyers and sellers across Africa.',
      fullDescription: 'A scalable multi-vendor marketplace platform that enables businesses to sell products online. Features vendor management, real-time inventory, payment processing, and logistics integration.',
      category: 'E-Commerce',
      icon: FiGrid,
      features: [
        'Multi-vendor Management',
        'Real-time Inventory Tracking',
        'Secure Payment Gateway',
        'Logistics & Shipping Integration',
        'Vendor Analytics Dashboard',
        'Mobile-First Design'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      results: [
        '100+ vendors onboarded in first month',
        'Real-time inventory management',
        'Integrated payment gateway'
      ],
      liveUrl: 'https://myshopii.com',
      status: 'Live',
      year: '2023'
    },
    {
      id: 'victory-financial',
      name: 'Victory Financial Services',
      shortDescription: 'Full brokerage and investment platform for DSE trading, fund management, and portfolio tracking.',
      fullDescription: 'A comprehensive fintech platform that enables full brokerage operations, client investment management, and real-time market data integration.',
      category: 'Fintech',
      icon: FiDollarSign,
      features: [
        'DSE Market Data Integration',
        'Portfolio Management',
        'Fund Management System',
        'Client Onboarding & KYC',
        'Automated Reporting',
        'Risk Management Tools'
      ],
      technologies: ['React', 'Node.js', 'WebSockets', 'AWS', 'PostgreSQL'],
      results: [
        '80% reduction in manual processing',
        '2x increase in client onboarding speed',
        'Integrated with Dar es Salaam Stock Exchange'
      ],
      liveUrl: 'https://victoryfinancial.com',
      status: 'Live',
      year: '2024'
    },
    {
      id: 'whatsapp-chatbot',
      name: 'WhatsApp Chat Bot',
      shortDescription: 'AI-powered customer engagement bot for automated conversations and lead qualification.',
      fullDescription: 'An intelligent chatbot integrated with WhatsApp Business API that provides 24/7 automated customer conversations, lead qualification, and seamless routing to human agents when needed.',
      category: 'AI',
      icon: FiMessageCircle,
      features: [
        '24/7 Automated Conversations',
        'Lead Qualification & Routing',
        'DSE Market Data Integration',
        'Multi-language Support',
        'Analytics & Insights Dashboard',
        'Seamless Human Handover'
      ],
      technologies: ['Node.js', 'WhatsApp API', 'OpenAI', 'MongoDB', 'Redis'],
      results: [
        '24/7 customer support automation',
        '70% faster response times',
        'Automatic lead qualification and routing'
      ],
      liveUrl: 'https://neovam.com/chatbot',
      status: 'Live',
      year: '2024'
    },
    {
      id: 'bulk-sms',
      name: 'Bulk SMS Platform',
      shortDescription: 'Marketing and broadcast messaging solution for businesses and community groups.',
      fullDescription: 'A powerful messaging platform that enables businesses to reach millions of customers through bulk SMS, promotional messaging, and communication tools.',
      category: 'Messaging',
      icon: FiZap,
      features: [
        'Bulk SMS Sending',
        'Contact List Management',
        'Message Scheduling',
        'Advanced Segmentation',
        'Delivery Reports & Analytics',
        'Opt-out Management'
      ],
      technologies: ['React', 'Node.js', 'AWS SNS', 'PostgreSQL', 'Redis'],
      results: [
        'Millions of messages delivered',
        '99.9% delivery rate',
        'Real-time delivery tracking'
      ],
      liveUrl: 'https://neovam.com/sms',
      status: 'Live',
      year: '2023'
    },
    {
      id: 'stockex-pro',
      name: 'StockEx Pro',
      shortDescription: 'Full brokerage and HR suite for comprehensive financial operations management.',
      fullDescription: 'An enterprise-grade platform that combines full brokerage operations with HR management capabilities.',
      category: 'Fintech',
      icon: FiTrendingUp,
      features: [
        'Order Management System',
        'Settlement Processing',
        'Payroll Integration',
        'HR Management Suite',
        'Comprehensive Reporting',
        'Compliance Monitoring'
      ],
      technologies: ['React', 'Java', 'Spring Boot', 'Oracle', 'AWS'],
      results: [
        'End-to-end brokerage operations',
        'Real-time settlement processing',
        'Comprehensive HR management'
      ],
      liveUrl: 'https://stockexpro.com',
      status: 'In Development',
      year: '2025'
    },
    // ===== NEW: HADITHI APP =====
    {
      id: 'hadithi-app',
      name: 'Hadithi App',
      shortDescription: 'Storytelling platform for series episodes, single stories, and audio content with flexible payment options.',
      fullDescription: 'Hadithi App is a revolutionary storytelling platform that brings African stories to life. Users can enjoy series episodes, single stories, and audio content with flexible payment options including weekly, monthly, and per-episode subscriptions. The app features offline reading, bookmarks, and personalized recommendations.',
      category: 'Entertainment',
      icon: FiBookOpen,
      features: [
        'Series Episodes - Watch stories in parts',
        'Single Stories - One-off complete stories',
        'Audio Stories - Listen to narrated content',
        'Flexible Payment Options (Weekly/Monthly/Per Episode)',
        'Offline Mode - Download and read offline',
        'Bookmarks & Favorites',
        'Reading Progress Tracking',
        'Personalized Recommendations',
        'Push Notifications for New Episodes',
        'User Profiles & History'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'Firebase'],
      results: [
        '1,000+ active users',
        '500+ stories available',
        '90% user retention rate',
        '4.8/5 App Store Rating'
      ],
      liveUrl: 'https://hadithiapp.com',
      status: 'Live',
      year: '2024',
      challenges: 'African storytelling lacked a modern, engaging platform with flexible access options. Users wanted to consume stories in different formats (text, audio, video) without being locked into rigid subscription models.',
      solutions: 'Built a comprehensive storytelling app with multiple content formats (text, audio, and video stories), flexible payment models (weekly, monthly, pay-per-episode), offline reading capabilities, and personalized recommendations.',
      client: 'Hadithi App Ltd',
      paymentOptions: ['Pay Per Episode', 'Weekly Subscription', 'Monthly Subscription', 'Yearly Subscription']
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'Live': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'In Development': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  // Get icon
  const getIcon = (iconName) => {
    const icons = {
      FiBook, FiGrid, FiDollarSign, FiMessageCircle, FiZap, FiTrendingUp, FiBookOpen
    };
    return icons[iconName] || FiGrid;
  };

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-50 dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="section-title text-gray-900 dark:text-white mb-4">
              Our Products
            </h1>
            <p className="section-subtitle text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Innovative solutions built by NeoVam to solve real-world challenges across Africa
            </p>
            <div className="section-divider"></div>
          </div>
        </Reveal>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-primary-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FiX className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-primary text-white shadow-md'
                      : 'bg-white dark:bg-primary-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-primary-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => {
              const IconComponent = getIcon(product.icon);
              return (
                <Reveal key={product.id} delay={index * 100}>
                  <div 
                    className="group relative bg-white dark:bg-primary-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                        {product.status}
                      </span>
                    </div>

                    {/* Image/Icon Section */}
                    <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-700 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-aurora rounded-2xl flex items-center justify-center">
                        <IconComponent className="text-3xl text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-primary-600 dark:text-primary-400 uppercase">
                          {product.category}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-400">{product.year}</span>
                      </div>

                      <h3 className="card-title text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="card-text text-gray-600 dark:text-gray-400 mb-4">
                        {product.shortDescription}
                      </p>

                      {/* Payment Options for Hadithi App */}
                      {product.id === 'hadithi-app' && product.paymentOptions && (
                        <div className="mb-4">
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-2">
                            Payment Options:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {product.paymentOptions.map((option, idx) => (
                              <span key={idx} className="text-xs px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                                {option}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <FiCheckCircle className="w-3 h-3 text-green-500" />
                          {product.results.length} key results
                        </span>
                        <span className="flex items-center gap-1">
                          <FiUsers className="w-3 h-3" />
                          {product.technologies.length} technologies
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-primary-600 dark:text-primary-400 font-medium group-hover:underline">
                          Learn More
                        </span>
                        <FiArrowRight className="text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No products found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-4 text-primary-600 dark:text-primary-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <Reveal delay={300} className="mt-16">
          <div className="bg-gradient-nav rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                  Featured Product
                </span>
              </div>
              <h2 className="section-title text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="section-subtitle text-indigo-100 mb-8 max-w-2xl mx-auto">
                We build tailored products for your specific business needs. From concept to deployment, we've got you covered.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/services"
                  className="btn-secondary inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  Explore Services →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Products;
