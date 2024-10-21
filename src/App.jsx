import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import './App.css';
import { MODEL_INFO_LIST } from './assets/data/ModelInfoHelper';
import InfoBox from './components/InfoBox';
import Model from './components/Model';
import ThreeScene from './components/ThreeScene';
import CameraController from './components/CameraController';
import CameraViewfinder from './components/CameraViewfinder';
import BlankScreen from './components/BlankScreen';
import ButtonOverlay from './components/ButtonOverlay'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
library.add(faCircleXmark)


const App = () => {
  const [buttons, setButtons] = useState([]);
  const [targetPosition, setTargetPosition] = useState(null);
  const [cameraPosition, setCameraPosition] = useState(null);
  const [showButtons, setShowButtons] = useState(true);
  const orbitControlsRef = useRef();
  const cameraRef = useRef();

  const [isVisible, setIsVisible] = useState(false);
  const [boxIsVisible, setBoxIsVisible] = useState(false);
  const [viewfinderIsVisible, setViewfinderIsVisible] = useState(false);
  const [loadPosition, setLoadPosition] = useState(false);

  const [modelInfo, setModelInfo] = useState(null);

  const initialCameraPosition = new THREE.Vector3(-0.106, 1.334, 1.918);
  const initialTargetPosition = new THREE.Vector3(0, 0, 0);
  const initialLoadPosition = new THREE.Vector3(-0.690, 1.627, 2.645);

  const handleButtonClick = (button) => {
    const modelInfoAsy = MODEL_INFO_LIST.find((model) => model.title === button.name);
    setModelInfo(modelInfoAsy);

    if (modelInfoAsy) {
      setShowButtons(false);
      setTargetPosition(new THREE.Vector3(modelInfoAsy.targetVec.x, modelInfoAsy.targetVec.y, modelInfoAsy.targetVec.z));
      setCameraPosition(new THREE.Vector3(modelInfoAsy.cameraVec.x, modelInfoAsy.cameraVec.y, modelInfoAsy.cameraVec.z));
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
      onComplete: () => {
        setShowButtons(true);
      },
    });
  };

  const logCameraAndTarget = () => {
    if (cameraRef.current && orbitControlsRef.current) {
      const cameraPosition = cameraRef.current.position;
      const targetPosition = orbitControlsRef.current.target;

      console.log('Camera Position:', {
        x: cameraPosition.x,
        y: cameraPosition.y,
        z: cameraPosition.z,
      });

      console.log('Target Position (LookAt):', {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
      });
    }
  };

  const handleLoadComplete = () => {
    setLoadPosition(initialCameraPosition);
    //setLoadPosition(new THREE.Vector3(-0.528,1.564,2.531));
  };
  
  return (
    <>
      <Canvas camera={{ position: initialLoadPosition, fov: 75 }} onCreated={handleLoadComplete}>
        <ThreeScene />
        <OrbitControls 
          ref={orbitControlsRef} 
          minPolarAngle={Math.PI / 4} // Set minimum vertical angle (45 degrees)
          maxPolarAngle={Math.PI / 2} // Set maximum vertical angle (90 degrees)
          //minDistance={}
          maxDistance={5}
        />
        <Model setButtonPositions={setButtons} />
        <CameraController
          cameraPosition={cameraPosition}
          targetPosition={targetPosition}
          orbitControlsRef={orbitControlsRef}
          cameraRef={cameraRef}
          showBox={showBox}
          loadPosition={loadPosition}
        />
        {/* Render ButtonOverlay within Canvas */}
        {showButtons && <ButtonOverlay buttons={buttons} onButtonClick={handleButtonClick} />}
      </Canvas>

      <BlankScreen isVisible={isVisible} />
      <CameraViewfinder viewfinderIsVisible={viewfinderIsVisible} />
      <InfoBox modelInfo={modelInfo} boxIsVisible={boxIsVisible} onClose={handleCloseInfoBox} />

      {/* Button to log camera and target positions */}
      <button
        onClick={logCameraAndTarget}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1,
        }}
      >
        Log Camera and Target
      </button>
    </>
  );
};

export default App;
