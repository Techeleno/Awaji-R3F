import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const SpinningBuilding = ({ model }) => {
  const groupRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (model) {
      // Create a clone while preserving materials
      const clone = model.clone();

      // Ensure materials are properly cloned
      clone.traverse((child) => {
        if (child.isMesh && child.material) {
          // Clone the material to not affect the original
          child.material = child.material.clone();
        }
      });
      
      // Clear any existing children
      while (groupRef.current.children.length > 0) {
        groupRef.current.remove(groupRef.current.children[0]);
      }
      
      groupRef.current.add(clone);
      
      // Center and scale the model
      const box = new THREE.Box3().setFromObject(clone);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      clone.position.sub(center);
      
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 1.5 / maxDim; // Increased scale factor for closer view
      clone.scale.multiplyScalar(scale);

      // Position camera closer to the model
      camera.position.set(1, 1, 1);
      camera.lookAt(0, 0, 0);
    }
  }, [model, camera]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return <group ref={groupRef} />;
};

const BuildingPreview = ({ model }) => {
  return (
    <div style={{ 
      width: "100%", 
      height: "300px",
      backgroundColor: "#f5f5f5",
      borderRadius: "0.625rem",
      overflow: "hidden",
      marginBottom: "1rem",
    }}>
      <Canvas camera={{ fov: 50 }}> {/* Reduced FOV for closer view */}
        {/* Enhanced lighting setup */}
        <ambientLight intensity={1} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.5} 
          castShadow
        />
        <directionalLight 
          position={[-5, 5, -5]} 
          intensity={0.3}
        />
        <directionalLight 
          position={[0, 5, 0]} 
          intensity={0.2}
        />
        
        <SpinningBuilding model={model} />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default BuildingPreview;