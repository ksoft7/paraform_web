import { useState, useEffect } from "react";
import { IoSparkles } from "react-icons/io5";

const ParaformUI = () => {
  const [time, setTime] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.016);
      setRotation((prev) => (prev + 0.5) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const leftFloat = Math.sin(time * 0.8) * 20;
    const rightFloat = Math.sin(time * 0.8 + Math.PI) * 20;

  return (
    <div className="container">
      {/* Left Floating Cards */}
      <div
        className="leftCards"
        style={{ transform: `translateY(${leftFloat}px) rotate(-5deg)` }}
      >
        <div className="glassCard">
          <div className="combinedCard">
            <div className="opportunitiesBadge">
              <span className="sparkle">
                <p
                  className="sparkleContainer"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <IoSparkles size={10} color="#6B9EFF" strokeWidth={2.5} />
                </p>
              </span>
              <span className="badgeText">5 opportunities matched</span>
            </div>

            <div className="jobCard">
              <div className="jobIcon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background */}
                  <rect width="48" height="48" rx="12" fill="#0B0B0B" />

                  {/* Ring */}
                  <circle
                    cx="24"
                    cy="20"
                    r="8"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                  />

                  {/* Base */}
                  <path
                    d="M18 30c2 2 10 2 12 0"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <p className="jobTitle">Senior Full Stack Stack Engineer</p>
                <p className="jobSalary">$100k - $240k . IL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aiButton">
        <p
          className="sparkleContainer"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <IoSparkles size={19} color="#6B9EFF" strokeWidth={2.5} />
        </p>
        <span className="aiText">AI</span>
      </div>

      {/* Center Video */}
      <div className="aspect-video-wrap">
        <div className="video-mask">
          <div className="video-inner">
            <video
              src="https://cdn.sanity.io/files/e5ozko3p/production/ebf24453f7417192b3a30152028d200a001c5537.mp4"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
            />
          </div>
        </div>
      </div>

      {/* Right Floating Cards */}
      <div
        className="rightCards"
        style={{ transform: `translateY(${rightFloat}px) rotate(15deg)` }}
      >
        <div className="glassCardDashed">
          <div className="rightCard">
            <div className="calibrationHeader">
              <span className="sparkle">
                <p
                  className="sparkleContainer"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <IoSparkles size={10} color="#6B9EFF" strokeWidth={2.5} />
                </p>
              </span>
              <span className="calibrationTitle">AI candidate calibration</span>
            </div>

            <div className="calibrationList">
              <div className="calibrationItem">
                <span>
                  Experience in technical, <br /> customer facing roles
                </span>
                <span className="bullet"></span>
              </div>

              <div className="calibrationItem">
                <span>All-in to join startup</span>
                <span className="bullet"></span>
              </div>

              <div className="calibrationItem">
                <span>
                  Head full ownership over <br /> delivery of a project
                </span>
                <span className="bullet"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParaformUI;
