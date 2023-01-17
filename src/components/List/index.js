// This file contains that list component

// Imports
import { useState } from "react";

// Import Styles
import './list.scss';

const ShoppingList = () => {
  // input field
  const [Input, setInput] = useState("");

  // List state
  const [shoppingList, setShoppingList] = useState([
    "Milk",
    "Eggs",
    "Coca Cola",
  ]);

  const addToList = (e) => {
    e.preventDefault();

    setShoppingList([...shoppingList, Input]);
    setInput("");
  };

  // everything that gets rendered
  return (
    <div className="list-container">
      {/* TODO: input field to add to the list */}
      <form className="input-form">
        <input
          id={"add-field"}
          placeholder="Add to shopping list..."
          type={"text"}
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={(e) => addToList(e)}>Add</button>
      </form>

      {/* Display List elements */}
      <ol>
        {shoppingList.map((i, k) => {
          return <li key={k}><input type={'checkbox'} className={'check'} />{i}</li>;
        })}
      </ol>

      {/* Remove from list */}
    </div>
  );
};

export default ShoppingList;
