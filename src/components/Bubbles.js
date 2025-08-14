import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useState, useRef, useEffect } from 'react';

function Bubble({ position, size, texture, onPop }) {
  const mesh = useRef();
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [popping, setPopping] = useState(false);

  // Floating + popping animation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Floating
    if (mesh.current) {
      mesh.current.position.x = position[0] + Math.sin(t + position[1]) * 0.15;
      mesh.current.position.y = position[1] + Math.cos(t + position[0]) * 0.15;
    }

    // Popping animation
    if (popping) {
      setOpacity((o) => Math.max(o - 0.05, 0));
      setScale((s) => Math.max(s - 0.1, 0));
    }
  });

  // Hover → trigger popping
  const handleHover = () => {
    if (!popping) {
      setPopping(true);
      // Remove after animation ends
      setTimeout(() => onPop(), 300);
    }
  };

  return (
    <mesh
      ref={mesh}
      position={position}
      scale={[size * scale, size * scale, 1]}
      onPointerOver={handleHover}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={opacity}
        alphaTest={0.05}
        blending={THREE.NoBlending} // keep original PNG colors
        toneMapped={false}          // prevent grey tint
        color="white"               // no color filter
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function Bubbles() {
  // Load only your 3 images
  const textures = useLoader(THREE.TextureLoader, [
    '/bubble1.png',
    '/bubble2.png',
    '/bubble3.png'
  ]);

  textures.forEach((tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;
  });

  // Initial set of bubbles
  const [bubbles, setBubbles] = useState(() => {
    const arr = [];
    for (let i = 0; i < 70; i++) arr.push(createBubble('big', textures));
    for (let i = 0; i < 80; i++) arr.push(createBubble('medium', textures));
    for (let i = 0; i < 100; i++) arr.push(createBubble('small', textures));
    return arr;
  });

  // Regenerate bubbles
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => {
        if (prev.length < 250) {
          const sizeType =
            Math.random() < 0.3
              ? 'big'
              : Math.random() < 0.65
              ? 'medium'
              : 'small';
          return [...prev, createBubble(sizeType, textures)];
        }
        return prev;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [textures]);

  // Remove popped bubble
  const handlePop = (id) => {
    setBubbles((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <Canvas
      style={{
        background: 'transparent',
        pointerEvents: 'auto' // allow interaction
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

// Create bubble with correct size & spread
function createBubble(sizeType, textures) {
  let sizeRange;
  if (sizeType === 'big') sizeRange = [0.4, 0.55];
  else if (sizeType === 'medium') sizeRange = [0.25, 0.4];
  else sizeRange = [0.15, 0.25];

  const size = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);

  return {
    id: crypto.randomUUID(),
    position: [
      (Math.random() - 0.5) * 18, // horizontal spread
      (Math.random() - 0.5) * 12, // vertical spread
      0
    ],
    size,
    texture: textures[Math.floor(Math.random() * textures.length)]
  };
}
