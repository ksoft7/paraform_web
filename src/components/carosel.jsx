import { useState, useEffect } from "react";

export default function CircularCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedItems, setDisplayedItems] = useState([]);

  const items = [
    {
      name: "Aron",
      amount: "$30,000",
      description: "per month",
      image: "/rec1.png",
    },
    {
      name: "Jason",
      amount: "$100,000",
      description: "per month",
      image: "/rec2.png",
    },
    {
      name: "Will",
      amount: "17 hires",
      description: "made in one month",
      image: "/rec3.png",
    },
    {
      name: "Jev",
      amount: "$40,000",
      description: "per month",
      image: "/rec4.png",
    },
    {
      name: "Nina",
      amount: "$80,000",
      description: "per month",
      image: "/rec5.png",
    },
    {
      name: "Jack",
      amount: "8 hires",
      description: "made in a quarter",
      image: "/rec6.png",
    },
  ];

  useEffect(() => {
    // Create infinite array by duplicating items
    const infinite = [...items, ...items, ...items];
    setDisplayedItems(infinite);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // const radius = 250;
  // const angleStep = (2 * Math.PI) / items.length;

  // Reset position when we get too far
  useEffect(() => {
    if (activeIndex >= items.length * 2 - 2) {
      const timer = setTimeout(() => {
        setActiveIndex(items.length);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, items.length]);

  return (
    <div style={styles.container}>
      <div style={styles.carouselWrapper}>
        <div style={styles.cardsContainer}>
          {displayedItems.map((item, index) => {
            const offset = index - activeIndex;
            const isActive = index === activeIndex;

            let translateX = offset * 320;

            return (
              <div
                key={index}
                style={{
                  ...styles.card,
                  transform: `translateX(${translateX}px) scale(${
                    isActive ? 1 : 0.85
                  })`,
                  opacity: Math.abs(offset) > 2 ? 0 : isActive ? 1 : 0.5,
                  zIndex: isActive ? 10 : 5 - Math.abs(offset),
                }}
              >
                <div style={styles.cardInner}>
                  {isActive && <div style={styles.crystalBorder}></div>}

                  <img src={item.image} alt={item.name} style={styles.image} />

                  {isActive && (
                    <div style={styles.overlay}>
                      <div style={styles.detailsTop}>
                        <h3 style={styles.name}>{item.name}</h3>
                      </div>
                      <div style={styles.detailsBottom}>
                        <div style={styles.amount}>{item.amount}</div>
                        <p style={styles.description}>{item.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div style={styles.dots}>
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              ...styles.dot,
              ...(activeIndex % items.length === index ? styles.dotActive : {}),
            }}
          />
        ))}
      </div> */}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  carouselWrapper: {
    width: "90%",
    margin: "0 auto",
    maxWidth: "1440px",
    height: "500px",
    position: "relative",
    marginBottom: "40px",
    overflow: "hidden",
  },
  cardsContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    position: "absolute",
    width: "280px",
    height: "380px",
    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  cardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)",
  },
  crystalBorder: {
    position: "absolute",
    top: "-5px",
    left: "-5px",
    right: "-5px",
    bottom: "-5px",
    borderRadius: "25px",
    with: "100%",
    background:
      "linear-gradient(90deg, transparent 0%, #ffffff 30%, #ffffff 50%, #ffffff 70%, transparent 100%)",
    // border: ".1px solid",
    backgroundSize: "200% 100%",
    padding: "1px",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    zIndex: 5,
    animation: "borderSnake 1.5s ease-in-out forwards",
    pointerEvents: "none",
    filter: "drop-shadow(0 0 10px #FFFFFFFF) drop-shadow(0 0 20px #EEF3F2FF)",
  },
  image: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    borderRadius: "20px",
    zIndex: 2,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "24px",
    animation: "fadeIn 0.4s ease",
    border: "none",
    zIndex: 3,
    borderRadius: "20px",
  },
  // detailsTop: {},
  name: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#ffffff",
    margin: 0,
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
  },
  amount: {
    fontSize: "32px",
    fontWeight: "400",
    color: "#fff",
    fontFamily: "var(--font2)",
  },
  detailsBottom: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "left",
  },
  description: {
    fontSize: "14px",
    fontFamily: "var(--font1)",
    color: "#e5e7eb",
    margin: 0,
    fontWeight: "400",
  },
  dots: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#334155",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    padding: 0,
  },
  dotActive: {
    backgroundColor: "#fff",
    width: "32px",
    borderRadius: "5px",
    boxShadow: "0 0 10px #fff",
  },
};

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes borderSnake {
    0% {
      background-position: -200% 0;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      background-position: 0% 0;
      opacity: 1;
    }
  }
  
  button:hover {
    opacity: 0.7;
  }
`;
document.head.appendChild(styleSheet);
