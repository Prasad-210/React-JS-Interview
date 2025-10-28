import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import Header from "./Header";

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const pageStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={pageStyle}>
      <Header />
      <h2>Welcome to My App</h2>
      <p>Current Theme : {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Home;
