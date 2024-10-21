import React, { useEffect, useState } from 'react';
import CameraWidgets from './CameraWidgets';

const CameraViewfinder = ({ viewfinderIsVisible }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isRendered, setIsRendered] = useState(viewfinderIsVisible);

  const cameraColor = "#3a3c40";

  // Trigger animation and visibility changes
  useEffect(() => {
    if (viewfinderIsVisible) {
      setIsRendered(true); // Show the component
      setIsAnimating(true); // Start the animation
    } else {
      setIsAnimating(false); // Start the fade-out and slide-down animation
      // Delay hiding the component until the animation completes
      setTimeout(() => {
        setIsRendered(false);
      }, 400); // Duration of the animation (matching the transition)
    }
  }, [viewfinderIsVisible]);

  const styles = {
    viewfinderContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 20,
      top: isAnimating ? '0px' : '97vh', // Slide up or off-screen
      opacity: isAnimating ? 1 : 0, // Fade in or out
      visibility: isRendered ? 'visible' : 'hidden', // Control visibility
      transition: 'top 0.4s ease-in-out, opacity 0.4s ease-in-out', // Smooth transitions
    },
    crosshairVertical: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '2px',
      height: '5vh',
      transform: 'translate(-50%, -50%)',
      borderLeft: `5px solid ${cameraColor}`,
    },
    crosshairHorizontal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      height: '2px',
      width: '5vh',
      transform: 'translate(-50%, -50%)',
      borderTop: `5px solid ${cameraColor}`,
    },
    topLeft: {
      position: 'absolute',
      top: '5vh',
      left: '5vh',
      width: '10vw',
      height: '60px',
      borderTop: `5px solid ${cameraColor}`,
      borderLeft: `5px solid ${cameraColor}`,
    },
    topRight: {
      position: 'absolute',
      top: '5vh',
      right: '5vh',
      width: '10vw',
      height: '60px',
      borderTop: `5px solid ${cameraColor}`,
      borderRight: `5px solid ${cameraColor}`,
    },
    bottomLeft: {
      position: 'absolute',
      bottom: '5vh',
      left: '5vh',
      width: '10vw',
      height: '60px',
      borderBottom: `5px solid ${cameraColor}`,
      borderLeft: `5px solid ${cameraColor}`,
    },
    bottomRight: {
      position: 'absolute',
      bottom: '5vh',
      right: '5vh',
      width: '10vw',
      height: '60px',
      borderBottom: `5px solid ${cameraColor}`,
      borderRight: `5px solid ${cameraColor}`,
    },
    circleLeft: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      border: `5px solid ${cameraColor}`,
      backgroundColor: 'transparent',
      overflow: 'hidden',
      clipPath: 'polygon(0 0, 40% 0, 40% 100%, 0 100%)',
    },
    circleRight: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      border: `5px solid ${cameraColor}`,
      backgroundColor: 'transparent',
      overflow: 'hidden',
      clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 60% 100%)',
    },
    scaleVertical: (leftPosition) => ({
      position: 'absolute',
      bottom: '5vh',
      left: leftPosition,
      width: '2px',
      height: 'calc(5vh - 1px)',
      transform: 'translate(-50%, 0)',
      borderLeft: `2px solid ${cameraColor}`,
    }),
    scaleHorizontal: {
      position: 'absolute',
      bottom: '5vh',
      left: '50%',
      width: '50%',
      transform: 'translate(-50%, 0)',
      borderBottom: `2px solid ${cameraColor}`,
    },
  };

  const verticalScalePositions = ['35%', '40%', '45%', '50%', '55%', '60%', '65%'];

  return (
    <div style={styles.viewfinderContainer}>
      <div style={styles.crosshairVertical}></div>
      <div style={styles.crosshairHorizontal}></div>

      <div style={styles.topLeft}></div>
      <div style={styles.topRight}></div>
      <div style={styles.bottomLeft}></div>
      <div style={styles.bottomRight}></div>

      <div style={styles.circleLeft}></div>
      <div style={styles.circleRight}></div>

      {verticalScalePositions.map((position, index) => (
        <div key={index} style={styles.scaleVertical(position)}></div>
      ))}

      <div style={styles.scaleHorizontal}></div>

      <CameraWidgets />
    </div>
  );
};

export default CameraViewfinder;
