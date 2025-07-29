import React from "react";

interface ChildProps {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export default function ChildStateComponent({
  counter,
  setCounter,
}: ChildProps) {
  return (
    <div id="wd-child-state">
      <h3>Child Counter: {counter}</h3>
      <button
        onClick={() => setCounter(counter + 1)}
        id="wd-increment-child-state-click"
        className="btn btn-primary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        id="wd-decrement-child-state-click"
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
      <hr />
    </div>
  );
}
