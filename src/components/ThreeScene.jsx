import React, { useRef } from 'react';
import { Environment, useEnvironment, useHelper } from '@react-three/drei';
import { PointLightHelper, DirectionalLightHelper } from 'three';

const ThreeScene = () => {
  const envMap = useEnvironment({ files: "src/assets/environmentMap.hdr" });
  const pointLightRef = useRef();
  const directionalLightRef = useRef();

  // Add helpers for both point light and directional light
  // useHelper(pointLightRef, PointLightHelper, 0.5, 'red');
  // useHelper(directionalLightRef, DirectionalLightHelper, 0.5, 'blue');

  return (
    <>
      <Environment map={envMap} />
      
      {/* Adjusted point light */}
      <pointLight 
        ref={pointLightRef}
        position={[5, 5, 5]} 
        intensity={1} 
        castShadow
      />

      <pointLight 
        ref={pointLightRef}
        position={[1, 1, 0]} 
        intensity={1} 
        castShadow
      />

      <pointLight 
        position={[-1, 1, 1]} 
        intensity={1} 
        castShadow
      />

      {/* Added directional light for dramatic shadows */}
      {/* <directionalLight
        ref={directionalLightRef}
        position={[-5, 10, -5]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      /> */}

    
    </>
  );
};

export default ThreeScene;