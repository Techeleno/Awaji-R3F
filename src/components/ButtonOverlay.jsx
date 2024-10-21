import React, { useState, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const Diamond = ({ position, color, onClick, name }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => { setHovered(true); setShowTooltip(true); }}
        onPointerOut={() => { setHovered(false); setShowTooltip(false); }}
        onClick={() => onClick({ x: position[0], y: position[1], z: position[2], name })}
      >
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : color} metalness={0.6} roughness={0.2} />
      </mesh>
      {showTooltip && (
        <Html position={[0, 0.3, 0]}>
          <div style={{
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            whiteSpace: 'nowrap',
            transform: 'translate(-50%, -50%)'
          }}>
            {name}
          </div>
        </Html>
      )}
    </group>
  );
};

const ButtonOverlay = ({ buttons, onButtonClick }) => {
  return (
    <>
      {buttons.map((button, index) => {
        // Memoize the color so it's generated only once
        const color = useMemo(() => new THREE.Color(Math.random(), Math.random(), Math.random()), []);
        return (
          <Diamond
            key={index}
            position={[button.x, button.y, button.z]}
            color={color}
            onClick={onButtonClick}
            name={button.name}
          />
        );
      })}
    </>
  );
};

export default ButtonOverlay;
