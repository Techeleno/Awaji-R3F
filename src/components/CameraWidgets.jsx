import React from 'react';
import batteryImage from '/assets/photos/battery.png';
import recImage from '/assets/photos/rec.png';


const CameraWidgets = () => {
  return (
    <>
        <img
          src={batteryImage}
          alt="Battery"
          style={{
              width: '8%',
              top: '5vh',
              right: '7vh',
              position: 'absolute', 
              zIndex: 20,
          }} 
        />
        <img
            src={recImage}
            style={{
                width: '8%',
                top: '3%',
                left: '9vh',
                position: 'absolute', 
                zIndex: 20,
            }} 
        />
    </>

  );
};

export default CameraWidgets;
