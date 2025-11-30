import React, { useState } from "react";

export default function DropdownExample() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>React Dropdown Example</h2>

      <select value={selectedOption} onChange={handleChange}>
        <option value="">-- Select a Fruit --</option>
        <option value="apple">🍎 Apple</option>
        <option value="banana">🍌 Banana</option>
        <option value="orange">🍊 Orange</option>
        <option value="mango">🥭 Mango</option>
      </select>

      {selectedOption && (
        <h3 style={{ marginTop: "20px" }}>
          You selected: <span style={{ color: "green" }}>{selectedOption}</span>
        </h3>
      )}
    </div>
  );
}
