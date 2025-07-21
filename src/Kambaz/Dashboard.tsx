// File: src/Kambaz/Dashboard/index.tsx
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import courses from "./Database/courses.json";
import "./styles.css";

export default function Dashboard() {
  // A function to check if an image exists
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/images/NEU.jpg";
  };

  return (
    <div id="wd-dashboard" className="p-4" style={{ marginLeft: 110 }}>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <Row xs={1} md={4} className="g-4">
        {courses.map((course) => (
          <Col
            key={course._id}
            className="wd-dashboard-course"
            style={{ width: "270px" }}
          >
            <Card className="h-100 rounded-3 overflow-hidden">
              <Link
                to={`/Kambaz/Courses/${course._id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src={course.image || "/images/default.jpg"}
                  onError={handleImageError}
                  width="100%"
                  height={160}
                  alt={course.name}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {course.name}
                  </Card.Title>
                  <Card.Text
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    {course.description}
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
