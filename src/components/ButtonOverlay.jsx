const ButtonOverlay = ({ buttons, onButtonClick }) => {
  return (
    <>
      {buttons.map((button, index) => (
        <div key={index} style={{ position: 'absolute', left: `${button.x}px`, top: `${button.y}px` }}>
          {/* Tooltip for button name */}
          <div
            style={{
              display: 'none', // Hidden by default
              position: 'absolute',
              bottom: '50px', // Position it above the button
              left: '50%',
              transform: 'translateX(-50%)', // Center the tooltip
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              borderRadius: '5px',
              padding: '5px 10px',
              whiteSpace: 'nowrap', // Prevent text from wrapping
              zIndex: 20, // Ensure the tooltip is above other elements
            }}
            className="tooltip" // Added class for easy reference
          >
            {button.name}
          </div>

          <button
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              border: '2px solid #007BFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.5)';
              const tooltip = e.currentTarget.previousSibling; // Get the tooltip div
              tooltip.style.display = 'block'; // Show tooltip
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
              const tooltip = e.currentTarget.previousSibling; // Get the tooltip div
              tooltip.style.display = 'none'; // Hide tooltip
            }}
            onClick={() => onButtonClick(button.name)}
          >
            {/* You can add any content/icon here for the button */}
          </button>
        </div>
      ))}
    </>
  );
};

export default ButtonOverlay;
