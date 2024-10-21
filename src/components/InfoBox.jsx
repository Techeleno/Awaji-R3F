import React from 'react';
import "@fontsource/montserrat";
import "@fontsource/lato";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const cameraColor = "#3a3c40";

const InfoBox = ({ modelInfo, boxIsVisible, onClose }) => {
  const handleClose = () => {
    setTimeout(onClose, 300);
  };

  if (!modelInfo) return null;

  return (
    <div
      className="infoBox"
      style={{
        position: 'absolute',
        top: '2.5vh',
        left: boxIsVisible ? '2.5vh' : '-30vw',
        width: 'clamp(300px, 25vw, 400px)',
        height: '95vh',
        padding: '2rem',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 0.25rem 1.25rem rgba(0, 0, 0, 0.2)',
        borderRadius: '0.625rem',
        zIndex: 10,
        overflow: 'auto',
        transition: 'left 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ margin: 0, color: "rgb(65 90 140)", fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}>
          {modelInfo.title}
        </h2>
        <button
          onClick={handleClose}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            color: cameraColor,
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <FontAwesomeIcon icon={faCircleXmark} style={{ fontSize: '1.5rem' }} />
        </button>
      </div>

      <picture style={{ marginBottom: '1rem' }}>
        <source
          srcSet={`src/assets/photos/${modelInfo.name}.webp`}
          type="image/webp"
        />
        <img
          src={`src/assets/photos/${modelInfo.name}.jpg`}
          alt={modelInfo.name}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: '0.625rem',
            boxShadow: '0 0.25rem 0.625rem rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </picture>

      <p style={{ 
        fontFamily: 'Lato, sans-serif', 
        fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', 
        lineHeight: 1.6, 
        color: cameraColor,
        flex: 1,
        overflow: 'auto'
      }}>
        {modelInfo.text}
      </p>
    </div>
  );
};

export default InfoBox;