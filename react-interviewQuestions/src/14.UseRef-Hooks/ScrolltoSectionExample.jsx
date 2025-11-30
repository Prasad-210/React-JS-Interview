import React, { useState, useRef } from "react";

// 🧠 Use Case

// Imagine you have a landing page with multiple sections — Home, About, and Contact.
// You want to click a button and smoothly scroll to that section.

// ✅ You can achieve this with useRef — without re-rendering the component or managing extra state.

const ScrolltoSectionExample = () => {
  const homeRef = useRef();
  const aboutUsRef = useRef();
  const contactRef = useRef();

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: "#282c34",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "10px",
        }}
      >
        <button
          onClick={() => {
            scrollToSection(homeRef);
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            scrollToSection(aboutUsRef);
          }}
        >
          {" "}
          About Us
        </button>
        <button
          onClick={() => {
            scrollToSection(contactRef);
          }}
        >
          📞 Contact US
        </button>
      </div>

      {/* section  */}

      <div
        ref={homeRef}
        style={{
          height: "100vh",
          backgroundColor: "#f8f9fa",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1> 🏠 Home Section</h1>
      </div>
      <div
        ref={aboutUsRef}
        style={{
          height: "100vh",
          backgroundColor: "#dbeafe",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1> 🅰️ About Us Section</h1>
      </div>
      <div
        ref={contactRef}
        style={{
          height: "100vh",
          backgroundColor: "#fee2e2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1> 📞 Contact Us Section</h1>
      </div>
    </div>
  );
};

export default ScrolltoSectionExample;
