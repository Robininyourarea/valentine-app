import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CountdownPage.css";
import cats from "../../assets/cats.png"; // Replace with your image path

const startDate = new Date("2022-01-01T00:00:00");
const CountdownPage = () => {
  const navigate = useNavigate();
  const [timeElapsed, setTimeElapsed] = useState({});

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <img src={cats} alt="cats" className="love-image" />
      <h1 className="title">We've been together</h1>
      <div className="countdown-box">
        <div className="countdown-item">
          <span className="count">{timeElapsed.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="countdown-item">
          <span className="count">{timeElapsed.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="count">{timeElapsed.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="count">{timeElapsed.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
      <button className="next-button" onClick={() => navigate("/gallery")}>
        See our journey 💖
      </button>
    </div>
  );
};

export default CountdownPage;
