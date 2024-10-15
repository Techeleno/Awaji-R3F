import React, { useEffect, useState } from 'react';

const BlankScreen = ({ isVisible }) => {
  const [opacity, setOpacity] = useState(isVisible ? 0.9 : 0);
  const [display, setDisplay] = useState(isVisible ? 'block' : 'none');

  const shuttleWaitTime = 1000;

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setOpacity(0.9), shuttleWaitTime);
      //setOpacity(0.9);
      setDisplay('block');

      // Set a timeout to fade out
      const timeout = setTimeout(() => {
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
