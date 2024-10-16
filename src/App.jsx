import { Canvas } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';
import * as THREE from 'three';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import './App.css';
import { MODEL_INFO_LIST } from './assets/data/ModelInfoHelper';
import ButtonOverlay from './components/ButtonOverlay';
import InfoBox from './components/InfoBox';
import Model from './components/Model';
import ThreeScene from './components/ThreeScene';
import CameraController from './components/CameraController';
import CameraViewfinder from './components/CameraViewfinder';
import BlankScreen from './components/BlankScreen';


// Main App Component
const App = () => {
  const [buttons, setButtons] = useState([]);
  const [targetPosition, setTargetPosition] = useState(null);
  const [cameraPosition, setCameraPosition] = useState(null);
  const [showButtons, setShowButtons] = useState(true); // State to track button visibility
  const orbitControlsRef = useRef(); // Ref for OrbitControls
  const cameraRef = useRef(); // Ref for camera

  const [isVisible, setIsVisible] = useState(false);
  const [boxIsVisible, setBoxIsVisible] = useState(false);
  const [viewfinderIsVisible, setViewfinderIsVisible] = useState(false);

  const [modelInfo, setModelInfo] = useState(null);

  // Store the initial camera and target positions
  const initialCameraPosition = new THREE.Vector3(1, 10, 10); // Initial camera position
  const initialTargetPosition = new THREE.Vector3(0, 0, 0); // Initial target position

  const handleButtonClick = (modelName) => {
    const modelInfoAsy = MODEL_INFO_LIST.find((model) => model.name === modelName);
    setModelInfo(modelInfoAsy);

    if (modelInfo) {
      setShowButtons(false); // Hide buttons when a model is selected

      // Set the camera and target positions based on the model info
      setTargetPosition(new THREE.Vector3(modelInfo.targetVec.x, modelInfo.targetVec.y, modelInfo.targetVec.z));
      setCameraPosition(new THREE.Vector3(modelInfo.cameraVec.x, modelInfo.cameraVec.y, modelInfo.cameraVec.z));
    }
  };

  const showBox = () => {
    setIsVisible(true);
    setViewfinderIsVisible(true);
    setTimeout(() => setViewfinderIsVisible(false), 1500);
    setTimeout(() => setBoxIsVisible(true), 2000);
  }

  const handleCloseInfoBox = () => {
    setBoxIsVisible(false);
    setModelInfo(null);
    setIsVisible(false);

    // Animate back to the initial camera position and target position
    gsap.to(orbitControlsRef.current.target, {
      duration: 1.5,
      x: initialTargetPosition.x,
      y: initialTargetPosition.y,
      z: initialTargetPosition.z,
      ease: 'power3.inOut',
      onUpdate: () => {
        orbitControlsRef.current.update(); // Update controls to reflect the reset target
      },
    });

    // Use cameraRef to access the camera for GSAP animation
    gsap.to(cameraRef.current.position, {
      duration: 1.5,
      x: initialCameraPosition.x,
      y: initialCameraPosition.y,
      z: initialCameraPosition.z,
      ease: 'power3.inOut',
      onComplete: () => {
        // Recalculate button positions after camera animation is done
        setShowButtons(true);
      }
    });
  };
  

  return (
    <>
      {/* The Canvas with the 3D scene */}
      <Canvas camera={{ position: [1, 10, 10], fov: 75 }}>
        <ThreeScene/>
        
        {/* Pass ref to OrbitControls */}
        <OrbitControls ref={orbitControlsRef} />

        <Model setButtonPositions={setButtons} />

        {/* Camera controller to handle animations */}
        <CameraController
          cameraPosition={cameraPosition}
          targetPosition={targetPosition}
          orbitControlsRef={orbitControlsRef}
          cameraRef={cameraRef} // Pass camera ref here
          showBox={showBox}
        />
      </Canvas>

      <BlankScreen isVisible={isVisible}/>

      <CameraViewfinder viewfinderIsVisible={viewfinderIsVisible}/>

      {/* Render the button overlay, conditionally showing based on `showButtons` state */}
      {showButtons && <ButtonOverlay buttons={buttons} onButtonClick={handleButtonClick} />}

      {/* Render the info box */}
      <InfoBox
        modelInfo={modelInfo}
        boxIsVisible={boxIsVisible}
        onClose={handleCloseInfoBox}
      />
    </>
  );
};

export default App;
