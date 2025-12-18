export default function SlideHoverButton({
  text,
  hoverText,
  bgColor = "#111",
  textColor = "#fff",
  hoverTextColor = "#fff",
  hoverbg = "#fff",
  borderColor = "#333",
  boxShadow = "0 2px 6px rgba(0,0,0,0.3)",
  borderWidth = 1,
  opacityt = 1,
}) {
  return (
    <button
      className="slide-btn"
      style={{
        "--bg": bgColor,
        "--color": textColor,
        "--color-hover": hoverTextColor,
        "--bg-hover": hoverbg,
        "--border": borderColor,
        "--shadow": boxShadow,
        "--bw": `${borderWidth}px`,
        "--opa": `${opacityt}`,
      }}
    >
      <span className="slide-container">
        <span className="slide-text normal">{text}</span>
        <span className="slide-text hover">{hoverText}</span>
      </span>
    </button>
  );
}
