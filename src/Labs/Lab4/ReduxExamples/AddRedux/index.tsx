import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./addReducer";
import type { RootState } from "../../../store";

export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const sum = useSelector((state: RootState) => state.addReducer.sum);
  const dispatch = useDispatch();

  return (
    <div id="wd-add-redux" className="w-25">
      <h2>Add Redux</h2>
      <p>
        {a} + {b} = {sum}
      </p>
      <div className="form-control">
        <input
          type="number"
          defaultValue={a}
          onChange={(e) => setA(parseInt(e.target.value, 10))}
        />
      </div>
      <div className="form-control">
        <input
          type="number"
          defaultValue={b}
          onChange={(e) => setB(parseInt(e.target.value, 10))}
        />
      </div>
      <button
        id="wd-add-redux-click"
        onClick={() => dispatch(add({ a, b }))}
        className="btn btn-primary"
      >
        Add Redux
      </button>
      <hr />
    </div>
  );
}
