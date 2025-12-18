import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

import MagneticGrid from "../components/dot.jsx";
import FeatureShowcase from "../components/rollingCard.jsx";
import KiaraImg from "../assets/paraform_images/kiara.webp";
import Candate from "../assets/paraform_images/candate.webp";
import CardAnimate from "../components/cardAn.jsx";

const ProgressDots = ({ activeIndex, total, scrollProgress }) => (
  <div className="progress-dots">
    {Array.from({ length: total }).map((_, i) => {
      let width = "0%";

      if (i < activeIndex) {
        width = "100%";
      } else if (i === activeIndex) {
        width = `${scrollProgress * 100}%`;
      }

      return (
        <div
          key={i}
          className="dot-container"
          style={{
            width: i === total - 1 && i === activeIndex ? "50px" : "6px",
          }}
        >
          <div className="dot-fill" style={{ width }} />
        </div>
      );
    })}
  </div>
);

const ScrollSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionProgress, setSectionProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sections = [
    {
      title: "Tap into elite recruiter networks",
      description:
        "Only work with recruiters with a proven track record trusted by world-class companies.",
      stat: "500+",
      statLabel: "Companies hiring",
      content: (
        <div className="text-scro-hol">
          <div
            className="text-scro-hol2"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>
              <FeatureShowcase />
            </span>
            <span>
              <MagneticGrid />
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Meet candidates worth meeting",
      description:
        "Cut through the noise with candidates that hit the mark — and move fast from intro to interview.",
      stat: "70%",
      statLabel: "Interview rate",
      content: (
        <figure>
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid",
            }}
          >
            <img src={KiaraImg} alt="Kiara" />
          </div>
        </figure>
      ),
    },
    {
      title: "Hire faster with fewer hurdles",
      description:
        "Streamlined workflows, no back-and-forth, no admin — just pre-vetted warm intros, fast.",
      stat: "3X",
      statLabel: "Faster to hire",
      content: (
        <figure>
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardAnimate />
          </div>
        </figure>
      ),
    },
    {
      title: "White glove support",
      description:
        "Your dedicated talent strategist is always a call or Slack away — actively managing your search and surfacing market trends.",
      stat: "98%",
      statLabel: "Satisfaction rate",
      content: (
        <figure>
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={Candate} alt="Candate" />
          </div>
        </figure>
      ),
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    return scrollYProgress.on("change", (latest) => {
      const totalSections = sections.length;
      const sectionSize = 1 / totalSections;
      const currentSection = Math.floor(latest / sectionSize);
      const newIndex = Math.min(currentSection, totalSections - 1);

      const progressInSection = (latest % sectionSize) / sectionSize;

      setActiveIndex(newIndex);
      setSectionProgress(progressInSection);
    });
  }, [scrollYProgress, sections.length, isMobile]);

  return (
    <>
      <div className="scroll-wrapper" ref={containerRef}>
        <section className="scroll_sec">
          {sections.map((section, index) => (
            <article
              key={index}
              style={{
                display: isMobile
                  ? "flex"
                  : activeIndex === index
                  ? "flex"
                  : "none",
              }}
            >
              <div className="text-scro-hol">
                <span>
                  <motion.h2
                    key={`h2-${index}-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {section.title}
                  </motion.h2>
                  <motion.p
                    key={`p-${index}-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    {section.description}
                  </motion.p>
                </span>
                {!isMobile && (
                  <ProgressDots
                    activeIndex={activeIndex}
                    total={sections.length}
                    scrollProgress={sectionProgress}
                  />
                )}
                <span>
                  <motion.h3
                    key={`h3-${index}-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {section.stat}
                  </motion.h3>
                  <motion.h6
                    key={`h6-${index}-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    {section.statLabel}
                  </motion.h6>
                </span>
              </div>
              <motion.div
                key={`content-${index}-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {section.content}
              </motion.div>
            </article>
          ))}
        </section>
      </div>

      <style>{`
        .scroll-wrapper {
          height: 400vh;
          position: relative;
          max-width: 1440px;
          margin: 0 auto;
          width: 90%;
        }

        .scroll_sec {
          position: sticky;
          top: 5rem;
          height: 90vh;
        }

        .progress-dots {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          height: 36px;
          width: fit-content;
        }

        .dot-container {
          height: 6px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 9999px;
          overflow: hidden;
          position: relative;
          transition: width 0.3s ease;
        }

        .dot-fill {
          height: 100%;
          background: #000;
          transition: width 0.1s linear;
        }

        @media (max-width: 1100px) {
          .scroll-wrapper {
            height: auto;
          }

          .scroll_sec {
            position: static;
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 4rem;
            padding: 2rem 0;
          }

          .scroll_sec article {
            flex-direction: column-reverse;
            border-left: none;
            padding-left: 0;
            gap: 2rem;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .scroll_sec {
            gap: 3rem;
          }
            .text-scro-hol2{
            flex-wrap: wrap;
            }
        }

        @media (max-width: 480px) {
          .scroll_sec {
            gap: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default ScrollSection;
