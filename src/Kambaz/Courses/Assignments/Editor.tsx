// File: src/Kambaz/Courses/Assignments/Editor.tsx
import { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { addAssignment, updateAssignment, type Assignment } from "./reducer";

export default function AssignmentEditor() {
  const { courseId, aid } = useParams<{ courseId: string; aid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const all = useSelector((s: RootState) => s.assignments.assignments);
  const orig = all.find((a) => a._id === aid && a.course === courseId);

  const currentUser = useSelector((s: RootState) => s.account.currentUser);
  const isFaculty =
    currentUser?.role === "Instructor" || currentUser?.role === "Admin";
  useEffect(() => {
    if (!isFaculty) {
      navigate(`/Kambaz/Courses/${courseId}/Assignments`, { replace: true });
    }
  }, [isFaculty, courseId, navigate]);

  if (!orig && aid !== "New") {
    return <div className="p-4">Assignment not found.</div>;
  }

  const [form, setForm] = useState<Assignment>({
    _id:            orig?._id            || "New",
    course:         orig?.course         || courseId!,
    title:          orig?.title          || "",
    description:    orig?.description    || "",
    points:         orig?.points         || 0,
    dueDate:        orig?.dueDate        || "",
    availableDate:  orig?.availableDate  || "",
  });
  

  const onSave = () => {
    if (aid === "New") {
      dispatch(addAssignment(form));
    } else {
      dispatch(updateAssignment(form));
    }
    navigate(`/Kambaz/Courses/${courseId}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
        <h2 className="mb-4">
        {orig ? "Edit Assignment" : "New Assignment"}
        </h2>


      <Form>
        {/* Name */}
        <Form.Group as={Row} controlId="wd-name" className="mb-3">
          <Form.Label column sm={2}>Assignment Name</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={form.title}
              onChange={(e) =>
                setForm((f) => ({ ...f, title: e.target.value }))
              }
            />
          </Col>
        </Form.Group>

        {/* Description */}
        <Form.Group controlId="wd-description" className="mb-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
          />
        </Form.Group>

        {/* Points */}
        <Row className="mb-4">
          <Form.Group as={Col} md={4} controlId="wd-points">
            <Form.Label>Points</Form.Label>
            <Form.Control
              type="number"
              value={form.points}
              onChange={(e) =>
                setForm((f) => ({ ...f, points: +e.target.value }))
              }
            />
          </Form.Group>
        </Row>

        {/* Assign Section */}
        <Form.Group className="mb-4">
          <Form.Label>Assign</Form.Label>
          <div className="border rounded p-3">
            {/* Due Date */}
            <Form.Group controlId="wd-due" className="mb-3">
              <Form.Label>Due</Form.Label>
              <Form.Control
                type="datetime-local"
                value={form.dueDate}
                onChange={(e) =>
                  setForm((f) => ({ ...f, dueDate: e.target.value }))
                }
              />
            </Form.Group>

            {/* Available From / Until */}
            <Row>
              <Col>
                <Form.Group controlId="wd-availableDate" className="mb-0">
                  <Form.Label>Available from</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    value={form.availableDate}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, availableDate: e.target.value }))
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="wd-untilDate" className="mb-0">
                  <Form.Label>Until</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    value={form.dueDate}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, dueDate: e.target.value }))
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
        </Form.Group>

        <hr />
        <div className="d-flex justify-content-end mt-3">
          <Button
            variant="outline-secondary"
            className="me-2"
            onClick={() =>
              navigate(`/Kambaz/Courses/${courseId}/Assignments`)
            }
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={onSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
