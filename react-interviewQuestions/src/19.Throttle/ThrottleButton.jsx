//todo 🧠 Step-by-Step Interview Answer (With React Example)

// 1️⃣ Real-World Scenario (Start with Context)

// Imagine a user repeatedly clicking a ‘Submit’, ‘Like’, or ‘Send OTP’ button very quickly.
// Without control, it could trigger:
// Duplicate API calls
// Double form submissions
// Server load and unexpected behavior
// To handle this, we use throttling — ensuring a function executes
// only once in a given time interval (e.g., every 2 seconds), no matter how many clicks happen in between.

//todo  5️⃣ Common Use Cases (Mention in Interview)
// 🖱️ Button spam prevention (Submit, Like, Vote, etc.)
// 📱 Scroll event throttling (avoid heavy computations)
// 🪟 Window resize handlers
// ⌚ Real-time mouse movement tracking

//todo 3️⃣ React Practical Implementation

import React, { useCallback } from "react";

function ThrottledButton() {
  // Throttle function implementation
  function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  }

  // Actual button click handler
  const handleClick = () => {
    console.log("Button clicked at:", new Date().toLocaleTimeString());
  };

  // Apply throttle logic to handleClick
  const throttledClick = useCallback(throttle(handleClick, 2000), []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Throttled Button Example</h2>
      <button
        onClick={throttledClick}
        style={{ padding: "10px 20px", fontSize: "16px",  }}
      >
        Click Me Rapidly 🚀
      </button>
      <p>Function triggers at most once every 2 seconds.</p>
    </div>
  );
}

export default ThrottledButton;


//? output
// Button clicked at: 10:30:00
// Button clicked at: 10:30:02
// Button clicked at: 10:30:04

//todo 4️⃣ How It Works (Explain to the Interviewer)

// “In this React example, the button’s click handler is wrapped inside a throttle function.
// If I click the button rapidly — say, 5 times in 1 second — only the first click is handled immediately.
// The rest are ignored until 2 seconds pass.
// After that, it becomes active again for the next click.”
