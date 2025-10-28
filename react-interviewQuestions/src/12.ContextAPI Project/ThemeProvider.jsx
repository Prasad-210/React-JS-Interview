import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;



//? === 🧠 How to Explain in Interview

// “Context API helps me share global data (like theme, user info, or auth status) across multiple components without prop drilling.
// In this example, I created a ThemeContext that stores the current theme and a toggle function.
// Using useContext, I can access and modify this state in any component — making it clean, centralized, and scalable.”