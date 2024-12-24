import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const InfoboxModel = ({ model }) => {
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.05; // Adjust speed if necessary
    }
  });

  if (!model) return null;

  return (
    <Canvas style={{ width: "200px", height: "200px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <primitive object={model} ref={modelRef} />
    </Canvas>
  );
};

export default InfoboxModel;
