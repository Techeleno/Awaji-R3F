// External Libraries
import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

// Styles
import './App.css';

// Assets and Data
import { MODEL_INFO_LIST } from './assets/data/ModelInfoHelper';

// Components
import InfoBox from './components/InfoBox';
import Model from './components/Model';
import ThreeScene from './components/ThreeScene';
import CameraController from './components/CameraController';
import CameraViewfinder from './components/CameraViewfinder';
import BlankScreen from './components/BlankScreen';
import ButtonOverlay from './components/ButtonOverlay';

// Add FontAwesome icon to the library
library.add(faCircleXmark);

// Custom Hooks
const useCameraPositions = (initialPositions) => {
  const [cameraPosition, setCameraPosition] = useState(null);
  const [targetPosition, setTargetPosition] = useState(null);
  const [loadPosition, setLoadPosition] = useState(initialPositions.load);
  
  const resetPositions = () => {
    setCameraPosition(initialPositions.camera);
    setTargetPosition(initialPositions.target);
  };

  return {
    cameraPosition,
    targetPosition,
    loadPosition,
    setCameraPosition,
    setTargetPosition,
    resetPositions,
    setLoadPosition,
  };
};

const App = () => {
  // State Management
  const [buttons, setButtons] = useState([]);
  const [showButtons, setShowButtons] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [boxIsVisible, setBoxIsVisible] = useState(false);
  const [viewfinderIsVisible, setViewfinderIsVisible] = useState(false);
  const [modelInfo, setModelInfo] = useState(null);

  // Refs
  const orbitControlsRef = useRef();
  const cameraRef = useRef();

  // Camera Initial Positions
  const initialPositions = {
    camera: new THREE.Vector3(-0.106, 1.334, 1.918),
    target: new THREE.Vector3(0, 0, 0),
    load: new THREE.Vector3(-0.690, 1.627, 2.645),
  };

  const {
    cameraPosition,
    targetPosition,
    loadPosition,
    setCameraPosition,
    setTargetPosition,
    resetPositions,
    setLoadPosition,
  } = useCameraPositions(initialPositions);

  // Handlers
  const handleButtonClick = (button) => {
    const selectedModelInfo = MODEL_INFO_LIST.find((model) => model.title === button.name);
    setModelInfo(selectedModelInfo);

    if (selectedModelInfo) {
      setShowButtons(false);
      setTargetPosition(new THREE.Vector3(selectedModelInfo.targetVec.x, selectedModelInfo.targetVec.y, selectedModelInfo.targetVec.z));
      setCameraPosition(new THREE.Vector3(selectedModelInfo.cameraVec.x, selectedModelInfo.cameraVec.y, selectedModelInfo.cameraVec.z));
    }
  };

  const showInfoBox = () => {
    setIsVisible(true);
    setViewfinderIsVisible(true);
    setTimeout(() => setViewfinderIsVisible(false), 1500);
    setTimeout(() => setBoxIsVisible(true), 2000);
  };

  const handleCloseInfoBox = () => {
    setBoxIsVisible(false);
    setModelInfo(null);
    setIsVisible(false);

    gsap.to(orbitControlsRef.current.target, {
      duration: 1.5,
      ...initialPositions.target,
      ease: 'power3.inOut',
      onUpdate: () => orbitControlsRef.current.update(),
    });

    gsap.to(cameraRef.current.position, {
      duration: 1.5,
      ...initialPositions.camera,
      ease: 'power3.inOut',
      onComplete: () => setShowButtons(true),
    });
  };

  const logCameraAndTarget = () => {
    if (cameraRef.current && orbitControlsRef.current) {
      console.log('Camera Position:', cameraRef.current.position);
      console.log('Target Position (LookAt):', orbitControlsRef.current.target);
    }
  };

  const handleLoadComplete = () => setLoadPosition(initialPositions.camera);

  // JSX
  return (
    <>
      <Canvas camera={{ position: loadPosition, fov: 75 }} onCreated={handleLoadComplete}>
        <ThreeScene />
        <OrbitControls
          ref={orbitControlsRef}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          maxDistance={5}
        />
        <Model setButtonPositions={setButtons} />
        <CameraController
          cameraPosition={cameraPosition}
          targetPosition={targetPosition}
          orbitControlsRef={orbitControlsRef}
          cameraRef={cameraRef}
          showBox={showInfoBox}
          loadPosition={loadPosition}
        />
        {showButtons && <ButtonOverlay buttons={buttons} onButtonClick={handleButtonClick} />}
      </Canvas>

      <BlankScreen isVisible={isVisible} />
      <CameraViewfinder viewfinderIsVisible={viewfinderIsVisible} />
      <InfoBox modelInfo={modelInfo} boxIsVisible={boxIsVisible} onClose={handleCloseInfoBox} />

      {/* <button onClick={logCameraAndTarget} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}>
        Log Camera and Target
      </button> */}
    </>
  );
};

export default App;
