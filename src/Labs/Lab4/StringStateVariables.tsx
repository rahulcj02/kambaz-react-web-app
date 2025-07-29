import { useState } from "react";

export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");

  return (
    <div id="wd-string-state-variables">
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      <label className="form-control">
        <input
          type="text"
          defaultValue={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <hr />
    </div>
  );
}
