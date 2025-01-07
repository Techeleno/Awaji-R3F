import React from 'react';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { MODEL_INFO_LIST } from '../assets/data/ModelInfoHelper';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';

const Model = ({ onBuildingClick, modelInfo }) => {
  const gltf = useLoader(GLTFLoader, '/assets/Visit Awaji.glb');
  const modelRef = useRef();
  const { scene, camera, gl, raycaster } = useThree();
  const [hoveredObject, setHoveredObject] = useState(null);
  const [composer, setComposer] = useState(null);
  const [outlinePass, setOutlinePass] = useState(null);
  const mouseRef = useRef(new THREE.Vector2());

  useEffect(() => {
    const newComposer = new EffectComposer(gl);
    const renderPass = new RenderPass(scene, camera);
    const newOutlinePass = new OutlinePass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      scene,
      camera
    );

    newComposer.addPass(renderPass);
    newComposer.addPass(newOutlinePass);

    newOutlinePass.edgeStrength = 2.5;
    newOutlinePass.edgeGlow = 1.5;
    newOutlinePass.edgeThickness = 1.0;
    newOutlinePass.pulsePeriod = 1.5;
    newOutlinePass.visibleEdgeColor.set('#00ff00');
    newOutlinePass.hiddenEdgeColor.set('#000000');

    gl.setAnimationLoop(() => {
      newComposer.render();
    });

    setComposer(newComposer);
    setOutlinePass(newOutlinePass);

    return () => {
      gl.setAnimationLoop(null);
    };
  }, [scene, camera, gl]);

  useFrame(() => {
    if (!composer || !outlinePass || modelInfo) {
      if (hoveredObject) {
        setHoveredObject(null);
        outlinePass.selectedObjects = [];
      }
      return;
    }

    raycaster.setFromCamera(mouseRef.current, camera);
    const intersects = raycaster.intersectObject(modelRef.current, true);

    if (intersects.length > 0) {
      const hoveredBuilding = intersects[0].object;
      const buildingInfo = MODEL_INFO_LIST.find((m) => m.name === hoveredBuilding.name);

      if (buildingInfo && hoveredObject !== hoveredBuilding) {
        setHoveredObject(hoveredBuilding);
      }
    } else if (hoveredObject) {
      setHoveredObject(null);
    }
  });

  useEffect(() => {
    if (hoveredObject && outlinePass && !modelInfo) {
      outlinePass.selectedObjects = [hoveredObject];
    } else if (outlinePass) {
      outlinePass.selectedObjects = [];
    }
  }, [hoveredObject, outlinePass, modelInfo]);

  const handlePointerMove = (e) => {
    if (!modelInfo) {
      // Get canvas-relative mouse position
      const canvas = gl.domElement;
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      
      mouseRef.current.set(x, y);
    }
  };

  const handleClick = (e) => {
    if (modelInfo) return;

    if (hoveredObject) {
      e.stopPropagation();
      const buildingInfo = MODEL_INFO_LIST.find(
        (m) => m.name === hoveredObject.name
      );
      if (buildingInfo) {
        const combinedInfo = {
          ...buildingInfo,
          model: hoveredObject
        };
        onBuildingClick(combinedInfo);
      }
    }
  };

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      onClick={handleClick}
      onPointerMove={handlePointerMove}
    />
  );
};

export default Model;