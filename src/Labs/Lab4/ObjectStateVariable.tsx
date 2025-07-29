import { useState } from "react";

interface Person {
  name: string;
  age: number;
}

export default function ObjectStateVariable() {
  const [person, setPerson] = useState<Person>({ name: "Peter", age: 24 });

  return (
    <div id="wd-object-state-variables">
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>

      <label className="form-control">
        Name:
        <input
          type="text"
          defaultValue={person.name}
          onChange={(e) =>
            setPerson({ ...person, name: e.target.value })
          }
        />
      </label>

      <label className="form-control">
        Age:
        <input
          type="number"
          defaultValue={person.age}
          onChange={(e) =>
            setPerson({ ...person, age: parseInt(e.target.value, 10) })
          }
        />
      </label>

      <hr />
    </div>
  );
}
