import React, { useState } from "react";
import "./App.css"; // Link to the CSS file.

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input.trim()]);
      setInput("");
    }
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="app-container">
      <div className="item-manager">
        <header className="header">
          <div className="logo">HI</div>
          <h1 className="title">Item List Manager</h1>
        </header>
        <div className="content">
          <h2 className="subtitle">Item List</h2>
          <div className="input-group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter item"
              className="input-box"
            />
            <button onClick={addItem} className="add-button">
              Add Item
            </button>
          </div>
          <ul className="item-list">
            {items.map((item, index) => (
              <li key={index} className="item">
                <span>{item}</span>
                <button
                  onClick={() => deleteItem(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
