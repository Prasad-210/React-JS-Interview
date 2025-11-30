import React, { useState, useCallback } from "react";

// 👇 Child component
const ChildButton = React.memo(({ onAdd }) => {
  console.log("ChildButton re-rendered");
  return <button onClick={onAdd}>Add Item</button>;
});

// 👇 Parent component
export default function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  // ❌ Without useCallback — this function is recreated every render
  // ✅ With useCallback — same function reference unless `setCount` changes


  const handleAdd = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // dependencies


  return (
    <div
      style={{
        backgroundColor: theme ? "#333" : "#fff",
        color: theme ? "#fff" : "#000",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2>useCallback Practical Example</h2>
      <p>Count: {count}</p>

      <ChildButton onAdd={handleAdd} />

      <br />
      <button onClick={() => setTheme((prev) => !prev)}>
        Toggle Theme
      </button>
    </div>
  );
}



//todo ⚙️ What is useCallback?
// useCallback is used to memoize functions (not values like useMemo).

// 👉 It returns the same function instance between re-renders — unless one of its dependencies changes.
// This helps prevent unnecessary re-renders, especially when you pass callback functions down to child components.

//todo 🎯 Real-World Interview Example: Parent–Child Communication
// Let’s say you have a parent component that passes a function (handleAdd) to a child component (Button).
// Without useCallback, React will recreate the function on every render — causing the child to re-render unnecessarily.

// 🧩 Explanation

// The Parent component manages two states: count and theme.
// handleAdd is passed to the ChildButton.
// ChildButton is wrapped in React.memo, so it only re-renders if props change.
// Thanks to useCallback, the handleAdd function doesn’t get recreated when the theme toggles.
// Without useCallback, ChildButton would re-render every time the parent changes theme — because a new function reference would be passed.


// 🧠 So useCallback helps maintain stable function references.

// 💬 How to Explain in Interview
// “useCallback is used to memoize callback functions to prevent unnecessary re-renders of child components.
// For example, in one of my React projects, I had a parent component passing event handlers to multiple memoized child components.
// Every time the parent re-rendered, those functions were recreated, which caused all children to re-render unnecessarily.
// I wrapped those functions inside useCallback so that their references remained stable — this improved rendering performance significantly.”


//todo Difference between useMemo and useCallback
// Hook	Memoizes	Returns	Use Case
// useMemo	The result of a computation	A value	Expensive calculations (filter, sort, etc.)
// useCallback	The function itself	A function	Prevent child re-renders when passing callbacks
// 🧠 Common Interview Trick Question

//?? “Is useCallback same as useMemo?”
// ✅ You can answer:
// “Conceptually yes — useCallback(fn, deps) is equivalent to useMemo(() => fn, deps) —
// but by convention, we use useMemo for memoizing values and useCallback for functions