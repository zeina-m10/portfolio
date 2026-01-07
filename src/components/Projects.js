import React, { useState, useEffect } from "react";

const sectionWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "1000px",
  margin: "0 auto 80px",
  gap: "30px",
  pointerEvents: "none",
  scrollMarginTop: "70px",
  padding: "0 20px",
};

const gridStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  width: "100%",
  flexWrap: "wrap",
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
  maxWidth: "320px",
  flex: "1 1 300px",
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
  const [popupImage, setPopupImage] = useState(null);

  // 🔒 HARD SCROLL LOCK (HTML + BODY)
  useEffect(() => {
    if (!popupImage) return;

    const scrollY = window.scrollY;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [popupImage]);

  const projects = [
    {
      title: "Outly",
      desc: "Group outing planning app designed with user-centered approach.",
      img: "/Outly.png",
      link: "https://www.figma.com/design/alcuBJ2F6Xno6iHPFX3sbC/My-Outly",
    },
    {
      title: "Edtech Platform",
      desc: "A bilingual educational platform with dark/light modes.",
      img: "/Covered.png",
      link: "https://www.figma.com/design/8K7YAyvdMQww7OhBfqnpsV/Edutech-Platform",
    },
    {
      title: "Hero Sections",
      desc: "Hero sections designed in both light and dark modes.",
      img: "/modes.png",
      link: "https://www.figma.com/design/vVZj5AivWB9k0420ChLtBm/Hero-Sections",
    },
    {
      title: "Melted",
      desc: "A modern landing page highlighting product benefits.",
      img: "/meltedcover1.png",
      link: "https://www.figma.com/design/3WIYxL2zNlhieKJHu1iDty/Melted",
    },
    {
      title: "Breadfast Dashboard",
      desc: "Dashboard presenting key business metrics.",
      img: "/Cover.png",
      link: "https://www.figma.com/design/UC89XVXjp1a3knVa6hydsb/Dashboard",
    },
    {
      title: "Swaply Logo",
      desc: "Logo designed in Figma for a peer-to-peer exchanging skills website.",
      img: "/Swaply.png",
      popup: true,
    },
    {
      title: "Path Logo",
      desc: "Logo designed in Adobe Illustrator for psychologist's website.",
      img: "/Path.png",
      popup: true,
    },
    {
      title: "Melted Logo",
      desc: "Logo designed in Adobe Illustrator for chocolate's website.",
      img: "/Melted.png",
      popup: true,
    },
  ];

  return (
    <>
      <div id="projects" style={sectionWrapper}>
        <h2 className="bubbly-gradient-text" style={{ pointerEvents: "none" }}>
          My Projects
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
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    ...imgStyle,
                    ...(isHovered ? { transform: "scale(1.05)" } : {}),
                  }}
                />

                <div style={cardContentStyle}>
                  <div style={titleStyle}>{p.title}</div>
                  <div style={descStyle}>{p.desc}</div>

                  {p.link ? (
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
                  ) : (
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
                      onClick={() => setPopupImage(p.img)}
                    >
                      View
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {popupImage && (
        <div
          onClick={() => setPopupImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            pointerEvents: "auto",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              background: "#fff",
              padding: "16px",
              borderRadius: "12px",
              maxWidth: "90%",
              maxHeight: "90%",
              pointerEvents: "auto",
            }}
          >
            <button
              onClick={() => setPopupImage(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ✕
            </button>

            <img
              src={popupImage}
              alt="Popup"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                display: "block",
              }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .bubbly-gradient-text {
          background: linear-gradient(
            90deg,
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
          font-weight: 700;
          font-size: 2.4rem;
          text-align: center;
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
    </>
  );
}
