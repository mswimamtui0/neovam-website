// src/pages/products/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  FiArrowRight, FiArrowLeft, FiCheck, FiX, FiExternalLink, 
  FiCalendar, FiTag, FiUsers, FiCode, FiStar, FiClock,
  FiBook, FiGrid, FiDollarSign, FiMessageCircle, FiZap, FiTrendingUp,
  FiCpu, FiCloud, FiShield, FiDatabase, FiLock, FiAward,
  FiBookOpen
} from 'react-icons/fi';
import Reveal from './Reveal';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ===== ALL PRODUCTS DATA =====
  const allProducts = [
    {
      id: 'african-western-education',
      name: 'African Western Education',
      shortDescription: 'Education agency management platform for student registration and university applications.',
      fullDescription: 'A comprehensive management platform for educational agencies that streamlines student registration, university application management, and partner/institution services in one place. Built to handle the complex workflows of education agencies with multi-tenant architecture.',
      detailedDescription: 'The African Western Education platform revolutionizes how educational agencies manage their operations. It provides a unified dashboard for administrators, counselors, and students, enabling seamless communication and document management. The platform supports multiple institutions, curricula, and application cycles, making it the go-to solution for education agencies across Africa.',
      category: 'Education',
      icon: FiBook,
      image: '/images/products/awe.jpg',
      features: [
        'Student Registration & Management',
        'University Application Processing',
        'Partner Institution Management',
        'Real-time Application Tracking',
        'Document Management System',
        'Reporting & Analytics Dashboard',
        'Multi-tenant Architecture',
        'Automated Email Notifications'
      ],
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'AWS', 'Redis'],
      results: [
        '1,000+ students managed efficiently',
        '50% faster application processing time',
        'Real-time partner institution updates',
        '95% client satisfaction rate'
      ],
      liveUrl: 'https://africanwesterneducation.com',
      status: 'Live',
      year: '2023',
      challenges: 'Educational agencies struggled with fragmented systems for student management, application tracking, and partner communication. Manual processes led to delays and errors.',
      solutions: 'Built a unified platform that centralizes all agency operations, automates workflows, and provides real-time visibility into student progress and application status.',
      client: 'African Western Education'
    },
    {
      id: 'myshopii',
      name: 'Myshopii',
      shortDescription: 'Multi-vendor eCommerce marketplace connecting buyers and sellers across Africa.',
      fullDescription: 'A scalable multi-vendor marketplace platform that enables businesses to sell products online. Features vendor management, real-time inventory, payment processing, and logistics integration.',
      detailedDescription: 'Myshopii is transforming e-commerce in Africa by providing a platform where small and medium businesses can easily set up online stores. The platform handles everything from product listing and inventory management to payment processing and shipping logistics, making it accessible for businesses of all sizes.',
      category: 'E-Commerce',
      icon: FiGrid,
      image: '/images/products/myshopii.jpg',
      features: [
        'Multi-vendor Management',
        'Real-time Inventory Tracking',
        'Secure Payment Gateway',
        'Logistics & Shipping Integration',
        'Vendor Analytics Dashboard',
        'Mobile-First Design',
        'Customer Review System',
        'Order Management'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Docker'],
      results: [
        '100+ vendors onboarded in first month',
        'Real-time inventory management',
        'Integrated payment gateway',
        '30% month-over-month growth'
      ],
      liveUrl: 'https://myshopii.com',
      status: 'Live',
      year: '2023',
      challenges: 'Small businesses lacked an accessible platform to sell products online. Existing solutions were either too complex or expensive for African entrepreneurs.',
      solutions: 'Created a user-friendly marketplace with simplified vendor onboarding, integrated logistics, and affordable pricing tailored for the African market.',
      client: 'Myshopii Ltd'
    },
    {
      id: 'victory-financial',
      name: 'Victory Financial Services',
      shortDescription: 'Full brokerage and investment platform for DSE trading, fund management, and portfolio tracking.',
      fullDescription: 'A comprehensive fintech platform that enables full brokerage operations, client investment management, and real-time market data integration.',
      detailedDescription: 'Victory Financial Services is a cutting-edge investment platform that provides individual and institutional investors with seamless access to the Dar es Salaam Stock Exchange (DSE). The platform combines real-time market data, advanced trading tools, and comprehensive portfolio management features to empower investors to make informed decisions.',
      category: 'Fintech',
      icon: FiDollarSign,
      image: '/images/products/victory-financial.jpg',
      features: [
        'DSE Market Data Integration',
        'Portfolio Management',
        'Fund Management System',
        'Client Onboarding & KYC',
        'Automated Reporting',
        'Risk Management Tools',
        'Multi-currency Support',
        'Mobile Trading App'
      ],
      technologies: ['React', 'Node.js', 'WebSockets', 'AWS', 'PostgreSQL', 'Redis'],
      results: [
        '80% reduction in manual processing time',
        '2x increase in client onboarding speed',
        'Integrated with Dar es Salaam Stock Exchange',
        'Processed over $50M in transactions'
      ],
      liveUrl: 'https://victoryfinancial.com',
      status: 'Live',
      year: '2024',
      challenges: 'Traditional brokerage operations were manual and time-consuming. Clients lacked real-time access to market data and portfolio information.',
      solutions: 'Developed a fully digital brokerage platform with real-time market data integration, automated trade processing, and comprehensive portfolio management tools.',
      client: 'Victory Financial Services'
    },
    {
      id: 'whatsapp-chatbot',
      name: 'WhatsApp Chat Bot',
      shortDescription: 'AI-powered customer engagement bot for automated conversations and lead qualification.',
      fullDescription: 'An intelligent chatbot integrated with WhatsApp Business API that provides 24/7 automated customer conversations, lead qualification, and seamless routing to human agents when needed.',
      detailedDescription: 'The NeoVam WhatsApp Chat Bot leverages cutting-edge AI and natural language processing to provide instant, personalized customer support. It handles everything from answering frequently asked questions to qualifying leads and scheduling appointments, freeing up human agents to focus on complex issues.',
      category: 'AI',
      icon: FiMessageCircle,
      image: '/images/products/chatbot.jpg',
      features: [
        '24/7 Automated Conversations',
        'Lead Qualification & Routing',
        'DSE Market Data Integration',
        'Multi-language Support',
        'Analytics & Insights Dashboard',
        'Seamless Human Handover',
        'Custom Workflow Builder',
        'Integration with CRM'
      ],
      technologies: ['Node.js', 'WhatsApp API', 'OpenAI', 'MongoDB', 'Redis', 'Docker'],
      results: [
        '24/7 customer support automation',
        '70% faster response times',
        'Automatic lead qualification and routing',
        '60% reduction in support tickets'
      ],
      liveUrl: 'https://neovam.com/chatbot',
      status: 'Live',
      year: '2024',
      challenges: 'Businesses struggled to provide 24/7 customer support and efficiently qualify leads. Manual responses were slow and inconsistent.',
      solutions: 'Built an AI-powered chatbot that automates customer conversations, qualifies leads, and routes complex queries to human agents, ensuring consistent and timely responses.',
      client: 'Various Clients'
    },
    {
      id: 'bulk-sms',
      name: 'Bulk SMS Platform',
      shortDescription: 'Marketing and broadcast messaging solution for businesses and community groups.',
      fullDescription: 'A powerful messaging platform that enables businesses to reach millions of customers through bulk SMS, promotional messaging, and communication tools.',
      detailedDescription: 'The NeoVam Bulk SMS Platform is a robust communication tool designed for businesses, NGOs, and community groups to send targeted messages to large audiences. With advanced segmentation, scheduling, and analytics capabilities, organizations can optimize their communication strategies and achieve better engagement rates.',
      category: 'Messaging',
      icon: FiZap,
      image: '/images/products/bulk-sms.jpg',
      features: [
        'Bulk SMS Sending',
        'Contact List Management',
        'Message Scheduling',
        'Advanced Segmentation',
        'Delivery Reports & Analytics',
        'Opt-out Management',
        'Template Library',
        'API Integration'
      ],
      technologies: ['React', 'Node.js', 'AWS SNS', 'PostgreSQL', 'Redis', 'Docker'],
      results: [
        'Millions of messages delivered',
        '99.9% delivery rate',
        'Real-time delivery tracking',
        '50% higher engagement rates'
      ],
      liveUrl: 'https://neovam.com/sms',
      status: 'Live',
      year: '2023',
      challenges: 'Organizations lacked a reliable and scalable platform for sending large volumes of messages. Existing solutions were expensive and lacked analytics.',
      solutions: 'Created a cost-effective SMS platform with advanced features for segmentation, scheduling, and real-time analytics, enabling organizations to optimize their communication strategies.',
      client: 'Various Organizations'
    },
    {
      id: 'stockex-pro',
      name: 'StockEx Pro',
      shortDescription: 'Full brokerage and HR suite for comprehensive financial operations management.',
      fullDescription: 'An enterprise-grade platform that combines full brokerage operations with HR management capabilities. Features order management, settlement processing, payroll integration, and comprehensive reporting for financial institutions.',
      detailedDescription: 'StockEx Pro is a comprehensive enterprise solution designed for financial institutions that need to manage both brokerage operations and human resources in a single platform. It streamlines everything from trade execution and settlement to employee management and payroll processing.',
      category: 'Fintech',
      icon: FiTrendingUp,
      image: '/images/products/stockex-pro.jpg',
      features: [
        'Order Management System',
        'Settlement Processing',
        'Payroll Integration',
        'HR Management Suite',
        'Comprehensive Reporting',
        'Compliance Monitoring',
        'Client Management',
        'Multi-entity Support'
      ],
      technologies: ['React', 'Java', 'Spring Boot', 'Oracle', 'AWS', 'Kubernetes'],
      results: [
        'End-to-end brokerage operations',
        'Real-time settlement processing',
        'Comprehensive HR management',
        '80% operational efficiency increase'
      ],
      liveUrl: 'https://stockexpro.com',
      status: 'In Development',
      year: '2025',
      challenges: 'Financial institutions used multiple disconnected systems for brokerage and HR operations, leading to inefficiencies and data inconsistencies.',
      solutions: 'Developed an integrated platform combining brokerage and HR management with real-time data synchronization and automated workflows.',
      client: 'Various Financial Institutions'
    },
    // ===== NEW: HADITHI APP =====
    {
      id: 'hadithi-app',
      name: 'Hadithi App',
      shortDescription: 'Storytelling platform for series episodes, single stories, and audio content with flexible payment options.',
      fullDescription: 'Hadithi App is a revolutionary storytelling platform that brings African stories to life. Users can enjoy series episodes, single stories, and audio content with flexible payment options including weekly, monthly, and per-episode subscriptions.',
      detailedDescription: 'Hadithi App is transforming how Africans consume stories by providing a modern, engaging platform with multiple content formats. Users can read text stories, listen to audio narratives, or watch video episodes - all in one app. The flexible payment system allows users to pay per episode, subscribe weekly, monthly, or annually, making stories accessible to everyone. The app features offline reading, bookmarks, personalized recommendations, and push notifications for new episodes.',
      category: 'Entertainment',
      icon: FiBookOpen,
      image: '/images/products/hadithi-app.jpg',
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
      client: 'Hadithi App Ltd'
    }
  ];

  // Get icon component
  const getIcon = (iconName) => {
    const icons = {
      FiBook, FiGrid, FiDollarSign, FiMessageCircle, FiZap, FiTrendingUp,
      FiCpu, FiCloud, FiShield, FiDatabase, FiLock, FiAward, FiBookOpen
    };
    return icons[iconName] || FiGrid;
  };

  // Get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'Live': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'In Development': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  useEffect(() => {
    // Find the product by id
    const foundProduct = allProducts.find(p => p.id === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Get related products (same category, excluding current)
      const related = allProducts
        .filter(p => p.id !== id && p.category === foundProduct.category)
        .slice(0, 3);
      setRelatedProducts(related);
    }
    
    setLoading(false);
  }, [id]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The product you're looking for doesn't exist.</p>
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-glow transition-all"
          >
            <FiArrowLeft />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = getIcon(product.icon);

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-50 dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate('/products')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-6 transition-colors"
        >
          <FiArrowLeft />
          Back to Products
        </button>

        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/products" className="text-gray-500 hover:text-primary-600">Products</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-primary-600">{product.name}</span>
        </nav>

        {/* Product Header */}
        <Reveal>
          <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Image/Icon Section */}
              <div className="lg:col-span-1 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-700 p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-aurora rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <IconComponent className="text-5xl text-white" />
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                      {product.year}
                    </span>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full text-xs font-medium text-primary-700 dark:text-primary-300">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="lg:col-span-2 p-8 md:p-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                  {product.fullDescription}
                </p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <FiUsers className="w-4 h-4 text-primary-600" />
                    <span>Client: {product.client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <FiCalendar className="w-4 h-4 text-primary-600" />
                    <span>Launched: {product.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <FiTag className="w-4 h-4 text-primary-600" />
                    <span>Category: {product.category}</span>
                  </div>
                </div>

                {product.liveUrl && (
                  <a
                    href={product.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all"
                  >
                    Visit Live Product
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Detailed Description */}
        <Reveal delay={100} className="mt-12">
          <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {product.detailedDescription || product.fullDescription}
            </p>
          </div>
        </Reveal>

        {/* Challenge & Solution */}
        {product.challenges && product.solutions && (
          <Reveal delay={150} className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                    <FiX className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Challenge</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {product.challenges}
                </p>
              </div>

              <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                    <FiCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Solution</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {product.solutions}
                </p>
              </div>
            </div>
          </Reveal>
        )}

        {/* Features */}
        <Reveal delay={200} className="mt-8">
          <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-primary-700/30 rounded-xl">
                  <FiCheck className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Technologies */}
        <Reveal delay={250} className="mt-8">
          <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {product.technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-gray-100 dark:bg-primary-700/30 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Results */}
        <Reveal delay={300} className="mt-8">
          <div className="bg-gradient-nav rounded-2xl shadow-lg p-8 md:p-10 text-white">
            <h2 className="text-2xl font-bold mb-6">Key Results</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.results.map((result, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <FiAward className="w-8 h-8 text-yellow-400" />
                  </div>
                  <p className="text-white/90 text-sm">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Payment Options for Hadithi App */}
        {product.id === 'hadithi-app' && (
          <Reveal delay={275} className="mt-8">
            <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-lg p-8 md:p-10 border-2 border-primary-200 dark:border-primary-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FiDollarSign className="w-6 h-6 text-primary-600" />
                Payment Options
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Flexible payment options designed to make stories accessible to everyone:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-primary-700/30 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                  <span className="text-xl font-bold text-primary-600 dark:text-primary-400">💰</span>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1">Pay Per Episode</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Pay only for what you read</p>
                </div>
                <div className="bg-gray-50 dark:bg-primary-700/30 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                  <span className="text-xl font-bold text-primary-600 dark:text-primary-400">📅</span>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1">Weekly Subscription</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Unlimited access for 1 week</p>
                </div>
                <div className="bg-gray-50 dark:bg-primary-700/30 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                  <span className="text-xl font-bold text-primary-600 dark:text-primary-400">📆</span>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1">Monthly Subscription</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Unlimited access for 1 month</p>
                </div>
                <div className="bg-gray-50 dark:bg-primary-700/30 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                  <span className="text-xl font-bold text-primary-600 dark:text-primary-400">🌟</span>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1">Yearly Subscription</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Best value - unlimited access</p>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <Reveal delay={350} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Related Products
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((related, index) => {
                const RelatedIcon = getIcon(related.icon);
                return (
                  <Link
                    key={related.id}
                    to={`/products/${related.id}`}
                    className="group bg-white dark:bg-primary-800 rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="w-12 h-12 bg-gradient-aurora rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <RelatedIcon className="text-lg text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                        {related.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {related.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-primary-600 dark:text-primary-400">
                        <span className="text-sm font-medium">View Product</span>
                        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        )}

        {/* CTA Section */}
        <Reveal delay={400} className="mt-12">
          <div className="bg-gradient-nav rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Build Your Product?
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our proven development approach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                Explore Services →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ProductDetail;
