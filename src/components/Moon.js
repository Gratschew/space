import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MoonMap from "../components/assets/textures/8k_moon.jpg";
import { AmbientLight, TextureLoader } from "three";
import * as THREE from "three";

const Moon = () => {
  const [colorMap] = useLoader(TextureLoader, [MoonMap]);

  const earthRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
  });
  return (
    <>
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.5} />
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={0.4} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};

export default Moon;
