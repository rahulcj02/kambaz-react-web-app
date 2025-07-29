// File: src/Kambaz/Courses/Modules/ModulesControls.tsx
import React, { useState } from "react";
import { FaPlus, FaBan } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import ModuleEditor from "./ModuleEditor";

interface ModulesControlsProps {
  moduleName: string;
  setModuleName: React.Dispatch<React.SetStateAction<string>>;
  addModule: () => void;
}

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: ModulesControlsProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      id="wd-modules-controls"
      className="d-flex justify-content-end align-items-center"
    >
      {/* Collapse All */}
      <Button id="wd-collapse-all" variant="secondary" className="me-2 text-dark">
        Collapse All
      </Button>

      {/* View Progress */}
      <Button id="wd-view-progress" variant="secondary" className="me-2 text-dark">
        View Progress
      </Button>

      {/* Publish All dropdown */}
      <Dropdown className="me-2">
        <Dropdown.Toggle
          id="wd-publish-all-btn"
          variant="secondary"
          className="text-dark"
        >
          <GreenCheckmark />
          Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            <GreenCheckmark className="me-1" />
            Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            <GreenCheckmark className="me-1" />
            Publish modules only
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
            <FaBan className="me-1 text-dark" />
            Unpublish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only">
            <FaBan className="me-1 text-dark" />
            Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* + Module button */}
      <Button id="wd-add-module-btn" variant="danger" onClick={handleShow}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>

      {/* ModuleEditor modal */}
      <ModuleEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}
