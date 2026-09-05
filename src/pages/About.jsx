import React from 'react';
import { Helmet } from 'react-helmet';
import { FiTarget, FiEye, FiHeart, FiAward, FiGlobe, FiUsers, FiTrendingUp, FiZap } from 'react-icons/fi';

const About = () => {
  const values = [
    {
      icon: FiTarget,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.'
    },
    {
      icon: FiHeart,
      title: 'Client-Centric',
      description: 'Our success is measured by our clients\' success. We build lasting partnerships based on trust and results.'
    },
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: FiGlobe,
      title: 'Global Impact',
      description: 'Our solutions are designed to make a positive impact on businesses and communities worldwide.'
    }
  ];

  const team = [
    // {
    //   name: 'Ernest Mswima',
    //   role: 'Founder & CEO',
    //   bio: 'Founder and CEO driving NeoVam\'s mission to deliver AI and cloud solutions across Africa.',
    //   image: '/assets/founder.png',
    //   specialties: ['Leadership', 'Strategy', 'Product']
    // },
    {
      name: 'Dr. Pazza',
      role: 'Acting CEO',
      bio: 'Leads organizational strategy and program execution across teams.',
      image: '/assets/management_officer.jpg',
      specialties: ['Management', 'Strategy', 'Governance']
    },
    {
      name: 'Daudi Herman Mgogo',
      role: 'Chief Operations Officer',
      bio: 'Oversees daily operations and ensures our delivery pipelines run smoothly.',
      image: '/assets/operations_manager.jpg',
      specialties: ['Operations', 'Process Optimization', 'Logistics']
    },
    {
      name: 'Saidi Manyerere',
      role: 'Chief Technology Officer',
      bio: 'Drives technology vision and ensures our platform architecture is robust and scalable.',
      image: '/assets/technology_officer.jpg',
      specialties: ['Systems Architecture', 'Platform Engineering', 'R&D']
    },
    {
      name: 'Denis Benson',
      role: 'Software Engineer',
      bio: 'Builds reliable and maintainable software solutions for our clients.',
      image: '/assets/software_engineer.png',
      specialties: ['Fullstack Development', 'API Design', 'Testing']
    },
    {
      name: 'Esta Marroch',
      role: 'Customer Service',
      bio: 'Ensures customers have a smooth experience and handles support escalations.',
      image: '/assets/customer_service.jpg',
      specialties: ['Customer Support', 'Client Relations', 'Onboarding']
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'NeoVam Technologies was established with a vision to bridge the technology gap in Africa.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise AI solution, establishing our reputation in the market.'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew our team to 25+ experts across AI, cloud, and fintech domains.'
    },
    {
      year: '2023',
      title: 'International Recognition',
      description: 'Received industry awards for innovation in AI and digital transformation solutions.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations across 10+ countries, serving clients on multiple continents.'
    }
  ];

  const stats = [
    { icon: FiUsers, number: '50+', label: 'Team Members' },
    { icon: FiGlobe, number: '10+', label: 'Countries Served' },
    { icon: FiTrendingUp, number: '100+', label: 'Projects Completed' },
    { icon: FiZap, number: '5', label: 'Years of Excellence' }
  ];

  return (
    <>
      <Helmet>
        <title>About NeoVam Technologies</title>
        <meta name="description" content="Learn about NeoVam's mission, team, and the technologies we use to drive digital transformation in Africa." />
        <meta property="og:title" content="About NeoVam Technologies" />
        <meta property="og:description" content="Learn about NeoVam's mission, team, and the technologies we use to drive digital transformation in Africa." />
      </Helmet>

      {/* Hero Section */}
  <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-primary-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                About <span className="text-gradient">NeoVam</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                We are a next-generation technology firm focused on delivering AI, Cloud, and Fintech innovations that transform businesses and empower communities.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 sm:p-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary-400/10 rounded-xl mb-2">
                      <stat.icon className="text-primary-400 text-lg sm:text-xl" />
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                    <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right order-first lg:order-last mb-6 lg:mb-0">
              <img 
                src="/assets/work_mode.png" 
                alt="NeoVam at work" 
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full hover-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
            {/* Mission */}
            <div className="animate-slide-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <FiTarget className="text-gray-900 dark:text-white text-2xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                To bridge the gap between African talent and global opportunities through smart systems and automation. We believe in democratizing access to cutting-edge technology solutions that drive meaningful change.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our mission extends beyond just building software. We're committed to fostering innovation, creating sustainable employment opportunities, and contributing to the digital transformation of Africa's economy.
              </p>
            </div>

            {/* Vision */}
            <div className="animate-slide-up animate-delay-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <FiEye className="text-gray-900 dark:text-white text-2xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                To become Africa's leading technology partner, known for delivering world-class AI, cloud, and fintech solutions that empower businesses to thrive in the digital age.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We envision a future where technology barriers are eliminated, and every organization—regardless of size or location—has access to enterprise-grade solutions that accelerate growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">Our Values</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-2">
              These core principles guide every decision we make and every solution we build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl glass hover-glow animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6">
                  <value.icon className="text-gray-900 dark:text-white text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">Meet Our Team</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
              Talented professionals passionate about technology and committed to delivering exceptional results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group animate-slide-up overflow-hidden rounded-2xl bg-white dark:bg-dark-800 border border-gray-100 dark:border-dark-600 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-dark-900/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white leading-tight">{member.name}</h3>
                    <p className="text-primary-200 text-sm font-semibold">{member.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((specialty, specIndex) => (
                      <span key={specIndex} className="px-2 py-1 bg-primary-500/10 text-primary-600 dark:text-primary-300 rounded text-xs border border-primary-400/20">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary-950/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">Our Journey</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 px-2">
              Key milestones that have shaped NeoVam Technologies into what we are today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-8 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-gray-900 dark:text-white font-bold text-xs border-4 border-dark-950">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6 rounded-2xl glass">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">Our Culture</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-2">
              At NeoVam, we foster an environment of innovation, collaboration, and continuous learning where every team member can thrive and make a meaningful impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="/assets/culture.png" 
                alt="NeoVam Culture" 
                className="rounded-3xl shadow-2xl w-full hover-glow"
              />
            </div>
            <div className="animate-slide-in-right">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-primary-300 mb-2">Innovation & Learning</h3>
                  <p className="text-gray-400 leading-relaxed">We encourage experimentation and provide opportunities for continuous skill development through conferences, training, and internal knowledge sharing.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-300 mb-2">Work-Life Balance</h3>
                  <p className="text-gray-400 leading-relaxed">We believe that our best work comes from well-rested, fulfilled individuals. We offer flexible schedules and remote work options.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-300 mb-2">Diversity & Inclusion</h3>
                  <p className="text-gray-400 leading-relaxed">Our strength comes from diverse perspectives. We're committed to building an inclusive environment where everyone feels valued and heard.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-300 mb-2">Impact-Driven</h3>
                  <p className="text-gray-400 leading-relaxed">Every project we undertake is guided by its potential to create positive change and meaningful impact for our clients and communities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
