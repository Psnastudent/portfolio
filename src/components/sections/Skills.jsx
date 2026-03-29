import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact, FaPython, FaHtml5, FaCss3Alt, FaFigma, FaJava
} from 'react-icons/fa';
import {
  SiJavascript, SiCplusplus, SiMongodb, SiFlutter
} from 'react-icons/si';
import { FiLayout, FiCode } from 'react-icons/fi';
import LogoLoop from '../LogoLoop/LogoLoop';
import './Skills.css';

const skillRow1 = [
  { node: <FaReact color="#61DAFB" />, title: 'React' },
  { node: <SiCplusplus color="#00599C" />, title: 'C++' },
  { node: <FaPython color="#3776AB" />, title: 'Python' },
  { node: <FaJava color="#ED8B00" />, title: 'Java' },
  { node: <SiJavascript color="#F7DF1E" />, title: 'JavaScript' },
  { node: <FaFigma color="#F24E1E" />, title: 'Figma' },
  { node: <FiLayout color="#a855f7" />, title: 'UI/UX Design' },
];

const skillRow2 = [
  { node: <FaHtml5 color="#E34F26" />, title: 'HTML5' },
  { node: <FaCss3Alt color="#1572B6" />, title: 'CSS3' },
  { node: <SiMongodb color="#47A248" />, title: 'MongoDB' },
  { node: <SiFlutter color="#02569B" />, title: 'Flutter' },
  { node: <FiCode color="#22c55e" />, title: 'AI/ML' },
  { node: <FaReact color="#61DAFB" />, title: 'React.js' },
];

const SkillItem = ({ item }) => (
  <div className="skill-chip">
    <span className="skill-chip__icon">{item.node}</span>
    <span className="skill-chip__label">{item.title}</span>
  </div>
);

function useFadeColor() {
  const [fadeColor, setFadeColor] = useState('#f9f9f9');

  useEffect(() => {
    const update = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setFadeColor(theme === 'dark' ? '#0a0a0a' : '#f9f9f9');
    };
    update();

    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  return fadeColor;
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const fadeColor = useFadeColor();

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills & Technologies</span>
          <h2 className="section-title">My technical toolkit</h2>
          <p className="section-subtitle">
            Technologies I work with to bring ideas to life — React, Python, Java, C++, Figma & more.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="skills__carousel"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="skills__row">
          <LogoLoop
            logos={skillRow1}
            speed={60}
            direction="left"
            logoHeight={56}
            gap={16}
            pauseOnHover
            fadeOut
            fadeOutColor={fadeColor}
            scaleOnHover
            renderItem={(item) => <SkillItem item={item} />}
          />
        </div>
        <div className="skills__row">
          <LogoLoop
            logos={skillRow2}
            speed={60}
            direction="right"
            logoHeight={56}
            gap={16}
            pauseOnHover
            fadeOut
            fadeOutColor={fadeColor}
            scaleOnHover
            renderItem={(item) => <SkillItem item={item} />}
          />
        </div>
      </motion.div>
    </section>
  );
}
