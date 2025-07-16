// File: src/Kambaz/Courses/Modules/GreenCheckmark.tsx
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import React from "react";

// Allow passing className, style, etc.
export default function GreenCheckmark(
  props: React.HTMLAttributes<HTMLSpanElement>
) {
  // merge incoming className with your defaults
  const { className = "", ...rest } = props;
  return (
    <span
      {...rest}
      className={`${className} me-1 position-relative`}
    >
      <FaCheckCircle
        style={{ top: "2px" }}
        className="text-success me-1 position-absolute fs-5"
      />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}
