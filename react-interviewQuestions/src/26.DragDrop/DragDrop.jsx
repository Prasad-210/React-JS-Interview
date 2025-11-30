import React, { useState } from "react";
import "./DragDrop.css";

export default function DragDrop() {
  const [availableItems, setAvailableItems] = useState([
    "React",
    "Angular",
    "Vue",
    "Svelte",
    "Next.js",
  ]);
  const [selectedItems, setSelectedItems] = useState([]);

  // Store currently dragged item
  const [draggedItem, setDraggedItem] = useState(null);

  // When dragging starts
  const handleDragStart = (item, from) => {
    setDraggedItem({ item, from });
  };

  // Allow drop
  const handleDragOver = (e) => {
    e.preventDefault(); // Required to allow dropping
  };

  // Handle drop logic
  const handleDrop = (to) => {
    if (!draggedItem) return;

    const { item, from } = draggedItem;

    // If dropped in a different box
    if (from !== to) {
      if (to === "selected") {
        setSelectedItems((prev) => [...prev, item]);
        setAvailableItems((prev) => prev.filter((i) => i !== item));
      } else {
        setAvailableItems((prev) => [...prev, item]);
        setSelectedItems((prev) => prev.filter((i) => i !== item));
      }
    }

    setDraggedItem(null);
  };

  return (
    <div className="dragdrop-container">
      <h2>🧠 React Drag & Drop Example</h2>

      <div className="box-wrapper">
        {/* Available Items */}
        <div
          className="drop-box"
          onDragOver={handleDragOver}
          onDrop={() => handleDrop("available")}
        >
          <h3>Available Items</h3>
          {availableItems.length === 0 && <p className="empty">No items</p>}
          {availableItems.map((item) => (
            <div
              key={item}
              className="draggable-item"
              draggable
              onDragStart={() => handleDragStart(item, "available")}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Selected Items */}
        <div
          className="drop-box"
          onDragOver={handleDragOver}
          onDrop={() => handleDrop("selected")}
        >
          <h3>Selected Items</h3>
          {selectedItems.length === 0 && <p className="empty">Drop items here</p>}
          {selectedItems.map((item) => (
            <div
              key={item}
              className="draggable-item"
              draggable
              onDragStart={() => handleDragStart(item, "selected")}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
