// File: src/Kambaz/index.tsx
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles.css";
import Session from "./Account/Session";
import KambazNavigation from "./Navigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";
import Inbox from "./Inbox";
import Settings from "./Settings";
import ProtectedRoute from "./Account/ProtectedRoute";
import * as courseClient from "./Courses/client";
import Enrollments from "./Enrollments";
import { useSelector } from "react-redux";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const currentUser = useSelector((state: any) => state.account.currentUser);
  const isFaculty =
    currentUser?.role === "Instructor" || currentUser?.role === "Admin";

  useEffect(() => {
    const load = async () => {
      if (!currentUser) {
        setCourses([]);
        return;
      }
      if (isFaculty) {
        setCourses(await courseClient.fetchAllCourses());
      } else {
        setCourses(await courseClient.findMyCourses());
      }
    };
    load().catch(console.error);
  }, [currentUser?.role]);

  const initialCourse = {
    _id: "",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/NEU.jpg",
    description: "New Description",
  };
  const [course, setCourse] = useState<any>(initialCourse);

  const addNewCourse = async () => {
    try {
      const newCourse = await courseClient.createCourse(course);
      setCourses([...courses, newCourse]);
      setCourse(initialCourse);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteCourse = async (courseId: string) => {
    try {
      await courseClient.deleteCourse(courseId);
      setCourses(courses.filter((c) => c._id !== courseId));
    } catch (e) {
      console.error(e);
    }
  };

  const updateCourse = async () => {
    try {
      await courseClient.updateCourse(course);
      setCourses(courses.map((c) => (c._id === course._id ? { ...c, ...course } : c)));
      setCourse(initialCourse);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Session>
      <div id="wd-kambaz">
        <table>
          <tbody>
            <tr>
              <td valign="top">
                <KambazNavigation />
              </td>
              <td valign="top" className="wd-main-content-offset p-3">
                <Routes>
                  <Route path="/" element={<Navigate to="Account" />} />
                  <Route path="Account/*" element={<Account />} />
                  <Route
                    path="Dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard
                          courses={courses}
                          course={course}
                          setCourse={setCourse}
                          addNewCourse={addNewCourse}
                          deleteCourse={deleteCourse}
                          updateCourse={updateCourse}
                        />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="Courses/:courseId/*"
                    element={
                      <ProtectedRoute>
                        <Courses courses={courses} />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="Calendar" element={<Calendar />} />
                  <Route path="Inbox" element={<Inbox />} />
                  <Route path="Settings" element={<Settings />} />
                  <Route path="Enrollments" element={<Enrollments />} />
                  <Route
                    path="Courses/:courseId/Enrollments"
                    element={
                      <ProtectedRoute>
                        <Enrollments />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Session>
  );
}
