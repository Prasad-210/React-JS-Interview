import React, { useState, useMemo } from "react";

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
