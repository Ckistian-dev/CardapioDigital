// src/components/ui/button.jsx
import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}