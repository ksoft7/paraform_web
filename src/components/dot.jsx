import React, { useEffect, useRef } from "react";

const TestimonialCard = () => {
  const cardRef = useRef(null);
  const dotsRef = useRef([]);

  // Grid Configuration
  const ROWS = 13;
  const COLS = 16;
  const TOTAL_DOTS = ROWS * COLS;

  // FINAL PHYSICS CONFIGURATION
  const MAGNET_RADIUS = 70; // Influence range (px)
  const MAGNET_STRENGTH = 0.25; // Pull strength (0 to 1) towards the cursor
  const NEIGHBOR_STRENGTH = 0.05; // Force for clumping neighbors together

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // --- Helper to get dot positions for performance ---
    const getDotPositions = () => {
      return dotsRef.current.map((dot) => {
        if (!dot) return { x: 0, y: 0, el: null };
        const rect = dot.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();

        // Calculate center of dot relative to card
        return {
          x: rect.left - cardRect.left + rect.width / 2,
          y: rect.top - cardRect.top + rect.height / 2,
          el: dot,
        };
      });
    };

    let dotData = getDotPositions();

    const handleResize = () => {
      dotData = getDotPositions();
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // 1. Calculate and store the desired movement for each dot
      const newDotPositions = dotData.map((dot) => ({
        ...dot,
        tx: 0, // Translation X
        ty: 0, // Translation Y
        force: 0,
        isAffected: false,
      }));

      // --- PHASE 1: MOUSE-TO-DOT FORCES ---
      newDotPositions.forEach((dot) => {
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAGNET_RADIUS) {
          const force = (MAGNET_RADIUS - distance) / MAGNET_RADIUS;

          // Attraction: Move towards mouse
          dot.tx = dx * force * MAGNET_STRENGTH;
          dot.ty = dy * force * MAGNET_STRENGTH;
          dot.force = force;
          dot.isAffected = true;
        }
      });

      // --- PHASE 2: INTER-DOT ATTRACTION (The Merging Effect) ---
      newDotPositions.forEach((currentDot, i) => {
        // Only apply neighbor force if the dot is already being moved by the cursor
        if (currentDot.isAffected) {
          // Find potential neighbors by index arithmetic
          const neighbors = [
            newDotPositions[i - 1], // Left
            newDotPositions[i + 1], // Right
            newDotPositions[i - COLS], // Top
            newDotPositions[i + COLS], // Bottom
          ].filter((n) => n && n.isAffected); // Filter out null/undefined and non-affected neighbors

          neighbors.forEach((neighbor) => {
            // Calculate the vector from the current dot to the neighbor
            const dvx = neighbor.x - currentDot.x;
            const dvy = neighbor.y - currentDot.y;

            // Add a small attraction force towards the neighbor's resting position
            currentDot.tx += dvx * NEIGHBOR_STRENGTH;
            currentDot.ty += dvy * NEIGHBOR_STRENGTH;
          });
        }
      });

      // --- PHASE 3: APPLY TRANSFORMATIONS ---
      newDotPositions.forEach((dot) => {
        if (!dot.el) return;

        // Scaling for the "clump/add to one" visual effect
        const scale = 1 + dot.force * 0.4;

        dot.el.style.transform = `translate(${dot.tx}px, ${dot.ty}px) scale(${scale})`;

        // Opacity is higher when affected
        dot.el.style.opacity = dot.isAffected ? 0.6 + dot.force * 0.4 : 0.2;
      });
    };

    const handleMouseLeave = () => {
      dotData.forEach((dot) => {
        if (dot.el) {
          // Reset transform and opacity
          dot.el.style.transform = `translate(0px, 0px) scale(1)`;
          dot.el.style.opacity = 0.2;
        }
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Generate Dots Array (13 rows x 16 columns)
  const dots = Array.from({ length: TOTAL_DOTS }).map((_, i) => (
    <div key={i} className="dot" ref={(el) => (dotsRef.current[i] = el)} />
  ));

  return (
    <div className="card-container" ref={cardRef}>
      {/* 1. The Background Grid Layer */}
      <div
        className="grid-layer"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {dots}
      </div>

      {/* 2. The Content Layer */}
      <div className="content-layer">
        <div className="logo-area">
          <img src="/log6.svg" alt="hightouch Image logo" />
        </div>

        <blockquote className="quote-text">
          “Imagine if agencies actually worked. I've tried countless recruiting
          tools throughout my entire career and there is nothing quite like
          Paraform.”
        </blockquote>

        <div className="author-info">
          <span className="dash">—</span>
          <span className="author-name">Corey Stein</span>
          <span className="author-role">VP of Engineering</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
