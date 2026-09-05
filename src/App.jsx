import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import PageLoading from './components/Loading';
import { ThemeProvider } from './contexts/ThemeContext';
import authService from './services/authService';

// ========== LAZY LOAD PAGES FOR BETTER PERFORMANCE ==========

// Main Website Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const VictoryFundPrivacyPolicy = lazy(() => import('./pages/VictoryFundPrivacyPolicy'));

// Services Pages
const Services = lazy(() => import('./pages/services/Services'));
const ServiceDetail = lazy(() => import('./pages/services/ServiceDetail'));

// Products Pages
const Products = lazy(() => import('./pages/products/Products'));
const ProductDetail = lazy(() => import('./pages/products/ProductDetail'));

// Industries Pages
const Industries = lazy(() => import('./pages/industries/Industries'));
const IndustryDetail = lazy(() => import('./pages/industries/IndustryDetail'));

// Success Stories Pages
const SuccessStories = lazy(() => import('./pages/success-stories/SuccessStories'));
const SuccessStoryDetail = lazy(() => import('./pages/success-stories/SuccessStoryDetail'));

// Blog Pages
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const BlogCategory = lazy(() => import('./pages/BlogCategory'));
const BlogTag = lazy(() => import('./pages/BlogTag'));

// Admin Pages
const Login = lazy(() => import('./pages/admin/Login'));
const BlogAdmin = lazy(() => import('./pages/admin/BlogAdmin'));

// ========== PROTECTED ROUTE COMPONENTS ==========

const ProtectedRoute = ({ children }) => {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/admin/login" />;
  }
  return children;
};

const AdminRoute = ({ children }) => {
  if (!authService.isAdmin()) {
    return <Navigate to="/admin/login" />;
  }
  return children;
};

// ========== APP COMPONENT ==========

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen font-inter bg-gray-50 dark:bg-primary-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Helmet>
            <meta charSet="utf-8" />
            <title>NeoVam Technologies — AI, Cloud & Fintech Solutions</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#0c1221" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="NeoVam Technologies builds AI, Cloud and Fintech solutions to accelerate digital transformation across Africa." />
            <meta property="og:site_name" content="NeoVam Technologies" />
            <meta property="og:url" content="https://neovam.com" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@neovamtech" />
            
            {/* Structured Data for SEO */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "NeoVam Technologies",
                "url": "https://neovam.com",
                "logo": "https://neovam.com/logo.png",
                "description": "AI, Cloud and Fintech solutions for digital transformation across Africa",
                "sameAs": [
                  "https://twitter.com/neovamtech",
                  "https://linkedin.com/company/neovam"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+2551234567890",
                  "contactType": "customer service",
                  "availableLanguage": "English"
                }
              })}
            </script>
          </Helmet>

          <Header />

          <main className="pt-0">
            <Suspense fallback={<PageLoading />}>
              <Routes>
                {/* ========== MAIN WEBSITE ROUTES ========== */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<VictoryFundPrivacyPolicy />} />
                <Route path="/privacy-policy/victory-fund" element={<VictoryFundPrivacyPolicy />} />

                {/* ========== SERVICES ROUTES ========== */}
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />

                {/* ========== PRODUCTS ROUTES ========== */}
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />

                {/* ========== INDUSTRIES ROUTES ========== */}
                <Route path="/industries" element={<Industries />} />
                <Route path="/industries/:industryId" element={<IndustryDetail />} />

                {/* ========== SUCCESS STORIES ROUTES ========== */}
                <Route path="/success-stories" element={<SuccessStories />} />
                <Route path="/success-stories/:id" element={<SuccessStoryDetail />} />

                {/* ========== BLOG ROUTES (PUBLIC) ========== */}
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/blog/category/:category" element={<BlogCategory />} />
                <Route path="/blog/tag/:tag" element={<BlogTag />} />
                <Route path="/blog/search/:query" element={<BlogList />} />
                <Route path="/blog/page/:page" element={<BlogList />} />

                {/* ========== ADMIN ROUTES ========== */}
                {/* Public Login Route */}
                <Route path="/admin/login" element={<Login />} />
                
                {/* Protected Admin Routes */}
                <Route 
                  path="/admin" 
                  element={
                    <AdminRoute>
                      <Navigate to="/admin/blog" replace />
                    </AdminRoute>
                  } 
                />
                
                <Route 
                  path="/admin/blog" 
                  element={
                    <AdminRoute>
                      <BlogAdmin />
                    </AdminRoute>
                  } 
                />
                
                <Route 
                  path="/admin/create" 
                  element={
                    <AdminRoute>
                      <BlogAdmin />
                    </AdminRoute>
                  } 
                />
                
                <Route 
                  path="/admin/edit/:id" 
                  element={
                    <AdminRoute>
                      <BlogAdmin />
                    </AdminRoute>
                  } 
                />

                {/* ========== SEO & UTILITY ROUTES ========== */}
                <Route path="/rss.xml" element={<Navigate to="/api/rss.xml" />} />
                <Route path="/feed" element={<Navigate to="/api/rss.xml" />} />

                {/* ========== SEO FRIENDLY REDIRECTS ========== */}
                <Route path="/articles" element={<Navigate to="/blog" replace />} />
                <Route path="/news" element={<Navigate to="/blog" replace />} />
                <Route path="/insights" element={<Navigate to="/blog" replace />} />
                <Route path="/ai-blog" element={<Navigate to="/blog/category/Artificial Intelligence" replace />} />
                <Route path="/fintech-blog" element={<Navigate to="/blog/category/Fintech" replace />} />
                <Route path="/cloud-blog" element={<Navigate to="/blog/category/Cloud Computing" replace />} />

                {/* ========== 404 PAGE ========== */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center pt-24 bg-gray-50 dark:bg-primary-900">
                    <div className="text-center px-4">
                      <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4">404</h1>
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
                      <div className="flex flex-wrap justify-center gap-4">
                        <Link 
                          to="/" 
                          className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300"
                        >
                          Go Home
                        </Link>
                        <Link 
                          to="/contact" 
                          className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-primary-800 text-gray-700 dark:text-white font-semibold rounded-xl hover:bg-gray-300 dark:hover:bg-primary-700 transition-all duration-300"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;