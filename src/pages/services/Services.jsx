// src/pages/services/Services.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiArrowRight, FiCpu, FiCloud, FiDollarSign, FiCode, FiShield,
  FiSearch, FiX, FiCheck, FiTrendingUp, FiUsers, FiClock,
  FiBriefcase, FiGlobe, FiSmartphone, FiServer, FiZap, FiLayers,
  FiAward, FiCheckCircle, FiStar, FiPackage, FiGitBranch
} from 'react-icons/fi';
import Reveal from './Reveal';

const Services = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // ===== ALL SERVICES (19 services) =====
  const servicesData = [
    // ----- STRATEGY (5 services) -----
    {
      id: 'product-strategy',
      title: 'Product Strategy',
      shortDescription: 'Your product strategy from concept to launch with market-driven approach.',
      fullDescription: 'Strategic product development from concept to launch with market-driven approach. We help you define product vision, roadmap, and go-to-market strategy.',
      icon: FiTrendingUp,
      category: 'Strategy',
      features: [
        'Product Roadmapping',
        'MVP Development',
        'Market Validation',
        'Go-to-Market Strategy',
        'Product Vision Definition',
        'Competitive Analysis'
      ],
      technologies: ['Product Management', 'Market Research', 'Agile', 'Lean Startup'],
      benefits: [
        'Clear product vision and direction',
        'Faster time-to-market',
        'Market-aligned product features',
        'Reduced development risk'
      ]
    },
    {
      id: 'business-process-automation',
      title: 'Business Process Automation',
      shortDescription: 'Automate & Accelerate your business operations with intelligent automation.',
      fullDescription: 'Streamline your business operations with intelligent automation solutions. We identify repetitive tasks and implement automation to increase efficiency and reduce errors.',
      icon: FiZap,
      category: 'Strategy',
      features: [
        'Workflow Automation',
        'Business Process Mapping',
        'RPA Implementation',
        'Integration with Existing Systems',
        'Process Optimization',
        'Automation Analytics'
      ],
      technologies: ['RPA', 'Workflow Engines', 'Integration Platforms', 'AI'],
      benefits: [
        'Reduce operational costs by 30-50%',
        'Eliminate manual errors',
        'Faster process execution',
        'Better resource utilization'
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      shortDescription: 'Innovate & Adapt with comprehensive digital transformation solutions.',
      fullDescription: 'Transform your business with comprehensive digital solutions. We help you modernize your operations, enhance customer experience, and stay competitive in the digital age.',
      icon: FiGlobe,
      category: 'Strategy',
      features: [
        'Digital Strategy Development',
        'Legacy System Modernization',
        'Customer Experience Design',
        'Digital Maturity Assessment',
        'Change Management',
        'Innovation Roadmap'
      ],
      technologies: ['Cloud', 'AI', 'IoT', 'Digital Platforms'],
      benefits: [
        'Enhanced customer experience',
        'Improved operational efficiency',
        'New revenue streams',
        'Competitive advantage'
      ]
    },
    {
      id: 'architecture-scalability',
      title: 'Architecture & Scalability Planning',
      shortDescription: 'Robust Infrastructure design for scalable, future-proof systems.',
      fullDescription: 'Design robust infrastructure that ensures your systems scale with your business. We help you plan and implement scalable architecture that supports growth and handles increased demand.',
      icon: FiLayers,
      category: 'Strategy',
      features: [
        'Microservices Architecture',
        'Cloud Architecture Design',
        'Scalability Planning',
        'Performance Optimization',
        'System Integration',
        'Infrastructure as Code'
      ],
      technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform'],
      benefits: [
        'Handle 10x traffic growth',
        'Reduce infrastructure costs',
        'Improved system reliability',
        'Faster deployment cycles'
      ]
    },
    {
      id: 'technical-due-diligence',
      title: 'Technical Due Diligence',
      shortDescription: 'Expert Analysis for technology assessment and risk mitigation.',
      fullDescription: 'Expert analysis and assessment of your technology stack and development processes. We help you identify risks, evaluate code quality, and ensure your technology investments are sound.',
      icon: FiCheckCircle,
      category: 'Strategy',
      features: [
        'Code Reviews',
        'Security Audits',
        'Performance Assessment',
        'Technical Documentation',
        'Architecture Evaluation',
        'Risk Assessment'
      ],
      technologies: ['Security Tools', 'Code Analysis', 'Performance Testing'],
      benefits: [
        'Identify technology risks',
        'Improve code quality',
        'Ensure regulatory compliance',
        'Optimize technology investments'
      ]
    },

    // ----- DEVELOPMENT (6 services) -----
    {
      id: 'custom-software-development',
      title: 'Custom Software Development',
      shortDescription: 'Tailored Solutions built specifically for your business needs.',
      fullDescription: 'Tailored software solutions built specifically for your business needs. From concept to deployment, we deliver high-quality, scalable applications that drive business growth.',
      icon: FiCode,
      category: 'Development',
      features: [
        'Enterprise Solutions',
        'Business Systems',
        'Custom Applications',
        'Legacy Modernization',
        'Digital Banking Platforms',
        'Core Banking Integration'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'Spring Boot', 'Django'],
      benefits: [
        'Solutions tailored to your needs',
        'Scalable and maintainable code',
        'Rapid development and deployment',
        'Modern technology stack'
      ]
    },
    {
      id: 'web-development',
      title: 'Web Development',
      shortDescription: 'Dynamic Web Apps with responsive, engaging user experiences.',
      fullDescription: 'Dynamic, responsive web applications that engage users and drive business growth. We build modern web applications using the latest technologies and best practices.',
      icon: FiGlobe,
      category: 'Development',
      features: [
        'Single Page Applications',
        'Progressive Web Apps',
        'Responsive Design',
        'API Integration',
        'E-Commerce Platforms',
        'Content Management Systems'
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
      benefits: [
        'Fast loading websites',
        'Mobile-responsive design',
        'SEO-friendly architecture',
        'Excellent user experience'
      ]
    },
    {
      id: 'app-development',
      title: 'App Development',
      shortDescription: 'App Innovation for iOS and Android platforms with seamless UX.',
      fullDescription: 'Innovative mobile applications for iOS and Android platforms with seamless user experiences. We build native and cross-platform apps that delight users and drive business results.',
      icon: FiSmartphone,
      category: 'Development',
      features: [
        'Native iOS Development',
        'Native Android Development',
        'React Native Apps',
        'Cross-Platform Solutions',
        'Mobile UX Design',
        'App Store Optimization'
      ],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'iOS', 'Android'],
      benefits: [
        'Reach customers on mobile',
        'Seamless user experience',
        'App Store ready products',
        'Scalable mobile architecture'
      ]
    },
    {
      id: 'enterprise-software',
      title: 'Enterprise Software Development',
      shortDescription: 'Business Systems for complex enterprise-scale applications.',
      fullDescription: 'Scalable enterprise solutions that streamline operations and improve business efficiency. We build robust, secure, and scalable enterprise applications that handle complex business processes.',
      icon: FiServer,
      category: 'Development',
      features: [
        'Business Systems',
        'Digital Banking Platforms',
        'Core Banking Integration',
        'Legacy Modernization',
        'Enterprise Integration',
        'Compliance & Security'
      ],
      technologies: ['Java', '.NET', 'Spring Boot', 'Oracle', 'Microservices'],
      benefits: [
        'Handle enterprise-scale workloads',
        'Secure and compliant systems',
        'Integration with existing systems',
        'Future-proof architecture'
      ]
    },
    {
      id: 'devops',
      title: 'DevOps',
      shortDescription: 'Infrastructure As Code for reliable, automated operations.',
      fullDescription: 'Infrastructure as Code solutions that automate deployment and ensure reliable operations. We help you implement DevOps practices that accelerate delivery and improve system reliability.',
      icon: FiGitBranch,
      category: 'Development',
      features: [
        'CI/CD Pipelines',
        'Kubernetes Orchestration',
        'Infrastructure Automation',
        'Cloud Optimization',
        'Monitoring & Alerting',
        'Security Automation'
      ],
      technologies: ['Jenkins', 'GitHub Actions', 'Kubernetes', 'Docker', 'Terraform', 'AWS'],
      benefits: [
        'Faster deployment cycles',
        'Reduced manual errors',
        'Improved system reliability',
        'Cost optimization'
      ]
    },
    {
      id: 'software-qa-testing',
      title: 'Software QA Testing',
      shortDescription: 'Reliable Software through comprehensive quality assurance.',
      fullDescription: 'Comprehensive quality assurance to ensure reliable, bug-free software delivery. We provide end-to-end testing services that cover all aspects of your application.',
      icon: FiShield,
      category: 'Development',
      features: [
        'Automated Testing',
        'Performance Testing',
        'Security Testing',
        'Manual QA',
        'Test Automation Frameworks',
        'Continuous Testing'
      ],
      technologies: ['Selenium', 'Jest', 'Cypress', 'JMeter', 'Postman'],
      benefits: [
        'Bug-free software delivery',
        'Improved software quality',
        'Faster release cycles',
        'Reduced production issues'
      ]
    },

    // ----- TECH STAFFING (3 services) -----
    {
      id: 'dedicated-development-team',
      title: 'Dedicated Development Team',
      shortDescription: 'Extended Team Power with dedicated developers for your projects.',
      fullDescription: 'Extended team power with dedicated developers who integrate seamlessly with your workflow. We provide skilled developers who work as an extension of your team.',
      icon: FiUsers,
      category: 'Staffing',
      features: [
        'Remote Development Teams',
        'Dedicated Engineers',
        'Agile Development',
        'Continuous Delivery',
        'Team Scaling',
        'Skill Matching'
      ],
      technologies: ['Full-Stack', 'Frontend', 'Backend', 'Mobile', 'DevOps', 'QA'],
      benefits: [
        'Access to top talent',
        'Cost-effective scaling',
        'Seamless integration',
        'Flexible team size'
      ]
    },
    {
      id: 'rnd-center-establishment',
      title: 'Establishment of R&D Center',
      shortDescription: 'Empowering Innovation with dedicated research and development centers.',
      fullDescription: 'Empower innovation with dedicated research and development centers. We help you establish R&D centers that drive innovation and create competitive advantage.',
      icon: FiAward,
      category: 'Staffing',
      features: [
        'Innovation Labs',
        'Product Incubation',
        'Research Partnerships',
        'Technology Scouting',
        'Prototype Development',
        'IP Creation'
      ],
      technologies: ['Emerging Technologies', 'AI Research', 'Blockchain', 'IoT'],
      benefits: [
        'Drive innovation',
        'Create IP and patents',
        'Attract top research talent',
        'Competitive advantage'
      ]
    },
    {
      id: 'staff-augmentation',
      title: 'Staff Augmentation',
      shortDescription: 'Agile Staffing solutions for IT recruiting and team scaling.',
      fullDescription: 'Agile staffing solutions to quickly scale your development capabilities. We provide skilled professionals who fill skill gaps and help you deliver projects on time.',
      icon: FiBriefcase,
      category: 'Staffing',
      features: [
        'IT Recruiting',
        'Contract Staffing',
        'Skill Gap Filling',
        'Project-Based Hiring',
        'Talent Acquisition',
        'Workforce Planning'
      ],
      technologies: ['All Technologies', 'Specialized Skills', 'Leadership'],
      benefits: [
        'Fill skill gaps quickly',
        'Project-based hiring',
        'Access to specialized skills',
        'Flexible workforce'
      ]
    },

    // ----- AI & ML (1 service) -----
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      shortDescription: 'Harness the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions.',
      fullDescription: 'Our AI and Machine Learning solutions transform raw data into actionable intelligence. We build custom models that learn from your data to automate complex decisions, predict outcomes, and uncover hidden patterns.',
      icon: FiCpu,
      category: 'AI',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Automated Decision Systems',
        'Chatbot & Virtual Assistant Development',
        'AI-Powered Data Processing & Analysis'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'LangChain'],
      benefits: [
        'Increase operational efficiency by up to 40%',
        'Reduce manual errors and processing time',
        'Gain competitive advantage through data insights'
      ]
    },

    // ----- CLOUD (1 service) -----
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      shortDescription: 'Scale your business with secure, reliable cloud infrastructure and services.',
      fullDescription: 'Our cloud solutions help you modernize your infrastructure, reduce costs, and scale seamlessly. From migration to management, we ensure your cloud journey is smooth and secure.',
      icon: FiCloud,
      category: 'Cloud',
      features: [
        'Cloud Migration Strategy & Execution',
        'Infrastructure as a Service (IaaS)',
        'DevOps & CI/CD Pipeline Setup',
        'Cloud Security & Compliance',
        'Hybrid Cloud Solutions',
        'Cost Optimization & Management'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
      benefits: [
        'Reduce IT infrastructure costs by up to 30%',
        'Scale resources on-demand',
        'Improve system reliability and uptime'
      ]
    },

    // ----- FINTECH (2 services) -----
    {
      id: 'fintech',
      title: 'Fintech Solutions',
      shortDescription: 'Revolutionary financial technology solutions for modern banking, payments, and financial services.',
      fullDescription: 'We build secure, scalable fintech platforms that transform how financial services are delivered. From digital banking to trading platforms, our solutions are designed for the future of finance.',
      icon: FiDollarSign,
      category: 'Fintech',
      features: [
        'Digital Banking Platforms',
        'Payment Processing Systems',
        'Blockchain Integration',
        'Risk Management Systems',
        'Trading & Investment Platforms',
        'Mobile Wallet Development'
      ],
      technologies: ['React Native', 'Node.js', 'Blockchain', 'Microservices', 'AWS'],
      benefits: [
        'Streamline financial operations',
        'Enhance customer experience with digital-first solutions',
        'Ensure regulatory compliance'
      ]
    },
    // ===== NEW: FUND MANAGEMENT SYSTEMS =====
    {
      id: 'fund-management-systems',
      title: 'Fund Management Systems',
      shortDescription: 'Comprehensive investment and fund management platforms for financial institutions.',
      fullDescription: 'Our Fund Management Systems provide end-to-end solutions for managing investment funds, portfolios, and client assets. From client onboarding to portfolio tracking and reporting, our platforms streamline fund management operations with enterprise-grade security and compliance.',
      icon: FiDollarSign,
      category: 'Fintech',
      features: [
        'Client Onboarding & KYC',
        'Portfolio Management',
        'Fund Performance Tracking',
        'Investment Analytics',
        'Automated Reporting',
        'Risk Management Tools',
        'Multi-currency Support',
        'Compliance Monitoring'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'WebSockets', 'Redis'],
      benefits: [
        'Streamline fund management operations',
        'Real-time portfolio tracking',
        'Enhanced client reporting',
        'Regulatory compliance',
        'Improved investment decisions'
      ]
    },

    // ----- CYBERSECURITY (1 service) -----
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      shortDescription: 'Protect your business from evolving cyber threats with comprehensive security solutions.',
      fullDescription: 'Our cybersecurity services protect your business from evolving cyber threats. We provide comprehensive security assessments, monitoring, and incident response to keep your data and systems safe.',
      icon: FiShield,
      category: 'Security',
      features: [
        'Security Assessments & Audits',
        'Penetration Testing',
        'Security Monitoring & Incident Response',
        'Compliance & Data Protection',
        'Vulnerability Management'
      ],
      technologies: ['Nessus', 'Wireshark', 'SIEM', 'Firewalls', 'Encryption'],
      benefits: [
        'Protect your business from cyber threats',
        'Ensure regulatory compliance',
        'Maintain customer trust and confidence'
      ]
    }
  ];

  // Categories in order
  const categoryOrder = ['Strategy', 'Development', 'Staffing', 'AI', 'Cloud', 'Fintech', 'Security'];
  const categories = ['All', ...categoryOrder.filter(c => 
    servicesData.some(s => s.category === c)
  )];

  // Filter services
  const filteredServices = servicesData.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Category colors
  const getCategoryColor = (category) => {
    const colors = {
      'Strategy': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
      'Development': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      'Staffing': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
      'AI': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
      'Cloud': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
      'Fintech': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
      'Security': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-700/30 dark:text-gray-300';
  };

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-50 dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="section-title text-gray-900 dark:text-white mb-4">
              Our Services
            </h1>
            <p className="section-subtitle text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business operations and drive sustainable growth.
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
                placeholder="Search services..."
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
            <div className="flex gap-2 flex-wrap justify-center">
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
          Showing {filteredServices.length} of {servicesData.length} services
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Reveal key={service.id} delay={index * 80}>
                  <div 
                    className="group relative bg-white dark:bg-primary-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer p-6"
                    onClick={() => navigate(`/services/${service.id}`)}
                  >
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(service.category)}`}>
                        {service.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-aurora rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="text-xl text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="card-title text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="card-text text-gray-600 dark:text-gray-400 mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-primary-700/30 rounded-full text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-xs px-2 py-1 text-primary-600 dark:text-primary-400">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-primary-600 dark:text-primary-400 font-medium group-hover:underline flex items-center gap-1">
                        Learn More
                        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-xs text-gray-400">
                        {service.technologies.length} techs
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No services found</h3>
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
          <div className="bg-gradient-nav rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="section-title text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="section-subtitle text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can accelerate your digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Start Your Project
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
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

export default Services;