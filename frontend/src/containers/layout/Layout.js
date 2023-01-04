import React from "react";

export default function Layout({ children }) {
  return (
    <div
      aria-label="layout_container"
      className="bg-gradient-to-b from-blue-lightest to-orange-light min-h-screen bg-fixed text-blue"
    >
      {children}
    </div>
  );
}
