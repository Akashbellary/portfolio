
"use client";
import React from "react";

export default function ChatFloatButton() {
  const handleClick = () => {
    window.open("https://akash-chatbot.vercel.app/", "_blank");
  };

  return (
    <div style={{ position: "fixed", bottom: 32, right: 32, zIndex: 1000 }}>
      {/* Red circle with text */}
      <div
        style={{
          position: "absolute",
          bottom: 64, // Touches the blue circle (height is 64px)
          right: -24,
          background: "#ef4444",
          color: "#fff",
          borderRadius: "9999px",
          padding: "6px 16px",
          fontWeight: 600,
          fontSize: "0.95rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
        onClick={handleClick}
      >
        Click here
      </div>
      {/* Blue circle with chat icon */}
      <button
        onClick={handleClick}
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "#2563eb",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
          cursor: "pointer",
        }}
        aria-label="Open chat"
      >
        {/* Chat SVG icon */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15.5V6.5C21 5.11929 19.8807 4 18.5 4H5.5C4.11929 4 3 5.11929 3 6.5V15.5C3 16.8807 4.11929 18 5.5 18H17L21 21V15.5Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
