//todo 🧠 What is useMemo (Quick Summary)

// useMemo is a performance optimization hook in React.
// It memoizes (caches) the result of a computation — so React doesn’t recalculate it on every render unnecessarily.

//todo 🎯 Real-World Example: Filtering a Large List

// Imagine you have a search box that filters a large list of users or products.
// Without useMemo, every re-render recalculates the filtered list — even when it’s not needed.
// That’s wasted computation and can make your app laggy for big data.


import { useState, useMemo } from "react";

export default function FilterUsers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(0); // dummy state to trigger re-renders

  const users = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "George",
    "Helen",
    "Ivy",
  ];

  // 🧠 Expensive computation simulated (filtering)
  const filteredUsers = useMemo(() => {
    console.log("Filtering users..."); // log to show memoization
    return users.filter((user) =>
      user.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]); // only re-run when searchTerm changes

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>useMemo Practical Example</h2>
      <input
        type="text"
        placeholder="Search user..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={() => setCount((prev) => prev + 1)}>
        Re-render App ({count})
      </button>

      <ul style={{ listStyle: "none" }}>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}




// 🧩 How It Works
// When you type in the input, searchTerm changes.
// useMemo recomputes filteredUsers only when searchTerm changes.
// If you click the "Re-render" button (which changes count), the component re-renders —
// but filtering doesn’t re-run because searchTerm hasn’t changed.
// 🧠 Without useMemo, the filter runs on every render, even if not needed.



// 🧱 How to Explain in the Interview
// You can confidently say:
// “useMemo is used to memoize expensive calculations so they don’t re-run on every render.
// In one of my projects, we had a product list with thousands of items and a search filter.
// Every keypress or UI update re-rendered the component, causing the filter logic to execute again — even when the search input didn’t change.
// I used useMemo to memoize the filtered result so it only recalculates when the search term changes. This improved performance noticeably.”

