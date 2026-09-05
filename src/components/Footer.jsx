import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiTwitter, FiLinkedin, FiGithub, FiArrowUp, FiLock, FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Software Development', href: '/services' },
        { name: 'AI & Machine Learning', href: '/services' },
        { name: 'Cloud Solutions', href: '/services' },
        { name: 'Cybersecurity', href: '/services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Support Center', href: '#' },
        { name: 'Victory Fund Privacy', href: '/privacy-policy/victory-fund' },
        { name: 'Terms of Service', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiGithub, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="relative bg-primary-900">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-600/20 blur-3xl"></div>
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        {/* Single horizontal row with all sections */}
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-8">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="rounded-lg w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-800 shadow-lg shadow-primary-600/30 flex-none">
              <span className="text-white font-extrabold text-lg sm:text-xl">N</span>
            </div>
            <div className="leading-tight">
              <div className="text-white font-extrabold text-base sm:text-lg tracking-wide">NEOVAM</div>
              <div className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-blue-300/80 whitespace-nowrap">
                AI · CLOUD · FINTECH
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5">
                {section.title}
              </h4>
              <ul className="space-y-1.5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-blue-200/70 hover:text-white transition-colors text-xs sm:text-sm whitespace-nowrap"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5">
              Contact
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="mailto:info@neovam.com"
                  className="flex items-center gap-1.5 text-blue-200/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  <FiMail className="flex-none text-blue-300" />
                  <span className="break-all">info@neovam.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/vehggr7yykbAxp8SA"
                  className="flex items-center gap-1.5 text-blue-200/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  <FiMapPin className="flex-none text-blue-300" />
                  <span className="whitespace-nowrap">P.O BOX 36098, Kigamboni, Dar es Salaam</span>
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-1.5 mt-2.5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-7 h-7 rounded-md bg-primary-800 text-blue-200/70 hover:text-white hover:bg-primary-600 flex items-center justify-center transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
              Newsletter
            </h4>
            <p className="text-blue-200/60 text-xs sm:text-sm mb-2 whitespace-nowrap">
              Tips on AI, cloud &amp; fintech.
            </p>
            <div className="flex w-52">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-2.5 py-2 bg-primary-800 text-white placeholder-blue-200/40 text-xs sm:text-sm rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              />
              <button
                className="bg-gradient-to-br from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white px-3 rounded-r-md flex items-center justify-center transition-all duration-300 hover:shadow-glow flex-none"
                aria-label="Subscribe"
              >
                <FiArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-5 mt-8 border-t border-white/10">
          <p className="text-blue-200/60 text-xs sm:text-sm text-center md:text-left">
            &copy; {currentYear} NeoVam Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/admin/login"
              className="flex items-center gap-1 px-2.5 py-1 text-[10px] text-blue-200/60 hover:text-white transition-colors group"
            >
              <FiLock size={13} className="group-hover:scale-105 transition-transform" />
              <span>Admin</span>
            </Link>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-2.5 py-1 text-xs sm:text-sm text-blue-200/60 hover:text-white transition-colors group touch-manipulation"
            >
              <span>Back to top</span>
              <FiArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;