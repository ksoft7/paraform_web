import React, { useState, useEffect } from "react";

const RecruiterDashboard = () => {
  const [animatingIndex, setAnimatingIndex] = useState(null);
  const [animatingPhase, setAnimatingPhase] = useState(null);
  const [stackOrder, setStackOrder] = useState([0, 1, 2, 3]);

  const recruiters = [
    { name: "Jason Rumney", rating: "4.95", connections: "+4", id: 0 },
    { name: "Aaron Shakeshaft", rating: "4.82", connections: "+7", id: 1 },
    { name: "Katelyn Lee", rating: "4.67", connections: "+3", id: 2 },
    { name: "David Miller", rating: "4.53", connections: "+2", id: 3 },
  ];

  useEffect(() => {
    let isActive = true;

    const animateNextCard = () => {
      if (!isActive) return;

      const currentFirstCard = stackOrder[0];

      // Phase 1: Rise up
      setAnimatingIndex(currentFirstCard);
      setAnimatingPhase("rising");

      // Phase 2: After rising, go behind and fall down
      const fallingTimer = setTimeout(() => {
        if (!isActive) return;
        setAnimatingPhase("falling");

        // Phase 3: Complete the animation and reorder
        const completeTimer = setTimeout(() => {
          if (!isActive) return;

          setStackOrder((prev) => {
            const newOrder = [...prev];
            const card = newOrder.shift();
            newOrder.push(card);
            return newOrder;
          });
          setAnimatingIndex(null);
          setAnimatingPhase(null);
        }, 900);

        return () => clearTimeout(completeTimer);
      }, 900);

      return () => clearTimeout(fallingTimer);
    };

    // Start first animation immediately
    const initialTimer = setTimeout(animateNextCard, 100);

    // Then repeat every 2800ms
    const intervalId = setInterval(() => {
      animateNextCard();
    }, 2800);

    return () => {
      isActive = false;
      clearTimeout(initialTimer);
      clearInterval(intervalId);
    };
  }, [stackOrder]);

  const getCardPosition = (recruiterId) => {
    const positionInStack = stackOrder.indexOf(recruiterId);

    if (animatingIndex === recruiterId) {
      if (animatingPhase === "rising") {
        return {
          y: -40,
          scale: 1.05,
          opacity: 1,
          zIndex: 100,
          blur: 0,
          brightness: 1,
        };
      }

      if (animatingPhase === "falling") {
        const lastPosition = 3;
        return {
          y: lastPosition * 54,
          scale: 1 - lastPosition * 0.032,
          opacity: 0.88 - lastPosition * 0.12,
          zIndex: -10,
          blur: lastPosition * 1.1,
          brightness: 0.96 - lastPosition * 0.04,
        };
      }
    }

    return {
      y: positionInStack * 54,
      scale: 1 - positionInStack * 0.032,
      opacity: positionInStack === 0 ? 1 : 0.88 - positionInStack * 0.12,
      zIndex: 50 - positionInStack,
      blur: 0,
      brightness: 1,
    };
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.mainWrapper}>
        <div style={styles.aspectRatioBox}>
          <div style={styles.contentArea}>
            <div style={styles.cardsSection}>
              {recruiters.map((recruiter) => {
                const position = getCardPosition(recruiter.id);

                return (
                  <div
                    key={recruiter.id}
                    style={{
                      ...styles.recruiterCard,
                      transform: `translateY(${position.y}px) scale(${position.scale})`,
                      opacity: position.opacity,
                      zIndex: position.zIndex,
                      filter: `blur(${position.blur}px) brightness(${position.brightness})`,
                      transition: "all 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    }}
                  >
                    <div style={styles.cardLayout}>
                      <div style={styles.avatarWrapper}>
                        <img
                          src={`https://i.pravatar.cc/150?img=${
                            40 + recruiter.id
                          }`}
                          alt={recruiter.name}
                          style={styles.avatarImage}
                        />
                      </div>
                      <div style={styles.recruiterInfo}>
                        <div style={styles.recruiterName}>{recruiter.name}</div>
                        <div style={styles.recruiterDetails}>
                          <span style={styles.roleText}>Recruiter</span>
                          <span style={styles.bulletPoint}>•</span>
                          <span style={styles.starRating}>★</span>
                          <span style={styles.ratingNumber}>
                            {recruiter.rating}
                          </span>
                        </div>
                      </div>
                      <div style={styles.connectionBadge}>
                        {recruiter.connections}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <CounterDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

const CounterDisplay = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev >= 500 ? 1 : prev + 1));
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  const displayCount = count.toString().padStart(2, "0");

  return (
    <div style={styles.counterArea}>
      <div style={styles.digitContainer}>
        <div style={styles.digitCard}>
          <span style={styles.digitNumber}>{displayCount[0]}</span>
        </div>
        <div style={styles.digitCard}>
          <span style={styles.digitNumber}>{displayCount[1]}</span>
        </div>
      </div>
      <div style={styles.counterLabel}>Candidates submitted</div>
    </div>
  );
};

const styles = {
  outerContainer: {
    aspectRatio: "345 / 220",
    width: "350px",
    maxWidth: "400px",
    height: "450px",
    flex: "0.8",
    overflow: "hidden",
    borderRadius: "10px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundImage:
    //   "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85)",
    backgroundImage: "url(/im.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  mainWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  aspectRatioBox: {
    position: "relative",
    width: "100%",
    aspectRatio: "352 / 460",
    minHeight: "100%",
    maxWidth: "1500px",
    maxHeight: "600px",
    margin: "0 auto",
  },
  contentArea: {
    position: "relative",
    zIndex: 5,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "80px 20px 70px",
  },
  cardsSection: {
    position: "relative",
    width: "300px",
    height: "280px",
    marginTop: "0px",
  },
  recruiterCard: {
    position: "absolute",
    top: "0px",
    left: "50%",
    marginLeft: "-120px",
    width: "260px",
    background: "rgba(255, 255, 255, 0.97)",
    borderRadius: "16px",
    padding: "8px 18px",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.5)",
  },
  cardLayout: {
    display: "flex",
    alignItems: "center",
    gap: "13px",
  },
  avatarWrapper: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    overflow: "hidden",
    flexShrink: 0,
    border: "2.5px solid rgba(255, 255, 255, 0.7)",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  recruiterInfo: {
    flex: 1,
    minWidth: 0,
  },
  recruiterName: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#1d1d1f",
    marginBottom: "2px",
    letterSpacing: "-0.3px",
    lineHeight: "1.2",
  },
  recruiterDetails: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "12.5px",
    lineHeight: "1.3",
  },
  roleText: {
    color: "#86868b",
    fontWeight: "400",
  },
  bulletPoint: {
    color: "#d2d2d7",
    fontSize: "10px",
  },
  starRating: {
    color: "#1d1d1f",
    fontSize: "12px",
    marginRight: "-1px",
  },
  ratingNumber: {
    color: "#1d1d1f",
    fontWeight: "500",
  },
  connectionBadge: {
    background: "#3a3a3c",
    color: "#ffffff",
    padding: "6px 11px",
    borderRadius: "18px",
    fontSize: "13px",
    fontWeight: 600,
    flexShrink: 0,
    letterSpacing: "-0.3px",
    lineHeight: "1",
  },
  counterArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px",
    marginBottom: "-5rem",
  },
  digitContainer: {
    display: "flex",
    gap: "13px",
  },
  digitCard: {
    width: "50px",
    height: "70px",
    background: "rgba(255, 255, 255, 0.23)",
    backdropFilter: "blur(22px)",
    borderRadius: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18)",
  },
  digitNumber: {
    fontSize: "40px",
    fontWeight: "400",
    fontFamily: "var(--font2)",
    color: "#ffffff",
    textShadow: "0 3px 10px rgba(0, 0, 0, 0.28)",
    letterSpacing: "-1.5px",
    lineHeight: "1",
    transition: "all 0.3s ease",
  },
  counterLabel: {
    fontSize: "15.5px",
    fontWeight: "500",
    color: "#ffffff",
    letterSpacing: "0.25px",
    textShadow: "0 2px 8px rgba(0, 0, 0, 0.32)",
  },
};

export default RecruiterDashboard;
