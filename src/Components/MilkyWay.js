import { Sphere, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { BackSide } from 'three';
const MilkyWay = ({ radius }) => {
  const lowTexture = useTexture('textures/2k_stars_milky_way.jpg');
  const highTexture = useTexture('textures/8k_stars_milky_way.jpg');

  return (
    <Sphere args={[radius]}>
      <meshStandardMaterial map={highTexture} side={BackSide} />
    </Sphere>
  );
};

export default MilkyWay;
