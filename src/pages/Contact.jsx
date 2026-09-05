import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiMail, FiMapPin, FiPhone, FiClock, FiSend, FiCheckCircle, FiAlertCircle, FiChevronDown, FiPhoneCall, FiHeadphones } from 'react-icons/fi';
import { LoadingSpinner } from '../components/Loading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        timeline: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email Us',
      content: 'info@neovam.com',
      link: 'mailto:info@neovam.com',
      description: 'Send us an email and we\'ll respond within 24 hours.'
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      content: '+255 746 177 230',
      link: 'tel:+2341234567890',
      description: 'Speak directly with our team during business hours.'
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      content: 'P.O BOX 36098 Kigamboni Dar es Salaam',
      link: 'https://maps.app.goo.gl/vehggr7yykbAxp8SA',
      description: 'Our office location in Kigamboni, Dar es Salaam.'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      content: 'Mon - Fri: 8AM - 5PM EAT',
      link: '#',
      description: 'We\'re available during East African business hours.'
    }
  ];

  const services = [
    'Software Development',
    'AI & Machine Learning',
    'Cloud Solutions',
    'Cybersecurity',
    'Data Analytics',
    'Consultancy & Training',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'Not sure yet'
  ];

  const faqs = [
    {
      question: 'How long does it take to get a project estimate?',
      answer: 'We typically provide initial estimates within 24-48 hours after receiving your project details. For complex projects, we may schedule a consultation call to better understand your requirements.'
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer: 'Absolutely! We work with organizations of all sizes, from startups to enterprise clients. We offer flexible pricing models and can scale our services to match your needs and budget.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile development methodology with regular sprints, client feedback sessions, and iterative improvements. You\'ll have full visibility into the project progress throughout the development cycle.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements as needed.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact NeoVam Technologies</title>
        <meta name="description" content="Contact NeoVam Technologies for AI, Cloud, and Fintech projects. Email info@neovam.com or use our contact form." />
        <meta property="og:title" content="Contact NeoVam Technologies" />
        <meta property="og:description" content="Contact NeoVam Technologies for AI, Cloud, and Fintech projects." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-primary-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 animate-fade-in px-2">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 animate-slide-up animate-delay-200 px-2">
            Have a project in mind? Let's bring it to life together. We're here to help you transform your ideas into powerful digital solutions.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            {contactInfo.map((info, index) => (
              <div key={index} className="p-6 rounded-2xl glass hover-glow text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4">
                  <info.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                {info.link !== '#' ? (
                  <a href={info.link} className="text-primary-400 font-medium hover:text-primary-300 transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-primary-400 font-medium">{info.content}</p>
                )}
                <p className="text-gray-400 text-sm mt-2">{info.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Start Your Project</h2>
                <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                  Tell us about your project and we'll get back to you with a tailored solution and estimate.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors dark:bg-dark-800 dark:border-dark-600 dark:text-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors dark:bg-dark-800 dark:border-dark-600 dark:text-white"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors dark:bg-dark-800 dark:border-dark-600 dark:text-white"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors dark:bg-dark-800 dark:border-dark-600 dark:text-white"
                        placeholder="+255 746 177 230"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Service Interested In *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-primary-400 transition-colors dark:bg-dark-800 dark:border-dark-600 dark:text-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-primary-400 transition-colors dark:bg-dark-800 dark:border-dark-600 dark:text-white"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((budget, index) => (
                          <option key={index} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-primary-400 transition-colors dark:bg-dark-800 dark:border-dark-600 dark:text-white"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors resize-none dark:bg-dark-800 dark:border-dark-600 dark:text-white"
                      placeholder="Tell us about your project requirements, goals, and any specific challenges you're facing..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiSend />
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400">
                      <FiCheckCircle />
                      <span>Message sent successfully! We'll get back to you within 24 hours.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                      <FiAlertCircle />
                      <span>Sorry, there was an error sending your message. Please try again or email us directly.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary-900/20 to-primary-800/20 border border-primary-400/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Need Immediate Help?</h3>
              <p className="text-gray-400 mb-4">
                For urgent inquiries or quick questions, don't hesitate to reach out directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:info@neovam.com"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-glow transition-all duration-300"
                >
                  <FiMail />
                  Email Us
                </a>
                <a
                  href="tel:+2341234567890"
                  className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary-400 text-primary-300 font-semibold rounded-lg hover:bg-primary-400 hover:text-white transition-all duration-300"
                >
                  <FiPhone />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-400/10 border border-primary-200 dark:border-primary-400/20 text-primary-700 dark:text-primary-300 text-xs font-bold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
              FAQ
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
              Frequently Asked <span className="text-gradient-aurora">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
              Answers to the questions we hear most from our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-[534px_minmax(0,1fr)] gap-8 md:gap-10 items-start">
            {/* Visual */}
            <div className="hidden lg:block relative rounded-[27px] overflow-hidden w-full lg:sticky lg:top-28 bg-gradient-nav" style={{ height: '701px' }}>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/20 blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/20 blur-3xl"></div>
                <div className="absolute top-1/3 left-10 w-40 h-40 rounded-full border-2 border-white/30"></div>
                <div className="absolute bottom-1/3 right-10 w-40 h-40 rounded-full border-2 border-white/30"></div>
              </div>

              <div className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
                <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-white/95 dark:bg-dark-800 flex items-center justify-center p-6 shadow-2xl animate-float">
                  <img src="/neovam_logo.png" alt="NeoVam" className="w-full h-full object-contain" />
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-xl mb-2 flex items-center justify-center gap-2">
                    <FiPhoneCall className="w-5 h-5 animate-pulse" /> We're a call away
                  </p>
                  <p className="text-indigo-100 text-sm">Our customer service team is ready to assist you.</p>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 dark:bg-dark-800/80 backdrop-blur border border-white/20 animate-float">
                <p className="text-white font-semibold text-lg mb-1 flex items-center gap-2"><FiHeadphones className="w-5 h-5" /> Still have questions?</p>
                <p className="text-indigo-100 text-sm">Reach out anytime we're happy to help you get started.</p>
              </div>
            </div>

            {/* FAQ list */}
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-[19px] border transition-colors duration-300 ${
                      isOpen
                        ? 'border-primary-400 dark:border-primary-500/60 bg-white dark:bg-dark-800 shadow-lg'
                        : 'border-gray-200 dark:border-dark-600 bg-white/70 dark:bg-dark-800/60 backdrop-blur'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="w-full min-h-[78px] px-5 sm:px-6 flex items-center justify-between gap-5 cursor-pointer text-left"
                    >
                      <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </span>
                      <span
                        className={`flex items-center justify-center w-8 h-8 rounded-full flex-none transition-all duration-300 ${
                          isOpen
                            ? 'bg-gradient-primary text-white rotate-180'
                            : 'bg-primary-500/10 text-primary-500'
                        }`}
                      >
                        <FiChevronDown className="w-4 h-4" />
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">Visit Our Office</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">Located in Kigamboni, Dar es Salaam</p>
          </div>

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-64 sm:h-80 md:h-96 glass">
            {/* Embedded Google Map - place query so no API key required */}
            <iframe
              title="NeoVam Office Location"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent('P.O BOX 36098 Kigamboni Dar es Salaam')}&output=embed`}
            />

            <div className="absolute bottom-4 right-4">
              <a
                href="https://maps.app.goo.gl/vehggr7yykbAxp8SA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white font-semibold rounded-full hover:shadow-glow transition-all duration-300"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
