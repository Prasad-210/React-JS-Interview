import React, { useState } from "react";
import "./auto.css";

const fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Cherry",
  "Coconut",
  "Grapes",
  "Guava",
  "Kiwi",
  "Mango",
  "Orange",
  "Papaya",
  "Pineapple",
  "Strawberry",
  "Watermelon"
];

export default function AutoComplete() {
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [showList, setShowList] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setFilteredList([]);
      setShowList(false);
      return;
    }

    const results = fruits.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredList(results);
    setShowList(true);
  };

  const handleSelect = (value) => {
    setSearch(value);
    setShowList(false);
  };

  return (
    <div className="auto-container">
      <input
        type="text"
        value={search}
        placeholder="Search fruits..."
        onChange={handleChange}
        onFocus={() => search && setShowList(true)}
        className="input-box"
      />

      {showList && filteredList.length > 0 && (
        <ul className="suggestion-box">
          {filteredList.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}

      {showList && search.length > 0 && filteredList.length === 0 && (
        <div className="no-result">No match found</div>
      )}
    </div>
  );
}
