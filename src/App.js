import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div className="App">
      <h1 className="Count">{count}</h1>
      <button className="Button" onClick={decrement}>Down</button>
      <button className="Button" onClick={increment}>Up</button>
    </div>
  );
}

export default App;
