import React, { useState, useEffect } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-btn">
      {theme === "light" ? (
        <i className="bx bxs-sun"></i>
      ) : (
        <i className="bx bxs-moon"></i>
      )}
    </button>
  );
}
