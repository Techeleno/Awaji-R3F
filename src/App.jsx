import React from 'react'; 
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import './App.css';
import { MODEL_INFO_LIST } from './assets/data/ModelInfoHelper';  // From src/assets/data/ModelInfoHelper.js
import InfoBox from './components/InfoBox';
import Model from './components/Model';
import ThreeScene from './components/ThreeScene';
import CameraController from './components/CameraController';
import CameraViewfinder from './components/CameraViewfinder';
import BlankScreen from './components/BlankScreen'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faCircleXmark);

const App = () => {
  const [targetPosition, setTargetPosition] = useState(null);
  const [cameraPosition, setCameraPosition] = useState(null);
  const [modelInfo, setModelInfo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [boxIsVisible, setBoxIsVisible] = useState(false);
  const [viewfinderIsVisible, setViewfinderIsVisible] = useState(false);
  const orbitControlsRef = useRef();
  const cameraRef = useRef();

  const initialCameraPosition = new THREE.Vector3(-0.106, 1.334, 1.918);
  const initialTargetPosition = new THREE.Vector3(0, 0, 0);

  const handleBuildingClick = (building) => {
    console.log(`Received click on: ${building.name}`);  // Log the received building name

    const modelInfoAsy = MODEL_INFO_LIST.find((model) => model.name === building.name);
    if (modelInfoAsy) {
      console.log('Model Info Found:', modelInfoAsy);  // Log the found model information

      setModelInfo(modelInfoAsy);
      setTargetPosition(new THREE.Vector3(modelInfoAsy.targetVec.x, modelInfoAsy.targetVec.y, modelInfoAsy.targetVec.z));
      setCameraPosition(new THREE.Vector3(modelInfoAsy.cameraVec.x, modelInfoAsy.cameraVec.y, modelInfoAsy.cameraVec.z));
    } else {
      console.log('No model info found for:', building.name);  // Log if no model info is found
    }
  };

  const showBox = () => {
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
      x: initialTargetPosition.x,
      y: initialTargetPosition.y,
      z: initialTargetPosition.z,
      ease: 'power3.inOut',
      onUpdate: () => {
        orbitControlsRef.current.update();
      },
    });

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
      <Canvas camera={{ position: initialCameraPosition, fov: 75 }}>
        <ThreeScene />
        <OrbitControls
          ref={orbitControlsRef}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          maxDistance={5}
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

      <BlankScreen isVisible={isVisible} />
      <CameraViewfinder viewfinderIsVisible={viewfinderIsVisible} />
      <InfoBox modelInfo={modelInfo} boxIsVisible={boxIsVisible} onClose={handleCloseInfoBox} />
    </>
  );
};

export default App;