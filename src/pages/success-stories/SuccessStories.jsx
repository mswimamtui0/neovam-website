// src/pages/success-stories/SuccessStories.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiArrowRight, FiUsers, FiTrendingUp, FiClock, FiCheck, FiStar,
  FiSearch, FiX, FiFilter, FiAward, FiBriefcase, FiCalendar,
  FiMessageCircle, FiBook, FiDollarSign, FiGrid, FiZap
} from 'react-icons/fi';
// Line 9 - CHANGE TO:
import Reveal from './Reveal';

const SuccessStories = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Success stories data
  const stories = [
    {
      id: 'victory-financial',
      title: 'Victory Financial Services',
      category: 'Fintech',
      client: 'Victory Financial Services Ltd',
      icon: FiDollarSign,
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
      image: '/images/success/victory-financial.jpg'
    },
    {
      id: 'african-western-education',
      title: 'African Western Education',
      category: 'Education',
      client: 'African Western Education',
      icon: FiBook,
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
      image: '/images/success/awe.jpg'
    },
    {
      id: 'myshopii',
      title: 'Myshopii - E-Commerce Marketplace',
      category: 'E-Commerce',
      client: 'Myshopii Ltd',
      icon: FiGrid,
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
      image: '/images/success/myshopii.jpg'
    },
    {
      id: 'whatsapp-chatbot',
      title: 'WhatsApp Chat Bot',
      category: 'AI',
      client: 'Various Clients',
      icon: FiMessageCircle,
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
      image: '/images/success/chatbot.jpg'
    },
    {
      id: 'bulk-sms',
      title: 'Bulk SMS Platform',
      category: 'Messaging',
      client: 'Various Organizations',
      icon: FiZap,
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
      image: '/images/success/bulk-sms.jpg'
    },
    {
      id: 'stockex-pro',
      title: 'StockEx Pro',
      category: 'Fintech',
      client: 'Various Financial Institutions',
      icon: FiTrendingUp,
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
      image: '/images/success/stockex-pro.jpg'
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(stories.map(s => s.category))];

  // Filter stories based on search and category
  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          story.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          story.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get icon component
  const getIcon = (icon) => {
    return icon || FiStar;
  };

  // Get category color
  const getCategoryColor = (category) => {
    const colors = {
      'Fintech': 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30',
      'Education': 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30',
      'E-Commerce': 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30',
      'AI': 'text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30',
      'Messaging': 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30'
    };
    return colors[category] || 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/30';
  };

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-50 dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-aurora rounded-2xl flex items-center justify-center">
                <FiAward className="text-3xl text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real results from real projects. See how we've helped businesses transform across Africa.
            </p>
          </div>
        </Reveal>

        {/* Stats Banner */}
        <Reveal delay={50}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white dark:bg-primary-800 rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{stories.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Success Stories</div>
            </div>
            <div className="bg-white dark:bg-primary-800 rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{new Set(stories.map(s => s.category)).size}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Industries Served</div>
            </div>
            <div className="bg-white dark:bg-primary-800 rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div className="bg-white dark:bg-primary-800 rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
            </div>
          </div>
        </Reveal>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-primary-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <FiX className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter - Desktop */}
            <div className="hidden md:flex gap-2 flex-wrap">
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

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-white dark:bg-primary-800 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
            >
              <FiFilter />
              Filter
            </button>
          </div>

          {/* Mobile Filter Dropdown */}
          {isFilterOpen && (
            <div className="md:hidden mt-4 p-4 bg-white dark:bg-primary-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-primary text-white'
                        : 'bg-gray-100 dark:bg-primary-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Showing {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'}
        </div>

        {/* Stories Grid */}
        {filteredStories.length > 0 ? (
          <div className="space-y-8">
            {filteredStories.map((story, index) => {
              const IconComponent = getIcon(story.icon);
              return (
                <Reveal key={story.id} delay={index * 100}>
                  <div 
                    className="group bg-white dark:bg-primary-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                    onClick={() => navigate(`/success-stories/${story.id}`)}
                  >
                    <div className="p-6 md:p-8">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-aurora rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="text-xl text-white" />
                          </div>
                          <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(story.category)}`}>
                              {story.category}
                            </span>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                              {story.title}
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <FiBriefcase className="inline w-4 h-4 mr-1" />
                              {story.client}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <FiCalendar className="w-4 h-4" />
                          <span>{story.year}</span>
                        </div>
                      </div>

                      {/* Challenge & Solution Preview */}
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/20">
                          <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm font-semibold mb-1">
                            <span>⚠️</span> Challenge
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                            {story.challenge}
                          </p>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/20">
                          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-semibold mb-1">
                            <span>✅</span> Solution
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                            {story.solution}
                          </p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mt-4 flex flex-wrap gap-3">
                        {story.results.slice(0, 3).map((result, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-full">
                            <FiCheck className="w-3 h-3" />
                            {result}
                          </div>
                        ))}
                        {story.results.length > 3 && (
                          <span className="text-xs text-gray-500 dark:text-gray-400 px-3 py-1.5">
                            +{story.results.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Quote */}
                      {story.quote && (
                        <div className="mt-4 p-4 bg-gray-50 dark:bg-primary-700/30 rounded-xl border-l-4 border-primary-600">
                          <p className="text-sm text-gray-600 dark:text-gray-400 italic">"{story.quote}"</p>
                        </div>
                      )}

                      {/* Footer */}
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {story.technologies.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-primary-700/30 rounded-full text-gray-600 dark:text-gray-400">
                              {tech}
                            </span>
                          ))}
                          {story.technologies.length > 3 && (
                            <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                              +{story.technologies.length - 3}
                            </span>
                          )}
                        </div>
                        <span className="text-primary-600 dark:text-primary-400 font-medium group-hover:underline flex items-center gap-1">
                          Read Full Story
                          <FiArrowRight className="w-4 h-4" />
                        </span>
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
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No stories found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
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
          <div className="bg-gradient-nav rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <FiStar className="text-2xl text-yellow-400" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to Be Our Next Success Story?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar results. Get started today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Start Your Project
                <FiArrowRight className="inline ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                View Our Products →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default SuccessStories;
