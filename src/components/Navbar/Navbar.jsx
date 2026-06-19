import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '/resume.pdf', external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.8, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo" onClick={(e) => handleClick(e, '#hero')}>
          <img src="/favicon.svg" alt="Logo" className="navbar__logo-image" />
          <span className="navbar__logo-text">anthosh Kumar S</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`navbar__link ${activeSection === link.href.replace('#', '') ? 'navbar__link--active' : ''} ${link.label === 'Resume' ? 'navbar__link--resume' : ''}`}
                onClick={(e) => {
                  if (link.external) return;
                  handleClick(e, link.href);
                }}
              >
                <span className="navbar__link-text">{link.label}</span>
                {!link.external && activeSection === link.href.replace('#', '') && (
                  <motion.span className="navbar__link-indicator" layoutId="activeLink" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`navbar__mobile-link ${activeSection === link.href.replace('#', '') ? 'navbar__mobile-link--active' : ''} ${link.label === 'Resume' ? 'navbar__mobile-link--resume' : ''}`}
                onClick={(e) => {
                  if (link.external) {
                    setMobileOpen(false);
                    return;
                  }
                  handleClick(e, link.href);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
