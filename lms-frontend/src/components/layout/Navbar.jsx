import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { Menu, Sun, Moon, LogOut, User } from "lucide-react";

export default function Navbar({ toggleSidebar }) {
  const { user, logout } = useContext(AuthContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 flex items-center justify-between px-4 
    bg-white/10 dark:bg-black/40 backdrop-blur-lg border-b border-white/20">

      {/* Left Side */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded hover:bg-white/20"
        >
          <Menu size={20} />
        </button>

        <h1 className="text-lg font-bold">
          LMS Dashboard
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 relative">

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded hover:bg-white/20"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Profile */}
        <div
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 cursor-pointer hover:bg-white/20 p-2 rounded"
        >
          <User size={18} />
          <span className="hidden md:block">
            {user?.email || "User"}
          </span>
        </div>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 top-14 w-40 
          bg-black/80 backdrop-blur-lg rounded-lg shadow-lg p-2">

            <div className="p-2 text-sm border-b border-white/20">
              {user?.role || "Role"}
            </div>

            <button
              onClick={logout}
              className="flex items-center gap-2 w-full p-2 hover:bg-white/20 rounded"
            >
              <LogOut size={16} /> Logout
            </button>

          </div>
        )}

      </div>
    </div>
  );
}