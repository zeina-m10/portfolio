// components/Navbar.js
export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left - Gradient name */}
      <div className="navbar-gradient-text">
        Zeina Mohamed
      </div>

      {/* Middle - Links */}
      <div className="nav-links">
        {['About', 'Skills', 'Projects'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="nav-link"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right - Icons */}
      <div className="nav-icons">
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
      </div>

      <style jsx>{`
        /* Navbar container */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          z-index: 10000;
        }

        /* Gradient name */
        .navbar-gradient-text {
          font-weight: bold;
          font-size: 20px;
          background: linear-gradient(
            90deg,
            #00b4ff,
            #58d0ff,
            #b16eff,
            #ff70cf,
            #fd7fb5
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientFlow 8s linear infinite alternate;
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        /* Links */
        .nav-links {
          display: flex;
          gap: 50px;
          justify-content: center;
        }

        .nav-link {
          text-decoration: none;
          color: #000;
          font-weight: 500;
          position: relative;
          padding: 2px 4px;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: transparent;
          background: linear-gradient(
            90deg,
            #00b4ff,
            #58d0ff,
            #b16eff,
            #ff70cf,
            #fd7fb5
          );
          background-size: 400% auto;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradientFlow 6s linear infinite alternate;
          text-shadow: 0 0 8px rgba(63, 169, 245, 0.5),
            0 0 15px rgba(166, 120, 249, 0.4);
        }

        /* Icons */
        .nav-icons {
          display: flex;
          gap: 15px;
          font-size: 22px;
        }

        .icon-link {
          transition: transform 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          overflow: visible;
        }

        .icon-link:hover {
          transform: scale(1.2);
        }

        /* Tablet view */
        @media (max-width: 768px) {
          .navbar-gradient-text {
            font-size: 18px;
          }
          .nav-links {
            gap: 30px;
          }
          .nav-link {
            font-size: 14px;
          }
        }

        /* Mobile view */
        @media (max-width: 480px) {
          .navbar-gradient-text {
            font-size: 16px;
          }
          .nav-links {
            gap: 20px;
          }
          .nav-link {
            font-size: 13px;
          }
          .nav-icons img {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </nav>
  );
}
