import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { MODEL_INFO_LIST } from '../assets/data/ModelInfoHelper';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';

const Model = ({ onBuildingClick }) => {
  const gltf = useLoader(GLTFLoader, 'src/assets/Visit Awaji.glb');
  console.log(gltf.scene); 
  const modelRef = useRef();
  const { scene, camera, gl, mouse, raycaster } = useThree();
  const [hoveredObject, setHoveredObject] = useState(null);
  const [composer, setComposer] = useState(null);
  const [outlinePass, setOutlinePass] = useState(null); // Track outlinePass in state

  useEffect(() => {
    // Create composer and passes
    const newComposer = new EffectComposer(gl);
    const renderPass = new RenderPass(scene, camera);
    const newOutlinePass = new OutlinePass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      scene,
      camera
    );

    // Add the passes to the composer
    newComposer.addPass(renderPass);
    newComposer.addPass(newOutlinePass);

    // Customize outline effect
    newOutlinePass.edgeStrength = 2.5;
    newOutlinePass.edgeGlow = 1.5;
    newOutlinePass.edgeThickness = 1.0;
    newOutlinePass.pulsePeriod = 1.5;
    newOutlinePass.visibleEdgeColor.set('#00ff00');  // Green glow for hover
    newOutlinePass.hiddenEdgeColor.set('#000000');   // Hidden edges in black

    // Start the animation loop
    gl.setAnimationLoop(() => {
      newComposer.render();
    });

    // Save composer and outline pass references
    setComposer(newComposer);
    setOutlinePass(newOutlinePass);

    return () => {
      gl.setAnimationLoop(null); // Cleanup when unmounted
    };
  }, [scene, camera, gl]);

  useFrame(() => {
    if (!composer || !outlinePass) return; // Ensure everything is ready
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(modelRef.current, true);

    if (intersects.length > 0) {
      const hoveredBuilding = intersects[0].object;
      const modelInfo = MODEL_INFO_LIST.find((m) => m.name === hoveredBuilding.name);

      if (modelInfo && hoveredObject !== hoveredBuilding) {
        setHoveredObject(hoveredBuilding);
        console.log(`Hovered on: ${hoveredBuilding.name}`); // Log hover
      }
    } else {
      setHoveredObject(null);
    }
  });

  useEffect(() => {
    if (hoveredObject && outlinePass) {
      console.log('Outline applied to:', hoveredObject.name);
      outlinePass.selectedObjects = [hoveredObject]; // Apply outline to hovered object
    } else if (outlinePass) {
      outlinePass.selectedObjects = []; // Clear selection if no object is hovered
    }
  }, [hoveredObject, outlinePass]); // Trigger when hoveredObject or outlinePass changes

  const handleClick = () => {
    if (hoveredObject) {
      console.log(`Clicked on: ${hoveredObject.name}`); // Log the click
      onBuildingClick(hoveredObject);  // Pass the object to the parent handler
    }
  };

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      onClick={handleClick}
      onPointerMove={(e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      }}
    />
  );
};

export default Model;