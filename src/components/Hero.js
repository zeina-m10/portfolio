export default function Hero() {
  return (
      <section
      id="about" // 🔹 Added ID for smooth scroll target
      style={{
        position: 'relative',
        zIndex: 2,
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        scrollMarginTop: '70px' // 🔹 Offset for navbar
      }}
    >
      {/* Glassmorphism Frame */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.10)',
          borderRadius: '25px',
          padding: '80px',
          maxWidth: '1000px',
          textAlign: 'center',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          boxShadow: '0 8px 40px rgba(0, 0, 0, 0.15)',
          position: 'relative' // for absolute positioning inside
        }}
      >
        {/* Main Heading */}
        <h1
          className="bubbly-gradient-text"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '10px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none'
          }}
        >
          Hey there, welcome to my portfolio!
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: '#222',
            maxWidth: '700px',
            margin: '0 auto 20px',
            pointerEvents: 'none'
          }}
        >
          Blending creativity with purpose to create beautiful, user‑friendly experiences.
        </p>

        {/* About Me - Paragraph 1 */}
        <p
          style={{
            fontSize: '1rem',
            maxWidth: '800px',
            lineHeight: '1.6',
            margin: '0 auto 10px',
            color: '#222',
            textAlign: 'center',
            pointerEvents: 'none'
          }}
        >
          I’m <span className="bubbly-gradient-text">Zeina Mohamed</span>, an aspiring{' '}
          <span className="bubbly-gradient-text">UI/UX designer</span> passionate about
          transforming ideas into delightful, user‑friendly experiences. With a love for
          details and a bubbly creative spirit, I aim to design interfaces that feel as
          good as they look.
        </p>
 
        {/* About Me - Paragraph 2 */}
        <p
          style={{
            fontSize: '1rem',
            maxWidth: '650px',
            lineHeight: '1.6',
            margin: '0 auto',
            color: '#222',
            textAlign: 'center',
            pointerEvents: 'none'
          }}
        >
          Currently exploring new design challenges and growing my skills, I combine{' '}
          <span className="bubbly-gradient-text">creativity</span>,{' '}
          <span className="bubbly-gradient-text">problem‑solving</span>, and a touch of{' '}
          <span className="bubbly-gradient-text">playfulness</span> in every project I
          create.
        </p>

        {/* Small bottom-right text */}
        <span
  style={{
    position: 'absolute',
    bottom: '15px',
    right: '20px',
    fontSize: '0.85rem',
    fontWeight: '300',
    color: '#555',
    fontStyle: 'italic',
    pointerEvents: 'none',
    userSelect: 'none',
  }}
>
  👀 Psst, pop the bubbles
</span>


        {/* Gradient Animation Styles */}
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
            font-weight: bold;
          }

          @keyframes diagonalFlow {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 100% 100%;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
