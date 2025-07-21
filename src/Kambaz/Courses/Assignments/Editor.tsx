import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { courseId, aid } = useParams<{ courseId: string; aid: string }>();
  const assignment = assignments.find(
    (a: any) => a.course === courseId && a._id === aid
  );

  if (!assignment) return <div className="p-4">Assignment not found.</div>;

  return (
    <div id="wd-assignments-editor" className="p-4">
      <h2 className="mb-4">{assignment.title}</h2>

      <Form>
        {/* Assignment Name */}
        <Form.Group as={Row} controlId="wd-name" className="mb-3">
          <Form.Label column sm={2}>
            Assignment Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" defaultValue={assignment._id} />
          </Col>
        </Form.Group>

        {/* Description */}
        <Form.Group controlId="wd-description" className="mb-4">
          <Form.Label>Description</Form.Label>
          <div className="border rounded p-3 bg-light">
            <p>
              The assignment is <span className="text-danger">available online</span>
            </p>
            <p>
              Submit a link to the landing page of your Web application running on{" "}
              <a href="https://www.netlify.com" target="_blank" rel="noreferrer">
                Netlify
              </a>.
            </p>
            <p>The landing page should include the following:</p>
            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>Link to the Kanbas application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>
            <p>
              The Kanbas application should include a link to navigate back to the
              landing page.
            </p>
          </div>
        </Form.Group>

        {/* Points */}
        <Row className="mb-4">
          <Form.Group as={Col} md={4} controlId="wd-points">
            <Form.Label>Points</Form.Label>
            <Form.Control type="number" defaultValue={assignment.points} />
          </Form.Group>
        </Row>

        {/* Assign Section */}
        <Row className="mb-4">
          <Form.Group as={Col} md={6}>
            <div className="border rounded p-3">
              <h5>Assign</h5>
              <Form.Group className="mb-3">
                <Form.Label>Assign to</Form.Label>
                <Form.Control type="text" placeholder="Students" />
              </Form.Group>
              <Row className="mb-3">
                <Col>
                  <Form.Label>Due</Form.Label>
                  <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Available from</Form.Label>
                  <Form.Control type="datetime-local" defaultValue="2024-05-06T00:00" />
                </Col>
                <Col>
                  <Form.Label>Until</Form.Label>
                  <Form.Control type="datetime-local" defaultValue="2024-06-01T00:00" />
                </Col>
              </Row>
            </div>
          </Form.Group>
        </Row>

        <hr />
        <div className="d-flex justify-content-end mt-3">
          <Link to={`/Kambaz/Courses/${courseId}/Assignments`} className="btn btn-outline-secondary me-2">
            Cancel
          </Link>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
