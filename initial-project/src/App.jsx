import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);

  let increaseCount = () => {
    count += 1;
    setCount(count);
  }

  let decreaseCount = () => {
    count -= 1;
    setCount(count);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase(+)</button>
      <button onClick={decreaseCount}>Decrease(-)</button>
    </>
  )
}

export default App
