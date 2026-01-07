// components/StillLearning.js
export default function StillLearning() {
  const bulletColors = [
    "#00b4ff", "#FF0090", "#1dd1a1", "#D900FF", "#00F7FF",
    "#ff70cf", "#00FFBB", "#8C00EA", "#B1009C", "#0062FF",
  ];

  const points = [
    "Sharpening my responsiveness and adaptive design skills to make sure every interface feels smooth across devices.",
    "Exploring advanced Figma tips & tricks to work smarter and unlock new creative possibilities in my workflow.",
    "Diving deeper into UX methods and research practices to strengthen my problem-solving and human-centered mindset.",
    "Currently learning graphic design and exploring creative layouts.",
  ];

  return (
    <section
      id="still-learning"
      style={{
        position: "relative",
        zIndex: 2,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "60vh",
        scrollMarginTop: "70px",
        padding: "40px 20px",
      }}
    >
      {/* Title outside container */}
      <h2
        className="bubbly-gradient-text"
        style={{
          fontSize: "2.4rem",
          fontWeight: 700,
          letterSpacing: "1px",
          lineHeight: "1.15",
          textAlign: "center",
          pointerEvents: "auto",
          marginBottom: "25px",
        }}
      >
        Still Learning 
      </h2>

      {/* Glass container */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.10)",
          borderRadius: "25px",
          padding: "clamp(20px, 5vw, 60px)",
          maxWidth: "1000px",
          width: "100%",
          textAlign: "left",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.15)",
          margin: "0 auto",
        }}
      >
        {points.map((text, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              marginBottom: "18px",
            }}
          >
            {/* Bullet point */}
            <span
              style={{
                color: bulletColors[i % bulletColors.length],
                fontSize: "1.2rem",
                lineHeight: "1.5rem",
                pointerEvents: "none",
              }}
            >
              ●
            </span>

            {/* Sentence */}
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.6",
                color: "#222",
                margin: 0,
                pointerEvents: "none",
              }}
            >
              {text
                .split(" ")
                .map((word, idx) =>
                  ["responsiveness", "adaptive", "Figma", "UX", "research", "graphic", "design"].some(
                    (kw) => word.toLowerCase().includes(kw.toLowerCase())
                  ) ? (
                    <span key={idx} className="bubbly-gradient-text">
                      {" "}{word}{" "}
                    </span>
                  ) : (
                    " " + word + " "
                  )
                )}
            </p>
          </div>
        ))}
      </div>

      {/* Gradient text style */}
      <style jsx>{`
        .bubbly-gradient-text {
          background: linear-gradient(
            90deg,
            #00b4ff,
            #58d0ff,
            #b16eff,
            #ff70cf,
            #fd7fb5,
            #00b4ff,
            #58d0ff,
            #b16eff,
            #ff70cf,
            #fd7fb5
          );
          background-size: 600% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientFlow 40s linear infinite alternate;
          font-weight: bold;
        }

        @keyframes gradientFlow {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          h2 {
            font-size: 1.5rem !important;
          }
          p {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </section>
  );
}
