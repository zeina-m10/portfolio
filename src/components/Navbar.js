import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const links = ["About", "Skills", "Projects"];
  const icons = [
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=zn.mhmd2003@gmail.com",
      alt: "Gmail",
      src: "/icons/gmail.svg",
    },
    {
      href: "https://www.linkedin.com/in/zeinamohamed2003",
      alt: "LinkedIn",
      src: "/icons/linkedin.svg",
    },
    {
      href: "https://www.behance.net/zeinamohamed110",
      alt: "Behance",
      src: "/icons/behance.svg",
    },
  ];

  return (
    <nav className="navbar">
      {/* Left - Gradient name */}
      <div className="navbar-gradient-text">Zeina Mohamed</div>

      {/* Middle - Links */}
      {isMobile ? (
        <>
          {/* Hamburger Button */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mobile-menu">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}

              <div className="mobile-icons">
                {icons.map((icon) => (
                  <a
                    key={icon.alt}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-icon-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <img src={icon.src} alt={icon.alt} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="nav-links">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
        </div>
      )}

      {/* Desktop Icons */}
      {!isMobile && (
        <div className="nav-icons">
          {icons.map((icon) => (
            <a
              key={icon.alt}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <img src={icon.src} alt={icon.alt} />
            </a>
          ))}
        </div>
      )}

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
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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
          white-space: nowrap;
        }

        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        /* Desktop links */
        .nav-links {
          display: flex;
          gap: 50px;
          justify-content: center;
          flex: 1;
        }

        .nav-link {
          text-decoration: none;
          color: #000;
          font-weight: 500;
          position: relative;
          padding: 2px 4px;
          transition: all 0.3s ease;
          white-space: nowrap;
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

        /* Desktop icons */
        .nav-icons {
          display: flex;
          gap: 12px;
        }

        .icon-link img {
          width: 25px;
          height: 25px;
          transition: transform 0.2s ease;
        }

        .icon-link:hover img {
          transform: scale(1.2);
        }

        /* Hamburger */
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 25px;
          height: 20px;
          cursor: pointer;
          z-index: 10001;
        }

        .hamburger span {
          display: block;
          height: 3px;
          background: #000;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* Normal X for mobile */
        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Mobile menu */
        .mobile-menu {
          position: absolute;
          top: 60px;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          padding: 15px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          z-index: 9999;
        }

        .mobile-link {
          text-decoration: none;
          font-weight: 500;
          color: #000;
          font-size: 16px;
        }

        .mobile-link:hover {
          color: #3FAFF9;
        }

        .mobile-icons {
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }

        .mobile-icon-link img {
          width: 25px;
          height: 25px;
        }

        /* Tablet adjustments */
        @media (max-width: 768px) {
          .navbar-gradient-text {
            font-size: 18px; /* slightly bigger for mobile since menu opens */
          }
        }

        /* Mobile adjustments */
        @media (max-width: 480px) {
          .navbar {
            padding: 0 10px;
            height: 55px;
          }
          .navbar-gradient-text {
            font-size: 20px;
          }
        }
      `}</style>
    </nav>
  );
}
