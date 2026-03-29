import { motion } from 'framer-motion';
import { FiArrowUpRight, FiBookOpen } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Large centered portrait */}
      <div className="hero__portrait-wrapper">
        <motion.img
          src="/IMG_9297 (1)(1).jpg"
          alt="Santhosh Kumar S"
          className="hero__portrait"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Bottom content overlay */}
      <div className="hero__bottom">
        <div className="hero__bottom-inner container">
          {/* Left side — badge + heading */}
          <motion.div
            className="hero__left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Open for opportunities
            </div>
            <h1 className="hero__title">
              I'm solving problems through strategic design and compelling code
            </h1>
          </motion.div>

          {/* Right side — description + CTA */}
          <motion.div
            className="hero__right"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <p className="hero__description">
              As a software engineer with a strong focus on React and AI-powered applications, he collaborates closely with teams to craft seamless, user-centered experiences. A reliable partner in bringing ideas to life
            </p>
            <a href="mailto:santhoshkumar37937@gmail.com" className="hero__cta">
              Email Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
