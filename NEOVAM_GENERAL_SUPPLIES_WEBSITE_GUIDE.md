# NeoVam General Supplies Website - Design & Development Guide

## 🎯 Project Overview

Create a professional website for **NeoVam General Supplies** at `generalsupplies.neovam.com` that maintains the exact design system, architecture, and user experience of the main NeoVam Technologies website while adapting content for a general supplies procurement business.

---

## 📋 Company Profile Summary

**Company Name:** NeoVam General Supplies  
**Location:** Dar es Salaam, Tanzania  
**Core Business:** One-stop supplier of comprehensive business and institutional supplies  
**Operating Model:** Stock-less, dynamic procurement hub  
**Contact:** info@neovam.com | P.O BOX 36098 Kigamboni, Dar es Salaam, Tanzania

**Vision:** To be the most responsive and reliable general supplies partner for every company and institution in Tanzania.

**Mission:** To empower businesses and institutions by simplifying their procurement process through a single, dependable source for all supply needs.

---

## 🎨 Design System (Match Exactly from NeoVam Technologies Website)

### Color Palette
```css
/* Primary Colors - Keep identical to main site */
--primary-50: #eff6ff;
--primary-100: #dbeafe;
--primary-200: #bfdbfe;
--primary-300: #93c5fd;
--primary-400: #60a5fa;  /* Main brand color */
--primary-600: #2563eb;
--primary-900: #1e3a8a;
--primary-950: #172554;

/* Dark Mode Colors */
--dark-800: #1e293b;
--dark-900: #0f172a;
--dark-950: #020617;

/* Neutral Colors */
--gray-50 to --gray-900 (standard Tailwind scale)
```

### Typography
- **Font Family:** `font-inter` (Inter)
- **Headings:** Bold, ranging from `text-3xl` to `text-6xl` with responsive scaling
- **Body Text:** `text-base` to `text-lg` with `leading-relaxed`
- **Color:** `text-gray-900 dark:text-white` for headings, `text-gray-600 dark:text-gray-400` for body

### Spacing & Layout
- **Max Width Container:** `max-w-7xl mx-auto px-4 sm:px-6`
- **Section Padding:** `py-12 sm:py-16 md:py-20`
- **Responsive Breakpoints:** `sm:`, `md:`, `lg:`, `xl:` (Tailwind defaults)
- **Grid Systems:** `grid sm:grid-cols-2 lg:grid-cols-3` patterns

### Component Styles
- **Buttons (Primary):** `bg-gradient-primary text-white px-6 py-3.5 rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300`
- **Buttons (Secondary):** `border-2 border-primary-400 text-primary-300 px-6 py-3.5 rounded-xl hover:bg-primary-400 hover:text-white transition-all duration-300`
- **Cards:** `p-6 sm:p-8 bg-white dark:bg-dark-800 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-glow hover:shadow-xl transition-all duration-300 border dark:border-gray-700`
- **Glass Effect:** `bg-white/95 dark:bg-dark-950/95 backdrop-blur-md`

### Custom Gradient Classes
```css
.bg-gradient-primary {
  background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%);
}

.text-gradient {
  background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hover-glow {
  transition: box-shadow 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 30px rgba(96, 165, 250, 0.3);
}
```

### Animations
```css
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out;
}

.animate-delay-200 { animation-delay: 200ms; }
.animate-delay-300 { animation-delay: 300ms; }
```

---

## 🏗️ Technical Architecture

### Tech Stack (Keep Identical)
- **Framework:** React 18+ with Create React App
- **Routing:** React Router v6
- **Styling:** Tailwind CSS + Custom CSS
- **Icons:** react-icons (Feather Icons - `react-icons/fi`)
- **SEO:** react-helmet for meta tags
- **State:** React Context API for theme management
- **Build:** react-scripts

### Project Structure
```
neovam-general-supplies-website/
├── public/
│   ├── assets/               # Local images (logo, products, team)
│   ├── .htaccess             # SPA routing for Apache/cPanel
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation bar (h-[120px], logo h-[68px])
│   │   ├── Footer.jsx        # Footer with contact info
│   │   ├── ThemeToggle.jsx   # Dark/light mode toggle
│   │   └── Loading.jsx       # Page loading spinner
│   ├── contexts/
│   │   └── ThemeContext.jsx  # Theme state management
│   ├── pages/
│   │   ├── Home.jsx          # Landing page
│   │   ├── Products.jsx      # Product categories (replaces Services.jsx)
│   │   ├── About.jsx         # Company info, team, mission
│   │   ├── Clients.jsx       # Target clientele showcase (replaces Careers.jsx)
│   │   └── Contact.jsx       # Contact form, location, FAQ
│   ├── App.jsx               # Main app with routing
│   ├── index.css             # Global styles + Tailwind
│   └── index.js              # React entry point
├── package.json
└── tailwind.config.js
```

### Header Component Specifications
```jsx
// Header must have these exact specs:
- Container height: h-[120px]
- Logo container: h-[68px] with bg-white (always white, even in dark mode)
- Logo styling: bg-white dark:bg-white rounded-xl with ring-2 ring-primary-400/20
- Vertical spacing: my-2 sm:my-3 on logo container
- Navigation items: text-sm font-medium with hover effects
- Mobile menu: backdrop-blur-md with touch-friendly py-4 links
```

### Theme Implementation
- Use React Context for dark/light mode state
- Add `dark:` variants for all color classes
- Background: `bg-gray-50 dark:bg-dark-950`
- Cards: `bg-white dark:bg-dark-800`
- Text: `text-gray-900 dark:text-white` and `text-gray-600 dark:text-gray-400`

---

## 📄 Page Content & Structure

### 1. Home Page (`Home.jsx`)

**Hero Section:**
- Title: "NeoVam General Supplies - **Your Trusted Partner in Business Essentials**"
- Tagline: "Effortless Procurement, Delivered"
- Subtitle: "One-stop supplier of comprehensive business and institutional supplies across Tanzania"
- CTA Buttons: "Request a Quote" | "View Product Catalog"
- Hero image: Use `/assets/supplies_hero.png` or similar (procurement/warehouse theme)

**Value Propositions Section (4 cards):**
1. **Simplicity** (Icon: FiPackage)
   - "One point of contact for all your supplies"
2. **Reliability** (Icon: FiTruck)
   - "Consistent, on-time delivery you can count on"
3. **Cost-Effectiveness** (Icon: FiDollarSign)
   - "Competitive pricing that saves you money"
4. **Agility** (Icon: FiZap)
   - "Source any product without stock limitations"

**Product Categories Overview (Grid):**
- Office Stationery & Supplies
- ICT Equipment & Accessories
- Cleaning & Janitorial Supplies
- Building & Construction Materials
- Hospitality Supplies
- Custom Procurement Solutions

**Stats Section:**
- "500+" → Happy Clients
- "10,000+" → Products Sourced
- "100%" → On-Time Delivery Rate
- "15+" → Years Combined Experience

**How We Work (Process Steps):**
1. **You Request** - Submit your supply list
2. **We Source** - Find the best suppliers
3. **We Consolidate** - One order, one invoice
4. **We Deliver** - Direct to your doorstep

**Client Testimonials (No avatars, just text):**
- Quote from corporate client
- Quote from educational institution
- Quote from healthcare facility

**Contact CTA:**
- "Ready to Simplify Your Procurement?"
- "Get in touch today for a customized quote"

---

### 2. Products Page (`Products.jsx` - replaces Services.jsx)

**Hero:**
- Title: "Our **Product Categories**"
- Subtitle: "Comprehensive supplies for every business need"

**Product Categories (6-8 detailed cards with images):**

Each card structure:
```jsx
{
  icon: FiIcon,
  title: "Category Name",
  description: "Brief description of what we supply in this category",
  image: "/assets/category_image.png",
  products: [
    "Product type 1",
    "Product type 2",
    "Product type 3",
    "Product type 4",
    "Product type 5",
    "Product type 6"
  ],
  brands: ["Brand 1", "Brand 2", "Brand 3"] // Optional
}
```

**Categories:**

1. **Office Stationery & Supplies** (FiFileText)
   - Products: Pens, Paper, Notebooks, Printer Cartridges, Toners, Folders, Staplers, Binders, Envelopes, Labels
   - Image: Office supplies stacked neatly

2. **ICT Equipment & Accessories** (FiMonitor)
   - Products: Computers, Laptops, Printers, Networking Equipment, Accessories, Cables, Storage Devices, Peripherals
   - Image: Modern IT equipment

3. **Cleaning & Janitorial Supplies** (FiDroplet)
   - Products: Detergents, Disinfectants, Brooms, Mops, Trash Bags, Cleaning Cloths, Floor Care, Sanitizers
   - Image: Cleaning supplies

4. **Building & Construction Materials** (FiTool)
   - Products: Paint, Nails, Tools, Plumbing Items, Electrical Fittings, Hardware, Cement, Lumber
   - Image: Construction materials

5. **Hospitality Supplies** (FiCoffee)
   - Products: Kitchen Equipment, Utensils, Cookware, Consumables, Serving Ware, Food Storage, Appliances
   - Image: Restaurant/hotel supplies

6. **Custom Procurement** (FiSearch)
   - Products: Any Special Request, Bulk Orders, Project-Specific Items, Seasonal Supplies, Specialized Equipment
   - Image: Warehouse or logistics

**CTA Section:**
- "Can't Find What You're Looking For?"
- "We can source ANY product you need. Contact us with your requirements."

---

### 3. About Page (`About.jsx`)

**Hero:**
- Title: "About **NeoVam General Supplies**"
- Subtitle: "Your trusted partner in business essentials since [year]"
- Image: `/assets/about_hero.png` (team/warehouse)

**Company Overview:**
- Brief history and establishment
- Operating model explanation (stock-less, dynamic procurement)
- Why we're different

**Mission & Vision (2-column layout):**
- Mission section with FiTarget icon
- Vision section with FiEye icon

**Core Values (4 cards):**
1. **Customer First** - "Your success is our priority"
2. **Quality Assurance** - "Only the best products delivered"
3. **Transparency** - "Clear pricing, honest communication"
4. **Innovation** - "Modern procurement solutions"

**How We Operate (Detailed process):**
1. **Client Acquisition & Tender Management**
   - Active client engagement
   - Tender bidding and winning
2. **Dynamic Sourcing & Procurement**
   - Vetted supplier database
   - Best price negotiations
3. **Quality Assurance**
   - Inspection and verification
   - Order consolidation
4. **Logistics & Delivery**
   - Timely transport
   - Proof of delivery for every order
5. **Professional Client Management**
   - Clear quotations and invoices
   - Dedicated customer support

**Team Section (Optional):**
- Key staff members (if applicable)
- Use similar layout to main site's team section

**Our Promise:**
- "We don't just deliver products; we deliver peace of mind."

---

### 4. Clients Page (`Clients.jsx` - replaces Careers.jsx)

**Hero:**
- Title: "Who We **Serve**"
- Subtitle: "Trusted by businesses and institutions across Tanzania"
- Image: `/assets/clients_hero.png` (diverse business settings)

**Target Client Categories (6 cards with icons):**

1. **Corporate Offices & SMEs** (FiBriefcase)
   - Description: Streamline your office supplies procurement
   - Benefits: Bulk discounts, regular deliveries, account management

2. **Educational Institutions** (FiBook)
   - Description: Schools, universities, and training centers
   - Benefits: Educational discounts, flexible payment terms

3. **Government Agencies** (FiShield)
   - Description: Parastatals and government departments
   - Benefits: Tender compliance, official documentation

4. **NGOs & International Agencies** (FiGlobe)
   - Description: Non-profit organizations and aid agencies
   - Benefits: International standards, donor compliance

5. **Healthcare Facilities** (FiHeart)
   - Description: Hospitals, clinics, and medical centers
   - Benefits: Medical-grade supplies, urgent delivery options

6. **Hotels & Restaurants** (FiCoffee)
   - Description: Hospitality industry suppliers
   - Benefits: Specialized equipment, food-grade products

**Why Clients Choose Us:**
- One invoice for all supplies
- Dedicated account manager
- Flexible payment terms
- Same-day delivery options (Dar es Salaam)
- Quality guarantee on all products

**Case Studies / Success Stories (Optional):**
- 2-3 brief client stories showing impact

**Become a Client CTA:**
- "Join Our Growing Family of Satisfied Clients"
- Registration form or contact prompt

---

### 5. Contact Page (`Contact.jsx`)

**Hero:**
- Title: "Get in **Touch**"
- Subtitle: "Ready to simplify your procurement? We're here to help."

**Contact Cards (3 cards):**
1. **Address** (FiMapPin)
   - P.O BOX 36098
   - Kigamboni, Dar es Salaam, Tanzania

2. **Email** (FiMail)
   - info@neovam.com
   - sales@neovam.com (optional)

3. **Phone** (FiPhone)
   - +255 XXX XXX XXX (add actual number)

**Contact Form:**
- Fields:
  - Full Name *
  - Email *
  - Phone Number
  - Company/Organization *
  - Product Category of Interest (dropdown)
  - Message / Requirements *
  - Budget Range (optional dropdown)
- Submit button: "Send Request"

**Map Section:**
- Embed Google Maps for Kigamboni location

**FAQ Section (Procurement-specific):**
1. "How quickly can you source products?"
   - "Most standard items within 24-48 hours; custom items may take 3-5 business days"
2. "What are your payment terms?"
   - "We offer flexible payment options including credit accounts for verified businesses"
3. "Do you deliver outside Dar es Salaam?"
   - "Yes, we deliver nationwide with competitive shipping rates"
4. "Can you handle bulk or project-based orders?"
   - "Absolutely! We specialize in large-scale procurement for projects and institutions"
5. "Do you provide quotes before ordering?"
   - "Yes, all clients receive detailed quotations before any purchase"

---

## 🔗 Integration with Main NeoVam Website

### Add Service Link in Main Site

In the main website's `src/pages/Services.jsx`, add this service card:

```jsx
{
  icon: FiPackage, // or FiShoppingCart
  title: 'General Supplies & Procurement',
  description: 'Comprehensive business and institutional supplies through our dedicated procurement division.',
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
```

Update the rendering logic to detect external links:

```jsx
{service.isExternal ? (
  <a
    href={service.externalLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-3 bg-gradient-primary text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300 touch-manipulation"
  >
    Visit General Supplies Site
    <FiExternalLink />
  </a>
) : (
  <Link to="/contact" className="...">
    Get Started
    <FiArrowRight />
  </Link>
)}
```

---

## 🖼️ Image Assets Needed

Create or source these images (match the style of main site):

1. **Logo:** `neovam_general_supplies_logo.png` (same style as main logo)
2. **Favicons:** Match main site
3. **Hero Images:**
   - `supplies_hero.png` - Warehouse/procurement theme
   - `about_hero.png` - Team or facility
   - `clients_hero.png` - Diverse business settings
4. **Product Category Images:** (6-8 images)
   - `office_supplies.png`
   - `ict_equipment.png`
   - `cleaning_supplies.png`
   - `construction_materials.png`
   - `hospitality_equipment.png`
   - `custom_procurement.png`
5. **Culture/Team:** `culture.png` (if showing team/facility)

**Image Style Guide:**
- Professional, modern photography
- Consistent color grading (slightly cool tones)
- High resolution (1200px width minimum)
- Use rounded corners when displayed (rounded-2xl / rounded-3xl)

---

## 🎯 Key Differences from Main Site

| Aspect | Main Site (NeoVam Technologies) | General Supplies Site |
|--------|--------------------------------|----------------------|
| **Primary Focus** | AI, Cloud, Fintech solutions | Procurement & supplies |
| **Services Page** | Technical services with code/tech | Product categories with tangible goods |
| **Careers Page** | Job listings, tech roles | **Clients page** - target clientele |
| **Tone** | Innovative, tech-forward, cutting-edge | Reliable, efficient, professional |
| **CTAs** | "Start Your Project", "Explore AI" | "Request Quote", "View Catalog" |
| **Keywords** | AI, Cloud, Software, Innovation | Supplies, Procurement, Delivery, Quality |
| **Icons Focus** | Tech icons (FiCpu, FiCloud, FiCode) | Business icons (FiPackage, FiTruck, FiShoppingCart) |

---

## 📱 Responsive Design Checklist

Ensure these responsive patterns (same as main site):

- ✅ Mobile-first approach with `sm:`, `md:`, `lg:` breakpoints
- ✅ Header logo scales: `h-[68px]` on all screens
- ✅ Text scales: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` for h1
- ✅ Grid columns: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- ✅ Padding: `px-4 sm:px-6` and `py-12 sm:py-16 md:py-20`
- ✅ Buttons: Full-width on mobile (`w-full sm:w-auto`)
- ✅ Mobile menu: Full-screen overlay with backdrop blur
- ✅ Touch-friendly: `touch-manipulation` class on interactive elements
- ✅ Images: Responsive with proper `order-first lg:order-last` patterns

---

## ⚙️ Configuration Files

### `tailwind.config.js`
```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          600: '#2563eb',
          900: '#1e3a8a',
          950: '#172554',
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
```

### `package.json` Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "react-helmet": "^6.1.0",
    "react-icons": "^4.12.0",
    "react-scripts": "5.0.1"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32"
  }
}
```

---

## 🚀 Deployment Instructions

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to cPanel:**
   - Upload all contents of `build/` folder to `public_html/generalsupplies/` or subdomain root
   - Ensure `.htaccess` is included for SPA routing

3. **DNS Configuration:**
   - Create subdomain: `generalsupplies.neovam.com`
   - Point to appropriate directory

4. **SSL Certificate:**
   - Enable HTTPS for the subdomain

---

## ✅ Development Checklist

Before launching, verify:

- [ ] All pages render correctly in light and dark modes
- [ ] Header logo is always on white background (`bg-white dark:bg-white`)
- [ ] Logo height is exactly 68px (`h-[68px]`)
- [ ] Navbar container height is 120px (`h-[120px]`)
- [ ] All responsive breakpoints work (mobile, tablet, desktop)
- [ ] External link from main site works correctly
- [ ] Contact form has validation and proper error handling
- [ ] All images are optimized and load properly
- [ ] SEO meta tags are configured for each page
- [ ] `.htaccess` file is present for SPA routing
- [ ] Dark mode toggle persists user preference
- [ ] All animations work smoothly
- [ ] Mobile menu opens/closes correctly
- [ ] Touch targets are at least 44x44px on mobile
- [ ] Page load performance is optimized

---

## 📞 Support & Maintenance

**Code Consistency:**
- Always reference this guide when making updates
- Keep design patterns identical to main NeoVam site
- Use same component structure and naming conventions

**Content Updates:**
- Product categories can be added/modified in `Products.jsx`
- Client testimonials updated in `Home.jsx`
- FAQ updated in `Contact.jsx`

**Branding Updates:**
- Logo updates: Replace in `public/assets/`
- Color scheme: Update `tailwind.config.js` (keep consistent with main site)

---

## 🎨 Summary: Visual Identity Match

**Must Match Main Site:**
- ✅ Exact color palette (primary blues, dark grays)
- ✅ Same typography (Inter font, same sizing scale)
- ✅ Identical component styles (buttons, cards, inputs)
- ✅ Same animation patterns
- ✅ Logo styling (white background, ring, rounded corners)
- ✅ Header structure and dimensions
- ✅ Footer layout and social icons
- ✅ Dark mode implementation
- ✅ Responsive breakpoint behavior

**Content Differences:**
- ❌ Service focus (supplies vs. technology)
- ❌ Page naming (Products vs. Services, Clients vs. Careers)
- ❌ Industry-specific language (procurement vs. software development)
- ❌ Call-to-action copy (quote requests vs. project starts)

---

**End of Guide**

Upload this entire document to Copilot in your new project and reference it for building the General Supplies website. The site will look and feel like a natural extension of the NeoVam brand while serving a completely different business vertical.
