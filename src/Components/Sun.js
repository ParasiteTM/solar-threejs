import { Sphere, useTexture } from '@react-three/drei';
const Sun = ({ uref, scale }) => {
  const texture = useTexture('textures/2k_sun.jpg');
  return (
    <Sphere ref={uref} scale={scale}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
};

export default Sun;
