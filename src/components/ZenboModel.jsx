import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function({ position = [0, 0, 0], scale = [1, 1, 1] }) {
  const gltf = useLoader(GLTFLoader, 'src/assets/zenbo-low-poly.glb');
  const modelRef = useRef();

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      position={position}
      scale={scale}
    />
  );
}