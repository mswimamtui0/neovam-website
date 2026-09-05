# NeoVam Technologies Website

A modern, professional website built with React, Tailwind CSS, and cutting-edge web technologies.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Loading**: Optimized performance with lazy loading and code splitting
- **SEO Optimized**: Proper meta tags and structured data
- **Professional Sections**: Home, Services, About, Careers, and Contact pages
- **Interactive Elements**: Smooth animations, hover effects, and micro-interactions
- **Contact Form**: Functional contact form with validation
- **Career Listings**: Dynamic job postings with detailed information

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for SPA navigation
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Helmet**: SEO and meta tag management
- **React Icons**: Beautiful, customizable icons
- **Framer Motion**: Smooth animations and transitions

## 📦 Installation

1. **Clone or download the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser and visit**: `http://localhost:3000`

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

This will create a `build` folder with optimized static files ready for deployment.

## 🚀 Deployment

### Option 1: Netlify (Recommended)
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on git push

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts

### Option 3: Traditional Web Hosting
1. Run `npm run build`
2. Upload the contents of the `build` folder to your web server

## 📁 Project Structure

```
neovam-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Loading.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Careers.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`. Main colors:
- Primary Blue: `#38bdf8` (sky-400)
- Dark Background: `#0c1221`
- Text colors: Various shades of gray and white

### Content
- Update company information in the components
- Modify service offerings in `pages/Services.jsx`
- Update team information in `pages/About.jsx`
- Modify job listings in `pages/Careers.jsx`
- Update contact information in `pages/Contact.jsx`

### Images
Replace placeholder images with your own:
- Logo: Update in `components/Header.jsx`
- Hero images: Update URLs in respective page components
- Team photos: Update in `pages/About.jsx`

## 📧 Contact Form

The contact form is currently set up with a demo submission handler. To make it functional:

1. **Option 1 - Formspree**: Replace the form action with your Formspree endpoint
2. **Option 2 - Netlify Forms**: Add `netlify` attribute to the form
3. **Option 3 - Custom Backend**: Integrate with your own API endpoint

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific settings:
```
REACT_APP_SITE_URL=https://neovam.com
REACT_APP_CONTACT_EMAIL=info@neovam.com
REACT_APP_PHONE=+234-123-456-7890
```

### SEO Settings
Update meta tags and structured data in:
- `public/index.html`
- Individual page components using React Helmet

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images and loading
- Smooth scrolling and animations

## ⚡ Performance Features

- Lazy loading of page components
- Optimized images with proper sizing
- Minimal bundle size with code splitting
- CSS animations for smooth interactions
- Proper caching headers for static assets

## 🛠️ Development

### Available Scripts
- `npm start`: Start development server
- `npm run build`: Build for production
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App (not recommended)

### Code Style
- ESLint configuration included
- Prettier for code formatting
- Consistent naming conventions
- Component-based architecture

## 📄 License

This project is proprietary to NeoVam Technologies. All rights reserved.

## 🤝 Support

For support or questions about this website:
- Email: info@neovam.com
- Website: https://neovam.com

---

Built with ❤️ by NeoVam Technologies