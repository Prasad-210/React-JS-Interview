// 🧠 Step-by-Step Interview Answer (Detailed and Practical)
// 1️⃣ Start With Context (Real Scenario)

// In a React app, when users type in a search box (like in Amazon or YouTube), we don’t want to trigger the API call on every keystroke because it would cause:

// Unnecessary network calls
// Performance lag
// Poor user experience

// Instead, we can use debouncing to call the API only after the user stops typing for a specific delay (say, 500ms).

//todo 2️⃣ Explain the Approach

// We’ll use:
// useState → to store the input value
// useEffect → to watch the input and delay execution
// setTimeout + clearTimeout → to implement debounce behavior



//?? 3️⃣ Code Implementation (React Debounce Search)

import { useState, useEffect } from "react";

function DebouncedSearch() {
  const [query, setQuery] = useState(""); // store user input
  const [debouncedQuery, setDebouncedQuery] = useState(query); // store delayed value

  // Debounce logic using useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query); // update debounced value after delay
    }, 500); // 500ms delay

    return () => {
      clearTimeout(timer); // clear timer when user types again
    };
  }, [query]);

  // Simulated search effect (API call or filter)
  useEffect(() => {
    if (debouncedQuery) {
      console.log(`Searching for: ${debouncedQuery}`);
      // API call here: fetch(`/api/search?q=${debouncedQuery}`)
    }
  }, [debouncedQuery]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Debounced Search Example</h2>
      <input
        type="text"
        placeholder="Search here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />
      <p>
        <strong>Typing:</strong> {query}
      </p>
      <p>
        <strong>Search Triggered For:</strong> {debouncedQuery}
      </p>
    </div>
  );
}

export default DebouncedSearch;

//todo 4️⃣ How You Can Explain It in an Interview

// “In this example, the user types into an input field, and I use two states:
// query to store the live typing input
// debouncedQuery to update only after the user stops typing for 500ms.
// Inside the useEffect, I start a timer every time the query changes. If the user types again before 500ms, I clear the previous timer — this prevents the function from running too frequently.
// Once the user stops typing for 500ms, the timer completes and updates debouncedQuery, which then triggers another effect — that’s where the API call (like fetch) can happen.
// This is a clean and React-friendly way to implement debounce logic using hooks.”
