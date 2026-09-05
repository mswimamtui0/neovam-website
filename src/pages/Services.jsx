import React from 'react';
import { Helmet } from 'react-helmet';
import { FiCode, FiCpu, FiCloud, FiShield, FiUsers, FiTrendingUp, FiCheck, FiArrowRight, FiPackage, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Distinct visual treatments — different shape for each service
const serviceShapes = [
  { frame: 'rounded-t-[110px] sm:rounded-t-[150px] rounded-b-3xl', waveH: '[&_svg]:!h-10', waveFlip: false, wavesColor: ['#0f2470', '#1e50e0', '#2f6bf0'] },
  { frame: 'rounded-full', waveH: '[&_svg]:!h-12', waveFlip: false, wavesColor: ['#6d28d9', '#1e50e0', '#0ea5e9'] },
  { frame: 'hex', waveH: '[&_svg]:!h-10', waveFlip: true, wavesColor: ['#0891b2', '#1e50e0', '#0f2470'] },
  { frame: 'blob', waveH: '[&_svg]:!h-11', waveFlip: true, wavesColor: ['#0a1a52', '#1e50e0', '#2f6bf0'] },
  { frame: 'rounded-[3rem] sm:rounded-[3.5rem]', waveH: '[&_svg]:!h-9', waveFlip: false, wavesColor: ['#f59e0b', '#1e50e0', '#0f2470'] },
  { frame: 'rounded-2xl sm:rounded-3xl', waveH: '[&_svg]:!h-10', waveFlip: true, wavesColor: ['#10b981', '#1e50e0', '#0f2470'] },
  { frame: 'rounded-t-3xl rounded-b-[110px] sm:rounded-b-[150px]', waveH: '[&_svg]:!h-11', waveFlip: true, wavesColor: ['#f97316', '#1e50e0', '#0f2470'] }
];

const blobRadius = { borderRadius: '52% 48% 55% 45% / 46% 54% 46% 54%' };
const hexClip = { clipPath: 'polygon(25% 3%, 75% 3%, 98% 50%, 75% 97%, 25% 97%, 2% 50%)' };

const Services = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Software & Fintech Development',
      description: 'We build secure, scalable software solutions and digital payment integrations that help businesses streamline operations and grow.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      features: [
        'Custom Web & Mobile Applications',
        'Digital Payment Integration',
        'E-commerce Platforms',
        'Banking & Financial Systems',
        'API Development & Integration',
        'Legacy System Modernization'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Flutter', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: FiCpu,
      title: 'AI & Machine Learning',
      description: 'From AI chatbots to advanced analytics, our AI solutions empower enterprises to leverage data for smarter decisions.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      features: [
        'Intelligent Chatbots & Virtual Assistants',
        'Predictive Analytics & Forecasting',
        'Computer Vision Solutions',
        'Natural Language Processing',
        'Recommendation Systems',
        'Automated Decision Making'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Pandas', 'Azure AI']
    },
    {
      icon: FiCloud,
      title: 'Cloud Solutions & DevOps',
      description: 'Cost-effective and scalable cloud architectures that grow with your business needs and ensure optimal performance.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      features: [
        'Cloud Migration & Optimization',
        'Infrastructure as Code',
        'Containerization & Orchestration',
        'CI/CD Pipeline Setup',
        'Monitoring & Logging Solutions',
        'Auto-scaling & Load Balancing'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins']
    },
    {
      icon: FiShield,
      title: 'Cybersecurity & Infrastructure',
      description: 'Top-tier network management, security audits, and data protection to keep your digital assets safe and compliant.',
      // Prefer local asset if present, otherwise fall back to remote image
      image: '/assets/cybersecurity.jpeg',
      features: [
        'Security Audits & Penetration Testing',
        'Network Security Implementation',
        'Data Encryption & Protection',
        'Compliance & Risk Assessment',
        'Incident Response Planning',
        '24/7 Security Monitoring'
      ],
      technologies: ['Wireshark', 'Nessus', 'Metasploit', 'SIEM', 'Firewall', 'VPN']
    },
    {
      icon: FiUsers,
      title: 'Consultancy & Training',
      description: 'Digital transformation consultancy, AI workshops, and skill development programs for teams and organizations.',
      image: '/assets/consultation.png',
      features: [
        'Digital Transformation Strategy',
        'Technology Architecture Review',
        'Team Training & Workshops',
        'Certification Programs',
        'Ongoing Technical Support',
        'Innovation Roadmapping'
      ],
      technologies: ['Agile', 'Scrum', 'Design Thinking', 'TOGAF', 'ITIL', 'DevOps']
    },
    {
      icon: FiTrendingUp,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with our comprehensive analytics and business intelligence solutions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      features: [
        'Data Warehouse Design',
        'Real-time Analytics Dashboards',
        'ETL Pipeline Development',
        'Business Intelligence Solutions',
        'Data Visualization',
        'Performance Metrics & KPIs'
      ],
      technologies: ['Power BI', 'Tableau', 'Apache Spark', 'Elasticsearch', 'Grafana', 'D3.js']
    },
    {
      icon: FiPackage,
      title: 'General Supplies & Procurement',
      description: 'Comprehensive business and institutional supplies through our dedicated procurement division - your one-stop supplier.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
      isExternal: true,
      externalLink: 'https://generalsupplies.neovam.com',
      features: [
        'Office Stationery & Supplies',
        'ICT Equipment & Accessories',
        'Cleaning & Janitorial Products',
        'Building & Construction Materials',
        'Hospitality Equipment',
        'Custom Procurement Solutions'
      ],
      technologies: ['Bulk Orders', 'Tender Management', 'One Invoice', 'Fast Delivery', 'Quality Assured', 'Stock-less Model']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your needs, goals, and current infrastructure to create a tailored solution strategy.'
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description: 'Our team designs scalable, secure, and efficient solutions aligned with industry best practices.'
    },
    {
      number: '03',
      title: 'Development & Implementation',
      description: 'Agile development with regular updates, testing, and quality assurance throughout the process.'
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description: 'Seamless deployment with comprehensive training and ongoing support for your team.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services — NeoVam Technologies</title>
        <meta name="description" content="Software, Fintech, AI, Cloud, Cybersecurity and Training services from NeoVam Technologies." />
        <meta property="og:title" content="Services — NeoVam Technologies" />
        <meta property="og:description" content="Secure software, scalable cloud & AI, and cybersecurity services for modern organisations." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 flex items-center">
        {/* Background aurora mixture */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-100/70 via-white to-cyan-100/50 dark:from-primary-950/40 dark:via-dark-950 dark:to-cyan-950/30"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-white dark:from-dark-950 via-transparent to-transparent"></div>

        {/* Soft glow orbs in brand mixture */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-70 dark:opacity-60">
          <div className="absolute -top-24 left-[10%] w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-[8%] w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-pulse-slow animate-delay-500"></div>
          <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow animate-delay-300"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary-500/40 dark:bg-white/40 animate-float"
              style={{
                left: `${6 + i * 12}%`,
                top: `${15 + (i * 17) % 55}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${5 + (i % 3)}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-center">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-400/10 border border-primary-200 dark:border-primary-400/20 text-primary-700 dark:text-primary-300 text-xs font-bold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
              What We Do
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-5 px-2">
              Our <span className="text-gradient-aurora">Services</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed px-2 animate-slide-up animate-delay-200">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive sustainable growth across Africa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 animate-slide-up animate-delay-300">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-nav text-white text-base font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300 touch-manipulation"
              >
                Start Your Project
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-dark-800/50 border border-primary-200 dark:border-primary-400/30 text-primary-700 dark:text-primary-300 text-base font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-400/10 transition-all duration-300 touch-manipulation"
              >
                Explore Solutions
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex items-center justify-center gap-6 sm:gap-12 flex-wrap animate-slide-up animate-delay-500">
              <div className="text-center">
                <strong className="block text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white text-gradient-aurora">7+</strong>
                <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Core Service Areas</span>
              </div>
              <div className="hidden sm:block w-px h-9 bg-primary-200 dark:bg-primary-400/20"></div>
              <div className="text-center">
                <strong className="block text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white text-gradient-aurora">24/7</strong>
                <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Expert Support</span>
              </div>
              <div className="hidden sm:block w-px h-9 bg-primary-200 dark:bg-primary-400/20"></div>
              <div className="text-center">
                <strong className="block text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white text-gradient-aurora">100%</strong>
                <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {services.map((service, index) => {
              const shape = serviceShapes[index % serviceShapes.length];
              const isCircle = index % serviceShapes.length === 1;

              const imageBlock = isCircle ? (
                /* Circular orbit treatment */
                <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px]">
                  <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary-400/50 animate-[spinSlow_30s_linear_infinite] pointer-events-none"></div>
                  <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-dark-950/20 to-transparent"></div>
                    <div className="absolute inset-0 rounded-full border-8 border-white/10"></div>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                      <div className="p-3 sm:p-4 bg-gradient-nav rounded-full shadow-lg">
                        <service.icon className="text-white text-2xl sm:text-3xl" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative group overflow-hidden shadow-2xl" style={shape.frame === 'hex' ? hexClip : shape.frame === 'blob' ? blobRadius : undefined}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <div className="p-3 sm:p-4 bg-gradient-nav rounded-xl sm:rounded-2xl">
                      <service.icon className="text-white text-2xl sm:text-3xl" />
                    </div>
                  </div>
                </div>
              );

              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Service Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                    {imageBlock}
                  </div>

                  {/* Service Content */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-slide-in-${index % 2 === 0 ? 'right' : 'left'}`}>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-5 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="mb-5">
                      <h3 className="text-base sm:text-lg font-semibold text-primary-600 dark:text-primary-300 mb-2 sm:mb-3">Key Features:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2">
                            <FiCheck className="text-primary-500 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-5">
                      <h3 className="text-base sm:text-lg font-semibold text-primary-600 dark:text-primary-300 mb-2 sm:mb-3">Technologies:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2.5 sm:px-3 py-1 bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-300 rounded-full text-[10px] sm:text-xs border border-primary-400/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {service.isExternal ? (
                      <a
                        href={service.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 bg-gradient-nav text-white text-sm font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300 touch-manipulation"
                      >
                        Visit General Supplies Site
                        <FiExternalLink />
                      </a>
                    ) : (
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 bg-gradient-nav text-white text-sm font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300 touch-manipulation"
                      >
                        Get Started
                        <FiArrowRight />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-primary-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">Our Process</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-center p-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-nav rounded-2xl mb-4 text-white text-base font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-0.5 bg-gradient-to-r from-primary-400 to-transparent transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-primary-900/20 to-primary-800/20 border border-primary-400/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Get Started?</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-7">
              Let's discuss your project requirements and create a solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-7 py-3 bg-gradient-nav text-white font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <FiArrowRight />
              </Link>
              <Link
                to="/about"
                className="px-7 py-3 border-2 border-primary-400 text-primary-600 dark:text-primary-300 font-semibold rounded-xl hover:bg-primary-400 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
