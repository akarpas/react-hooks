import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const [tempName, setTempName] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    document.title = name ? name + " " + count : "React Hooks " + count;
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
      <h1 className="Title">Set a Page Title:</h1>
      <h2 className="Name">{name ? name : 'No Name Set'}</h2>
      <form className="NameContainer">
        <input
          value={input}
          className="Input"
          placeholder="Add a Name"
          onChange={(event) => {
            setInput(event.target.value)
            setTempName(event.target.value)
          }}
        />
        <div>
          <button
            onClick={(event) => {
              event.preventDefault()
              setName(tempName)}
            }
            className="Button">Update Name</button>
          <button
            onClick={(event) => {
              event.preventDefault()
              setName(null)
              setTempName(null)
              setInput('')}
            }
            className="Button">Clear Name</button>
        </div>
      </form>
    </div>
  );
}

export default App;
