import { useEffect, useState, useRef } from "react";

function StartStopPause() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStart = () => {
    setCount(0);
    setIsRunning(true);
  };

  const handlePauseResume = () => {
    setIsRunning((prev) => !prev);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    setCount(0);
    setIsRunning(false);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "42px" }}>
      <h2>Start Stop Pause Timer React JS</h2>

      <h1>{count}</h1>

      {/* {!isRunning && count === 0 && ( */}
      <button onClick={handleStart}>Start</button>
      {/* )} */}

      {/* {count > 0 &&  */}
      <button style={{ margin: "0 10px" }} onClick={handlePauseResume}>
        {isRunning ? "Pause" : "Resume"}
      </button>
      {/* } */}

      <button onClick={handleStop} disabled={count === 0}>
        Stop
      </button>
    </div>
  );
}

export default StartStopPause;
