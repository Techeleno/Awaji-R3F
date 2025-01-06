import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import './App.css';
import { MODEL_INFO_LIST } from './assets/data/ModelInfoHelper';
import InfoBox from './components/InfoBox';
import Model from './components/Model';
import ThreeScene from './components/ThreeScene';
import CameraController from './components/CameraController';
import gsap from 'gsap';

const App = () => {
  const [targetPosition, setTargetPosition] = useState(null);
  const [cameraPosition, setCameraPosition] = useState(null);
  const [modelInfo, setModelInfo] = useState(null);
  const [boxIsVisible, setBoxIsVisible] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false); // New state to manage user input
  const orbitControlsRef = useRef();
  const cameraRef = useRef();

  const initialCameraPosition = new THREE.Vector3(-0.106, 1.334, 1.918);
  const initialTargetPosition = new THREE.Vector3(0, 0, 0);

  const handleBuildingClick = (building) => {
    console.log(`Received click on: ${building.name}`);
    console.log('Full building object:', building); // Debug log
    
    const modelInfoAsy = MODEL_INFO_LIST.find((model) => model.name === building.name);
    if (modelInfoAsy) {
      // Create a new combined object that includes both modelInfo and the model mesh
      const combinedInfo = {
        ...modelInfoAsy,
        model: building.model  // Preserve the model mesh
      };
      
      setModelInfo(combinedInfo);  // Set the combined info
      console.log('Setting modelInfo with:', combinedInfo); // Debug log
      
      setTargetPosition(new THREE.Vector3(modelInfoAsy.targetVec.x, modelInfoAsy.targetVec.y, modelInfoAsy.targetVec.z));
      setCameraPosition(new THREE.Vector3(modelInfoAsy.cameraVec.x, modelInfoAsy.cameraVec.y, modelInfoAsy.cameraVec.z));
      setInputDisabled(true);
    }
  };

  const showBox = () => {
    setBoxIsVisible(true);
    setInputDisabled(false); // Re-enable user input when box is shown
  };

  const handleCloseInfoBox = () => {
    setBoxIsVisible(false);
    setModelInfo(null);
    setInputDisabled(true); // Disable input while resetting camera

    // Reset camera and controls position
    gsap.to(orbitControlsRef.current.target, {
      duration: 1.5,
      x: initialTargetPosition.x,
      y: initialTargetPosition.y,
      z: initialTargetPosition.z,
      ease: 'power3.inOut',
      onUpdate: () => {
        orbitControlsRef.current.update();
      },
      onComplete: () => setInputDisabled(false), // Re-enable input after reset
    });
    console.log("euns")
    gsap.to(cameraRef.current.position, {
      duration: 1.5,
      x: initialCameraPosition.x,
      y: initialCameraPosition.y,
      z: initialCameraPosition.z,
      ease: 'power3.inOut',
    });
  };

  return (
    <>
      {/* Input disabling overlay */}
      {inputDisabled && <div className="input-blocker" />}

      <Canvas camera={{ position: initialCameraPosition, fov: 75 }}>
      <ThreeScene />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={Math.PI / 6} // Restrict how far down the camera can look
        maxPolarAngle={Math.PI / 3} // Restrict how far up the camera can look
        minAzimuthAngle={-Math.PI / 4} // Restrict horizontal rotation (left limit)
        maxAzimuthAngle={Math.PI / 4} // Restrict horizontal rotation (right limit)
        maxDistance={4}
        enableZoom={true}
      />

        <Model onBuildingClick={handleBuildingClick} />
        <CameraController
          cameraPosition={cameraPosition}
          targetPosition={targetPosition}
          orbitControlsRef={orbitControlsRef}
          cameraRef={cameraRef}
          showBox={showBox}
        />
      </Canvas>

      <InfoBox
        modelInfo={modelInfo}
        boxIsVisible={boxIsVisible}
        onClose={handleCloseInfoBox}
      />
    </>
  );
};

export default App;
