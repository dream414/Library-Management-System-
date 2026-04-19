import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  // Load theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("lms_theme");
    if (saved) {
      setIsDark(JSON.parse(saved));
    }
  }, []);

  // Toggle theme and save
  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("lms_theme", JSON.stringify(!isDark));
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}