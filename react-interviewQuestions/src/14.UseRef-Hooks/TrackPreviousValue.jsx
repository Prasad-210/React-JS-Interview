import { useEffect, useRef, useState } from "react";

const TrackPreviousValue = () => {
  const [count, setCount] = useState(0);
  const PrviousCount = useRef();

  useEffect(() => {
    PrviousCount.current = count;
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Current Count: {count}</h2>
      <h2>Previous Count: {PrviousCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default TrackPreviousValue;
