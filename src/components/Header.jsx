import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiMenu, FiX, FiChevronDown, FiGrid, 
  FiSearch, FiArrowRight, FiLayers, 
  FiCpu, FiCloud, FiDollarSign, FiCode, FiShield,
  FiBriefcase, FiBook, FiHome, FiUsers, FiMail,
  FiAward, FiTrendingUp, FiZap, FiGlobe,
  FiSmartphone, FiLock,
  FiInfo, FiMessageCircle,
  FiServer, FiGitBranch, FiCheckCircle, FiBookOpen
} from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const logo = '/neovam_logo.png';
  const fallbackLogo = 'https://via.placeholder.com/40/38bdf8/ffffff?text=N';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // ===== PRODUCTS DATA =====
  const products = [
    { name: 'African Western Education', path: '/products/african-western-education', description: 'Education agency management platform', icon: FiBook, tag: 'Education' },
    { name: 'Myshopii', path: '/products/myshopii', description: 'Multi-vendor eCommerce marketplace', icon: FiGrid, tag: 'E-Commerce' },
    { name: 'Victory Financial Services', path: '/products/victory-financial', description: 'Brokerage & investment platform', icon: FiDollarSign, tag: 'Fintech' },
    { name: 'WhatsApp Chat Bot', path: '/products/whatsapp-chatbot', description: 'AI-powered customer engagement', icon: FiMessageCircle, tag: 'AI' },
    { name: 'Bulk SMS Platform', path: '/products/bulk-sms', description: 'Marketing & broadcast messaging', icon: FiZap, tag: 'Messaging' },
    { name: 'StockEx Pro', path: '/products/stockex-pro', description: 'Full brokerage & HR suite', icon: FiTrendingUp, tag: 'Fintech' },
    { name: 'Hadithi App', path: '/products/hadithi-app', description: 'Storytelling platform with flexible payments', icon: FiBookOpen, tag: 'Entertainment' }
  ];

  // ===== SERVICES DATA (18 services) =====
  const services = [
    { name: 'Product Strategy', path: '/services/product-strategy', description: 'Your Product Strategy', icon: FiTrendingUp, category: 'Strategy' },
    { name: 'Business Process Automation', path: '/services/business-process-automation', description: 'Automate & Accelerate', icon: FiZap, category: 'Strategy' },
    { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Innovate & Adapt', icon: FiGlobe, category: 'Strategy' },
    { name: 'Architecture & Scalability Planning', path: '/services/architecture-scalability', description: 'Robust Infrastructure', icon: FiLayers, category: 'Strategy' },
    { name: 'Technical Due Diligence', path: '/services/technical-due-diligence', description: 'Expert Analysis', icon: FiCheckCircle, category: 'Strategy' },
    { name: 'Custom Software Development', path: '/services/custom-software-development', description: 'Tailored Solutions', icon: FiCode, category: 'Development' },
    { name: 'Web Development', path: '/services/web-development', description: 'Dynamic Web Apps', icon: FiGlobe, category: 'Development' },
    { name: 'App Development', path: '/services/app-development', description: 'App Innovation', icon: FiSmartphone, category: 'Development' },
    { name: 'Enterprise Software Development', path: '/services/enterprise-software', description: 'Business Systems', icon: FiServer, category: 'Development' },
    { name: 'DevOps', path: '/services/devops', description: 'Infrastructure As Code', icon: FiGitBranch, category: 'Development' },
    { name: 'Software QA Testing', path: '/services/software-qa-testing', description: 'Reliable Software', icon: FiShield, category: 'Development' },
    { name: 'Dedicated Development Team', path: '/services/dedicated-development-team', description: 'Extended Team Power', icon: FiUsers, category: 'Staffing' },
    { name: 'Establishment of R&D Center', path: '/services/rnd-center-establishment', description: 'Empowering Innovation', icon: FiAward, category: 'Staffing' },
    { name: 'Staff Augmentation', path: '/services/staff-augmentation', description: 'Agile Staffing', icon: FiBriefcase, category: 'Staffing' },
    { name: 'AI & Machine Learning', path: '/services/ai-ml', description: 'Intelligent automation & insights', icon: FiCpu, category: 'AI' },
    { name: 'Cloud Solutions', path: '/services/cloud', description: 'Scalable infrastructure & DevOps', icon: FiCloud, category: 'Cloud' },
    { name: 'Fintech Solutions', path: '/services/fintech', description: 'Digital banking & payments', icon: FiDollarSign, category: 'Fintech' },
    { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Protect your business', icon: FiShield, category: 'Security' }
  ];

  // ===== INDUSTRIES DATA =====
  const industries = [
    { name: 'Banking', path: '/industries/banking', description: 'Modern banking solutions', icon: FiHome },
    { name: 'Fintech', path: '/industries/fintech', description: 'Financial technology', icon: FiDollarSign },
    { name: 'Education', path: '/industries/education', description: 'EdTech platforms', icon: FiBook },
    { name: 'E-Commerce', path: '/industries/ecommerce', description: 'Online retail solutions', icon: FiGrid },
    { name: 'Telecommunications', path: '/industries/telecommunications', description: 'Telco & messaging', icon: FiSmartphone }
  ];

  const company = [
    { name: 'About Us', path: '/about', description: 'Our story & mission', icon: FiInfo },
    { name: 'Careers', path: '/careers', description: 'Join our team', icon: FiUsers },
    { name: 'Contact', path: '/contact', description: 'Get in touch', icon: FiMail },
    { name: 'Privacy Policy', path: '/privacy-policy', description: 'Data protection', icon: FiLock }
  ];

  const blogCategories = [
    { name: 'All Articles', path: '/blog', description: 'Browse all blog posts', icon: FiGrid },
    { name: 'Artificial Intelligence', path: '/blog/category/Artificial Intelligence', description: 'Latest AI trends', icon: FiCpu },
    { name: 'Cloud Computing', path: '/blog/category/Cloud Computing', description: 'Cloud best practices', icon: FiCloud },
    { name: 'Fintech', path: '/blog/category/Fintech', description: 'Financial technology updates', icon: FiDollarSign },
    { name: 'Digital Transformation', path: '/blog/category/Digital Transformation', description: 'Business transformation', icon: FiTrendingUp }
  ];

  const popularTags = [
    { name: 'AI', path: '/blog/tag/AI' },
    { name: 'Startup', path: '/blog/tag/Startup' },
    { name: 'Africa', path: '/blog/tag/Africa' },
    { name: 'Innovation', path: '/blog/tag/Innovation' },
    { name: 'Technology', path: '/blog/tag/Technology' }
  ];

  const isActive = (path) => location.pathname === path;
  const isBlogActive = () => location.pathname.startsWith('/blog');
  const isProductsActive = () => location.pathname.startsWith('/products');
  const isServicesActive = () => location.pathname.startsWith('/services');
  const isIndustriesActive = () => location.pathname.startsWith('/industries');
  const isSuccessStoriesActive = () => location.pathname.startsWith('/success-stories');
  const isCompanyActive = () => location.pathname.startsWith('/about') || 
                           location.pathname.startsWith('/careers') || 
                           location.pathname.startsWith('/contact') ||
                           location.pathname.startsWith('/privacy-policy');

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const categoryColors = {
    'Strategy': 'text-purple-600 dark:text-purple-400',
    'Development': 'text-blue-600 dark:text-blue-400',
    'Staffing': 'text-pink-600 dark:text-pink-400',
    'AI': 'text-indigo-600 dark:text-indigo-400',
    'Cloud': 'text-cyan-600 dark:text-cyan-400',
    'Fintech': 'text-green-600 dark:text-green-400',
    'Security': 'text-red-600 dark:text-red-400'
  };

  // ===== PRODUCTS DROPDOWN - FIXED POSITIONING =====
  const ProductsDropdown = () => (
    <div className="absolute top-full left-0 mt-3 w-[700px] max-w-[95vw] bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-600 overflow-hidden">
      <div className="p-4 border-b border-gray-100 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50">
        <h3 className="font-bold text-gray-900 dark:text-white">Products</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Explore our products</p>
      </div>
      
      <div className="p-4 max-h-[400px] overflow-y-auto">
        <div className="grid grid-cols-2 gap-2">
          {products.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpenDropdown(null)}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors group"
            >
              <div className="mt-0.5 w-8 h-8 flex items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                <item.icon className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-medium text-gray-900 dark:text-white text-sm truncate">{item.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{item.description}</div>
                {item.tag && (
                  <span className="inline-block mt-1 px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-[10px] font-medium rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-100 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50 flex justify-between items-center">
        <span className="text-xs text-gray-500 dark:text-gray-400">{products.length} products available</span>
        <Link 
          to="/products" 
          onClick={() => setOpenDropdown(null)}
          className="text-primary-600 dark:text-primary-400 font-medium text-sm hover:underline flex items-center gap-1"
        >
          View All Products →
        </Link>
      </div>
    </div>
  );

  // ===== SERVICES DROPDOWN - FIXED POSITIONING =====
  const ServicesDropdown = () => (
    <div className="absolute top-full left-0 mt-3 w-[900px] max-w-[95vw] bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-600 overflow-hidden">
      <div className="p-4 border-b border-gray-100 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50">
        <h3 className="font-bold text-gray-900 dark:text-white">Services</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Explore our services</p>
      </div>
      
      <div className="p-4 max-h-[500px] overflow-y-auto">
        <div className="grid grid-cols-3 gap-4">
          {['Strategy', 'Development', 'Staffing', 'AI', 'Cloud', 'Fintech', 'Security'].map((category) => {
            const items = services.filter(s => s.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category} className="mb-2">
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${categoryColors[category] || 'text-gray-400 dark:text-gray-500'}`}>
                  {category}
                </h4>
                <div className="space-y-1">
                  {items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors group"
                    >
                      <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <item.icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-gray-900 dark:text-white text-xs truncate">{item.name}</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 truncate">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-100 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50 flex justify-between items-center">
        <span className="text-xs text-gray-500 dark:text-gray-400">{services.length} services available</span>
        <Link 
          to="/services" 
          onClick={() => setOpenDropdown(null)}
          className="text-primary-600 dark:text-primary-400 font-medium text-sm hover:underline flex items-center gap-1"
        >
          View All Services →
        </Link>
      </div>
    </div>
  );

  // ===== INDUSTRIES DROPDOWN - FIXED POSITIONING =====
  const IndustriesDropdown = () => (
    <div className="absolute top-full left-0 mt-3 w-[600px] max-w-[95vw] bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-600 overflow-hidden">
      <div className="p-4 border-b border-gray-100 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50">
        <h3 className="font-bold text-gray-900 dark:text-white">Industries</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Industries we serve</p>
      </div>
      
      <div className="p-4 max-h-[400px] overflow-y-auto">
        <div className="grid grid-cols-2 gap-2">
          {industries.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpenDropdown(null)}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors group"
            >
              <div className="mt-0.5 w-8 h-8 flex items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                <item.icon className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-medium text-gray-900 dark:text-white text-sm truncate">{item.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-100 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50 flex justify-between items-center">
        <span className="text-xs text-gray-500 dark:text-gray-400">{industries.length} industries available</span>
        <Link 
          to="/industries" 
          onClick={() => setOpenDropdown(null)}
          className="text-primary-600 dark:text-primary-400 font-medium text-sm hover:underline flex items-center gap-1"
        >
          View All Industries →
        </Link>
      </div>
    </div>
  );

  const BlogDropdown = () => (
    <div className="absolute top-full left-0 mt-3 w-80 bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-600 overflow-hidden">
      <div className="p-4 border-b border-gray-100 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50">
        <h3 className="font-bold text-gray-900 dark:text-white">Blog Categories</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Latest insights from NeoVam</p>
      </div>
      
      <div className="p-4">
        {blogCategories.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setOpenDropdown(null)}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors mb-2 last:mb-0"
          >
            <div className="mt-0.5 text-primary-600 dark:text-primary-400">
              <item.icon className="w-4 h-4" />
            </div>
            <div>
              <div className="font-medium text-gray-900 dark:text-white">{item.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.description}</div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-100 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50">
        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">Popular Tags</h4>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Link
              key={tag.path}
              to={tag.path}
              onClick={() => setOpenDropdown(null)}
              className="px-3 py-1.5 bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-primary-900/30 dark:hover:text-primary-300 rounded-full text-xs font-medium transition-colors"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 overflow-visible ${isScrolled ? 'bg-white/90 dark:bg-dark-950/90 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-white/10' : 'bg-transparent'}`}>
      <div className="w-full px-0 py-0 h-[88px] flex items-center">
        <div className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-3 bg-white dark:bg-dark-800 border-y border-gray-100 dark:border-white/10 shadow-[0_14px_30px_rgba(60,49,100,0.10)] transition-all duration-300">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group" aria-label="NeoVam Home">
            <div className="flex items-center gap-3">
              <div className="relative w-[150px] p-1 flex items-center justify-center transition-all duration-300">
                <img src={logo} alt="NeoVam Logo" className="h-full w-auto object-contain" onError={(e) => { e.currentTarget.src = fallbackLogo; }} />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full px-2 py-1.5">
            {/* PRODUCTS Dropdown */}
            <div className="relative dropdown-container">
              <button onClick={() => toggleDropdown('products')} className={`relative flex items-center gap-1.5 px-4 py-2 text-[14px] font-semibold rounded-full transition-all duration-300 ${isProductsActive() || openDropdown === 'products' ? 'text-white bg-gradient-to-br from-primary-600 to-primary-700 shadow-md shadow-primary-500/25' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'}`}>
                <span>Products</span>
                <FiChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'products' && <ProductsDropdown />}
            </div>

            {/* SERVICES Dropdown */}
            <div className="relative dropdown-container">
              <button onClick={() => toggleDropdown('services')} className={`relative flex items-center gap-1.5 px-4 py-2 text-[14px] font-semibold rounded-full transition-all duration-300 ${isServicesActive() || openDropdown === 'services' ? 'text-white bg-gradient-to-br from-primary-600 to-primary-700 shadow-md shadow-primary-500/25' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'}`}>
                <span>Services</span>
                <FiChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'services' && <ServicesDropdown />}
            </div>

            {/* INDUSTRIES Dropdown */}
            <div className="relative dropdown-container">
              <button onClick={() => toggleDropdown('industries')} className={`relative flex items-center gap-1.5 px-4 py-2 text-[14px] font-semibold rounded-full transition-all duration-300 ${isIndustriesActive() || openDropdown === 'industries' ? 'text-white bg-gradient-to-br from-primary-600 to-primary-700 shadow-md shadow-primary-500/25' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'}`}>
                <span>Industries</span>
                <FiChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'industries' && <IndustriesDropdown />}
            </div>

            {/* SUCCESS STORIES */}
            <Link to="/success-stories" className={`relative px-4 py-2 text-[14px] font-semibold rounded-full transition-all duration-300 ${isSuccessStoriesActive() ? 'text-white bg-gradient-to-br from-primary-600 to-primary-700 shadow-md shadow-primary-500/25' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'}`}>
              Success Stories
            </Link>

            {/* COMPANY Dropdown */}
            <div className="relative dropdown-container">
              <button onClick={() => toggleDropdown('company')} className={`relative flex items-center gap-1.5 px-4 py-2 text-[14px] font-semibold rounded-full transition-all duration-300 ${isCompanyActive() || openDropdown === 'company' ? 'text-white bg-gradient-to-br from-primary-600 to-primary-700 shadow-md shadow-primary-500/25' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'}`}>
                <span>Company</span>
                <FiChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-3 w-[280px] bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-600 overflow-hidden">
                  <div className="p-4 border-b border-gray-100 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50">
                    <h3 className="font-bold text-gray-900 dark:text-white">Company</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">About NeoVam</p>
                  </div>
                  <div className="p-4">
                    {company.map((item) => (
                      <Link key={item.path} to={item.path} onClick={() => setOpenDropdown(null)} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors mb-2 last:mb-0">
                        <div className="mt-0.5 text-primary-600 dark:text-primary-400"><item.icon className="w-4 h-4" /></div>
                        <div><div className="font-medium text-gray-900 dark:text-white">{item.name}</div><div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.description}</div></div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* BLOG Dropdown */}
            <div className="relative dropdown-container">
              <button onClick={() => toggleDropdown('blog')} className={`relative flex items-center gap-1.5 px-4 py-2 text-[14px] font-semibold rounded-full transition-all duration-300 ${isBlogActive() || openDropdown === 'blog' ? 'text-white bg-gradient-to-br from-primary-600 to-primary-700 shadow-md shadow-primary-500/25' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'}`}>
                <span>Blog</span>
                <FiChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === 'blog' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'blog' && <BlogDropdown />}
            </div>

            {/* CONTACT */}
            <Link to="/contact" className={`relative px-6 py-2 text-[14px] font-semibold rounded-full transition-all duration-300 ${isActive('/contact') ? 'text-white bg-gradient-to-br from-primary-600 to-primary-700 shadow-md shadow-primary-500/25' : 'text-white bg-gradient-to-br from-primary-600 to-primary-700 hover:shadow-glow hover:scale-105'}`}>
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="w-[42px] h-[42px] rounded-full border border-gray-200 dark:border-white/15 bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 shadow-[0_8px_18px_rgba(18,25,42,0.07)] grid place-items-center transition-all duration-300" aria-label="Search">
              <FiSearch className="w-[18px] h-[18px]" />
            </button>
            <ThemeToggle />
            <Link to="/contact" className="flex items-center gap-2 px-5 py-3 bg-gradient-to-br from-primary-600 to-primary-700 text-white text-sm font-semibold rounded-full hover:shadow-glow hover:scale-105 transition-all duration-300">
              Get Started
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors touch-manipulation" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-dark-950/95 backdrop-blur-md border border-gray-200/60 dark:border-white/10 rounded-3xl py-4 shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col space-y-1 px-2 sm:px-3">
              {/* PRODUCTS Mobile */}
              <div className="mb-1">
                <button onClick={() => toggleDropdown('mobile-products')} className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-semibold rounded-2xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5">
                  <span>Products</span>
                  <FiChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-products' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'mobile-products' && (
                  <div className="ml-4 space-y-1">
                    {products.map((item) => (
                      <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl">
                        <item.icon className="w-4 h-4 text-primary-600" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* SERVICES Mobile */}
              <div className="mb-1">
                <button onClick={() => toggleDropdown('mobile-services')} className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-semibold rounded-2xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5">
                  <span>Services</span>
                  <FiChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'mobile-services' && (
                  <div className="ml-4 space-y-1">
                    {services.map((item) => (
                      <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl">
                        <item.icon className="w-4 h-4 text-primary-600" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* INDUSTRIES Mobile */}
              <div className="mb-1">
                <button onClick={() => toggleDropdown('mobile-industries')} className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-semibold rounded-2xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5">
                  <span>Industries</span>
                  <FiChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-industries' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'mobile-industries' && (
                  <div className="ml-4 space-y-1">
                    {industries.map((item) => (
                      <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl">
                        <item.icon className="w-4 h-4 text-primary-600" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* SUCCESS STORIES Mobile */}
              <Link to="/success-stories" className="block px-4 py-3 text-[15px] font-semibold rounded-2xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5" onClick={() => setIsMobileMenuOpen(false)}>
                Success Stories
              </Link>

              {/* COMPANY Mobile */}
              <div className="mb-1">
                <button onClick={() => toggleDropdown('mobile-company')} className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-semibold rounded-2xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5">
                  <span>Company</span>
                  <FiChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-company' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'mobile-company' && (
                  <div className="ml-4 space-y-1">
                    {company.map((item) => (
                      <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl">
                        <item.icon className="w-4 h-4 text-primary-600" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* BLOG Mobile */}
              <div className="mb-1">
                <button onClick={() => toggleDropdown('mobile-blog')} className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-semibold rounded-2xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5">
                  <span>Blog</span>
                  <FiChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-blog' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'mobile-blog' && (
                  <div className="ml-4 space-y-1">
                    {blogCategories.map((item) => (
                      <Link key={item.path} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl">
                        <item.icon className="w-4 h-4 text-primary-600" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                    <div className="px-4 py-2">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-xs">Popular Tags</h4>
                      <div className="flex flex-wrap gap-1">
                        {popularTags.map((tag) => (
                          <Link key={tag.path} to={tag.path} onClick={() => setIsMobileMenuOpen(false)} className="px-2.5 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-700 rounded-full text-xs font-medium transition-colors">
                            {tag.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CONTACT Mobile */}
              <Link to="/contact" className="mt-2 px-4 py-4 bg-gradient-to-br from-primary-600 to-primary-700 text-white text-base font-semibold rounded-2xl text-center touch-manipulation" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;