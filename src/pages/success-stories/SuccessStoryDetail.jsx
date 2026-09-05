// src/pages/success-stories/SuccessStoryDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCheck, FiTrendingUp, FiUsers, FiCalendar, FiTag } from 'react-icons/fi';
import Reveal from '../../components/Reveal';

const SuccessStoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  // Success stories data (same as in SuccessStories.jsx)
  const storiesData = {
    'victory-financial': {
      id: 'victory-financial',
      title: 'Victory Financial Services',
      category: 'Fintech',
      client: 'Victory Financial Services Ltd',
      challenge: 'Traditional brokerage operations were manual and time-consuming. Clients lacked real-time access to market data and portfolio information. The team spent hours on manual data entry and reconciliation.',
      solution: 'Developed a fully digital brokerage platform with real-time DSE market data integration, automated trade processing, and comprehensive portfolio management tools.',
      results: [
        '80% reduction in manual processing time',
        '2x increase in client onboarding speed',
        'Integrated with Dar es Salaam Stock Exchange',
        'Processed over $50M in transactions'
      ],
      technologies: ['React', 'Node.js', 'WebSockets', 'AWS', 'PostgreSQL'],
      year: '2024',
      quote: 'NeoVam transformed our brokerage operations completely. We can now serve clients faster and more efficiently than ever before.',
    },
    'african-western-education': {
      id: 'african-western-education',
      title: 'African Western Education',
      category: 'Education',
      client: 'African Western Education',
      challenge: 'Educational agencies struggled with fragmented systems for student management, application tracking, and partner communication. Manual processes led to delays and errors.',
      solution: 'Built a unified platform that centralizes all agency operations, automates workflows, and provides real-time visibility into student progress and application status.',
      results: [
        '1,000+ students managed efficiently',
        '50% faster application processing time',
        'Real-time partner institution updates',
        '95% client satisfaction rate'
      ],
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'AWS'],
      year: '2023',
      quote: 'The platform has completely streamlined our operations. We can now focus on what matters most - helping students achieve their dreams.',
    },
    'myshopii': {
      id: 'myshopii',
      title: 'Myshopii - E-Commerce Marketplace',
      category: 'E-Commerce',
      client: 'Myshopii Ltd',
      challenge: 'Small businesses lacked an accessible platform to sell products online. Existing solutions were either too complex or expensive for African entrepreneurs.',
      solution: 'Created a user-friendly marketplace with simplified vendor onboarding, integrated logistics, and affordable pricing tailored for the African market.',
      results: [
        '100+ vendors onboarded in first month',
        'Real-time inventory management',
        'Integrated payment gateway',
        '30% month-over-month growth'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      year: '2023',
      quote: 'Myshopii has given our business a platform to reach customers across Africa. The growth has been incredible.',
    },
    'whatsapp-chatbot': {
      id: 'whatsapp-chatbot',
      title: 'WhatsApp Chat Bot',
      category: 'AI',
      client: 'Various Clients',
      challenge: 'Businesses struggled to provide 24/7 customer support and efficiently qualify leads. Manual responses were slow and inconsistent.',
      solution: 'Built an AI-powered chatbot that automates customer conversations, qualifies leads, and routes complex queries to human agents.',
      results: [
        '24/7 customer support automation',
        '70% faster response times',
        'Automatic lead qualification and routing',
        '60% reduction in support tickets'
      ],
      technologies: ['Node.js', 'WhatsApp API', 'OpenAI', 'MongoDB', 'Redis'],
      year: '2024',
      quote: 'The chatbot has revolutionized how we handle customer inquiries. Our response times have improved dramatically.',
    },
    'bulk-sms': {
      id: 'bulk-sms',
      title: 'Bulk SMS Platform',
      category: 'Messaging',
      client: 'Various Organizations',
      challenge: 'Organizations lacked a reliable and scalable platform for sending large volumes of messages. Existing solutions were expensive and lacked analytics.',
      solution: 'Created a cost-effective SMS platform with advanced features for segmentation, scheduling, and real-time analytics.',
      results: [
        'Millions of messages delivered',
        '99.9% delivery rate',
        'Real-time delivery tracking',
        '50% higher engagement rates'
      ],
      technologies: ['React', 'Node.js', 'AWS SNS', 'PostgreSQL', 'Redis'],
      year: '2023',
      quote: 'The Bulk SMS platform has transformed how we communicate with our customers. The analytics are invaluable.',
    },
    'stockex-pro': {
      id: 'stockex-pro',
      title: 'StockEx Pro',
      category: 'Fintech',
      client: 'Various Financial Institutions',
      challenge: 'Financial institutions used multiple disconnected systems for brokerage and HR operations, leading to inefficiencies and data inconsistencies.',
      solution: 'Developed an integrated platform combining brokerage and HR management with real-time data synchronization and automated workflows.',
      results: [
        'End-to-end brokerage operations',
        'Real-time settlement processing',
        'Comprehensive HR management',
        '80% operational efficiency increase'
      ],
      technologies: ['React', 'Java', 'Spring Boot', 'Oracle', 'AWS', 'Kubernetes'],
      year: '2025',
      quote: 'StockEx Pro has unified our operations. We now have a single source of truth for all our brokerage and HR data.',
    }
  };

  useEffect(() => {
    const found = storiesData[id];
    if (found) {
      setStory(found);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading story...</p>
        </div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📖</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Story Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The success story you're looking for doesn't exist.</p>
          <Link 
            to="/success-stories" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-glow transition-all"
          >
            <FiArrowLeft />
            Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-50 dark:bg-primary-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate('/success-stories')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-6 transition-colors"
        >
          <FiArrowLeft />
          Back to Stories
        </button>

        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/success-stories" className="text-gray-500 hover:text-primary-600">Success Stories</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-primary-600">{story.title}</span>
        </nav>

        {/* Main Content */}
        <Reveal>
          <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-lg p-8 md:p-10">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium mb-2">
                  {story.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {story.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Client: {story.client}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FiCalendar className="w-4 h-4" />
                <span>{story.year}</span>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-100 dark:border-red-900/20">
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm font-semibold mb-2">
                  <span className="text-xl">⚠️</span> Challenge
                </div>
                <p className="text-gray-700 dark:text-gray-300">{story.challenge}</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-100 dark:border-green-900/20">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-semibold mb-2">
                  <span className="text-xl">✅</span> Solution
                </div>
                <p className="text-gray-700 dark:text-gray-300">{story.solution}</p>
              </div>
            </div>

            {/* Quote */}
            {story.quote && (
              <div className="mt-6 bg-primary-50 dark:bg-primary-900/30 rounded-xl p-6 border-l-4 border-primary-600">
                <p className="text-gray-700 dark:text-gray-300 italic text-lg">"{story.quote}"</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">— {story.client}</p>
              </div>
            )}

            {/* Results */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FiTrendingUp className="w-5 h-5 text-primary-600" />
                Key Results
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {story.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-gray-50 dark:bg-primary-700/30 rounded-xl">
                    <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FiUsers className="w-5 h-5 text-primary-600" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {story.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 dark:bg-primary-700/30 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all"
              >
                Start Your Project
              </Link>
              <Link
                to="/products"
                className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all"
              >
                View Our Products →
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Related Content */}
        <Reveal delay={150} className="mt-8">
          <div className="bg-gradient-nav rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Ready to Write Your Success Story?</h3>
            <p className="text-indigo-100 mb-6">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:shadow-2xl transition-all"
            >
              Contact Us Today
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default SuccessStoryDetail;
