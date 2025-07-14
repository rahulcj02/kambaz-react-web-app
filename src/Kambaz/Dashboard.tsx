// File: src/Kambaz/Dashboard/index.tsx
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="p-4" style={{ marginLeft: 110 }}>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />

      <Row xs={1} md={5} className="g-4">
        <Col className="wd-dashboard-course" style={{ width: "270px" }}>
          <Card className="h-100 rounded-3 overflow-hidden">
            <Link
              to="/Kambaz/Courses/5110/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src="/images/reactjs.jpg"
                width="100%"
                height={160}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  CS 5110 Advanced Web Development
                </Card.Title>
                <Card.Text
                  className="wd-dashboard-course-description overflow-hidden"
                  style={{ height: "100px" }}
                >
                  Dive deep into modern web architectures and frameworks.
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "270px" }}>
          <Card className="h-100 rounded-3 overflow-hidden">
            <Link
              to="/Kambaz/Courses/5220/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src="/images/nodejs.jpg"
                width="100%"
                height={160}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  CS 5220 Data Structures
                </Card.Title>
                <Card.Text
                  className="wd-dashboard-course-description overflow-hidden"
                  style={{ height: "100px" }}
                >
                  Efficient organization and manipulation of data.
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "270px" }}>
          <Card className="h-100 rounded-3 overflow-hidden">
            <Link
              to="/Kambaz/Courses/5330/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src="/images/mern.jpg"
                width="100%"
                height={160}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  CS 5330 Operating Systems
                </Card.Title>
                <Card.Text
                  className="wd-dashboard-course-description overflow-hidden"
                  style={{ height: "100px" }}
                >
                  Kernel design, processes, and resource management.
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "270px" }}>
          <Card className="h-100 rounded-3 overflow-hidden">
            <Link
              to="/Kambaz/Courses/5440/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src="/images/mongodb.jpg"
                width="100%"
                height={160}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  CS 5440 Database Systems
                </Card.Title>
                <Card.Text
                  className="wd-dashboard-course-description overflow-hidden"
                  style={{ height: "100px" }}
                >
                  Principles of relational and NoSQL databases.
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "270px" }}>
          <Card className="h-100 rounded-3 overflow-hidden">
            <Link
              to="/Kambaz/Courses/5550/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src="/images/teslabot.jpg"
                width="100%"
                height={160}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  CS 5550 Software Engineering Principles
                </Card.Title>
                <Card.Text
                  className="wd-dashboard-course-description overflow-hidden"
                  style={{ height: "100px" }}
                >
                  Best practices for large-scale software development.
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "270px" }}>
          <Card className="h-100 rounded-3 overflow-hidden">
            <Link
              to="/Kambaz/Courses/5660/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src="/images/redux.jpg"
                width="100%"
                height={160}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  CS 5660 Computer Networks
                </Card.Title>
                <Card.Text
                  className="wd-dashboard-course-description overflow-hidden"
                  style={{ height: "100px" }}
                >
                  Network protocols and architecture fundamentals.
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>

        <Col className="wd-dashboard-course" style={{ width: "270px" }}>
          <Card className="h-100 rounded-3 overflow-hidden">
            <Link
              to="/Kambaz/Courses/5770/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src="/images/netlify.jpg"
                width="100%"
                height={160}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                  CS 5770 Machine Learning
                </Card.Title>
                <Card.Text
                  className="wd-dashboard-course-description overflow-hidden"
                  style={{ height: "100px" }}
                >
                  Algorithms for data-driven predictive models.
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
