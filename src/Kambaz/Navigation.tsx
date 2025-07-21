// src/Kambaz/Navigation.tsx
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline }   from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser }  from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
import "./styles.css";

export default function KambazNavigation() {
  useLocation();

  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kambaz/Courses/RS101/Home",  icon: LiaBookSolid },
    { label: "Calendar", path: "/Kambaz/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kambaz/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

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

      {/* Account link remains fixed */}
      <NavLink
        to="/Kambaz/Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text-white" />
        <br />
        Account
      </NavLink>

      {/* Dynamically generated links */}
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <NavLink
            key={link.label}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "list-group-item text-center border-0 bg-white text-danger"
                : "list-group-item text-center border-0 bg-black text-white"
            }
          >
            <Icon className="fs-1 text-danger" />
            <br />
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
}
