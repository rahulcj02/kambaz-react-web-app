// src/Kambaz/Navigation.tsx
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline }   from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser }  from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./styles.css";

export default function KambazNavigation() {
  return (
    <div
      id="wd-kambaz-navigation"
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 110 }}
    >
      {/* Northeastern logo */}
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noopener noreferrer"
        className="list-group-item bg-black border-0 text-center mb-3 mt-3"
      >
        <img src="/images/NEU.jpg" width="75px" alt="Northeastern" />
      </a>

      {/* Account: always black bg, white text & icon */}
      <NavLink
        to="/Kambaz/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text-white" />
        <br />
        Account
      </NavLink>

      {/* Dashboard: active gets white bg/red text, inactive black bg/white text */}
     <NavLink
        to="/Kambaz/Dashboard"
        id="wd-dashboard-link"
        className="list-group-item text-center border-0 bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        <span className="text-danger">Dashboard</span>
      </NavLink>

      {/* Courses: same active/inactive pattern */}
      <NavLink
        to="/Kambaz/Courses/1234/Home" 
        id="wd-course-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </NavLink>

      {/* Calendar */}
      <NavLink
        to="/Kambaz/Calendar"
        id="wd-calendar-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </NavLink>

      {/* Inbox */}
      <NavLink
        to="/Kambaz/Inbox"
        id="wd-inbox-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </NavLink>

      {/* Labs/Settings */}
      <NavLink
        to="/Labs"
        id="wd-labs-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <LiaCogSolid className="fs-1 text-danger" /><br />
        Labs
      </NavLink>
    </div>
  );
}
