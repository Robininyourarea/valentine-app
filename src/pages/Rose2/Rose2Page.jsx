import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Rose2Page.css"; // Import styles
import rose2 from '../../assets/roses.png';

const Rose2Page = () => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const [yesButtonStyle, setYesButtonStyle] = useState({});

  useEffect(() => {
    if (buttonRef.current) {
      setYesButtonStyle({ left: "0px", top: "0px" });
    }
  }, []);

  const moveYesButton = () => {
    const minMove = 100; // Minimum movement in pixels
    const maxMove = 200; // Maximum movement in pixels

    const randomOffset = (min, max) => {
      let value = Math.random() * (max - min) + min;
      return Math.random() < 0.5 ? -value : value; // Randomly move left/right or up/down
    };

    const newX = randomOffset(minMove, maxMove);
    const newY = randomOffset(minMove, maxMove);

    setYesButtonStyle({
      position: "relative",
      transform: `translate(${newX}px, ${newY}px)`,
      transition: "0.3s ease-in-out",
    });
  };

  return (
    <div className="question-container">
      <img
          className="img2"
          src={rose2}
          alt="imagerose2"
        />
      <h1>Is it enough?</h1>
      <div className="button-container">
        <button
          ref={buttonRef}
          className="no-button"
          style={yesButtonStyle}
          onMouseEnter={moveYesButton}
        >
          Yes
        </button>
        <button className="yes-button" onClick={() => navigate("/rose3")}>
          No
        </button>
      </div>
    </div>
  );
};

export default Rose2Page;
