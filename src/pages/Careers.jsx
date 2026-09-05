import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { FiTrendingUp, FiHeart, FiUsers, FiStar, FiArrowRight, FiMail, FiBriefcase } from 'react-icons/fi';

const Careers = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e) => {
      const { left, top, width, height } = scene.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      scene.style.transform = `translate3d(${x * 12}px, ${y * 10}px, 0)`;
      scene.querySelectorAll('[data-depth]').forEach((el) => {
        const d = parseFloat(el.getAttribute('data-depth')) || 0;
        el.style.transform = `translate3d(${x * 10 * d}px, ${y * 8 * d}px, 0)`;
      });
    };

    const onLeave = () => {
      scene.style.transform = 'translate3d(0, 0, 0)';
      scene.querySelectorAll('[data-depth]').forEach((el) => {
        el.style.transform = 'translate3d(0, 0, 0)';
      });
    };

    scene.addEventListener('mousemove', onMove);
    scene.addEventListener('mouseleave', onLeave);
    return () => {
      scene.removeEventListener('mousemove', onMove);
      scene.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const openPositions = [
    {
      title: 'Senior Backend Engineer',
      department: 'Engineering',
      location: 'Remote / Dar Es Salaam',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Build scalable backend systems and APIs for our AI-powered applications using Python, Node.js, and cloud technologies.',
      requirements: [
        'Strong experience with Python or Node.js',
        'Knowledge of cloud platforms (AWS, Azure)',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Understanding of microservices architecture',
        'API design and development expertise'
      ],
      skills: ['Python', 'Node.js', 'AWS', 'PostgreSQL', 'Docker', 'Kubernetes']
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote / Dar Es Salaam',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Create beautiful, responsive user interfaces using React, TypeScript, and modern frontend technologies.',
      requirements: [
        'Proficiency in React and TypeScript',
        'Strong CSS and responsive design skills',
        'Experience with state management (Redux, Zustand)',
        'Knowledge of testing frameworks (Jest, Cypress)',
        'Understanding of UI/UX principles'
      ],
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Jest', 'Figma']
    },
    {
      title: 'Data Engineer',
      department: 'AI & Analytics',
      location: 'Remote / Dar Es Salaam',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Design and implement data pipelines, warehouses, and analytics infrastructure to support our AI initiatives.',
      requirements: [
        'Experience with ETL/ELT processes',
        'Knowledge of big data technologies (Spark, Kafka)',
        'Proficiency in SQL and Python',
        'Experience with data warehousing solutions',
        'Understanding of data modeling concepts'
      ],
      skills: ['Python', 'Apache Spark', 'SQL', 'Airflow', 'dbt', 'Snowflake']
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Dar Es Salaam',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Manage cloud infrastructure, CI/CD pipelines, and ensure scalable, secure deployment processes.',
      requirements: [
        'Experience with cloud platforms (AWS, Azure)',
        'Knowledge of containerization (Docker, Kubernetes)',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'CI/CD pipeline setup and management',
        'Monitoring and logging solutions'
      ],
      skills: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus', 'Grafana']
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI & Analytics',
      location: 'Remote / Dar Es Salaam',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Develop and deploy machine learning models and AI solutions for our clients across various industries.',
      requirements: [
        'Strong background in machine learning',
        'Experience with Python and ML libraries',
        'Knowledge of deep learning frameworks',
        'Understanding of MLOps practices',
        'Experience with model deployment'
      ],
      skills: ['Python', 'TensorFlow', 'PyTorch', 'MLflow', 'Docker', 'Kubernetes']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Dar Es Salaam',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Drive product strategy and roadmap for our AI and fintech solutions, working closely with engineering and design teams.',
      requirements: [
        'Proven product management experience',
        'Understanding of AI/ML products',
        'Experience with agile methodologies',
        'Strong analytical and communication skills',
        'Background in fintech or enterprise software'
      ],
      skills: ['Product Strategy', 'Agile', 'Jira', 'Analytics', 'Figma', 'SQL']
    }
  ];

  const benefits = [
    {
      icon: FiTrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths with mentorship and learning opportunities.'
    },
    {
      icon: FiHeart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs for you and your family.'
    },
    {
      icon: FiUsers,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and work-life balance support.'
    },
    {
      icon: FiStar,
      title: 'Competitive Package',
      description: 'Market-competitive salaries with equity participation and performance bonuses.'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and experimentation to solve complex challenges.'
    },
    {
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse teams working together.'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.'
    },
    {
      title: 'Impact',
      description: 'We focus on work that makes a meaningful difference for our clients and society.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers — NeoVam Technologies</title>
        <meta name="description" content="Open positions at NeoVam Technologies — Backend, Frontend, and Data Engineering roles. Join our mission to build meaningful AI products." />
        <meta property="og:title" content="Careers — NeoVam Technologies" />
        <meta property="og:description" content="Open positions at NeoVam Technologies — Backend, Frontend, and Data Engineering roles." />
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
            <div className="animate-slide-in-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-400/10 border border-primary-200 dark:border-primary-400/20 text-primary-700 dark:text-primary-300 text-xs font-bold tracking-wider uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
                Join Our Team
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-5">
                Build the future with <span className="text-gradient-aurora">NeoVam</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We're constantly on the lookout for brilliant minds ready to make an impact. Join us in building the future of AI, cloud, and fintech solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href="#positions" 
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-nav text-white text-base font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300 touch-manipulation"
                >
                  View Open Positions
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="mailto:jobs@neovam.com" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-dark-800/50 border border-primary-200 dark:border-primary-400/30 text-primary-700 dark:text-primary-300 text-base font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-400/10 transition-all duration-300 touch-manipulation"
                >
                  <FiMail />
                  Email Your CV
                </a>
              </div>
            </div>
            <div className="animate-slide-in-right order-first lg:order-last mb-6 lg:mb-0">
              <div ref={sceneRef} className="ai-scene">
                <div className="ai-orbit o1"></div>
                <div className="ai-orbit o2"></div>
                <div className="ai-orbit o3"></div>
                <div className="ai-disc"></div>
                <div className="ai-robot-wrap" data-depth="0.55">
                  <img src="/assets/AI.png" alt="NeoVam AI robot" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">Why Choose NeoVam?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
              Work with cutting-edge technologies, contribute to meaningful projects, and grow your career with world-class experts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-2xl glass hover-glow animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6">
                  <benefit.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Our Values */}
          <div className="bg-gradient-to-r from-primary-950/20 to-primary-900/20 rounded-3xl p-8 border border-primary-400/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Core Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <h4 className="text-lg font-semibold text-primary-300 mb-2">{value.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Join our growing team and help build the future of technology.
            </p>
          </div>

          <div className="max-w-xl mx-auto text-center py-12 sm:py-16 rounded-2xl bg-white/60 dark:bg-dark-800/60 border border-gray-100 dark:border-dark-600">
            <FiBriefcase className="mx-auto text-gray-300 dark:text-gray-600 text-4xl mb-4" />
            <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No open position</p>
            <p className="text-gray-500 dark:text-gray-400">We don't have any vacancies right now. Check back later!</p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Culture</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                At NeoVam, we foster an environment of innovation, collaboration, and continuous learning. Our team is our greatest asset, and we're committed to creating a workplace where everyone can thrive.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-primary-300 font-semibold mb-1">Learning & Development</h4>
                    <p className="text-gray-400 text-sm">Regular training, conferences, and skill development programs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-primary-300 font-semibold mb-1">Flexible Environment</h4>
                    <p className="text-gray-400 text-sm">Remote work options and flexible schedules to maintain work-life balance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-primary-300 font-semibold mb-1">Innovation Focus</h4>
                    <p className="text-gray-400 text-sm">20% time for personal projects and exploring new technologies.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="/assets/culture.png" 
                alt="NeoVam Team Culture" 
                className="rounded-3xl shadow-2xl w-full hover-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-primary-900/20 to-primary-800/20 border border-primary-400/20">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Don't See the Right Role?</h2>
            <p className="text-xl text-gray-400 mb-8">
              We're always looking for exceptional talent. Send us your CV and tell us how you can contribute to our mission.
            </p>
            <a
              href="mailto:jobs@neovam.com?subject=General Application&body=Dear NeoVam Team,%0A%0AI am interested in joining your team. Please find my CV attached.%0A%0ABest regards"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <FiMail />
              Send Your CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
