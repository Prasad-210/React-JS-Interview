import { useState, useRef, useEffect } from "react";

function Dropdown({ options, placeholder = "Select option" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} style={{ position: "relative", width: "200px" }}>
      {/* Dropdown Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "10px",
          border: "1px solid gray",
          borderRadius: "5px",
          cursor: "pointer",
          background: "#fff",
        }}
      >
        {selected || placeholder}
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: "1px solid gray",
            borderRadius: "5px",
            background: "#fff",
            marginTop: "5px",
            zIndex: 1000,
          }}
        >
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(option)}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: idx !== options.length - 1 ? "1px solid #eee" : "none",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#f2f2f2")}
              onMouseLeave={(e) => (e.target.style.background = "white")}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>React Dropdown Example</h1>
      <Dropdown options={["Apple", "Banana", "Orange", "Mango"]} />
    </div>
  );
}
