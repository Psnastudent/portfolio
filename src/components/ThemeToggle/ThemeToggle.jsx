import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <motion.button
      className="theme-toggle"
      onClick={() => setIsDark(!isDark)}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 2 }}
    >
      <motion.div
        className="theme-toggle__track"
        animate={{ backgroundColor: isDark ? '#333' : '#e5e5e5' }}
      >
        <motion.div
          className="theme-toggle__thumb"
          animate={{
            x: isDark ? 24 : 0,
            backgroundColor: isDark ? '#0a0a0a' : '#ffffff',
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          {isDark ? (
            <FiMoon size={12} color="#f0f0f0" />
          ) : (
            <FiSun size={12} color="#111" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
