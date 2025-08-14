import React, { useState } from "react";

const sectionWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "1000px", // same width as Hero
  margin: "0 auto 80px",
  gap: "30px",
  pointerEvents: "none",
  scrollMarginTop: "70px", // offset for navbar
  padding: "0 20px" // same side spacing as Hero
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px",
  width: "100%",
  pointerEvents: "none",
};

const baseCardStyle = {
  background: "rgba(255,255,255,0.10)",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
  backdropFilter: "blur(18px) saturate(160%)",
  WebkitBackdropFilter: "blur(18px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.35)",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
  pointerEvents: "auto",
};

const imgWrapperStyle = {
  overflow: "hidden",
};

const imgStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  transition: "transform 0.4s ease",
};

const cardContentStyle = {
  padding: "16px",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
};

const titleStyle = {
  fontSize: "1.2rem",
  fontWeight: 600,
  marginBottom: "8px",
  color: "#222",
};

const descStyle = {
  fontSize: "0.9rem",
  color: "#444",
  marginBottom: "auto",
};

const buttonStyle = {
  marginTop: "16px",
  padding: "10px",
  background: "#3FAFF9",
  border: "none",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 600,
  borderRadius: "8px",
  cursor: "pointer",
  width: "100%",
  pointerEvents: "auto",
};

export default function Projects() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverButtonIndex, setHoverButtonIndex] = useState(null);

  const projects = [
    {
      title: "Swaply",
      desc: "Peer-to-peer skill exchange platform with modern UI/UX.",
      img: "/screenshot.png",
      link: "#",
    },
    {
      title: "Outly",
      desc: "Group outing planning app designed with user-centered approach.",
      img: "/Outly.png",
      link: "https://www.figma.com/design/alcuBJ2F6Xno6iHPFX3sbC/My-Outly",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio showcasing skills, projects, and contact info.",
      img: "/screenshot.png",
      link: "#",
    },
  ];

  return (
    <div id="projects" style={sectionWrapper}>
      <h2
        className="bubbly-gradient-text"
        style={{
          fontSize: "2.4rem",
          fontWeight: 700,
          letterSpacing: "1px",
          lineHeight: "1.15",
          textAlign: "center",
          pointerEvents: "auto",
        }}
      >
        Projects
      </h2>

      <div style={gridStyle}>
        {projects.map((p, i) => {
          const isHovered = hoverIndex === i;
          const isButtonHovered = hoverButtonIndex === i;

          return (
            <div
              key={i}
              style={{
                ...baseCardStyle,
                ...(isHovered
                  ? {
                      transform: "translateY(-6px)",
                      boxShadow:
                        "0 0 12px rgba(63,175,249,0.25), 0 0 20px rgba(25,198,204,0.15)",
                      border: "1px solid rgba(255,255,255,0.55)",
                    }
                  : {}),
              }}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div style={imgWrapperStyle}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    ...imgStyle,
                    ...(isHovered ? { transform: "scale(1.05)" } : {}),
                  }}
                />
              </div>
              <div style={cardContentStyle}>
                <div style={titleStyle}>{p.title}</div>
                <div style={descStyle}>{p.desc}</div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ pointerEvents: "auto" }}
                >
                  <button
                    style={{
                      ...buttonStyle,
                      ...(isButtonHovered
                        ? {
                            background:
                              "linear-gradient(135deg, #9b5de5 0%, #3FAFF9 50%, #ff70cf 100%)",
                          }
                        : {}),
                    }}
                    onMouseEnter={() => setHoverButtonIndex(i)}
                    onMouseLeave={() => setHoverButtonIndex(null)}
                  >
                    View
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>

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
          color: transparent;
          animation: gradientFlow 40s linear infinite alternate;
          font-weight: 700;
        }

        @keyframes gradientFlow {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </div>
  );
}
