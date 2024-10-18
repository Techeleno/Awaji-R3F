import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MODEL_INFO_LIST } from '../assets/data/ModelInfoHelper';

const Model = ({ setButtonPositions }) => {
  const gltf = useLoader(GLTFLoader, 'src/assets/Visit Awaji.glb');
  const modelRef = useRef();

  useEffect(() => {
    if (!modelRef.current) return;

    const newButtonPositions = [];
    const model = modelRef.current;

    model.traverse((child) => {
      const modelInfo = MODEL_INFO_LIST.find(m => m.name === child.name);
      if (modelInfo) {
        const position = new THREE.Vector3();
        child.getWorldPosition(position);

        // Add an offset to position the button above the object if needed
        const offsetY = 1; // Adjust this value as needed
        position.y += offsetY;

        // Add this child to button list with 3D coordinates
        newButtonPositions.push({
          name: child.name,
          x: position.x,
          y: position.y,
          z: position.z
        });
      }
    });

    // Update button positions
    setButtonPositions(newButtonPositions);
  }, [setButtonPositions]);

  return <primitive ref={modelRef} object={gltf.scene} />;
};

export default Model;
