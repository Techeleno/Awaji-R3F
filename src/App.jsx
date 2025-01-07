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
  const [inputDisabled, setInputDisabled] = useState(false);
  const orbitControlsRef = useRef();
  const cameraRef = useRef();

  const initialCameraPosition = new THREE.Vector3(-0.106, 1.334, 1.918);
  const initialTargetPosition = new THREE.Vector3(0, 0, 0);

  const handleBuildingClick = (building) => {
    if (modelInfo) return;
    
    const modelInfoAsy = MODEL_INFO_LIST.find((model) => model.name === building.name);
    if (modelInfoAsy) {
      const combinedInfo = {
        ...modelInfoAsy,
        model: building.model
      };
      
      setModelInfo(combinedInfo);
      setTargetPosition(new THREE.Vector3(modelInfoAsy.targetVec.x, modelInfoAsy.targetVec.y, modelInfoAsy.targetVec.z));
      setCameraPosition(new THREE.Vector3(modelInfoAsy.cameraVec.x, modelInfoAsy.cameraVec.y, modelInfoAsy.cameraVec.z));
      setInputDisabled(true);
    }
  };

  const showBox = () => {
    setBoxIsVisible(true);
    setInputDisabled(false);
  };

  const handleCloseInfoBox = () => {
    setBoxIsVisible(false);
    setModelInfo(null);
    setInputDisabled(true);

    gsap.to(orbitControlsRef.current.target, {
      duration: 1.5,
      x: initialTargetPosition.x,
      y: initialTargetPosition.y,
      z: initialTargetPosition.z,
      ease: 'power3.inOut',
      onUpdate: () => {
        orbitControlsRef.current.update();
      },
      onComplete: () => setInputDisabled(false),
    });

    gsap.to(cameraRef.current.position, {
      duration: 1.5,
      x: initialCameraPosition.x,
      y: initialCameraPosition.y,
      z: initialCameraPosition.z,
      ease: 'power3.inOut',
    });
  };

  // Handle click outside InfoBox
  const handleCanvasClick = (e) => {
    if (boxIsVisible && !e.defaultPrevented) {
      const infoBox = document.querySelector('.infoBox');
      if (infoBox && !infoBox.contains(e.target)) {
        handleCloseInfoBox();
      }
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%',
      overflow: 'hidden'
    }}>
      {inputDisabled && <div className="input-blocker" />}

      <div onClick={handleCanvasClick} style={{ width: '100%', height: '100%' }}>
        <Canvas 
          style={{ position: 'absolute', top: 0, left: 0 }}
          camera={{ position: initialCameraPosition, fov: 75 }}
        >
          <ThreeScene />
          <OrbitControls
            ref={orbitControlsRef}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 3}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            maxDistance={4}
            enableZoom={true}
          />

          <Model 
            onBuildingClick={handleBuildingClick}
            modelInfo={modelInfo}
          />
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
      </div>
    </div>
  );
};

export default App;