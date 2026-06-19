import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiAward, FiArrowRight } from 'react-icons/fi';
import MagicCard, { MagicCardContainer } from '../MagicCard/MagicCard';
import './Projects.css';

const projects = [
  {
    title: 'Fake News Detection',
    description: 'An AI-powered fake news detection system that analyzes news articles and determines their credibility to fight misinformation.',
    tags: ['AI/ML', 'Python', 'NLP'],
    gradient: 'linear-gradient(135deg, #fca5a5 0%, #93c5fd 100%)',
    date: '2024',
    github: 'https://github.com/Psnastudent/Fakenews',
    live: '#',
  },
  {
    title: 'OD Management',
    description: 'An Organization Duty management system designed to streamline tracking and approving employee leave and duty requests.',
    tags: ['Management', 'Web App', 'Dashboard'],
    gradient: 'linear-gradient(135deg, #86efac 0%, #7dd3fc 100%)',
    date: '2024',
    github: 'https://github.com/Psnastudent/OD-management',
    live: '#',
  },
  {
    title: 'SpendPilot — AI Spend Audit Tool',
    description: 'A comprehensive web platform for internship management, allowing students to browse and apply for internship opportunities.',
    tags: ['React', 'Node.js', 'Web Portal'],
    gradient: 'linear-gradient(135deg, #fde68a 0%, #86efac 100%)',
    date: '2024',
    github: 'https://github.com/Psnastudent/intern',
    live: 'https://intern-e6ay.onrender.com',
  },
  {
    title: '3D Portfolio',
    description: 'A modern, interactive 3D web portfolio featuring immersive WebGL graphics, sleek typography, and smooth animations.',
    tags: ['WebGL', 'Three.js', 'React'],
    gradient: 'linear-gradient(135deg, #c4b5fd 0%, #fca5a5 100%)',
    date: '2025',
    github: 'https://github.com/Psnastudent/3dpportfolio',
    live: 'https://sk-citk.onrender.com/',
  },
  {
    title: 'Livestock Management',
    description: 'A comprehensive platform designed to manage and monitor livestock efficiently.',
    tags: ['Management', 'Web App'],
    gradient: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)',
    date: '2024',
    github: 'https://github.com/Psnastudent/livestock',
    live: '#',
  },
  {
    title: 'Zentask',
    description: 'A modern task management application to organize workflow and enhance personal productivity.',
    tags: ['Productivity', 'React', 'App'],
    gradient: 'linear-gradient(135deg, #34d399 0%, #3b82f6 100%)',
    date: '2024',
    github: 'https://github.com/Psnastudent/zentask',
    live: '#',
  },
];

const achievements = [
  {
    title: '2nd Prize — Wibeflowthon',
    description: 'Team ZEN ORBIT secured 2nd Prize at Wibeflowthon – 24 Hours Hackathon organized by Rathinam Group of Institutions Technical Campus.',
    icon: <FiAward size={22} />,
    emoji: '🏆',
  },
  {
    title: 'SDG 2nd Place — HackFest 2K26',
    description: 'Team ZenOrbit secured SDG 2nd Prize at HackFest 2K26, a 36-hour hackathon at M. Kumarasamy College of Engineering, Karur. Built OrbitXOS — an innovative platform for intelligent satellite operations and space system monitoring.',
    icon: <FiAward size={22} />,
    emoji: '🥈',
  },
  {
    title: '3rd Prize — Project Expo',
    description: 'Won 3rd Prize along with a cash award at the Project Expo for AI-powered RailMadad Complaint Bot featuring AI-based complaint categorization, OCR analysis, and sentiment analysis.',
    icon: <FiAward size={22} />,
    emoji: '🥉',
  },
];

const INITIAL_COUNT = 4;

/* Box reveal animation variants */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.85,
    rotateX: 15,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: i * 0.15,
    },
  }),
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Featured Work</span>
          <div className="projects__header-row">
            <h2 className="section-title">Featured works</h2>
            {!showAll && (
              <button
                className="projects__all-link"
                onClick={() => setShowAll(true)}
                aria-label="View all projects"
              >
                All Works
                <FiArrowRight size={16} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Sticky stacking project cards */}
        <div className="projects__stack">
          <AnimatePresence>
            {visibleProjects.map((project, i) => (
              <motion.div
                key={project.title}
                className="projects__stack-item"
                style={{
                  top: `${100 + i * 40}px`,
                  zIndex: i + 1,
                }}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <div className="project-card">
                  <div
                    className="project-card__banner"
                    style={{ background: project.gradient }}
                  >
                    <div className="project-card__banner-pattern" />
                  </div>
                  <div className="project-card__info">
                    <div className="project-card__info-left">
                      <h3 className="project-card__title">{project.title}</h3>
                      <div className="project-card__tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="project-card__tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="project-card__info-right">
                      <span className="project-card__date">{project.date}</span>
                      <div className="project-card__links">
                        <a href={project.github} className="project-card__link" aria-label="GitHub" target="_blank" rel="noreferrer">
                          <FiGithub size={16} />
                        </a>
                        <a href={project.live} className="project-card__link" aria-label="Live Demo" target="_blank" rel="noreferrer">
                          <FiExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More / Show Less button */}
        <motion.div
          className="projects__see-more"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            className="projects__see-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'See More Projects'}
            <FiArrowRight size={16} className={showAll ? 'projects__arrow-up' : ''} />
          </button>
        </motion.div>

        {/* Achievements & Certifications */}
        <motion.div
          className="achievements"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="achievements__section-title">
            <FiAward size={24} />
            Achievements & Certifications
          </h3>
          <div className="achievements__grid-v2">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                className="achievements__item-wrapper"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
              >
                <div className="new-achievement-card">
                  <div className="new-achievement-card__header">
                    <h4 className="new-achievement-card__title">
                      <span className="new-achievement-card__emoji">{item.emoji}</span>
                      {item.title}
                    </h4>
                    <div className="new-achievement-card__icon-wrap">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="new-achievement-card__body">
                    <p className="new-achievement-card__desc">{item.description}</p>
                  </div>

                  <div className="new-achievement-card__shimmer" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

