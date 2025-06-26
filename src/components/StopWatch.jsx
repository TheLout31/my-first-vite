import React, { useEffect, useState } from "react";
import "../styles/StopWatch.css";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

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

  return (
    <div className="stopwatch-container">
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
      </div>
    </div>
  );
};

export default StopWatch;
