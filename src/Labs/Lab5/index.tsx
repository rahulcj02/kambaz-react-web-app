// src/Labs/Lab5/index.tsx
import React from "react";
import EnvironmentVariables             from "./EnvironmentVariables";
import PathParameters                   from "./PathParameters";
import QueryParameters                  from "./QueryParameters";
import HttpClient                       from "./HttpClient";
import WorkingWithObjects               from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import WorkingWithArrays                from "./WorkingWithArrays";
import WorkingWithArraysAsynchronously  from "./WorkingWithArraysAsynchronously";

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>

      {/* Welcome link */}
      <div className="list-group">
        <a
          href={`${import.meta.env.VITE_REMOTE_SERVER}/lab5/welcome`}
          className="list-group-item"
        >
          Welcome
        </a>
      </div>

      <hr />
      <EnvironmentVariables />

      <hr />
      <PathParameters />

      <hr />
      <QueryParameters />

      <hr />
      <HttpClient />

      <hr />
      <WorkingWithObjects />

      <hr />
      <WorkingWithObjectsAsynchronously />

      <hr />
      <WorkingWithArrays />

      <hr />
      <WorkingWithArraysAsynchronously />
    </div>
  );
}
