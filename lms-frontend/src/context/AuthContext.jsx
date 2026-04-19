import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // load user from localStorage on refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("lms_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // LOGIN FUNCTION
  const login = (email, password) => {
    // demo users (frontend only)
    const users = [
      { email: "admin@lms.com", password: "1234", role: "admin" },
      { email: "student@lms.com", password: "1234", role: "student" },
      { email: "teacher@lms.com", password: "1234", role: "teacher" },
      { email: "librarian@lms.com", password: "1234", role: "librarian" },
      { email: "guest@lms.com", password: "1234", role: "guest" },
      { email: "hod@lms.com", password: "1234", role: "hod" },
      { email: "staff@lms.com", password: "1234", role: "staff" },
      { email: "researcher@lms.com", password: "1234", role: "researcher" },
      { email: "assistant@lms.com", password: "1234", role: "assistant" },
      { email: "accountant@lms.com", password: "1234", role: "accountant" },
      { email: "visitor@lms.com", password: "1234", role: "visitor" },
      { email: "super@lms.com", password: "1234", role: "superadmin" },
    ];

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const loggedUser = {
        email: foundUser.email,
        role: foundUser.role,
      };

      setUser(loggedUser);
      localStorage.setItem("lms_user", JSON.stringify(loggedUser));

      return { success: true, role: foundUser.role };
    }

    return { success: false };
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("lms_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}