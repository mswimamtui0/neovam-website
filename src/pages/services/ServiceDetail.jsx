// src/pages/services/ServiceDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  FiArrowLeft, FiArrowRight, FiCheck, FiCpu, FiCloud, FiDollarSign, 
  FiCode, FiShield, FiTrendingUp, FiUsers, FiAward, FiClock,
  FiBriefcase, FiGlobe, FiSmartphone, FiServer, FiZap, FiLayers,
  FiCheckCircle, FiGitBranch
} from 'react-icons/fi';
import Reveal from './Reveal';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===== ALL 18 SERVICES WITH FULL DESCRIPTIONS =====
  const allServices = [
    // STRATEGY
    {
      id: 'product-strategy',
      title: 'Product Strategy',
      shortDescription: 'Your product strategy from concept to launch with market-driven approach.',
      fullDescription: 'Strategic product development from concept to launch with market-driven approach. We help you define product vision, roadmap, and go-to-market strategy. Our team works closely with you to validate ideas, identify market opportunities, and build products that resonate with your target audience.',
      icon: FiTrendingUp,
      category: 'Strategy',
      features: ['Product Roadmapping', 'MVP Development', 'Market Validation', 'Go-to-Market Strategy', 'Product Vision Definition', 'Competitive Analysis'],
      technologies: ['Product Management', 'Market Research', 'Agile', 'Lean Startup'],
      benefits: ['Clear product vision', 'Faster time-to-market', 'Reduced development risk', 'Market-aligned products'],
      caseStudies: ['Fintech Product Launch', 'SaaS Platform Development', 'Market Validation for Startup']
    },
    {
      id: 'business-process-automation',
      title: 'Business Process Automation',
      shortDescription: 'Automate & Accelerate your business operations with intelligent automation.',
      fullDescription: 'Streamline your business operations with intelligent automation solutions. We identify repetitive tasks and implement automation to increase efficiency and reduce errors. Our RPA and workflow automation solutions help you achieve operational excellence and free up your team for higher-value work.',
      icon: FiZap,
      category: 'Strategy',
      features: ['Workflow Automation', 'RPA Implementation', 'Process Optimization', 'Automation Analytics', 'Business Process Mapping', 'Integration with Existing Systems'],
      technologies: ['RPA', 'Workflow Engines', 'Integration Platforms', 'AI'],
      benefits: ['Reduce costs by 30-50%', 'Eliminate manual errors', 'Faster process execution', 'Better resource utilization'],
      caseStudies: ['Insurance Claims Automation', 'Finance Workflow Optimization', 'HR Process Automation']
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      shortDescription: 'Innovate & Adapt with comprehensive digital transformation solutions.',
      fullDescription: 'Transform your business with comprehensive digital solutions. We help you modernize your operations, enhance customer experience, and stay competitive in the digital age. From strategy development to implementation, we guide you through every step of your digital journey.',
      icon: FiGlobe,
      category: 'Strategy',
      features: ['Digital Strategy', 'Legacy Modernization', 'Customer Experience Design', 'Innovation Roadmap', 'Digital Maturity Assessment', 'Change Management'],
      technologies: ['Cloud', 'AI', 'IoT', 'Digital Platforms'],
      benefits: ['Enhanced customer experience', 'Improved operational efficiency', 'New revenue streams', 'Competitive advantage'],
      caseStudies: ['Banking Digital Transformation', 'Retail Modernization', 'Government Digital Services']
    },
    {
      id: 'architecture-scalability',
      title: 'Architecture & Scalability Planning',
      shortDescription: 'Robust Infrastructure design for scalable, future-proof systems.',
      fullDescription: 'Design robust infrastructure that ensures your systems scale with your business. We help you plan and implement scalable architecture that supports growth and handles increased demand. Our experts design systems that are resilient, maintainable, and cost-effective.',
      icon: FiLayers,
      category: 'Strategy',
      features: ['Microservices', 'Cloud Architecture', 'Scalability Planning', 'Infrastructure as Code', 'Performance Optimization', 'System Integration'],
      technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform'],
      benefits: ['Handle 10x traffic growth', 'Reduce infrastructure costs', 'Improved system reliability', 'Faster deployment cycles'],
      caseStudies: ['E-Commerce Platform Scaling', 'Fintech Infrastructure Design', 'Cloud Migration for Enterprise']
    },
    {
      id: 'technical-due-diligence',
      title: 'Technical Due Diligence',
      shortDescription: 'Expert Analysis for technology assessment and risk mitigation.',
      fullDescription: 'Expert analysis and assessment of your technology stack and development processes. We help you identify risks, evaluate code quality, and ensure your technology investments are sound. Our due diligence services provide you with actionable insights for technical decision-making.',
      icon: FiCheckCircle,
      category: 'Strategy',
      features: ['Code Reviews', 'Security Audits', 'Performance Assessment', 'Risk Assessment', 'Architecture Evaluation', 'Technical Documentation'],
      technologies: ['Security Tools', 'Code Analysis', 'Performance Testing'],
      benefits: ['Identify technology risks', 'Improve code quality', 'Ensure regulatory compliance', 'Optimize technology investments'],
      caseStudies: ['M&A Technology Assessment', 'Startup Tech Audit', 'Security Compliance Review']
    },

    // DEVELOPMENT
    {
      id: 'custom-software-development',
      title: 'Custom Software Development',
      shortDescription: 'Tailored Solutions built specifically for your business needs.',
      fullDescription: 'Tailored software solutions built specifically for your business needs. From concept to deployment, we deliver high-quality, scalable applications that drive business growth. Our custom development approach ensures that your software perfectly aligns with your business processes and goals.',
      icon: FiCode,
      category: 'Development',
      features: ['Enterprise Solutions', 'Custom Applications', 'Legacy Modernization', 'Digital Banking', 'Business Systems', 'Core Banking Integration'],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'Spring Boot', 'Django'],
      benefits: ['Solutions tailored to your needs', 'Scalable and maintainable code', 'Rapid development and deployment', 'Modern technology stack'],
      caseStudies: ['Custom CRM Development', 'Banking Platform Build', 'Healthcare Management System']
    },
    {
      id: 'web-development',
      title: 'Web Development',
      shortDescription: 'Dynamic Web Apps with responsive, engaging user experiences.',
      fullDescription: 'Dynamic, responsive web applications that engage users and drive business growth. We build modern web applications using the latest technologies and best practices. From simple websites to complex web platforms, we deliver exceptional digital experiences.',
      icon: FiGlobe,
      category: 'Development',
      features: ['Single Page Apps', 'Progressive Web Apps', 'Responsive Design', 'API Integration', 'E-Commerce Platforms', 'Content Management Systems'],
      technologies: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
      benefits: ['Fast loading websites', 'Mobile-responsive design', 'SEO-friendly architecture', 'Excellent user experience'],
      caseStudies: ['E-Commerce Web Platform', 'Corporate Website Redesign', 'SaaS Web Application']
    },
    {
      id: 'app-development',
      title: 'App Development',
      shortDescription: 'App Innovation for iOS and Android platforms with seamless UX.',
      fullDescription: 'Innovative mobile applications for iOS and Android platforms with seamless user experiences. We build native and cross-platform apps that delight users and drive business results. Our mobile solutions are designed for performance, security, and user engagement.',
      icon: FiSmartphone,
      category: 'Development',
      features: ['Native iOS', 'Native Android', 'React Native', 'Cross-Platform', 'Mobile UX Design', 'App Store Optimization'],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'iOS', 'Android'],
      benefits: ['Reach mobile customers', 'Seamless UX', 'App Store ready', 'Scalable mobile architecture'],
      caseStudies: ['Fintech Mobile App', 'Healthcare Patient App', 'Retail Shopping App']
    },
    {
      id: 'enterprise-software',
      title: 'Enterprise Software Development',
      shortDescription: 'Business Systems for complex enterprise-scale applications.',
      fullDescription: 'Scalable enterprise solutions that streamline operations and improve business efficiency. We build robust, secure, and scalable enterprise applications that handle complex business processes. Our enterprise solutions are designed to integrate with your existing systems and support your long-term growth.',
      icon: FiServer,
      category: 'Development',
      features: ['Business Systems', 'Core Banking Integration', 'Enterprise Integration', 'Compliance', 'Legacy Modernization', 'Digital Banking Platforms'],
      technologies: ['Java', '.NET', 'Spring Boot', 'Oracle', 'Microservices'],
      benefits: ['Handle enterprise-scale workloads', 'Secure and compliant systems', 'Integration with existing systems', 'Future-proof architecture'],
      caseStudies: ['Core Banking System', 'Insurance Platform', 'Supply Chain Management']
    },
    {
      id: 'devops',
      title: 'DevOps',
      shortDescription: 'Infrastructure As Code for reliable, automated operations.',
      fullDescription: 'Infrastructure as Code solutions that automate deployment and ensure reliable operations. We help you implement DevOps practices that accelerate delivery and improve system reliability. Our DevOps services bridge the gap between development and operations teams.',
      icon: FiGitBranch,
      category: 'Development',
      features: ['CI/CD Pipelines', 'Kubernetes', 'Infrastructure Automation', 'Cloud Optimization', 'Monitoring & Alerting', 'Security Automation'],
      technologies: ['Jenkins', 'GitHub Actions', 'Kubernetes', 'Docker', 'Terraform', 'AWS'],
      benefits: ['Faster deployment cycles', 'Reduced manual errors', 'Improved system reliability', 'Cost optimization'],
      caseStudies: ['Cloud Infrastructure Setup', 'CI/CD Implementation', 'DevOps Transformation']
    },
    {
      id: 'software-qa-testing',
      title: 'Software QA Testing',
      shortDescription: 'Reliable Software through comprehensive quality assurance.',
      fullDescription: 'Comprehensive quality assurance to ensure reliable, bug-free software delivery. We provide end-to-end testing services that cover all aspects of your application. From automated testing to manual QA, we ensure your software meets the highest quality standards.',
      icon: FiShield,
      category: 'Development',
      features: ['Automated Testing', 'Performance Testing', 'Security Testing', 'Manual QA', 'Test Automation Frameworks', 'Continuous Testing'],
      technologies: ['Selenium', 'Jest', 'Cypress', 'JMeter', 'Postman'],
      benefits: ['Bug-free software delivery', 'Improved software quality', 'Faster release cycles', 'Reduced production issues'],
      caseStudies: ['QA Automation Setup', 'Performance Testing for Platform', 'Security Testing for Fintech']
    },

    // TECH STAFFING
    {
      id: 'dedicated-development-team',
      title: 'Dedicated Development Team',
      shortDescription: 'Extended Team Power with dedicated developers for your projects.',
      fullDescription: 'Extended team power with dedicated developers who integrate seamlessly with your workflow. We provide skilled developers who work as an extension of your team. Our dedicated teams are fully committed to your projects and deliver high-quality results.',
      icon: FiUsers,
      category: 'Staffing',
      features: ['Remote Teams', 'Dedicated Engineers', 'Agile Development', 'Team Scaling', 'Continuous Delivery', 'Skill Matching'],
      technologies: ['Full-Stack', 'Frontend', 'Backend', 'Mobile', 'DevOps', 'QA'],
      benefits: ['Access to top talent', 'Cost-effective scaling', 'Seamless integration', 'Flexible team size'],
      caseStudies: ['Remote Team Build', 'Project Rescue Team', 'Scaled Development Team']
    },
    {
      id: 'rnd-center-establishment',
      title: 'Establishment of R&D Center',
      shortDescription: 'Empowering Innovation with dedicated research and development centers.',
      fullDescription: 'Empower innovation with dedicated research and development centers. We help you establish R&D centers that drive innovation and create competitive advantage. Our R&D centers foster a culture of innovation and accelerate your product development.',
      icon: FiAward,
      category: 'Staffing',
      features: ['Innovation Labs', 'Product Incubation', 'Research Partnerships', 'Technology Scouting', 'Prototype Development', 'IP Creation'],
      technologies: ['Emerging Technologies', 'AI Research', 'Blockchain', 'IoT'],
      benefits: ['Drive innovation', 'Create IP and patents', 'Attract top research talent', 'Competitive advantage'],
      caseStudies: ['R&D Center Setup', 'Innovation Lab Launch', 'Research Partnership Development']
    },
    {
      id: 'staff-augmentation',
      title: 'Staff Augmentation',
      shortDescription: 'Agile Staffing solutions for IT recruiting and team scaling.',
      fullDescription: 'Agile staffing solutions to quickly scale your development capabilities. We provide skilled professionals who fill skill gaps and help you deliver projects on time. Our staff augmentation services give you the flexibility to scale your team as needed.',
      icon: FiBriefcase,
      category: 'Staffing',
      features: ['IT Recruiting', 'Contract Staffing', 'Skill Gap Filling', 'Project-Based Hiring', 'Talent Acquisition', 'Workforce Planning'],
      technologies: ['All Technologies', 'Specialized Skills', 'Leadership'],
      benefits: ['Fill skill gaps quickly', 'Project-based hiring', 'Access to specialized skills', 'Flexible workforce'],
      caseStudies: ['Rapid Team Scaling', 'Skill Gap Filling', 'Project Delivery Support']
    },

    // AI
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      shortDescription: 'Harness the power of artificial intelligence to automate processes and gain insights.',
      fullDescription: 'Our AI and Machine Learning solutions transform raw data into actionable intelligence. We build custom models that learn from your data to automate complex decisions, predict outcomes, and uncover hidden patterns. Our AI solutions help you gain a competitive edge through data-driven insights.',
      icon: FiCpu,
      category: 'AI',
      features: ['Predictive Analytics', 'NLP', 'Computer Vision', 'Automated Decision Systems', 'Chatbot Development', 'AI-Powered Data Processing'],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face'],
      benefits: ['40% efficiency increase', 'Reduce manual errors', 'Competitive advantage', 'Data-driven insights'],
      caseStudies: ['AI Chatbot for Banking', 'Predictive Analytics Platform', 'Computer Vision for Retail']
    },

    // CLOUD
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      shortDescription: 'Scale your business with secure, reliable cloud infrastructure and services.',
      fullDescription: 'Our cloud solutions help you modernize your infrastructure, reduce costs, and scale seamlessly. From migration to management, we ensure your cloud journey is smooth and secure. We help you leverage the full power of cloud computing for your business.',
      icon: FiCloud,
      category: 'Cloud',
      features: ['Cloud Migration', 'Infrastructure as a Service', 'DevOps', 'Cloud Security', 'Hybrid Cloud', 'Cost Optimization'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      benefits: ['Reduce IT costs by 30%', 'On-demand scaling', 'Improved reliability', 'Enhanced security'],
      caseStudies: ['Cloud Migration for Banking', 'Multi-Cloud Strategy', 'Cloud-Native Architecture']
    },

    // FINTECH
    {
      id: 'fintech',
      title: 'Fintech Solutions',
      shortDescription: 'Revolutionary financial technology solutions for modern banking and payments.',
      fullDescription: 'We build secure, scalable fintech platforms that transform how financial services are delivered. From digital banking to trading platforms, our solutions are designed for the future of finance. Our fintech expertise helps you innovate and stay competitive in the financial sector.',
      icon: FiDollarSign,
      category: 'Fintech',
      features: ['Digital Banking', 'Payment Processing', 'Blockchain Integration', 'Risk Management', 'Trading Platforms', 'Mobile Wallet'],
      technologies: ['React Native', 'Node.js', 'Blockchain', 'Microservices', 'AWS'],
      benefits: ['Streamline operations', 'Better customer experience', 'Regulatory compliance', 'Faster transactions'],
      caseStudies: ['Digital Banking Platform', 'Payment Gateway Integration', 'Trading Platform Build']
    },

    // CYBERSECURITY
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      shortDescription: 'Protect your business from evolving cyber threats with comprehensive security solutions.',
      fullDescription: 'Our cybersecurity services protect your business from evolving cyber threats. We provide comprehensive security assessments, monitoring, and incident response to keep your data and systems safe. Our security experts help you build a robust security posture.',
      icon: FiShield,
      category: 'Security',
      features: ['Security Assessments', 'Penetration Testing', 'Security Monitoring', 'Compliance', 'Vulnerability Management', 'Incident Response'],
      technologies: ['Nessus', 'Wireshark', 'SIEM', 'Firewalls', 'Encryption', 'IAM'],
      benefits: ['Threat protection', 'Regulatory compliance', 'Customer trust', '24/7 security monitoring'],
      caseStudies: ['Security Audit for Bank', 'Penetration Testing for Fintech', 'Compliance Implementation']
    }
  ];

  useEffect(() => {
    const found = allServices.find(s => s.id === serviceId);
    setService(found);
    setLoading(false);
  }, [serviceId]);

  if (loading) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading service...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-glow transition-all">
            <FiArrowLeft /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-50 dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <button onClick={() => navigate('/services')} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 mb-6 transition-colors">
          <FiArrowLeft /> Back to Services
        </button>

        <nav className="text-sm mb-8">
          <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/services" className="text-gray-500 hover:text-primary-600">Services</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-primary-600">{service.title}</span>
        </nav>

        <Reveal>
          <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              <div className="lg:col-span-1 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-700 p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-aurora rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <IconComponent className="text-5xl text-white" />
                  </div>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full text-xs font-medium text-primary-700 dark:text-primary-300">
                    {service.category}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-2 p-8 md:p-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.fullDescription}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all">
                  Get Started
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="mt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FiCheck className="w-5 h-5 text-primary-600" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <FiCheck className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <FiAward className="w-5 h-5 text-primary-600" />
                Benefits
              </h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <FiCheck className="w-4 h-4 text-primary-600 mt-1 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-8">
          <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FiCode className="w-5 h-5 text-primary-600" />
              Technologies We Use
            </h3>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 bg-gray-100 dark:bg-primary-700/30 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {service.caseStudies && (
          <Reveal delay={250} className="mt-8">
            <div className="bg-gradient-nav rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FiUsers className="w-5 h-5" />
                Case Studies
              </h3>
              <ul className="space-y-3">
                {service.caseStudies.map((study, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-indigo-100">
                    <FiCheck className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    {study}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        <Reveal delay={300} className="mt-12">
          <div className="bg-gradient-nav rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our {service.title} can transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all">
                Contact Us
              </Link>
              <Link to="/services" className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                View All Services →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ServiceDetail;