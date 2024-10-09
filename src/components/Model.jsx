import { useThree, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';
import { MODEL_INFO_LIST } from '../assets/data/ModelInfoHelper';


// The Model component
const Model = ({ setButtonPositions }) => {
    const gltf = useLoader(GLTFLoader, 'src/assets/Awaji.glb');
    const { camera, gl } = useThree();
    const modelRef = useRef();
  
    useFrame(() => {
      if (!modelRef.current) return;
  
      const newButtonPositions = [];
      const model = modelRef.current;
  
      // Traverse model children and project their positions to 2D
      model.traverse((child) => {
        if (child.isMesh && MODEL_INFO_LIST.find(m => m.name === child.name)) {
          const position = new THREE.Vector3();
          position.setFromMatrixPosition(child.matrixWorld);
  
          // Project 3D position to 2D screen space
          const projectedPosition = position.clone().project(camera);
          const x = (projectedPosition.x * 0.5 + 0.5) * gl.domElement.clientWidth;
          const y = -(projectedPosition.y * 0.5 - 0.5) * gl.domElement.clientHeight;
  
          // Add this child to button list
          newButtonPositions.push({ name: child.name, x, y });
        }
      });
  
      // Update button positions outside the canvas
      setButtonPositions(newButtonPositions);
    });
  
    return <primitive ref={modelRef} object={gltf.scene} />;
  };

export default Model;