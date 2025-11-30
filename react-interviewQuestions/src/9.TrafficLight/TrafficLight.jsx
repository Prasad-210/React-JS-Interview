import { useEffect, useState } from "react";

export default function TrafficLight() {
  
  const lights = ["red", "green", "yellow"];

  const [currentActive, setCurrentActive] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActive((prev) => {
        const nextIndex = (lights.indexOf(prev) + 1) % lights.length;
        return lights[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, []);

  //Instead of one setInterval, use setTimeout and change based on current light:

  // useEffect(() => {
  //   let timer;
  //   if (currentActive === "red") timer = setTimeout(() => setCurrentActive("green"), 4000);
  //   if (currentActive === "green") timer = setTimeout(() => setCurrentActive("yellow"), 3000);
  //   if (currentActive === "yellow") timer = setTimeout(() => setCurrentActive("red"), 2000);

  //   return () => clearTimeout(timer);
  // }, [currentActive]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          width: "80px",
          margin: "auto",
          padding: "20px",
          background: "black",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            margin: "10px auto",
            borderRadius: "50%",
            background: currentActive === "red" ? "red" : "gray",
          }}
        ></div>
        <div
          style={{
            width: "50px",
            height: "50px",
            margin: "10px auto",
            borderRadius: "50%",
            background: currentActive === "yellow" ? "yellow" : "gray",
          }}
        ></div>
        <div
          style={{
            width: "50px",
            height: "50px",
            margin: "10px auto",
            borderRadius: "50%",
            background: currentActive === "green" ? "green" : "gray",
          }}
        ></div>
      </div>

      <button
        onClick={() => {
          const nextActiveIndex =
            (lights.indexOf(currentActive) + 1) % lights.length;
          setCurrentActive(lights[nextActiveIndex]);
        }}
      >
        Change Manually
      </button>
    </div>
  );
}


 result.push(callback.call(thisArg, array[i], i, array));

 if (callback.call(thisArg, array[i], i, array)) {
          result.push(array[i]); // Step 8: push only if true
        }

 callback.call(thisArg, array[i], i, array);