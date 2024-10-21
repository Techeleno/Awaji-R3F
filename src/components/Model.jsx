import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef } from 'react';
import * as THREE from 'three';
import { MODEL_INFO_LIST } from '../assets/data/ModelInfoHelper';

// The Model component
const Model = ({ setButtonPositions }) => {
  const gltf = useLoader(GLTFLoader, 'src/assets/Visit Awaji.glb');
  const modelRef = useRef();

  useFrame(() => {
    if (!modelRef.current) return;

    const newButtonPositions = [];
    const model = modelRef.current;

    // Traverse model children and set positions for buttons on each building
    model.traverse((child) => {
      const modelInfo = MODEL_INFO_LIST.find(m => m.name === child.name);
      if (modelInfo) {
        const position = new THREE.Vector3();
        position.setFromMatrixPosition(child.matrixWorld);  // Get world position
        newButtonPositions.push({ name: modelInfo.title, x: position.x, y: position.y + 0.15, z: position.z });
      }
    });

    // Update button positions directly in 3D space
    setButtonPositions(newButtonPositions);
  });

  return <primitive ref={modelRef} object={gltf.scene} />;
};

export default Model;
