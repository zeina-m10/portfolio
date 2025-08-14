// components/Navbar.js
export default function Navbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        zIndex: 10000
      }}
    >
      {/* Left - Gradient name */}
      <div
        className="navbar-gradient-text"
        style={{
          fontWeight: 'bold',
          fontSize: '20px'
        }}
      >
        Zeina Mohamed
      </div>

      {/* Middle - Links */}
      <div style={{ display: 'flex', gap: '50px', justifyContent: 'center' }}>
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
      <div style={{ display: 'flex', gap: '15px', fontSize: '22px' }}>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=zn.mhmd2003@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            transition: 'transform 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px',
            overflow: 'visible'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img src="/icons/gmail.svg" alt="Gmail" width="25" height="25" />
        </a>

        <a
          href="https://www.linkedin.com/in/zeinamohamed2003"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            transition: 'transform 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px',
            overflow: 'visible'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img src="/icons/linkedin.svg" alt="LinkedIn" width="23" height="23" />
        </a>
      </div>

      <style jsx>{`
        
        /* Gradient animation for name */
        .navbar-gradient-text {
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
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        /* Link styling */
        .nav-link {
          text-decoration: none;
          color: #000;
          font-weight: 500;
          position: relative;
          padding: 2px 4px;
          transition: all 0.3s ease;
        }

        /* Gradient hover for links */
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
      `}</style>
    </nav>
  );
}
