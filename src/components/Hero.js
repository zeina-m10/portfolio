export default function Hero() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        zIndex: 2,
        pointerEvents: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        scrollMarginTop: "70px",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.10)",
          borderRadius: "25px",
          padding: "clamp(20px, 5vw, 80px)",
          maxWidth: "1000px",
          width: "100%",
          textAlign: "center",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.15)",
          position: "relative",
          margin: "0 auto",
          paddingBottom: "70px",
        }}
      >
        {/* Main Heading */}
        <h1
          className="bubbly-gradient-text hero-heading"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            marginBottom: "15px",
            whiteSpace: "normal",
            pointerEvents: "none",
            lineHeight: 1.2,
            fontWeight: "bold",
          }}
        >
          Hey there, welcome to my portfolio!
        </h1>

        {/* Tagline */}
        <p
          className="hero-tagline"
          style={{
            fontSize: "clamp(1.2rem, 2.8vw, 1.5rem)",
            color: "#222",
            maxWidth: "700px",
            margin: "0 auto 25px",
            pointerEvents: "none",
            fontWeight: 500,
          }}
        >
          Blending creativity with purpose to create beautiful, user-friendly
          experiences.
        </p>

        {/* Paragraph 1 */}
        <p
          className="hero-text"
          style={{
            fontSize: "1.05rem",
            maxWidth: "800px",
            lineHeight: "1.6",
            margin: "0 auto 15px",
            color: "#222",
            textAlign: "center",
            pointerEvents: "none",
            padding: "0 10px",
          }}
        >
          I’m <span className="bubbly-gradient-text">Zeina Mohamed</span>, an
          aspiring <span className="bubbly-gradient-text">UI/UX designer</span>{" "}
          passionate about transforming ideas into delightful, user-friendly
          experiences. With a love for details and a bubbly creative spirit, I
          aim to design interfaces that feel as good as they look.
        </p>

        {/* Paragraph 2 */}
        <p
          className="hero-text"
          style={{
            fontSize: "1.05rem",
            maxWidth: "650px",
            lineHeight: "1.6",
            margin: "0 auto",
            color: "#222",
            textAlign: "center",
            pointerEvents: "none",
            padding: "0 10px",
          }}
        >
          Currently exploring new design challenges and growing my skills, I
          combine <span className="bubbly-gradient-text">creativity</span>,{" "}
          <span className="bubbly-gradient-text">problem-solving</span>, and a
          touch of <span className="bubbly-gradient-text">playfulness</span> in
          every project I create.
        </p>

        {/* "Psst" Text */}
        <span
          className="psst-text"
          style={{
            position: "absolute",
            bottom: "15px",
            right: "20px",
            fontSize: "0.85rem",
            fontWeight: "300",
            color: "#555",
            fontStyle: "italic",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          👀 Psst, pop the bubbles
        </span>

        {/* Styles */}
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
            .hero-heading {
              font-size: 1.9rem !important;
            }
            .hero-tagline {
              font-size: 1.1rem !important;
            }
            .hero-text {
              font-size: 0.95rem !important;
            }
            .psst-text {
              font-size: 0.65rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
