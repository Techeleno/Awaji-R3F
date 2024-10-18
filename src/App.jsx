import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import './App.css';
import ButtonOverlay from './components/ButtonOverlay';
import InfoBox from './components/InfoBox';
import Model from './components/Model';

const App = () => {
  const [buttons, setButtons] = useState([]);
  const orbitControlsRef = useRef();
  const cameraRef = useRef();

  const initialCameraPosition = new THREE.Vector3(-1, 1, 2.5);
  const initialTargetPosition = new THREE.Vector3(0, 0, 0);

  // Log the camera and target coordinates
  const logCameraAndTarget = () => {
    if (cameraRef.current && orbitControlsRef.current) {
      const cameraPosition = cameraRef.current.position;
      const targetPosition = orbitControlsRef.current.target;

      console.log('Camera Position:', cameraPosition);
      console.log('Target Position:', targetPosition);
    }
  };

  // Example: Log coordinates on 'L' key press
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'l' || event.key === 'L') {
        logCameraAndTarget();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleButtonClick = (button) => {
    const targetPosition = new THREE.Vector3(button.x, button.y, button.z);
    const cameraOffset = new THREE.Vector3(0, 2, 5); // Adjust to frame the building
    const cameraPosition = targetPosition.clone().add(cameraOffset);

    // Animate the camera to zoom in on the building
    gsap.to(orbitControlsRef.current.target, {
      duration: 1.5,
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      ease: 'power3.inOut',
      onUpdate: () => {
        orbitControlsRef.current.update();
      },
    });

    gsap.to(cameraRef.current.position, {
      duration: 1.5,
      x: cameraPosition.x,
      y: cameraPosition.y,
      z: cameraPosition.z,
      ease: 'power3.inOut',
      onUpdate: () => {
        orbitControlsRef.current.update();
      }
    });
  };

  const handleCloseInfoBox = () => {
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
      <Canvas
        camera={{ position: initialCameraPosition, fov: 75 }}
        onCreated={({ camera }) => {
          cameraRef.current = camera; // Assign camera to the ref
        }}
      >
        <ambientLight />
        <directionalLight position={[5, 5, 5]} />
        <Model setButtonPositions={setButtons} />
        <OrbitControls ref={orbitControlsRef} />
        {buttons.length > 0 && <ButtonOverlay buttons={buttons} onButtonClick={handleButtonClick} />}
      </Canvas>

      <InfoBox onClose={handleCloseInfoBox} />
    </>
  );
};

export default App;
