import { useState, useRef } from "react";
import { useRive } from "@rive-app/react-canvas";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export default function ParaformDualCards() {
  const [active, setActive] = useState(0);
  const startX = useRef(null);

  // Mobile swipe
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const delta = e.changedTouches[0].clientX - startX.current;
    if (delta > 50) setActive(0);
    if (delta < -50) setActive(1);
    startX.current = null;
  };

  return (
    <div
      className="paraform-cards"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Card
        index={0}
        active={active}
        setActive={setActive}
        title="Quality candidates, faster"
        text="Match with expert recruiters and fill your hardest roles in record time."
        image="/man1.webp"
        rive="/rive/card1.riv"
        stateMachine="Hover"
        link="https://example.com"
      />

      <Card
        index={1}
        active={active}
        setActive={setActive}
        title="Recruiter-first platform"
        text="Everything recruiters need to focus on placements."
        image="/man2.webp"
        anImage1="/bgBlueImg.png"
        anImage2="/sec2-1.png"
        anImage3="/glasIcon.png"
        anImage4="/cardPl.png"
        rive="/rive/card2.riv"
        stateMachine="Hover"
        link="https://example.com"
      />
    </div>
  );
}

function Card({
  index,
  active,
  setActive,
  title,
  text,
  image,
  rive,
  stateMachine,
  anImage1,
  anImage2,
  anImage3,
  anImage4,
  link,
}) {
  const isActive = active === index;

  const { RiveComponent, rive: riveInstance } = useRive({
    src: rive,
    stateMachines: stateMachine,
    autoplay: false,
  });

  if (riveInstance) {
    const input = riveInstance
      .stateMachineInputs(stateMachine)
      ?.find((i) => i.name === "hover");
    if (input) input.value = isActive;
  }

  return (
    <div
      className={`paraform-card card-${index} ${
        isActive ? "active" : "inactive"
      }`}
      style={{
        flexBasis: isActive ? "66%" : "29%",
        backgroundImage: `url(${image})`,
      }}
      onMouseEnter={() => setActive(index)}
    >
      {/* RIVE */}
      <div className={`rive-wrap ${isActive ? "show" : ""}`}>
        {isActive && <RiveComponent />}
      </div>

      <article
        className="cardAnimationDes"
        style={{
          backgroundImage: `url(${anImage1})`,
        }}
      >
        <div>
          <img src={anImage2} alt="animate img2" />
          <figure>
            <img src={anImage3} alt="animate img3" />
            <p>
              <HiMiniMagnifyingGlass />
            </p>
          </figure>
        </div>
        <img src={anImage4} alt="animate img4" />
      </article>

      {/* CONTENT */}
      <div className="card-content">
        <h2>{title}</h2>

        <div className="content-row">
          <p>{text}</p>

          <a href={link} target="_blank" rel="noreferrer" className="arrow-btn">
            <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg
      className="w-3"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 13"
      fill="none"
    >
      <path
        d="M0.75 6.46875H11.25M11.25 6.46875L6 11.7188M11.25 6.46875L6 1.21875"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
