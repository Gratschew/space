import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import EarthDayMap from "../components/assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../components/assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../components/assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../components/assets/textures/8k_earth_clouds.jpg";
import { AmbientLight, TextureLoader } from "three";
import * as THREE from "three";
import SunMap from "../components/assets/textures/8k_sun.jpg";
import Sun from "./Sun";

const Earth = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );
  const [sunMap] = useLoader(TextureLoader, [SunMap]);

  const earthRef = useRef();
  const cloudRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudRef.current.rotation.y = elapsedTime / 6;
  });
  return (
    <>
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.5} />
      {/* <Stars radius={300} depth={60} /> */}
      <mesh ref={cloudRef}>
        <sphereGeometry args={[1.005, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.35}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          /* normalMap={normalMap} */
          metalness={0.4}
          roughness={0.4}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
      <mesh position={[2, 0, 200]}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial map={sunMap} />
      </mesh>
    </>
  );
};

export default Earth;
