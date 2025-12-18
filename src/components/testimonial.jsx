import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 'decagon',
    logo: 'https://cdn.sanity.io/images/e5ozko3p/production/5dd202e7e10a8e5676a140d8fa9ce1f6cda3ef0c-32x32.svg?auto=format',
    name: 'Decagon',
    summary: 'Hired',
    highlight: ' founding engineer and GTM in 27 days',
    illustration: '/oregan.svg',
    companyLogo: 'https://cdn.sanity.io/images/e5ozko3p/production/5dd202e7e10a8e5676a140d8fa9ce1f6cda3ef0c-32x32.svg?auto=format',
    quote: '"We made every hire with Paraform. Paraform is the core engine that will be driving our recruiting."',
    author: 'Alex Laubscher',
    role: 'Deployed Engineering Manager',
    progress: 49.6704
  },
  {
    id: 'windsurf',
    logo: 'https://cdn.sanity.io/images/e5ozko3p/production/2f5e10c1544f793ad3c26237d58aae8fd34f5f56-32x32.svg?auto=format',
    name: 'Windsurf',
    summary: 'Hired ',
    highlight: '7 engineers in under two months',
    illustration: 'https://cdn.sanity.io/images/e5ozko3p/production/d24b40ef2d74054bb897a462ca49ff934527561a-295x300.svg?auto=format',
    companyLogo: 'https://cdn.sanity.io/images/e5ozko3p/production/16a65525ad25c12c5cb2bb45403595aa1d67b52c-128x19.svg?auto=format',
    quote: '"Paraform helped us scale our engineering team quickly and efficiently."',
    author: 'Sarah Chen',
    role: 'Head of Engineering',
    progress: 65.5
  },
  {
    id: 'terradot',
    logo: 'https://cdn.sanity.io/images/e5ozko3p/production/bd2c50e665bfb8247b28d663a90713f8f88e1ec1-32x32.svg?auto=format',
    name: 'Terradot',
    summary: 'Hired scientists, PMs, and engineers while ',
    highlight: 'reducing time to hire by 3x',
    illustration: '/terraDotCon.svg',
    companyLogo: 'https://cdn.sanity.io/images/e5ozko3p/production/16a65525ad25c12c5cb2bb45403595aa1d67b52c-128x19.svg?auto=format',
    quote: '"The efficiency gains have been remarkable. We\'ve streamlined our entire hiring process."',
    author: 'Michael Torres',
    role: 'VP of People Operations',
    progress: 80.2
  }
];

export default function TestimonialAccordion() {
  const [openId, setOpenId] = useState('decagon');
const [progress, setProgress] = useState(0);
const [isMobile, setIsMobile] = useState(false);

// Check for mobile viewport
React.useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();
  window.addEventListener('resize', checkMobile);

  return () => window.removeEventListener('resize', checkMobile);
}, []);

// Progress interval
React.useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => prev + 1);
  }, 9000); // Update every 50ms

  return () => clearInterval(interval);
}, []); // empty dependency to avoid stale closures

// Rotate testimonial when progress reaches 100
React.useEffect(() => {
  if (progress < 100) return;

  const currentIndex = testimonials.findIndex(t => t.id === openId);
  const nextIndex = (currentIndex + 1) % testimonials.length;
  
  console.log('Current Index:', currentIndex, 'Next Index:', nextIndex); // <-- added log

  setOpenId(testimonials[nextIndex].id);
  setProgress(0);
}, [progress, openId]);

// Accordion toggle
const toggleAccordion = (id) => {
  setOpenId(id);
  setProgress(0);
};


  return (
    <div style={isMobile ? styles.containerMobile : styles.container}>
      {testimonials.map((item, index) => (
        <div key={item.id} style={styles.accordionItem}>
          <AnimatePresence initial={false}>
            {openId !== item.id && (
              <motion.button
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => toggleAccordion(item.id)}
                style={isMobile ? styles.headerMobile : styles.header}
              >
                <div style={styles.headerLeft}>
                  <img src={item.logo} alt={item.name} style={styles.logo} />
                  <p style={styles.companyName}>{item.name}</p>
                </div>
                <p style={isMobile ? styles.summaryMobile : styles.summary}>
                  {item.summary}
                  <span style={isMobile ? styles.highlightMobile : styles.highlight}>{item.highlight}</span>
                </p>
                <motion.div
                  style={styles.iconWrapper}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10.0013 4.16602V15.8327M4.16797 9.99935H15.8346" stroke="#1A1A1A" strokeOpacity="0.65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </motion.div>
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                style={{
                  ...styles.contentWrapper, 
                  order: index === 0 ? -1 : 0
                }}
              >
                <div style={isMobile ? styles.contentMobile : styles.content}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    style={isMobile ? styles.illustrationWrapperMobile : styles.illustrationWrapper}
                  >
                    <img src={item.illustration} alt="Illustration" style={styles.illustration} />
                  </motion.div>

                  <div style={styles.textContent}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <img src={item.companyLogo} alt={item.name} style={styles.companyLogo} />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      style={isMobile ? styles.quoteMobile : styles.quote}
                    >
                      {item.quote}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      style={isMobile ? styles.footerMobile : styles.footer}
                    >
                      <div style={isMobile ? styles.authorInfoMobile : styles.authorInfo}>
                        <span style={styles.dash}>—</span>
                        <span style={styles.authorName}>{item.author}</span>
                        <span style={styles.authorRole}>{item.role}</span>
                      </div>

                      <div style={styles.progressWrapper}>
                        <div style={styles.progressBar}>
                          <motion.div
                            style={{...styles.progressFill, width: `${progress}%`}}
                          />
                        </div>
                        <div style={styles.divider} />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: 'var(--cont-wd)',
    maxWidth: 'var(--max-width)',
    margin: '0 auto',
    marginBottom: '15rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    gap: '0'
  },
  containerMobile: {
    width: 'var(--cont-wd)',
    maxWidth: 'var(--max-width)',
    margin: '0 auto',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    gap: '0'
  },
  accordionItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    width: '100%',
    padding: '16px',
    backgroundColor: '#eff2f0',
    border: 'none',
    borderTop: '1px solid rgba(26, 26, 26, 0.1)',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'background-color 0.2s'
  },
  headerMobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    width: '100%',
    padding: '16px',
    backgroundColor: '#eff2f0',
    border: 'none',
    borderTop: '1px solid rgba(26, 26, 26, 0.1)',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'background-color 0.2s'
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    minWidth: '281px',
    flexShrink: 0
  },
  logo: {
    width: '32px',
    height: '32px'
  },
  companyName: {
    fontSize: '18px',
    fontWeight: 500,
    margin: 0,
    color: '#1a1a1a'
  },
  summary: {
    fontSize: '16px',
    flex: 1,
    margin: 0,
    fontWeight: 400,
    fontFamily: "var(--font1)",
    color: 'rgba(26, 26, 26, 0.65)'
  },
  summaryMobile: {
  display: 'none',
  },
  highlight: {
    color: '#000000',
      fontWeight: 500,
    fontFamily: "var(--font1)",
  },
  highlightMobile: {
    display: 'none',
  },
  iconWrapper: {
    width: '20px',
    height: '20px',
    flexShrink: 0
  },
  contentWrapper: {
    overflow: 'hidden',
    width: '100%'
  },
  content: {
    display: 'flex',
    gap: '68px',
    borderTop: '1px solid rgba(26, 26, 26, 0.1)',
    padding: '40px 16px 32px 44px',
    alignItems: 'center',
    flexDirection: 'row'
  },
  contentMobile: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    borderTop: '1px solid rgba(26, 26, 26, 0.1)',
    padding: '16px',
    alignItems: 'flex-start'
  },
  illustrationWrapper: {
    width: '100%',
    maxWidth: '209px',
    flexShrink: 0,
    transformOrigin: 'bottom'
  },
  illustrationWrapperMobile: {
    width: '100%',
    maxWidth: '114px',
    margin: '13px 0 38px 24px',
    flexShrink: 0,
    transformOrigin: 'bottom'
  },
  illustration: {
    width: '100%',
    height: 'auto'
  },
  textContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  companyLogo: {
    height: '19px',
    width: 'auto'
  },
  quote: {
    fontSize: '21.4849px',
    fontFamily: 'var(--font2)',
    lineHeight: '1.4',
    marginTop: '24px',
    maxWidth: '614px',
    color: '#000000',
    fontWeight: 400
  },
  quoteMobile: {
    fontSize: '20px',
    lineHeight: '1.4',
    fontFamily: 'var(--font2)',
    marginTop: '24px',
    maxWidth: '100%',
    color: '#000000',
    fontWeight: 400
  },
  footer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '16px',
    marginTop: '15px'
  },
  footerMobile: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: '19px',
    marginTop: '20px'
  },
  authorInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px'
  },
  authorInfoMobile: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    fontSize: '14px'
  },
  dash: {
    color: '#1a1a1a'
  },
  authorName: {
    fontWeight: 500,
    color: '#1a1a1a'
  },
  authorRole: {
    color: 'rgba(26, 26, 26, 0.4)'
  },
  progressWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    flexShrink: 0
  },
  progressBar: {
    position: 'relative',
    height: '4px',
    width: '64px',
    backgroundColor: 'rgba(26, 26, 26, 0.1)',
    borderRadius: '9999px',
    overflow: 'hidden'
  },
  progressFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    backgroundColor: '#1a1a1a',
    borderRadius: '9999px'
  },
//   divider: {
//     position: 'relative',
//     height: '12px',
//     width: '1px',
//     backgroundColor: 'rgba(26, 26, 26, 0.1)'
//   }
};