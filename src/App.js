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
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 20,
          }}
          onClick={() => {
            setShowPlanet("MEW");
          }}
        >
          Mew
        </div>
        <div
          style={{
            color: "white",
            fontSize: 20,
          }}
          onClick={() => {
            setShowPlanet("THANOS");
          }}
        >
          Thanos
        </div>
        <div
          style={{
            color: "white",
            fontSize: 20,
          }}
          onClick={() => {
            setShowPlanet("RINNEGAN");
          }}
        >
          Rinnegan
        </div>
        <div
          style={{
            color: "white",
            fontSize: 20,
          }}
          onClick={() => {
            setShowPlanet("EARTH");
          }}
        >
          Earth
        </div>
        <div
          style={{
            color: "white",
            fontSize: 20,
          }}
          onClick={() => {
            setShowPlanet("MOON");
          }}
        >
          Moon
        </div>
        <div
          style={{
            color: "white",
            fontSize: 20,
          }}
          onClick={() => {
            setShowPlanet("SUN");
          }}
        >
          Sun
        </div>
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
