import React, { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1), 1000;
      });
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  // Format time as MM:SS

  const formatTime = (timeInSec) => {
    const minutes = Math.floor(timeInSec / 60);
    const seconds = timeInSec % 60;

    return `${String(minutes).padStart(2, "0")} :: ${String(seconds).padStart(2,"0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePauseResume = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "45px" }}>
      <h2>⌚ React JS Stop Watch </h2>
      <h1 style={{ fontSize: "4rem" }}>{formatTime(time)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePauseResume} style={{ margin: "0 10px " }}>
        {isRunning ? "Pause" : "Resume"}
      </button>
      <button onClick={handleReset} disabled={time === 0}>
        Reset
      </button>
    </div>
  );
}

export default StopWatch;
