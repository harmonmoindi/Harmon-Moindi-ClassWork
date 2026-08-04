/*
State - when something chnages everywhere state is being used, it changes/updates automatically.
*/
import { useState } from "react";
function ClickMe() {
  const [n, setN] = useState(0);
  const increment = () => {
    setN(n + 1);
  };
  const decrement = () => {
    setN(n - 1);
  };
  const spoil = () => {
    setN("Dog Mouths");
  };
  const reset = () => {
    setN(0);
  };
  return (
    <div>
      <h4>Clicked {n}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={spoil}>Spoil</button>
      <button onClick={reset}>Reset</button>
      <p>Number of Clicks: {n}</p>
    </div>
  );
}

export default ClickMe;
