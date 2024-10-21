import React, { useState, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

const Diamond = ({ position, color, onClick, name }) => {
  const groupRef = useRef();
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Invisible hitbox for hover detection */}
      <mesh
        onPointerOver={() => {
          setHovered(true);
          setShowTooltip(true);
        }}
        onPointerOut={() => {
          setHovered(false);
          setShowTooltip(false);
        }}
        onClick={() => onClick({ x: position[0], y: position[1], z: position[2], name })}
      >
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Visible sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial
          color={hovered ? "hotpink" : color}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>

      {showTooltip && (
        <Html position={[0, 0.15, 0]}>
          <div
            style={{
              background: "rgb(65 90 140)",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              whiteSpace: "nowrap",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          >
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
        // Stop color from updating every frame
        const color = useMemo(
          () => new THREE.Color(Math.random(), Math.random(), Math.random()),
          []
        );
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