import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills'; // ⬅ new section
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import StillLearning from '@/components/StillLearning';

const Bubbles = dynamic(() => import('../components/Bubbles'), {
  ssr: false
});

export default function Home() {
  return (
    <>
      {/* White background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'white',
          zIndex: 0
        }}
      />

      {/* Bubbles layer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '300vh',
          zIndex: 10,
          pointerEvents: 'auto'
        }}
      >
        <Bubbles />
      </div>

      {/* Navbar clickable */}
      <div style={{ position: 'relative', zIndex: 20, pointerEvents: 'auto' }}>
        <Navbar />
      </div>

      {/* Hero */}
      <div
        style={{
          position: 'relative',
          zIndex: 15,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '80px'
        }}
      >
        <Hero />
      </div>

      {/* Skills section */}
      <div
        style={{
          position: 'relative',
          zIndex: 15,
          pointerEvents: 'none', // bubbles can pop behind
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px'
        }}
      >
        <Skills />
      </div>
      <div
        style={{
          position: 'relative',
          zIndex: 15,
          pointerEvents: 'none', // bubbles can pop behind
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px'
        }}
      >
        <Projects />
      </div>
      <div
        style={{
          position: 'relative',
          zIndex: 15,
          pointerEvents: 'none', // bubbles can pop behind
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px'
        }}
      >
        <StillLearning />
      </div>
      <div
        style={{
          position: 'relative',
          zIndex: 15,
          pointerEvents: 'none', // bubbles can pop behind
          display: 'flex',
          justifyContent: 'center',
          marginTop: '100px'
        }}
      >
        <Footer />
      </div>
    </>
  );
}
