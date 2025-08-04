// src/Labs/Lab5/WorkingWithObjects.tsx
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

const REMOTE_SERVER =
  import.meta.env.VITE_REMOTE_SERVER ?? "http://localhost:4000";

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "M1",
    name: "Introduction to REST",
    description: "Module covering RESTful API design with Express.js",
    course: "CS550",
  });

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>

      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>

      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/assignment/title/${assignment.title}`}
      >
        Update Title
      </a>
      <FormControl
        className="w-75 mb-2"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />

      <hr />

      <h4>Working With Module Object</h4>

      <h5>Get Module Object</h5>
      <a
        id="wd-get-module"
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/module`}
      >
        Get Module
      </a>

      <h5>Get Module Name</h5>
      <a
        id="wd-get-module-name"
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/module/name`}
      >
        Get Module Name
      </a>

      <h5>Update Module Name</h5>
      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}
      >
        Update Module Name
      </a>
      <FormControl
        className="w-75 mb-2"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />

      <h5>Update Module Description</h5>
      <a
        id="wd-update-module-desc"
        className="btn btn-secondary float-end"
        href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}
      >
        Update Module Description
      </a>
      <FormControl
        className="w-75 mb-2"
        id="wd-module-description"
        defaultValue={module.description}
        onChange={(e) =>
          setModule({ ...module, description: e.target.value })
        }
      />

      <hr />
    </div>
  );
}
