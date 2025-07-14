// File: src/Kambaz/Courses/Modules/ModulesControls.tsx
import { FaPlus } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button
        id="wd-add-module-btn"
        variant="danger"
        size="lg"
        className="me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>

      <Dropdown className="float-end me-2">
        <Dropdown.Toggle
          id="wd-publish-all-btn"
          variant="secondary"
          size="lg"
        >
          <GreenCheckmark />
          Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            Publish modules only
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
            Unpublish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only">
            Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button
        id="wd-view-progress"
        variant="outline-secondary"
        className="me-2 float-end"
      >
        View Progress
      </Button>
      <Button id="wd-collapse-all" variant="outline-secondary" className="float-end">
        Collapse All
      </Button>
    </div>
  );
}
