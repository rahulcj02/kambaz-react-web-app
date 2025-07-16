// src/Kambaz/Courses/Assignments/Editor.tsx
import { Form, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      {/* Course title / breadcrumb */}
      <h2 className="mb-4">Assignment Name</h2>

      <Form>
        {/* Assignment Name */}
        <Form.Group as={Row} controlId="wd-name" className="mb-3">
          <Form.Label column sm={2}>
            Assignment Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
          </Col>
        </Form.Group>

        {/* Description */}
        <Form.Group controlId="wd-description" className="mb-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kambaz application
- Links to all relevant source code repositories

The Kambaz application should include a link to navigate back to the landing page.`}
          />
        </Form.Group>

        <Row className="mb-3">
          {/* Points */}
          <Form.Group as={Col} md={4} controlId="wd-points">
            <Form.Label>Points</Form.Label>
            <Form.Control type="number" defaultValue={100} />
          </Form.Group>

          {/* Assignment Group */}
          <Form.Group as={Col} md={4} controlId="wd-group">
            <Form.Label>Assignment Group</Form.Label>
            <Form.Select defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
            </Form.Select>
          </Form.Group>

          {/* Display Grade As */}
          <Form.Group as={Col} md={4} controlId="wd-display-grade-as">
            <Form.Label>Display Grade as</Form.Label>
            <Form.Select defaultValue="PERCENTAGE">
              <option value="PERCENTAGE">Percentage</option>
              <option value="NUMBERS">Numbers</option>
            </Form.Select>
          </Form.Group>
        </Row>

        {/* Submission Type */}
        <Form.Group as={Row} controlId="wd-submission-type" className="mb-4">
          <Form.Label column sm={2}>
            Submission Type
          </Form.Label>
          <Col sm={10}>
            <Form.Select defaultValue="ONLINE">
              <option value="ONLINE">Online</option>
              <option value="INPERSON">In Person</option>
            </Form.Select>
          </Col>
        </Form.Group>

        {/* Online Entry Options */}
        <Form.Group className="mb-4">
          <Form.Label>Online Entry Options</Form.Label>
          <div>
            <Form.Check inline label="Text Entry" id="wd-text-entry" />
            <Form.Check inline label="Website URL" id="wd-website-url" />
            <Form.Check inline label="Media Recordings" id="wd-media-recordings" />
            <Form.Check inline label="Student Annotation" id="wd-student-annotation" />
            <Form.Check inline label="File Uploads" id="wd-file-upload" />
          </div>
        </Form.Group>

        {/* Assign / Due / Available From / Until */}
        <Row className="mb-4">
          <Form.Group as={Col} md={4} controlId="wd-assign-to">
            <Form.Label>Assign to</Form.Label>
            <Form.Control type="text" defaultValue="Everyone" />
          </Form.Group>

          <Form.Group as={Col} md={4} controlId="wd-due-date">
            <Form.Label>Due</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-13" />
          </Form.Group>

          <Form.Group as={Col} md={4} className="d-flex">
            <div className="me-3 flex-fill">
              <Form.Label>Available from</Form.Label>
              <Form.Control type="date" defaultValue="2024-05-06" />
            </div>
            <div className="flex-fill">
              <Form.Label>Until</Form.Label>
              <Form.Control type="date" defaultValue="2024-05-20" />
            </div>
          </Form.Group>
        </Row>

        <hr />

        {/* Cancel / Save */}
        <div className="d-flex justify-content-end mt-3">
          <Button variant="outline-secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
