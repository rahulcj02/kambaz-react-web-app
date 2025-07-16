// src/Kambaz/Courses/Assignments/index.tsx

import { Link, useParams } from "react-router-dom";
import { FaSearch, FaPlus, FaCheckCircle, FaRegFileAlt } from "react-icons/fa";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { Card, Button, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import "../../styles.css";

export default function Assignments() {
  const { courseId: cid } = useParams<{ courseId: string }>();

  const data = [
    {
      id: "123",
      title: "A1",
      modules: "Multiple Modules",
      available: "Not available until May 6 at 12:00 am",
      due: "Due May 13 at 11:59 pm",
      pts: "100 pts",
    },
    {
      id: "124",
      title: "A2",
      modules: "Multiple Modules",
      available: "Not available until May 13 at 12:00 am",
      due: "Due May 20 at 11:59 pm",
      pts: "100 pts",
    },
    {
      id: "125",
      title: "A3",
      modules: "Multiple Modules",
      available: "Not available until May 20 at 12:00 am",
      due: "Due May 27 at 11:59 pm",
      pts: "100 pts",
    },
  ];

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
        {data.map((a) => (
          <Col key={a.id}>
            <Card className="wd-assignment-card">
              <Card.Body className="d-flex align-items-center p-3">
                {/* drag handle */}
                <BsGripVertical className="me-3 fs-4 text-secondary" />

                {/* document icon */}
                <FaRegFileAlt className="me-2 fs-4 text-success" />

                {/* title & subtext */}
                <div className="flex-grow-1">
                  <Link
                    to={`/Kambaz/Courses/${cid}/Assignments/${a.id}`}
                    className="h5 mb-1 text-decoration-none"
                  >
                    {a.title}
                  </Link>
                  <div className="small">
                    <span className="text-danger">{a.modules}</span>{" "}
                    | <span className="text-secondary">{a.available}</span>{" "}
                    | <span className="text-secondary">{a.due}</span>{" "}
                    | <span className="text-secondary">{a.pts}</span>
                  </div>
                </div>

                {/* published checkmark */}
                <FaCheckCircle className="fs-4 text-success me-3" />

                {/* kebab menu */}
                <BsThreeDotsVertical className="text-secondary" />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
