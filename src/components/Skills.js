// components/Skills.js
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

// ---- Layout / style constants ----
const outerWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto 80px",
  gap: "32px",
  pointerEvents: "none",
  scrollMarginTop: "70px", // 🔹 so it won't hide under navbar
};

const cardContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch", // equal height
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "30px",
  width: "100%",
};

const cardStyle = {
  flex: "1 1 450px",
  maxWidth: "500px",
  background: "rgba(255,255,255,0.10)",
  borderRadius: "20px",
  padding: "28px",
  backdropFilter: "blur(18px) saturate(160%)",
  WebkitBackdropFilter: "blur(18px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.35)",
  textAlign: "center",
  boxShadow: "0 8px 30px rgba(0,0,0,0.09)",
  pointerEvents: "none",
  display: "flex",
  flexDirection: "column",
};

const headingStyle = {
  fontSize: "1.6rem",
  marginBottom: "18px",
  fontWeight: 700,
  color: "#222",
};

const subHeadingStyle = {
  fontSize: "0.9rem",
  fontWeight: 400,
  color: "#555",
  marginBottom: "16px",
  fontStyle: "italic",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
  gap: "18px",
  alignItems: "center",
  justifyItems: "center",
};

const itemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  padding: "8px",
  borderRadius: "10px",
  transition: "transform 180ms ease, box-shadow 180ms ease",
  cursor: "default",
};

const iconLabelStyle = {
  fontSize: "0.85rem",
  color: "#222",
  marginTop: "4px",
};

const softListStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "35px",
  textAlign: "left",
  color: "#222",
  lineHeight: 1.6,
};

// ---- Component ----
export default function Skills() {
  const designTools = [
    { name: "Figma", icon: <img src="/icons/figma.svg" alt="Figma" width="48" height="48" /> },
    { name: "Illustrator", icon: <img src="/icons/illustrator.svg" alt="Illustrator" width="48" height="48" /> },
    { name: "Photoshop", icon: <img src="/icons/photoshop.svg" alt="Photoshop" width="48" height="48" /> },
    { name: "Adobe XD", icon: <img src="/icons/xd.svg" alt="Adobe XD" width="48" height="48" /> },
    { name: "PowerPoint", icon: <img src="/icons/powerpoint.svg" alt="PowerPoint" width="48" height="48" /> },
    { name: "Word", icon: <img src="/icons/word.svg" alt="Word" width="48" height="48" /> },
    { name: "Excel", icon: <img src="/icons/excel.svg" alt="Excel" width="48" height="48" /> },
    { name: "WordPress", icon: <FaWordpress size={48} color="#21759B" /> },
    { name: "Canva", icon: <img src="/icons/canva.svg" alt="Canva" width="48" height="48" /> },
    { name: "Miro", icon: <img src="/icons/miro.svg" alt="Miro" width="48" height="48" /> },
  ];

  const codingBasics = [
    { name: "HTML", icon: <FaHtml5 size={48} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={48} color="#1572B6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={48} color="#06B6D4" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={48} color="#7952B3" /> },
    { name: "JavaScript", icon: <FaJsSquare size={48} color="#F7DF1E" /> },
    { name: "React", icon: <FaReact size={48} color="#61DAFB" /> },
  ];

  const softSkills = [
    "Empathetic and supportive, willing to help others find their way",
    "Able to adjust communication style to suit different people and situations",
    "Maintains deadlines and handles multiple tasks at once",
    "Open to constructive feedback and committed to self-improvement",
    "Can adapt to new challenges when required, finding the most efficient path forward",
    "Quick learner with a focus on practical, efficient solutions",
    "Organized multitasker who consistently meets deadlines",
    "Approachable and empathetic, despite working best in low-pressure environments",
    "Strong problem-solving mindset, able to find creative yet practical solutions",
    "Detail-oriented, ensuring designs are both functional and visually consistent",
  ];

  const bulletColors = [
    "#00b4ff", "#FF0090", "#1dd1a1", "#D900FF", "#00F7FF",
    "#ff70cf", "#00FFBB", "#8C00EA", "#B1009C", "#0062FF",
  ];

  return (
    <div id="skills" style={outerWrapper}>
      <h2 className="bubbly-gradient-text" style={{ fontSize: "2.4rem", fontWeight: 700, letterSpacing: "1px", lineHeight: "1.15", textAlign: "center", pointerEvents: "auto" }}>
        My Skills
      </h2>

      <div style={cardContainer}>
        {/* Technical Skills Card */}
        <div style={cardStyle}>
          <h3 style={headingStyle}>Technical Skills</h3>
          <div style={gridStyle}>
            {designTools.map((s, i) => (
              <div key={i} className="skill-card" style={{ ...itemStyle, pointerEvents: "auto" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56 }}>
                  {s.icon}
                </div>
                <div style={iconLabelStyle}>{s.name}</div>
              </div>
            ))}
          </div>

          {/* Coding Basics */}
          <div style={{ marginTop: "24px" }}>
            <div style={subHeadingStyle}>Basic knowledge</div>
            <div style={gridStyle}>
              {codingBasics.map((s, i) => (
                <div key={i} className="skill-card" style={{ ...itemStyle, pointerEvents: "auto" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56 }}>
                    {s.icon}
                  </div>
                  <div style={iconLabelStyle}>{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Card */}
        <div style={cardStyle}>
          <h3 style={headingStyle}>Soft Skills</h3>
          <ul style={softListStyle}>
            {softSkills.map((t, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", pointerEvents: "auto" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    minWidth: "8px",
                    minHeight: "8px",
                    borderRadius: "50%",
                    background: bulletColors[i % bulletColors.length],
                    marginTop: "6px",
                    marginRight: "10px",
                    boxSizing: "border-box",
                    verticalAlign: "top"
                  }}
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
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
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(0, 172, 255, 0.12);
        }

        .skill-card img {
          display: block;
          width: 48px;
          height: 48px;
        }
        .skill-card:hover img,
        .skill-card:hover svg {
          transform: scale(1.08);
          transition: transform 180ms ease;
          filter: drop-shadow(0 8px 18px rgba(0, 176, 255, 0.14));
        }
      `}</style>
    </div>
  );
}
