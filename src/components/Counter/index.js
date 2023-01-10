// This file contains the counter component

// imports
import { useState } from "react";

// import styles
import './counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

// Export counter component
export default Counter;