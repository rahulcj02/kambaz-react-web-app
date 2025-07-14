// src/Kambaz/Navigation.tsx
//import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./styles.css";

export default function KambazNavigation() {
  return (
    <div
      id="wd-kambaz-navigation"
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 110 }}
    >
      <NavLink
        to="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noopener noreferrer"
        className="list-group-item bg-black border-0 text-center mb-3 mt-3"
      >
        <img src="/images/NEU.jpg" width="75px" alt="Northeastern" />
      </NavLink>

      <NavLink
        to="/Kambaz/Account"
        id="wd-account-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <FaRegCircleUser className="fs-1" />
        <br />
        Account
      </NavLink>

      <NavLink
        to="/Kambaz/Dashboard"
        id="wd-dashboard-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </NavLink>

      <NavLink
        to="/Kambaz/Courses"
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

      <NavLink
        to="/Kambaz/Settings"
        id="wd-settings-link"
        className={({ isActive }) =>
          isActive
            ? "list-group-item text-center border-0 bg-white text-danger"
            : "list-group-item text-center border-0 bg-black text-white"
        }
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Settings
      </NavLink>
    </div>
  );
}
