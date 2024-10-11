// BatteryBar.js
import React from 'react';
import batteryImage from '../assets/photos/battery.webp';
import { rotate } from 'three/webgpu';

const CameraWidgets = ({ charge }) => {
  // Define styles for the battery bar and charge
  const batteryBarStyle = {
    position: 'fixed',
    bottom: '5vh',
    right: '15vw',
    width: '100px',
    height: '40px',
    border: '2px solid #000',
    borderRadius: '5px',
    backgroundColor: '#fff',
    overflow: 'hidden',
  };

  const batteryChargeStyle = {
    height: '100%',
    width: `60%`, // Width based on charge prop
    backgroundColor: 'green',
    borderRadius: '5px',
    transition: 'width 0.5s ease', // Smooth transition effect
  };

  return (
    // <div style={batteryBarStyle}>
    //   <div style={batteryChargeStyle} />
      <img 
        src={batteryImage}
        alt="Battery"
        style={{
        width: '10%',
        top: '5vh',
        right: '5vh',
        position: 'absolute', // or 'absolute' if necessary
        zIndex: 20, // Ensures the image appears on top
  }}
/>

    // </div>
  );
};

export default CameraWidgets;
