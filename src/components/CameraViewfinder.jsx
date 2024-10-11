import CameraWidgets from './CameraWidgets';
import React from 'react';

const CameraViewfinder = () => {
  return (
    <div style = {styles.viewfinderContainer}>
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

      <div style={styles.scaleVertical}></div>
      <div style={styles.scaleHorizontal}></div>
      <CameraWidgets/>
    </div>
  );
};

const cameraColor = "#3a3c40";

const styles = {
  viewfinderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none', // Ensure the viewfinder doesn’t block interaction with the canvas
    zIndex: 20, // Higher than the canvas
  },
  crosshairVertical: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '2px',
    height: '5vh',
    transform: 'translate(-50%, -50%)',
    borderLeft: '5px solid ' + cameraColor,
  },
  crosshairHorizontal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '2px',
    width: '5vh',
    transform: 'translate(-50%, -50%)',
    borderTop: '5px solid ' + cameraColor,
  },
  topLeft: {
    position: 'absolute',
    top: '5vh',
    left: '5vh',
    width: '10vw',
    height: '60px',
    borderTop: '5px solid ' + cameraColor,
    borderLeft: '5px solid ' + cameraColor,
  },
  topRight: {
    position: 'absolute',
    top: '5vh',
    right: '5vh',
    width: '10vw',
    height: '60px',
    borderTop: '5px solid ' + cameraColor,
    borderRight: '5px solid ' + cameraColor,
  },
  bottomLeft: {
    position: 'absolute',
    bottom: '5vh',
    left: '5vh',
    width: '10vw',
    height: '60px',
    borderBottom: '5px solid ' + cameraColor,
    borderLeft: '5px solid ' + cameraColor,
  },
  bottomRight: {
    position: 'absolute',
    bottom: '5vh',
    right: '5vh',
    width: '10vw',
    height: '60px',
    borderBottom: '5px solid ' + cameraColor,
    borderRight: '5px solid ' + cameraColor,
  },
  circleLeft: {
    position: 'absolute',
    left: '50%',   // Center horizontally
    top: '50%',    // Center vertically
    transform: 'translate(-50%, -50%)',  // Adjust the circle position
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '5px solid ' + cameraColor, // Black border
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
    border: '5px solid ' + cameraColor, // Black border
    backgroundColor: 'transparent', // Make it hollow
    overflow: 'hidden',
    clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 60% 100%)', // Keep only the right 40%
  },
  scaleVertical: {
    position: 'absolute',
    bottom: '5vh',  // Align with the horizontal line's bottom
    left: '50%',
    width: '2px',
    height: 'calc(5vh - 1px)',  // Reduce height slightly to prevent overlap
    transform: 'translate(-50%, 0)',  // No additional vertical shift
    borderLeft: '2px solid ' + cameraColor,
  },

  scaleHorizontal: {
    position: 'absolute',
    bottom: '5vh',  // Keep this the same
    left: '50%',
    width: '50vh',
    transform: 'translate(-50%, 0)',  // No vertical shift needed
    borderBottom: '2px solid ' + cameraColor,
  },
  
};

export default CameraViewfinder;
