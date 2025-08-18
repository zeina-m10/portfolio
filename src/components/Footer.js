export default function Footer() {
  return (
    <footer style={footerWrapper}>
      <div style={footerContent}>
        {/* Title */}
        <h2 className="bubbly-gradient-text" style={footerTitle}>
          Get in Touch
        </h2>

        {/* Links */}
        <nav style={linksWrapper}>
          <a href="#about" className="footer-link">About</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#projects" className="footer-link">Projects</a>
        </nav>

        {/* Contact */}
        <div style={contactWrapper}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=zn.mhmd2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <img src="/icons/gmail.svg" alt="Gmail" width="25" height="25" />
          </a>
          <a
            href="https://www.linkedin.com/in/zeinamohamed2003"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" width="23" height="23" />
          </a>
          <a
            href="https://www.behance.net/zeinamohamed110"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <img src="/icons/behance.svg" alt="Behance" width="25" height="25" />
          </a>
          <a href="tel:+201021299266" className="footer-link">
            📞 +20 0102 129 9266
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div style={copyStyle}>
        © {new Date().getFullYear()} Zeina Mohamed — All Rights Reserved
      </div>

      {/* Styles */}
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
        }
        @keyframes gradientFlow {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }

        .footer-link {
          color: #222;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .footer-link:hover {
          text-decoration: underline;
        }

        .icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }
        .icon-link:hover {
          transform: scale(1.15);
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          footer {
            padding: 30px 10px 20px;
          }
          h2 {
            font-size: 1.4rem !important;
          }
          nav {
            gap: 15px !important;
            font-size: 0.9rem;
          }
          .footer-link {
            font-size: 0.9rem;
          }
          div[style*="contactWrapper"] {
            gap: 10px !important;
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
}

// Styles
const footerWrapper = {
  width: "100%",
  background: "rgba(255, 255, 255, 0.10)",
  backdropFilter: "blur(18px) saturate(160%)",
  WebkitBackdropFilter: "blur(18px) saturate(160%)",
  borderTop: "1px solid rgba(255,255,255,0.35)",
  padding: "50px 20px 30px",
  boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
  pointerEvents: "auto"
};

const footerContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  maxWidth: "1100px",
  margin: "0 auto",
  textAlign: "center",
};

const footerTitle = {
  fontSize: "1.8rem",
};

const linksWrapper = {
  display: "flex",
  gap: "25px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const contactWrapper = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const copyStyle = {
  textAlign: "center",
  fontSize: "0.85rem",
  color: "#555",
  marginTop: "20px",
};
