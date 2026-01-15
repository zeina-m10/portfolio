import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';

function Bubble({ position, size, texture, onPop }) {
  const mesh = useRef();
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [popping, setPopping] = useState(false);

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
      onPointerOver={pop}
      onClick={pop}
    >
      <planeGeometry args={[1, 1]} />
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
    
  ]);

  textures.forEach((t) => {
    t.colorSpace = THREE.SRGBColorSpace;
    t.needsUpdate = true;
  });

  // ✅ FIX 1: reactive mobile detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ✅ FIX 2: guaranteed canvas height
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
    ? { big: 10, medium: 18, small: 25 }   // ✅ mobile: fewer bubbles
    : { big: 50, medium: 60, small: 80 };

  const [bubbles, setBubbles] = useState(() => {
    const arr = [];
    for (let i = 0; i < initialCounts.big; i++) arr.push(createBubble('big', textures, isMobile));
    for (let i = 0; i < initialCounts.medium; i++) arr.push(createBubble('medium', textures, isMobile));
    for (let i = 0; i < initialCounts.small; i++) arr.push(createBubble('small', textures, isMobile));
    return arr;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => {
        const max = isMobile ? 60 : 250;
        if (prev.length >= max) return prev;
        const type =
          Math.random() < 0.3 ? 'big' :
          Math.random() < 0.6 ? 'medium' : 'small';
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
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: `${pageHeight}px`,
        pointerEvents: 'auto',
        zIndex: 0,
      }}
      camera={{ position: [0, 0, 8] }}
      dpr={[1, 1.5]}   // ✅ mobile GPU safe
    >
      <ambientLight />
      {bubbles.map((b) => (
        <Bubble key={b.id} {...b} onPop={() => handlePop(b.id)} />
      ))}
    </Canvas>
  );
}

// unchanged logic, just safe sizes
function createBubble(type, textures, isMobile) {
  const ranges = isMobile
    ? {
        big: [0.25, 0.35],
        medium: [0.15, 0.25],
        small: [0.08, 0.14],
      }
    : {
        big: [0.4, 0.6],
        medium: [0.3, 0.45],
        small: [0.18, 0.28],
      };

  const sizeRange = ranges[type];
  const size =
    sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);

  return {
    id: crypto.randomUUID(),
    position: [
      (Math.random() - 0.5) * (isMobile ? 6 : 18),
      (Math.random() - 0.5) * (isMobile ? 5 : 12),
      0,
    ],
    size,
    texture: textures[Math.floor(Math.random() * textures.length)],
  };
}
