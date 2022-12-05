import "./App.css";
import { createRoot } from "react-dom/client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "./components/Earth";
import Moon from "./components/Moon";
import Sun from "./components/Sun";
import { Html, useProgress } from "@react-three/drei";
import { OrbitControls, Stars, Stage } from "@react-three/drei";
import { useState } from "react";
import { Model as Mew } from "./components/Mew";
import { Model as Rinnegan } from "./components/Rinnegan";
import { Model as Thanos } from "./components/Thanos";
function Loader() {
  return (
    <Html
      center
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#030007",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Html>
  );
}

const App = () => {
  const [showPlanet, setShowPlanet] = useState(false);
  return (
    <div className="App" style={{ height: "100vh" }} width="100%" height="100%">
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "15%",
          zIndex: 99,
          color: "white",
        }}
        onClick={() => {
          setShowPlanet("MEW");
        }}
      >
        Mew
      </div>
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "30%",
          zIndex: 99,
          color: "white",
        }}
        onClick={() => {
          setShowPlanet("THANOS");
        }}
      >
        Thanos, 4K might lag
      </div>
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "45%",
          zIndex: 99,
          color: "white",
        }}
        onClick={() => {
          setShowPlanet("RINNEGAN");
        }}
      >
        Rinnegan
      </div>
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "60%",
          zIndex: 99,
          color: "white",
        }}
        onClick={() => {
          setShowPlanet("EARTH");
        }}
      >
        Earth
      </div>
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "75%",
          zIndex: 99,
          color: "white",
        }}
        onClick={() => {
          setShowPlanet("MOON");
        }}
      >
        Moon
      </div>
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "90%",
          zIndex: 99,
          color: "white",
        }}
        onClick={() => {
          setShowPlanet("SUN");
        }}
      >
        Sun
      </div>
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Stars radius={300} depth={60} count={20000} fade={true} factor={7} />
          {showPlanet === "EARTH" && <Earth></Earth>}
          {showPlanet === "MOON" && <Moon></Moon>}
          {showPlanet === "SUN" && <Sun></Sun>}
          {showPlanet === "MEW" && (
            <>
              <Stage>
                <Mew></Mew>
                <OrbitControls
                  enableZoom={true}
                  enablePan={true}
                  enableRotate={true}
                  zoomSpeed={0.6}
                  panSpeed={0.5}
                  rotateSpeed={0.4}
                />
              </Stage>
            </>
          )}
          {showPlanet === "THANOS" && (
            <>
              <Stage>
                <Thanos></Thanos>
                <OrbitControls
                  enableZoom={true}
                  enablePan={true}
                  enableRotate={true}
                  zoomSpeed={0.6}
                  panSpeed={0.5}
                  rotateSpeed={0.4}
                />
              </Stage>
            </>
          )}
          {showPlanet === "RINNEGAN" && (
            <>
              <Stage>
                <Rinnegan />
                <OrbitControls
                  enableZoom={true}
                  enablePan={true}
                  enableRotate={true}
                  zoomSpeed={0.6}
                  panSpeed={0.5}
                  rotateSpeed={0.4}
                />
              </Stage>
            </>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
