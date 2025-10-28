import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <header
        style={{
          backgroundColor: theme === "light" ? "#f0f0f0" : "#222",
          color: theme === "light" ? "#000" : "#fff",
          padding: "10px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2> Header Component: {theme.toUpperCase()} MODE</h2>
      </header>
    </div>
  );
};

export default Header;
