import { useState } from "react";

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date());

  const dateObjectToHtmlDateString = (date: Date) => {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate() + 1;
    const two = (n: number) => (n < 10 ? `0${n}` : n);
    return `${yyyy}-${two(mm)}-${two(dd)}`;
  };

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3>{JSON.stringify(startDate)}</h3>
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      <label className="form-control">
        <input
          type="date"
          defaultValue={dateObjectToHtmlDateString(startDate)}
          onChange={(e) => setStartDate(new Date(e.target.value))}
        />
      </label>
      <hr />
    </div>
  );
}
