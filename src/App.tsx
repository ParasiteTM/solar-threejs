// @ts-ignore
import Sun from './Components/Sun';
// @ts-ignore
import Planet from './Components/Planet';
// @ts-ignore
import Controller from './Controller';
// @ts-ignore
import MilkyWay from './Components/MilkyWay.js';
// @ts-ignore
import ZoomClicker from './Components/ZoomClicker.js';

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, Stars, OrbitControls } from '@react-three/drei';

const App = () => {
  const sunRef = useRef(null);
  const mercuryRef = useRef(null);
  const venusRef = useRef(null);
  const earthRef = useRef(null);
  const marsRef = useRef(null);
  const jupiterRef = useRef(null);
  const saturnRef = useRef(null);
  const uranusRef = useRef(null);
  const neptuneRef = useRef(null);

  const currentFocus = useRef(mercuryRef);
  return (
    <Canvas
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#25316D',
      }}
      camera={{
        position: [5, 5, 5],
        far: 90000,
        near: 55,
      }}
    >
      {/* SUN */}
      <Sun uref={sunRef} scale={10} />

      {/* PLANETS */}
      <Bounds fit clip observe margin={1} damping={10}>
        <ZoomClicker>
          <Planet
            uref={mercuryRef}
            planetName="mercury"
            distance={3.5 * 10}
            map="textures/2k_mercury.jpg"
            scale={2.4}
            color="#E5E5E5"
            rotationTime={58}
            revolutionTime={87}
          />

          <Planet
            uref={venusRef}
            planetName="venus"
            distance={6.7 * 10}
            scale={6}
            map="textures/2k_venus_atmosphere.jpg"
            color="#dddaa9"
            rotationTime={243}
            revolutionTime={224}
          />
          <Planet
            uref={earthRef}
            planetName="earth"
            distance={9.3 * 10}
            scale={6.3}
            map="textures/2k_earth_daymap.jpg"
            rotationTime={24}
            revolutionTime={265}
          />
          <Planet
            uref={marsRef}
            planetName="mars"
            distance={14.2 * 10}
            scale={3.3}
            map={'textures/2k_mars.jpg'}
            rotationTime={25}
            revolutionTime={657}
          />
          <Planet
            uref={jupiterRef}
            planetName="jupiter"
            distance={48.4 * 10}
            scale={69}
            map={'textures/2k_jupiter.jpg'}
            rotationTime={12}
            revolutionTime={4307}
          />
          <Planet
            uref={saturnRef}
            planetName="saturn"
            distance={88.9 * 10}
            scale={58}
            map={'textures/2k_saturn.jpg'}
            rotationTime={12}
            revolutionTime={10767}
          />
          <Planet
            uref={uranusRef}
            planetName="uranus"
            distance={179 * 10}
            scale={25}
            map={'textures/2k_uranus.jpg'}
            rotationTime={16}
            revolutionTime={30660}
          />
          <Planet
            uref={neptuneRef}
            planetName="neptune"
            distance={288 * 10}
            scale={24}
            map={'textures/2k_neptune.jpg'}
            rotationTime={16}
            revolutionTime={60225}
          />
        </ZoomClicker>
      </Bounds>

      {/* BACKGROUND */}
      <Stars radius={5000} factor={10} speed={1} />
      <MilkyWay radius={7000} />

      {/* LIGHTS */}
      <ambientLight intensity={1} />

      {/* CONTROLS */}
      <Controller
        sunRef={sunRef}
        mercuryRef={mercuryRef}
        currentFocus={currentFocus}
      />
      {/* <ambientLight intensity={2} /> */}
      <OrbitControls makeDefault />
      {/* HELPERS */}

      {/* <axesHelper args={[2000]} /> */}
    </Canvas>
  );
};

export default App;
