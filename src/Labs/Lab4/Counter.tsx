import { useState } from "react";

export default function Counter() {
  // create and initialize state variable
  const [count, setCount] = useState(7);
  console.log(count);

  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count + 1);
        }}
        id="wd-counter-up-click"
      >
        Up
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
          console.log(count - 1);
        }}
        id="wd-counter-down-click"
      >
        Down
      </button>
      <hr />
    </div>
  );
}
