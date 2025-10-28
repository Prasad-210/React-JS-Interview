import { useEffect, useState } from "react";
import "./shoppingStyle.css";

function ShoppingList() {
  const [food, setFood] = useState("");
  const [shoppingList, setShoppingList] = useState([]);

  const handleChange = (e) => {
    setFood(e.target.value);
  };

  const fretchItem = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setShoppingList(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (food.length >= 2) {
      fretchItem(food);
    } else {
      setShoppingList([]);
    }
  }, [food]);

  // Filter results based on input
  const filteredList = shoppingList.filter((item) =>
    item.toLowerCase().includes(food.toLowerCase())
  );

  return (
    <div className="app">
      <h1>My Shopping List</h1>
      <div>
        <input
          type="text"
          placeholder="Search food..."
          value={food}
          onChange={handleChange}
        />
      </div>

      {/* Show filtered list */}
      <div className="shopping-list">
        {filteredList.map((item, idx) => (
          <div key={idx} className="shopping-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;
