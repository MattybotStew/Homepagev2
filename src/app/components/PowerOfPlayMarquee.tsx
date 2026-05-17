export default function PowerOfPlayMarquee() {
  const items = Array(8).fill("The Power of Play")

  return (
    <div className="w-full overflow-hidden py-[28px] md:py-[40px]" style={{ backgroundColor: "#ffffff" }}>
      <style>{`
        @keyframes scrollText {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .power-marquee {
          display: flex;
          gap: 0;
          animation: scrollText 18s linear infinite;
          will-change: transform;
          width: max-content;
        }
        .power-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="power-marquee">
        {items.map((text, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(56px, 8vw, 108px)",
                color: "#1d3e6b",
                lineHeight: 1,
                whiteSpace: "nowrap",
                paddingLeft: "0.55em",
                paddingRight: "0.55em",
              }}
            >
              {text}
            </span>
            <span
              aria-hidden
              style={{
                fontSize: "clamp(20px, 3vw, 40px)",
                color: "#f7941e",
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ★
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
