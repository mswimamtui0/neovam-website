import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/home/HeroSection';
import TrustedBySection from '../components/home/TrustedBySection';
import AboutSection from '../components/home/AboutSection';
import StatsSection from '../components/home/StatsSection';
import ProjectFlowSection from '../components/home/ProjectFlowSection';
import ServicesSection from '../components/home/ServicesSection';
import ProjectsSection from '../components/home/ProjectsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqSection from '../components/home/FaqSection';
import ContactSection from '../components/home/ContactSection';
import TrustLogosSection from '../components/home/TrustLogosSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>NeoVam Technologies — AI for Humanity</title>
        <meta name="description" content="NeoVam Technologies builds AI, Cloud and Fintech solutions to accelerate digital transformation across Africa." />
        <meta property="og:title" content="NeoVam Technologies — AI for Humanity" />
        <meta property="og:description" content="AI-driven products, secure infrastructure, and fintech integrations for enterprises and governments." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NeoVam Technologies — AI for Humanity" />
        <meta name="twitter:description" content="AI-driven products, secure infrastructure, and fintech integrations for enterprises and governments." />
      </Helmet>

      <div className="home-page-scale">
        <HeroSection />
        <TrustedBySection />
        <AboutSection />
        <StatsSection />
        <ProjectFlowSection />
        <ServicesSection />
        <ProjectsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
        <TrustLogosSection />
      </div>
    </>
  );
};

export default Home;

