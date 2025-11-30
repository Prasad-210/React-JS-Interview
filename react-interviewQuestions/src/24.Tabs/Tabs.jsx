import { useState } from "react";
import "./tabs.css"; // Import external CSS file

export default function Tabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    { label: "Home", content: "🏠 Welcome to the Home Tab" },
    { label: "Profile", content: "👤 Here is your Profile" },
    { label: "Settings", content: "⚙️ Change your preferences" },
  ];

  const handleTabClick = (index) => {
    if (index < 0 || index >= tabs.length) return; // edge case
    setActiveIndex(index);
  };

  return (
    <div className="tabs-container">
      <div className="tab-list">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`tab-button ${activeIndex === index ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-panel">
        {tabs[activeIndex]?.content || <p>No content available</p>}
      </div>
    </div>
  );
}
