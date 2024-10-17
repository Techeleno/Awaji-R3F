import React, { useEffect, useState, useRef } from 'react';
import shutterSound from '../assets/audio/photo.mp3';

const BlankScreen = ({ isVisible }) => {
  const [opacity, setOpacity] = useState(isVisible ? 0.9 : 0);
  const [display, setDisplay] = useState(isVisible ? 'block' : 'none');

  const shuttleWaitTime = 1000;


  //const audioRef = useRef(new Audio(shutterSound));
  // Store the previous value of viewfinderIsVisible
  const prevVisibleRef = useRef(isVisible);
  // Check if viewfinderIsVisible changed to true

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setOpacity(0.9), shuttleWaitTime);
      setDisplay('block');

      // Set a timeout to fade out
      const timeout = setTimeout(() => {
        //audioRef.current.play();
        setOpacity(0);
        // Set display to 'none' after the opacity transition
        setTimeout(() => setDisplay('none'), shuttleWaitTime + 200); // Match the duration of your transition
      }, shuttleWaitTime + 200); // Delay before fading out


      return () => clearTimeout(timeout); // Cleanup timeout on component unmount
    } else {
      setOpacity(0);
      setDisplay('block'); // Ensure it's visible during fade-in transition
    }
  }, [isVisible]);

  return (
    <div
      style={{
        ...styles.blankScreen,
        opacity,
        display,
        pointerEvents: 'none', // Prevent clicks and interactions
        transition: 'opacity 0.2s ease-in-out', // Smooth fade effect
      }}
    />
  );
};

const styles = {
  blankScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    zIndex: 50, // Higher than other components
  },
};

export default BlankScreen;
