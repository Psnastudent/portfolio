import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiSend, FiMapPin } from 'react-icons/fi';
import MagicCard from '../MagicCard/MagicCard';
import './Contact.css';

const links = [
  {
    icon: <FiLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/santhosh-kumar-s-48b451297/',
    color: '#0A66C2',
  },
  {
    icon: <FiGithub size={22} />,
    label: 'GitHub',
    value: 'View my code',
    href: 'https://github.com/Psnastudent',
    color: '#f0eef5',
  },
  {
    icon: <FiMail size={22} />,
    label: 'Email',
    value: 'santhoshkumar37937@gmail.com',
    href: 'mailto:santhoshkumar37937@gmail.com',
    color: '#EA4335',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__links"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <MagicCard className="contact__card">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact__card-inner"
                  >
                    <div className="contact__card-icon" style={{ color: link.color }}>
                      {link.icon}
                    </div>
                    <div>
                      <div className="contact__card-label">{link.label}</div>
                      <div className="contact__card-value">{link.value}</div>
                    </div>
                    <FiSend className="contact__card-arrow" size={16} />
                  </a>
                </MagicCard>
              </motion.div>
            ))}

            <div className="contact__location">
              <FiMapPin size={16} />
              <span>India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MagicCard className="contact__form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__form-label">Name</label>
                  <input type="text" id="name" className="contact__form-input" placeholder="Your name" />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__form-label">Email</label>
                  <input type="email" id="email" className="contact__form-input" placeholder="your@email.com" />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__form-label">Message</label>
                  <textarea id="message" className="contact__form-textarea" placeholder="Tell me about your project..." rows={5} />
                </div>
                <button type="submit" className="contact__form-btn">
                  <FiSend size={16} />
                  Send Message
                </button>
              </form>
            </MagicCard>
          </motion.div>
        </div>

        <motion.footer
          className="contact__footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>Designed & Built by <strong>Santhosh Kumar S</strong> with ❤️</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  );
}
