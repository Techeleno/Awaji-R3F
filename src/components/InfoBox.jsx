import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import BuildingPreview from './BuildingPreview';

const cameraColor = "#3a3c40";
const isMobile = window.innerWidth < 768;
const viewportWidth = window.innerWidth;
//const boxWidth = Math.min(400, Math.max(300, viewportWidth * 0.25));
const boxWidth = 364;

let leftValue = "2.5vh";

if (isMobile) {
  leftValue = leftValue = `${(viewportWidth - boxWidth) / 2}px`;
  console.log(leftValue)
}

const InfoBox = ({ modelInfo, boxIsVisible, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (boxIsVisible) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [boxIsVisible]);

  const handleClose = () => {
    setTimeout(onClose, 300);
  };

  if (!modelInfo) return null;

  return (
    <div
      className={`infoBox ${boxIsVisible ? "slide-in" : "slide-out"}`}
      style={{
        position: "absolute",
        top: "2.5vh",
        left: isVisible ? leftValue : "-100vw", // here
        width: "clamp(300px, 25vw, 400px)",
        height: "90vh",
        padding: "2rem",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        boxShadow: "0 0.25rem 1.25rem rgba(0, 0, 0, 0.2)",
        borderRadius: "0.625rem",
        zIndex: 10,
        overflowY: "auto",
        transition: "left 0.3s ease-in-out",
        display: "flex",
        flexDirection: "column",
        scrollbarWidth: "none"
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
      }}>
        <h2 style={{
          margin: 0,
          color: "rgb(65 90 140)",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
          fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
        }}>
          {modelInfo.title}
        </h2>
        <button
          onClick={() => {
            setIsVisible(false);
            handleClose();
          }}
          style={{
            border: "none",
            backgroundColor: "transparent",
            color: cameraColor,
            cursor: "pointer",
            padding: "0.5rem",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
        >
          <FontAwesomeIcon icon={faCircleXmark} style={{ fontSize: "1.5rem" }} />
        </button>
      </div>

      {modelInfo.hasLogo && (
        <img
          src={`/assets/logos/${modelInfo.logoFile}`}
          alt={`${modelInfo.title} Logo`}
          style={{
            width: "150px",
            height: "auto",
            marginBottom: "1rem",
            alignSelf: "center",
          }}
        />
      )}

      {modelInfo.model && (
        <div style={{ height: "300px", marginBottom: "1rem" }}>
          <BuildingPreview 
            model={modelInfo.model} 
            key={modelInfo.name} // Add key to force re-render on model change
          />
        </div>
        
      )}
      <p style={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 600,
        fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
        lineHeight: 1.4,
        marginBottom: "0.75rem",
        color: "rgb(65, 90, 140)",
      }}>
        {modelInfo.summaryText}
      </p>

      <p
        style={{
          fontFamily: "Lato, sans-serif",
          fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
          lineHeight: 1.6,
          color: cameraColor,
        }}
      >
        {modelInfo.detailsText}
      </p>

      {/* Hours of Operation Table */}
      {modelInfo.operatingHours && (
        <table
          style={{
            marginBottom: "1rem",
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "0.5rem",
                  textAlign: "left",
                }}
              >
                Day
              </th>
              <th
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "0.5rem",
                  textAlign: "left",
                }}
              >
                Hours
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(modelInfo.operatingHours).map((day, index) => (
              <tr key={index}>
                <td
                  style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}
                >
                  {day}
                </td>
                <td
                  style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}
                >
                  {modelInfo.operatingHours[day]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Contact Information Table */}
      {modelInfo.contactInfo && (
        <table
          style={{
            marginBottom: "1rem",
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "0.5rem",
                  textAlign: "left",
                }}
              >
                Contact
              </th>
              <th
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "0.5rem",
                  textAlign: "left",
                }}
              >
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
                Address
              </td>
              <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
                {modelInfo.contactInfo.Address}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
                Tel
              </td>
              <td style={{ padding: "0.5rem", borderBottom: "1px solid #eee" }}>
              {modelInfo.contactInfo.Tel}
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: modelInfo.hasReservation ? "space-between" : "center",
          marginTop: "auto", // ensures buttons stick to the bottom
          gap: "0.7rem"
        }}
      >
        {modelInfo.hasReservation && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.open(modelInfo.reservationLink, "_blank")}
            style={{ flex: 1, borderRadius: "0.45rem", fontFamily: "'Lato'"}}
          >
            Reserve Now
          </Button>
        )}

        <Button
          variant="outlined"
          color="primary"
          onClick={() => window.open(modelInfo.website, "_blank")}
          style={{ flex: 1, borderRadius: "0.45rem", fontFamily: "'Lato'"}}
          >
          Visit Website
        </Button>
      </div>

      
    </div>
  );
};

export default InfoBox;