import React from "react";
import Particles from "react-particles-js";
import pariclesConfig from "./config/particle-config";
import "./App.css";
function ParticleBackground() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Particles params={pariclesConfig}></Particles>
    </div>
  );
}

export default ParticleBackground;
