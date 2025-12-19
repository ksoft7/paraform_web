import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGOS = [
  {
    id: "windsurf",
    href: "https://windsurf.com/",
    src: "https://cdn.sanity.io/images/e5ozko3p/production/2132ff94f36027ea664220aec01226b7ab2104a3-125x17.svg",
  },
  {
    id: "traba",
    href: "https://traba.work/",
    src: "https://cdn.sanity.io/images/e5ozko3p/production/783e1706ed727018fa4551c28bf8ff1bf6f2cdcb-70x20.svg",
  },
  {
    id: "owner",
    href: "https://www.owner.com/",
    src: "https://cdn.sanity.io/images/e5ozko3p/production/abecb7729c3bcc2383854b2dce956ddcad48a437-112x28.svg",
  },
  {
    id: "basis",
    href: "https://www.getbasis.ai/",
    src: "https://cdn.sanity.io/images/e5ozko3p/production/cf18d167e431e5eb463dbbb1a020470e51615735-81x24.svg",
  },
  {
    id: "scale",
    href: "https://scale.com/",
    src: "https://cdn.sanity.io/images/e5ozko3p/production/42836d7889e05c15a3da0df6b06d352dd9f430b9-76x26.svg",
  },
  {
    id: "pylon",
    href: "https://usepylon.com/",
    src: "https://cdn.sanity.io/images/e5ozko3p/production/fb8d4b83348070c053e799cde68516c1d5960566-81x24.svg",
  },
  {
    id: "nooks",
    href: "https://nooks.ai/",
    src: "https://cdn.sanity.io/images/e5ozko3p/production/4ac63f5b7e621f83c117de669d0f72170d96caf0-100x21.svg",
  },
  {
    id: "meter",
    href: "https://www.meter.com/",
    src: "https://cdn.sanity.io/images/e5ozko3p/production/2ac784a8503062f6f9421444a3a1bcb3c2e8cfd4-65x19.svg",
  },
  {
    id: "argueCode",
    href: "https://argue.ai/",
    src: "https://cdn.sanity.io/images/e5ozko3p/production/2ac784a8503062f6f9421444a3a1bcb3c2e8cfd4-65x19.svg",
  },
  {
    id: "decagon",
    href: "https://decagon.ai/",
    src: "https://cdn.sanity.io/images/e5ozko3p/production/f843e1ff0cdb8a177b7ec13832849263a20dd5a3-89x22.svg",
  },
  {
    id: "hightouch",
    href: "https://hightouch.ai/",
    src: "https://cdn.sanity.io/images/e5ozko3p/production/4ac63f5b7e621f83c117de669d0f72170d96caf0-100x21.svg",
  },
  {
    id: "persona",
    href: "https://persona.ai/",
    src: "https://cdn.sanity.io/images/e5ozko3p/production/42836d7889e05c15a3da0df6b06d352dd9f430b9-76x26.svg",
  },
];

const getVisibleCount = () => {
  if (typeof window === "undefined") return 8;
  if (window.innerWidth < 640) return 3;
  if (window.innerWidth < 768) return 4;
  if (window.innerWidth < 1024) return 5;
  if (window.innerWidth < 1280) return 6;
  return 8;
};

const ANIMATION_DELAY = 3000;

export default function ParaformLogos() {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [logoIndices, setLogoIndices] = useState(() =>
    Array.from({ length: getVisibleCount() }, (_, i) => i)
  );
  const [switchingSlot, setSwitchingSlot] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newCount = getVisibleCount();
      setVisibleCount(newCount);
      setLogoIndices(
        Array.from({ length: newCount }, (_, i) => i % LOGOS.length)
      );
      setSwitchingSlot(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndices((current) => {
        const newIndices = [...current];
        let nextIndex =
          (newIndices[switchingSlot] + visibleCount) % LOGOS.length;

        while (newIndices.includes(nextIndex)) {
          nextIndex = (nextIndex + 1) % LOGOS.length;
        }

        newIndices[switchingSlot] = nextIndex;
        return newIndices;
      });

      setSwitchingSlot((prev) => (prev + 1) % visibleCount);
    }, ANIMATION_DELAY);

    return () => clearInterval(interval);
  }, [switchingSlot, visibleCount]);

  return (
    <div className="containers">
      <div className="logo-wrapper">
        <div className="logo-grid">
          {logoIndices.map((logoIndex, slotIndex) => {
            const logo = LOGOS[logoIndex];

            return (
              <div className="logo-cell" key={slotIndex}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={logo.id}
                    className="logo-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a href={"#"} rel="noreferrer">
                      <img src={logo.src} alt={logo.id} />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`

        .containers {
          width: 100%;
          padding: 0 20px;
        }
        
        .logo-wrapper {
          position: relative;
          margin: 87px auto 0;
          height: 45px;
          // border: 1px solid;
          overflow: hidden;
          max-width: 1440px;
        }
        
        .logo-grid {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        
        .logo-cell {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
        
        .logo-item a {
          display: block;
          transition: transform 0.2s ease;
        }
        
        .logo-item img {
          display: block;
          max-width: 100%;
          max-height: 40px;
          width: auto;
          height: auto;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        @media (min-width: 640px) {
          .logo-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (min-width: 768px) {
          .logo-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .logo-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .logo-grid {
            grid-template-columns: repeat(7, 1fr);
          }
        }

        @media (max-width: 767px) {
          .logo-wrapper {
            margin-top: 35px;
           
          }
        }
      `}</style>
    </div>
  );
}
