import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      setIsDarkMode(isDark);
      updateDocumentClass(isDark);
    } else {
      // Default to light mode
      setIsDarkMode(false);
      updateDocumentClass(false);
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const updateDocumentClass = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-dark-950 text-white';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-gray-50 text-gray-900';
    }
  };

  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    updateDocumentClass(newIsDarkMode);
    localStorage.setItem('theme', newIsDarkMode ? 'dark' : 'light');
  };

  const value = {
    isDarkMode,
    toggleTheme,
    theme: isDarkMode ? 'dark' : 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};