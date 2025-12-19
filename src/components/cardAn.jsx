import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaStar } from "react-icons/fa";

const AnimatedCards = () => {
  // Controls for slider and card groups
  const sliderControls = useAnimation();
  const cards12 = useAnimation();
  const cards3 = useAnimation();

  useEffect(() => {
    let isMounted = true;
    async function sequence() {
      while (isMounted) {
        // Show screens 1 & 2: animate their cards in
        cards12.start("visible");
        await new Promise((r) => setTimeout(r, 1200)); // wait for card animations

        // Slide to screens 2 & 3
        await sliderControls.start({
          x: -420,
          transition: { duration: 0.8, ease: "easeInOut" },
        });

        // Animate cards on screen 3
        cards3.start("visible");
        await new Promise((r) => setTimeout(r, 1200)); // wait

        // Slide back to screens 1 & 2
        await sliderControls.start({
          x: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        });

        // Reset card visibility
        await cards12.start("hidden");
        await cards3.start("hidden");
        await new Promise((r) => setTimeout(r, 500));
      }
    }
    sequence();
    return () => {
      isMounted = false;
    };
  }, [cards12, cards3, sliderControls]);

  // Variants for card lists
  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="contain">
      <motion.div
        className="slider"
        animate={sliderControls}
        initial={{ x: 0 }}
      >
        <div className="screen">
          <h3>Behavioral screen</h3>
          <span className="subtitle">3 candidates</span>
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate={cards12}
            className="card-list"
          >
            <motion.div variants={cardVariants} className="card">
              <span>
                <img src="/alica.jpg" className="avatar" />
                <div className="info">
                  <p>Alice Simmons </p>
                  <p>
                    <FaStar /> 3/4
                  </p>
                </div>
              </span>
              <span className="status interviewing">Interviewing</span>
            </motion.div>
            <motion.div variants={cardVariants} className="card">
              <span>
                <img src="/baldMan.jpg" className="avatar" />
                <div className="info">
                  <p>Josh Cooper </p>
                  <p>
                    <FaStar /> 2/4
                  </p>
                </div>
              </span>
              <span className="status rejected">Rejected</span>
            </motion.div>
            <motion.div variants={cardVariants} className="card">
              <span>
                <img src="/asboy.jpg" className="avatar" />
                <div className="info">
                  <p>Haeni Kim </p>
                  <p>
                    <FaStar /> 4/4
                  </p>
                </div>
              </span>
              <span className="status interviewing">Interviewing</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Screen 2: Technical */}
        <div className="screen">
          <aside className="line"></aside>
          <aside className="line1"></aside>
          <h3>Technical screen</h3>
          <span className="subtitle">1 candidate</span>
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate={cards12}
            className="card-list"
          >
            <motion.div variants={cardVariants} className="card">
              <span>
                <img src="/blackMan.jpg" className="avatar" />
                <div className="info">
                  <p>Chisom Robertson </p>
                  <p>
                    <FaStar /> 4/4
                  </p>
                </div>
              </span>
              <span className="status interviewing">Interviewing</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Screen 3: Offer */}
        <div className="screen">
          <h3>Offer</h3>
          <span className="subtitle">2 candidates</span>
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate={cards3}
            className="card-list"
          >
            <motion.div variants={cardVariants} className="card">
              <span>
                <img src="/isala.jpg" className="avatar" />
                <div className="info">
                  <p>Isabella Romano</p>
                  <p>
                    <FaStar /> 4/4
                  </p>
                </div>
              </span>
              <span className="status accepted">Accepted</span>
            </motion.div>
            <motion.div variants={cardVariants} className="card">
              <span>
                <img src="/haina.jpg" className="avatar" />
                <div className="info">
                  <p>Renata Kowalska</p>
                  <p>
                    <FaStar />
                    4/4
                  </p>
                </div>
              </span>
              <span className="status accepted">Accepted</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedCards;
