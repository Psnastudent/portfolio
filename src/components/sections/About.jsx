import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiBriefcase, FiAward, FiBookOpen } from 'react-icons/fi';
import MagicCard, { MagicCardContainer } from '../MagicCard/MagicCard';
import './About.css';

const stats = [
  { icon: <FiBookOpen />, value: 'B.E.', label: 'CSE Engineering' },
  { icon: <FiCode />, value: '7.6', label: 'CGPA' },
  { icon: <FiAward />, value: '3rd', label: 'Prize Idea Fest' },
  { icon: <FiBriefcase />, value: '6+', label: 'Projects Built' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate about building<br />digital experiences</h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm an aspiring Software Engineer and current Computer Science & Engineering
              student at <strong>PSNA College of Engineering and Technology</strong> with a strong
              foundation in programming languages such as Python, Java, and C++.
            </p>
            <p>
              Experienced in front-end development with <strong>React</strong> and UI/UX design
              with <strong>Figma</strong>. I've demonstrated the ability to build and deploy
              AI-powered applications through academic projects, including a grievance redressal
              system and a data-driven chatbot.
            </p>
            <p>
              Eager to apply theoretical knowledge and practical skills to solve real-world
              problems in a challenging software development role. I'm constantly exploring
              new technologies and pushing the boundaries of what's possible.
            </p>

            <motion.div
              className="about__education"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <MagicCard className="about__edu-card">
                <div className="about__edu-year">2023 – 2027</div>
                <div className="about__edu-title">B.E. Computer Science & Engineering</div>
                <div className="about__edu-place">PSNA College of Engineering and Technology</div>
                <div className="about__edu-score">CGPA: 7.6</div>
              </MagicCard>
              <MagicCard className="about__edu-card">
                <div className="about__edu-year">2023</div>
                <div className="about__edu-title">Senior Secondary (XII) — TNBSE</div>
                <div className="about__edu-place">Sethupati Higher Secondary School, Madurai</div>
                <div className="about__edu-score">Percentage: 87.5%</div>
              </MagicCard>
            </motion.div>
          </motion.div>

          <MagicCardContainer>
            <motion.div
              className="about__stats"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {stats.map((stat, i) => (
                <MagicCard
                  key={stat.label}
                  className="about__stat-card"
                >
                  <motion.div
                    className="about__stat-inner"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  >
                    <div className="about__stat-icon">{stat.icon}</div>
                    <div className="about__stat-value">{stat.value}</div>
                    <div className="about__stat-label">{stat.label}</div>
                  </motion.div>
                </MagicCard>
              ))}
            </motion.div>
          </MagicCardContainer>
        </div>
      </div>
    </section>
  );
}
