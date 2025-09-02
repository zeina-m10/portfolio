import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef, useEffect, useState as useReactState } from 'react';

function Bubble({ position, size, texture, onPop }) {
  const mesh = useRef();
  const [scale, setScale] = useReactState(1);
  const [opacity, setOpacity] = useReactState(1);
  const [popping, setPopping] = useReactState(false);

  // Floating + popping animation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (mesh.current) {
      mesh.current.position.x = position[0] + Math.sin(t + position[1]) * 0.15;
      mesh.current.position.y = position[1] + Math.cos(t + position[0]) * 0.15;
    }

    if (popping) {
      setOpacity((o) => Math.max(o - 0.05, 0));
      setScale((s) => Math.max(s - 0.1, 0));
    }
  });

  const handlePopAction = () => {
    if (!popping) {
      setPopping(true);
      setTimeout(() => onPop(), 300);
    }
  };

  return (
    <mesh
      ref={mesh}
      position={position}
      scale={[size * scale, size * scale, 1]}
      onPointerOver={handlePopAction}
      onClick={handlePopAction}
      pointerEvents="auto"
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={opacity}
        alphaTest={0.05}
        blending={THREE.NoBlending}
        toneMapped={false}
        color="white"
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function Bubbles() {
  const textures = useLoader(THREE.TextureLoader, [
    '/bubble1.png',
    '/bubble2.png',
    '/bubble3.png'
  ]);

  textures.forEach((tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;
  });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // inside Bubbles component
const initialCounts = isMobile
  ? { big: 25, medium: 40, small: 55 }   // ✅ more bubbles for mobile
  : { big: 60, medium: 70, small: 90 };  // ✅ fewer bubbles for desktop


  const [bubbles, setBubbles] = useReactState(() => {
    const arr = [];
    for (let i = 0; i < initialCounts.big; i++) arr.push(createBubble('big', textures, isMobile));
    for (let i = 0; i < initialCounts.medium; i++) arr.push(createBubble('medium', textures, isMobile));
    for (let i = 0; i < initialCounts.small; i++) arr.push(createBubble('small', textures, isMobile));
    return arr;
  });

  // Track full page height
  const [pageHeight, setPageHeight] = useReactState(0);

  useEffect(() => {
    const updateHeight = () => setPageHeight(document.body.scrollHeight);
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => {
        const maxBubbles = isMobile ? 100 : 250;
        if (prev.length < maxBubbles) {
          const sizeType =
            Math.random() < 0.3 ? 'big'
            : Math.random() < 0.65 ? 'medium'
            : 'small';
          return [...prev, createBubble(sizeType, textures, isMobile)];
        }
        return prev;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [textures, isMobile]);

  const handlePop = (id) => {
    setBubbles((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <Canvas
      style={{
        background: 'transparent',
        pointerEvents: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: `${pageHeight}px`,   // ✅ full document height
        zIndex: 0
      }}
      camera={{ position: [0, 0, 8] }}
    >
      <ambientLight />
      {bubbles.map((b) => (
        <Bubble key={b.id} {...b} onPop={() => handlePop(b.id)} />
      ))}
    </Canvas>
  );
}

// --- adjusted bubble sizes for desktop & mobile ---
function createBubble(sizeType, textures, isMobile) {
  let sizeRange;

  if (isMobile) {
    // ✅ make mobile bubbles smaller
    if (sizeType === 'big') sizeRange = [0.25, 0.35];     // was 0.32–0.45
    else if (sizeType === 'medium') sizeRange = [0.15, 0.25]; // was 0.20–0.32
    else sizeRange = [0.08, 0.15];                        // was 0.12–0.20
  } else {
    // ✅ make desktop bubbles slightly bigger
    if (sizeType === 'big') sizeRange = [0.40, 0.6];      // bigger
    else if (sizeType === 'medium') sizeRange = [0.3, 0.45];  // bigger
    else sizeRange = [0.18, 0.28];                        // bigger
  }

  const size = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);

  const spreadX = isMobile ? 8 : 18;
  const spreadY = isMobile ? 6 : 12;

  return {
    id: crypto.randomUUID(),
    position: [
      (Math.random() - 0.5) * spreadX,
      (Math.random() - 0.5) * spreadY,
      0
    ],
    size,
    texture: textures[Math.floor(Math.random() * textures.length)]
  };
}
