import React from 'react';
import CameraWidgets from './CameraWidgets';

const CameraViewfinder = ({ viewfinderIsVisible }) => {
  const cameraColor = "#3a3c40";

  const styles = {
    viewfinderContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      pointerEvents: 'none', // Ensure the viewfinder doesn’t block interaction with the canvas
      zIndex: 20, // Higher than the canvas
      top: viewfinderIsVisible ? '0px' : '95vh', // Slide up when visible, off-screen when hidden
      transition: 'top 0.4s ease-in-out', // Smooth slide-up transition
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
      left: '50%',   // Center horizontally
      top: '50%',    // Center vertically
      transform: 'translate(-50%, -50%)',  // Adjust the circle position
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      border: `5px solid ${cameraColor}`, // Black border
      backgroundColor: 'transparent', // Make it hollow
      overflow: 'hidden',
      clipPath: 'polygon(0 0, 40% 0, 40% 100%, 0 100%)', // Keep only the left 40%
    },
    circleRight: {
      position: 'absolute',
      left: '50%',   // Center horizontally
      top: '50%',    // Center vertically
      transform: 'translate(-50%, -50%)',  // Adjust the circle position
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      border: `5px solid ${cameraColor}`, // Black border
      backgroundColor: 'transparent', // Make it hollow
      overflow: 'hidden',
      clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 60% 100%)', // Keep only the right 40%
    },
    scaleVertical: (leftPosition) => ({
      position: 'absolute',
      bottom: '5vh',  // Align with the horizontal line's bottom
      left: leftPosition,
      width: '2px',
      height: 'calc(5vh - 1px)',  // Reduce height slightly to prevent overlap
      transform: 'translate(-50%, 0)',  // No additional vertical shift
      borderLeft: `2px solid ${cameraColor}`,
    }),
    scaleHorizontal: {
      position: 'absolute',
      bottom: '5vh',  // Keep this the same
      left: '50%',
      width: '50%',
      transform: 'translate(-50%, 0)',  // No vertical shift needed
      borderBottom: `2px solid ${cameraColor}`,
    },
  };

  // Array of left positions for the vertical scale lines
  const verticalScalePositions = ['35%', '40%', '45%', '50%', '55%', '60%', '65%']; // Customize these positions as needed

  return (
    <div style={styles.viewfinderContainer}>
      {/* Crosshair */}
      <div style={styles.crosshairVertical}></div>
      <div style={styles.crosshairHorizontal}></div>

      {/* Viewfinder border */}
      <div style={styles.topLeft}></div>
      <div style={styles.topRight}></div>
      <div style={styles.bottomLeft}></div>
      <div style={styles.bottomRight}></div>

      <div style={styles.circleLeft}></div>
      <div style={styles.circleRight}></div>

      {/* Render multiple scale vertical lines at different positions */}
      {verticalScalePositions.map((position, index) => (
        <div key={index} style={styles.scaleVertical(position)}></div>
      ))}
      
      <div style={styles.scaleHorizontal}></div>

      <CameraWidgets />
    </div>
  );
};

export default CameraViewfinder;
