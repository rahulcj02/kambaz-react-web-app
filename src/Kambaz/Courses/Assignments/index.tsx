import { Link, useParams } from "react-router-dom";
import { FaSearch, FaPlus, FaCheckCircle, FaRegFileAlt } from "react-icons/fa";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { Card, Button, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { assignments } from "../../Database";
import "../../styles.css";

export default function Assignments() {
  const { courseId } = useParams<{ courseId: string }>();
  const courseAssignments = assignments.filter((a: any) => a.course === courseId);

  return (
    <div id="wd-assignments" className="p-3 wd-main-content-offset">
      {/* Toolbar */}
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <InputGroup className="wd-search-assignment">
            <InputGroup.Text className="bg-white border-secondary">
              <FaSearch />
            </InputGroup.Text>
            <FormControl placeholder="Search…" className="border-secondary" />
          </InputGroup>
        </Col>
        <Col md={6} className="text-end">
          <Button variant="outline-secondary" className="me-2">
            + Group
          </Button>
          <Button variant="danger">
            <FaPlus className="me-1" />
            Assignment
          </Button>
        </Col>
      </Row>

      {/* Header card */}
      <Row xs={1} className="g-3 mb-2">
        <Col>
          <Card className="wd-assignments-header border-0">
            <Card.Body className="d-flex align-items-center p-3 bg-light border">
              <BsGripVertical className="me-3 fs-4 text-secondary" />
              <Card.Title className="mb-0 flex-grow-1">ASSIGNMENTS</Card.Title>
              <span className="text-muted small me-3">40% of Total</span>
              <Button variant="link" className="p-0">
                <FaPlus />
              </Button>
              <BsThreeDotsVertical className="ms-3 text-secondary" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Assignment cards */}
      <Row xs={1} className="g-3">
        {courseAssignments.map((a: any) => (
          <Col key={a._id}>
            <Card className="wd-assignment-card">
              <Card.Body className="d-flex align-items-center p-3">
                <BsGripVertical className="me-3 fs-4 text-secondary" />
                <FaRegFileAlt className="me-2 fs-4 text-success" />
                <div className="flex-grow-1">
                  <Link
                    to={`/Kambaz/Courses/${courseId}/Assignments/${a._id}`}
                    className="h5 mb-1 text-decoration-none"
                  >
                    {a.title}
                  </Link>
                  <div className="small">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <span className="text-secondary">Available {a.availableDate}</span> |{" "}
                    <span className="text-secondary">Due {a.dueDate}</span> |{" "}
                    <span className="text-secondary">{a.points} pts</span>
                  </div>
                </div>
                <FaCheckCircle className="fs-4 text-success me-3" />
                <BsThreeDotsVertical className="text-secondary" />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
