// File: src/Kambaz/index.tsx
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./styles.css";
import KambazNavigation from "./Navigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";
import Inbox from "./Inbox";
import Settings from "./Settings";
import ProtectedRoute from "./Account/ProtectedRoute";
import * as db from "./Database";

export default function Kambaz() {
  
  const [courses, setCourses] = useState<any[]>(db.courses);

  
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

  // add handler
  const addNewCourse = () => {
    const newCourse = { ...course, _id: uuidv4() };
    setCourses([...courses, newCourse]);
    // reset form fully
    setCourse(initialCourse);
  };

  // delete handler
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  // update handler
  const updateCourse = () => {
    setCourses(
      courses.map((c) => (c._id === course._id ? { ...course } : c))
    );
    // reset form fully
    setCourse(initialCourse);
  };

  return (
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

                {/* Dashboard only if signed in */}
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

                {/* Courses only if signed in */}
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
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
