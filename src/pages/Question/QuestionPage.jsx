import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./QuestionPage.css"; // Import styles

const QuestionPage = () => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  useEffect(() => {
    if (buttonRef.current) {
      setNoButtonStyle({ left: "0px", top: "0px" });
    }
  }, []);

  const moveNoButton = () => {
    const minMove = 100; // Minimum movement in pixels
    const maxMove = 200; // Maximum movement in pixels

    const randomOffset = (min, max) => {
      let value = Math.random() * (max - min) + min;
      return Math.random() < 0.5 ? -value : value; // Randomly move left/right or up/down
    };

    const newX = randomOffset(minMove, maxMove);
    const newY = randomOffset(minMove, maxMove);

    setNoButtonStyle({
      position: "relative",
      transform: `translate(${newX}px, ${newY}px)`,
      transition: "0.3s ease-in-out",
    });
  };

  return (
    <div className="question-container">
      <h1>Will you be my Valentine? ❤️</h1>
      <div className="button-container">
        <button 
          className="yes-button" 
          onClick={() => navigate("/question")}
        >
          Yes
        </button>
        <button
          ref={buttonRef}
          className="no-button"
          style={noButtonStyle}
          onMouseEnter={moveNoButton}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;
