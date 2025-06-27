import React, { useEffect, useState } from "react";
import "../styles/StopWatch.css";
import { useContext } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const user = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const handleClick = () => {
    navigate("/dailyQuote"); // Navigates to the /dashboard path
  };

  return (
    <div className="stopwatch-container">
      <div>
        <p>Hello {user && user.Name}!</p>
      </div>
      <div className="timer-display">
        <span>{seconds}</span>
      </div>
      <div className="button-group">
        <button className="neon-button" onClick={toggleTimer}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="neon-button reset" onClick={resetTimer}>
          Reset
        </button>
        <button className="neon-button reset" onClick={handleClick}>
          Go to next Page
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
