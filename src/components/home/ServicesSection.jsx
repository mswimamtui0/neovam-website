import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiArrowRight, FiCpu, FiCloud, FiDollarSign, FiCode, FiShield,
  FiTrendingUp, FiZap, FiGlobe, FiSmartphone, FiDatabase, FiServer,
  FiLayers, FiBriefcase, FiUsers, FiAward, FiCheckCircle, FiStar
} from 'react-icons/fi';
import Reveal from './Reveal';
import WaveDivider from './WaveDivider';

const ServicesSection = () => {
  const services = [
    {
      icon: FiCpu,
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions.',
      points: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Systems'],
      tag: 'AI'
    },
    {
      icon: FiCloud,
      title: 'Cloud Solutions',
      description: 'Scale your business with secure, reliable cloud infrastructure and services that grow with your needs.',
      points: ['Cloud Migration', 'Infrastructure as a Service', 'DevOps & CI/CD', 'Cloud Security'],
      tag: 'Cloud'
    },
    {
      icon: FiDollarSign,
      title: 'Fintech Solutions',
      description: 'Revolutionary financial technology solutions for modern banking, payments, and financial services.',
      points: ['Digital Banking Platforms', 'Payment Processing', 'Blockchain Integration', 'Risk Management Systems'],
      tag: 'Fintech'
    },
    {
      icon: FiCode,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built specifically for your business needs and requirements.',
      points: ['Enterprise Solutions', 'Business Process Automation', 'Digital Transformation', 'Architecture & Scalability'],
      tag: 'Development'
    },
    {
      icon: FiGlobe,
      title: 'Web Development',
      description: 'Dynamic, responsive web applications that engage users and drive business growth.',
      points: ['Single Page Applications', 'Progressive Web Apps', 'Responsive Design', 'API Integration'],
      tag: 'Development'
    },
    {
      icon: FiSmartphone,
      title: 'App Development',
      description: 'Innovative mobile applications for iOS and Android platforms with seamless user experiences.',
      points: ['Native iOS Development', 'Native Android', 'React Native', 'Cross-Platform Solutions'],
      tag: 'Development'
    },
    {
      icon: FiServer,
      title: 'Enterprise Software Development',
      description: 'Scalable enterprise solutions that streamline operations and improve business efficiency.',
      points: ['Business Systems', 'Digital Banking Platforms', 'Core Banking Integration', 'Legacy Modernization'],
      tag: 'Enterprise'
    },
    {
      icon: FiZap,
      title: 'DevOps',
      description: 'Infrastructure as Code solutions that automate deployment and ensure reliable operations.',
      points: ['CI/CD Pipelines', 'Kubernetes Orchestration', 'Infrastructure Automation', 'Cloud Optimization'],
      tag: 'DevOps'
    },
    {
      icon: FiShield,
      title: 'Software QA Testing',
      description: 'Comprehensive quality assurance to ensure reliable, bug-free software delivery.',
      points: ['Automated Testing', 'Performance Testing', 'Security Testing', 'Manual QA'],
      tag: 'QA'
    },
    {
      icon: FiUsers,
      title: 'Dedicated Development Team',
      description: 'Extended team power with dedicated developers who integrate seamlessly with your workflow.',
      points: ['Remote Development Teams', 'Dedicated Engineers', 'Agile Development', 'Continuous Delivery'],
      tag: 'Staffing'
    },
    {
      icon: FiBriefcase,
      title: 'Staff Augmentation',
      description: 'Agile staffing solutions to quickly scale your development capabilities.',
      points: ['IT Recruiting', 'Contract Staffing', 'Skill Gap Filling', 'Project-Based Hiring'],
      tag: 'Staffing'
    },
    {
      icon: FiAward,
      title: 'R&D Center Establishment',
      description: 'Empower innovation with dedicated research and development centers.',
      points: ['Innovation Labs', 'Product Incubation', 'Research Partnerships', 'Technology Scouting'],
      tag: 'Staffing'
    },
    {
      icon: FiTrendingUp,
      title: 'Product Strategy',
      description: 'Strategic product development from concept to launch with market-driven approach.',
      points: ['Product Roadmapping', 'MVP Development', 'Market Validation', 'Go-to-Market Strategy'],
      tag: 'Strategy'
    },
    {
      icon: FiLayers,
      title: 'Architecture & Scalability Planning',
      description: 'Robust infrastructure design that ensures your systems scale with your business.',
      points: ['Microservices Architecture', 'Cloud Architecture', 'Scalability Planning', 'Performance Optimization'],
      tag: 'Strategy'
    },
    {
      icon: FiCheckCircle,
      title: 'Technical Due Diligence',
      description: 'Expert analysis and assessment of your technology stack and development processes.',
      points: ['Code Reviews', 'Security Audits', 'Performance Assessment', 'Technical Documentation'],
      tag: 'Strategy'
    }
  ];

  // Group services by category
  const groupedServices = {
    'AI': services.filter(s => s.tag === 'AI'),
    'Fintech': services.filter(s => s.tag === 'Fintech'),
    'Cloud': services.filter(s => s.tag === 'Cloud'),
    'Development': services.filter(s => s.tag === 'Development'),
    'Enterprise': services.filter(s => s.tag === 'Enterprise'),
    'DevOps': services.filter(s => s.tag === 'DevOps'),
    'QA': services.filter(s => s.tag === 'QA'),
    'Staffing': services.filter(s => s.tag === 'Staffing'),
    'Strategy': services.filter(s => s.tag === 'Strategy')
  };

  const tagColors = {
    'AI': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    'Fintech': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    'Cloud': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
    'Development': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    'Enterprise': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
    'DevOps': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
    'QA': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
    'Staffing': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
    'Strategy': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-gradient-nav">
      {/* Soft white glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[560px] h-72 rounded-full bg-white/10 blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '0.6s' }}></div>

      {/* White wave transition at top */}
      <div className="absolute top-0 left-0 w-full rotate-180">
        <WaveDivider colors={['#ffffff']} />
      </div>
      {/* White wave transition at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <WaveDivider colors={['#ffffff']} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-12 pb-10 sm:pb-12">
        <Reveal className="text-center mb-10 sm:mb-16">
          <h2 className="section-title text-white mb-4 sm:mb-6 px-2">
            Our Services
          </h2>
          <p className="section-subtitle text-indigo-100 max-w-3xl mx-auto px-2">
            Comprehensive technology solutions designed to transform your business operations and drive sustainable growth.
          </p>
          <div className="section-divider bg-white/30"></div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="group relative h-full p-6 sm:p-8 bg-white/95 dark:bg-dark-800 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-none hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 border dark:border-gray-700">
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-aurora opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-aurora rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform flex-shrink-0">
                    <service.icon className="text-xl sm:text-2xl text-white" />
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[service.tag] || 'bg-gray-100 text-gray-700 dark:bg-gray-700/30 dark:text-gray-300'}`}>
                    {service.tag}
                  </span>
                </div>

                <h3 className="card-title text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {service.title}
                </h3>
                
                <p className="card-text text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                  {service.points.map((point, p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-aurora mt-1.5 flex-none"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Category-based sections */}
        <div className="mt-16 space-y-12">
          {Object.entries(groupedServices).map(([category, items]) => (
            items.length > 1 && (
              <div key={category}>
                <Reveal>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${tagColors[category]}`}>
                      {category}
                    </span>
                    <span className="text-white/60 text-lg font-normal">Services</span>
                  </h3>
                </Reveal>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.slice(1, 4).map((service, idx) => (
                    <Reveal key={idx} delay={idx * 100}>
                      <div className="group relative h-full p-6 bg-white/90 dark:bg-dark-800/80 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 border border-white/10 dark:border-gray-700">
                        <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-aurora opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-aurora rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <service.icon className="text-lg text-white" />
                          </div>
                          <h4 className="card-title text-gray-900 dark:text-white text-lg">
                            {service.title}
                          </h4>
                        </div>
                        <p className="card-text text-gray-600 dark:text-gray-400 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <Reveal delay={200} className="text-center mt-12">
          <Link
            to="/services"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 hover:shadow-white/30 transition-all duration-300"
          >
            Explore All Services
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;