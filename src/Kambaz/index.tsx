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
import * as userClient from "./Account/client";
import Enrollments from "./Enrollments";
import { useSelector } from "react-redux";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const currentUser = useSelector((state: any) => state.account.currentUser);
  const isFaculty =
    currentUser?.role === "Instructor" || currentUser?.role === "Admin";

  const [enrolling, setEnrolling] = useState<boolean>(false);

  // when user/role or toggle changes, refetch appropriately
  useEffect(() => {
    const load = async () => {
      if (!currentUser) {
        setCourses([]);
        return;
      }
      if (!enrolling) {
        // Admin/faculty see ALL, students still only their courses
        if (isFaculty) {
          setCourses(await courseClient.fetchAllCourses());
        } else {
          setCourses(await userClient.findCoursesForUser("current"));
        }
      } else {
        // enrolling=true: show ALL courses but mark which ones the user has
        const all = await courseClient.fetchAllCourses();
        const mine = await userClient.findCoursesForUser("current");
        const mineSet = new Set(mine.map((c: any) => c._id));
        const merged = all.map((c: any) =>
          mineSet.has(c._id) ? { ...c, enrolled: true } : { ...c, enrolled: false }
        );
        setCourses(merged);
      }
    };
    load().catch(console.error);
  }, [currentUser?._id, currentUser?.role, enrolling]);

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

  // NEW: enroll/unenroll the current user and update the local enrolled flag
  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (!currentUser?._id) return;
    try {
      if (enrolled) {
        await userClient.enrollIntoCourse(currentUser._id, courseId);
      } else {
        await userClient.unenrollFromCourse(currentUser._id, courseId);
      }
      setCourses((cs) =>
        cs.map((c) => (c._id === courseId ? { ...c, enrolled } : c))
      );
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
                          enrolling={enrolling}
                          setEnrolling={setEnrolling}
                          updateEnrollment={updateEnrollment} 
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
