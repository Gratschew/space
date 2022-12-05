import "./App.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Earth from "./components/Earth";
import Moon from "./components/Moon";
import Sun from "./components/Sun";
import { OrbitControls, Stars, Stage } from "@react-three/drei";
import { useState } from "react";
import { Model as Mew } from "./components/Mew";
import { Model as Rinnegan } from "./components/Rinnegan";
import { Model as Thanos } from "./components/Thanos";

const MEW = "MEW";
const THANOS = "THANOS";
const RINNEGAN = "RINNEGAN";
const EARTH = "EARTH";
const MOON = "MOON";
const SUN = "SUN";

const App = () => {
  const [showPlanet, setShowPlanet] = useState(MEW);

  const renderObject = () => {
    switch (showPlanet) {
      case MEW:
        return (
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
        );
      case THANOS:
        return (
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
        );
      case RINNEGAN:
        return (
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
        );
      case EARTH:
        return <Earth />;
      case MOON:
        return <Moon />;
      case SUN:
        return <Sun />;
      default:
        return null;
    }
  };
  return (
    <div
      className="App"
      style={{ height: "100vh", overflow: "hidden" }}
      width="100%"
      height="100%"
    >
      <NavBar showPlanet={showPlanet} setShowPlanet={setShowPlanet}></NavBar>
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Stars radius={300} depth={60} count={20000} fade={true} factor={7} />
          {renderObject()}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
