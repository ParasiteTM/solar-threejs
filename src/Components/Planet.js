import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { Sphere, Html } from '@react-three/drei';
import { TextureLoader } from 'three';
import Store from '../store';
const Planet = ({
  uref,
  distance,
  color,
  map = 'jpegPIA00256.jpg',
  scale = 1,
  rotationTime = 1,
  revolutionTime = 1,
  planetName,
}) => {
  const colorMap = useLoader(TextureLoader, map);
  const bearsVal = Store((state) => state.bears);
  const [hovered, setHoevered] = useState(false);
  useFrame((state, delta) => {
    let elapsedTime = state.clock.elapsedTime;
    uref.current.rotation.y += (Math.PI * 2 * delta) / rotationTime;
    uref.current.position.x = Math.sin(elapsedTime / revolutionTime) * distance;
    uref.current.position.z = Math.cos(elapsedTime / revolutionTime) * distance;
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  useEffect(() => {
    console.log(bearsVal);
  }, [bearsVal]);
  return (
    <Sphere
      ref={uref}
      position={[distance, 0, 0]}
      scale={scale}
      onPointerOver={() => setHoevered(true)}
      onPointerLeave={() => setHoevered(false)}
      onClick={() => Store((state) => state.incBears)}
    >
      <meshStandardMaterial color={`${color}`} map={colorMap} />
      <Html position={[0, 2, 0]} transform occlude>
        <h1 className="planetHeader">{planetName}</h1>
      </Html>
      <Html position={[5, 0, 0]} transform occlude>
        <div className="planetInfo">
          <h2>Planet Info</h2>
          <span>lorem20</span>
        </div>
      </Html>
    </Sphere>
  );
};

export default Planet;
