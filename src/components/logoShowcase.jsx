import { useEffect, useState } from "react";

export default function ParaformLogoRow({
  logos,
  visibleCount = 7,
  interval = 2200,
}) {
  const [slots, setSlots] = useState(() => logos.slice(0, visibleCount));
  const [slotIndex, setSlotIndex] = useState(0);
  const [logoIndex, setLogoIndex] = useState(visibleCount);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (!logos?.length) return;

    const id = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setSlots((prev) => {
          const next = [...prev];
          next[slotIndex] = logos[logoIndex % logos.length];
          return next;
        });
        setAnimating(false);
        setSlotIndex((i) => (i + 1) % visibleCount);
        setLogoIndex((i) => i + 1);
      }, 500); // match animation duration
    }, interval);

    return () => clearInterval(id);
  }, [logos, interval, slotIndex, logoIndex, visibleCount]);

  return (
    <div className="paraform-row">
      {slots.map((logo, i) => (
        <div
          key={i}
          className={`paraform-slot ${
            animating && i === slotIndex ? "is-animating" : ""
          }`}
        >
          <img src={logo} alt="" />
        </div>
      ))}
    </div>
  );
}
