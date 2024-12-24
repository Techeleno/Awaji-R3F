import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useThree, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const SpinningModel = ({ modelName }) => {
  console.log('[SpinningModel] Starting render with modelName:', modelName);
  const modelRef = useRef();
  
  try {
    console.log('[SpinningModel] Attempting to load GLTF');
    const gltf = useLoader(GLTFLoader, '/assets/Visit Awaji.glb', (loader) => {
      console.log('[SpinningModel] GLTF loader initialized');
    });
    
    console.log('[SpinningModel] GLTF loaded successfully:', gltf);
    console.log('[SpinningModel] Scene structure:', {
      childCount: gltf.scene.children.length,
      children: gltf.scene.children.map(child => ({
        name: child.name,
        type: child.type,
        children: child.children?.length || 0
      }))
    });

    // Recursively search for the mesh
    const findMeshByName = (object, name) => {
      if (object.name === name) return object;
      
      if (object.children) {
        for (const child of object.children) {
          const found = findMeshByName(child, name);
          if (found) return found;
        }
      }
      return null;
    };

    // Clone the specific mesh
    const model = useMemo(() => {
      console.log('[SpinningModel] Searching for mesh:', modelName);
      const targetMesh = findMeshByName(gltf.scene, modelName);
      console.log('[SpinningModel] Search result:', targetMesh ? 'Found mesh' : 'Mesh not found');
      
      if (!targetMesh) {
        console.warn(`[SpinningModel] Mesh "${modelName}" not found. Available objects:`, 
          gltf.scene.children.map(child => child.name).join(', '));
        return null;
      }
      
      const clonedMesh = targetMesh.clone();
      console.log('[SpinningModel] Successfully cloned mesh');
      return clonedMesh;
    }, [gltf, modelName]);

    // Center and scale the model
    useEffect(() => {
      console.log('[SpinningModel] Setup effect running. Model:', !!model, 'ModelRef:', !!modelRef.current);
      if (model && modelRef.current) {
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        console.log('[SpinningModel] Model dimensions:', {
          center: center.toArray(),
          size: size.toArray()
        });
        
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        
        model.position.sub(center);
        model.scale.multiplyScalar(scale);
        
        modelRef.current.add(model);
        console.log('[SpinningModel] Model added to scene');
      }
    }, [model]);

    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.005;
      }
    });

    return <group ref={modelRef} />;
    
  } catch (error) {
    console.error('[SpinningModel] Error in component:', error);
    return null;
  }
};

const ModelViewer = ({ modelName }) => {
  console.log('[ModelViewer] Rendering with modelName:', modelName);
  
  return (
    <div style={{ 
      width: '100%', 
      height: '250px',
      borderRadius: '0.625rem',
      overflow: 'hidden',
      marginBottom: '1rem',
      backgroundColor: '#f5f5f5',
      position: 'relative'
    }}>
      <Canvas
        camera={{ 
          position: [0, 2, 5],
          fov: 45
        }}
        onCreated={({ gl, scene, camera }) => {
          console.log('[ModelViewer] Canvas created');
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <SpinningModel modelName={modelName} />
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;