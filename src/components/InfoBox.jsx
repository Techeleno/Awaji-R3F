import { useState, useEffect } from 'react';

const InfoBox = ({ modelInfo, onClose }) => {
  const [visible, setVisible] = useState(false); // Track visibility state

  useEffect(() => {
    if (modelInfo) {
      // Start slide-in effect when the component is rendered
      setVisible(true);
    }
  }, [modelInfo]);

  const handleClose = () => {
    setVisible(false); // Trigger slide-out effect
    setTimeout(onClose, 300); // Delay close to allow the slide-out animation to complete
  };

  if (!modelInfo) return null;

  return (
    <div
      className="infoBox"
      style={{
        position: 'absolute',
        top: '2.5vh',
        left: visible ? '2.5vh' : '-30vw', // Slide in and out from the left
        width: '25vw',
        height: '88vh',
        padding: '30px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        zIndex: 10,
        overflow: 'hidden',
        transition: 'left 0.3s ease-in-out', // Animate the left position
      }}
    >
      {/* Close button positioned at the top-right corner */}
      <button
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          border: 'none',
          backgroundColor: '#007BFF',
          fontWeight: 'bold',
          color: 'white',
          cursor: 'pointer',
          height: '30px',
          width: '30px',
          fontSize: '20px',
          borderRadius: '5px',
        }}
      >
        X
      </button>

      {/* Title and content */}
      <div style={{ paddingBottom: '15px' }}>
        <h2 style={{ margin: 0 }}>{modelInfo.title}</h2>
      </div>

      {/* Image */}
      <img
        src={'src/assets/photos/' + modelInfo.name + '.jpg'}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      />

      {/* Text content */}
      <p style={{ paddingTop: '30px', fontSize: '15px' }}>
        {modelInfo.text.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default InfoBox;
