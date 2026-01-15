import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';

function Bubble({ position, size, texture, onPop, isMobile }) {
  const mesh = useRef();
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [popping, setPopping] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (mesh.current) {
      mesh.current.position.x =
        position[0] + Math.sin(t + position[1]) * 0.15;
      mesh.current.position.y =
        position[1] + Math.cos(t + position[0]) * 0.15;
    }

    if (popping) {
      setOpacity((o) => Math.max(o - 0.05, 0));
      setScale((s) => Math.max(s - 0.1, 0));
    }
  });

  const pop = () => {
    if (!popping) {
      setPopping(true);
      setTimeout(onPop, 300);
    }
  };

  return (
    <mesh
      ref={mesh}
      position={position}
      scale={[size * scale, size * scale, 1]}
      onPointerOver={!isMobile ? pop : undefined} // ✅ desktop hover
      onPointerDown={isMobile ? pop : undefined}  // ✅ mobile tap
    >
      <planeGeometry args={[1, 1, 1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={opacity}
        alphaTest={0.05}
        toneMapped={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function Bubbles() {
  const textures = useLoader(THREE.TextureLoader, [
    '/bubble1.png',
    '/bubble2.png',
    '/bubble3.png',
  ]);

  textures.forEach((t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    t.needsUpdate = true;
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const [pageHeight, setPageHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 1000
  );

  useEffect(() => {
    const update = () =>
      setPageHeight(
        Math.max(document.body.scrollHeight, window.innerHeight)
      );
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const initialCounts = isMobile
    ? { big: 10, medium: 18, small: 25 }
    : { big: 60, medium: 80, small: 120 };

  const [bubbles, setBubbles] = useState(() => {
    const arr = [];
    for (let i = 0; i < initialCounts.big; i++)
      arr.push(createBubble('big', textures, isMobile));
    for (let i = 0; i < initialCounts.medium; i++)
      arr.push(createBubble('medium', textures, isMobile));
    for (let i = 0; i < initialCounts.small; i++)
      arr.push(createBubble('small', textures, isMobile));
    return arr;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => {
        const max = isMobile ? 60 : 250;
        if (prev.length >= max) return prev;

        const type =
          Math.random() < 0.3
            ? 'big'
            : Math.random() < 0.6
            ? 'medium'
            : 'small';

        return [...prev, createBubble(type, textures, isMobile)];
      });
    }, 400);

    return () => clearInterval(interval);
  }, [textures, isMobile]);

  const handlePop = (id) => {
    setBubbles((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: `${pageHeight}px`,
        pointerEvents: 'auto',
        zIndex: 0,
      }}
    >
      <ambientLight />
      {bubbles.map((b) => (
        <Bubble
          key={b.id}
          {...b}
          isMobile={isMobile}
          onPop={() => handlePop(b.id)}
        />
      ))}
    </Canvas>
  );
}

// --- ORIGINAL SIZE LOGIC RESTORED ---
function createBubble(type, textures, isMobile) {
  let sizeRange;

  if (isMobile) {
    if (type === 'big') sizeRange = [0.1, 0.2];
    else if (type === 'medium') sizeRange = [0.15, 0.25];
    else sizeRange = [0.08, 0.15];
  } else {
    // ✅ EXACTLY like your original desktop sizes
    if (type === 'big') sizeRange = [0.2, 0.3];
    else if (type === 'medium') sizeRange = [0.2, 0.32];
    else sizeRange = [0.12, 0.2];
  }

  const size =
    sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);

  const spreadX = isMobile ? 8 : 18;
  const spreadY = isMobile ? 6 : 12;

  return {
    id: crypto.randomUUID(),
    position: [
      (Math.random() - 0.5) * spreadX,
      (Math.random() - 0.5) * spreadY,
      0,
    ],
    size,
    texture: textures[Math.floor(Math.random() * textures.length)],
  };
}
