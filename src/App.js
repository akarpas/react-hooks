import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [tempName, setTempName] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    document.title = name ? name : "React Hooks " + count;
  }, [count, name])

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
      <h1 className="Name">{name ? name : 'No Name Set'}</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setName(tempName)}
        }
        className="NameContainer"
      >
        <input className="Input" placeholder="Add a Name" onChange={(event) => setTempName(event.target.value)} />
        <button className="Button">Set Name</button>
      </form>
    </div>
  );
}

export default App;
