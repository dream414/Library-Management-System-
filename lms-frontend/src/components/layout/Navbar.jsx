import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { Menu, Sun, Moon, LogOut, User, ChevronDown } from "lucide-react";

export default function Navbar({ toggleSidebar }) {
  const { user, logout } = useContext(AuthContext);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  // 12 DASHBOARDS
  const dashboards = [
    { name: "Student", path: "/student" },
    { name: "Teacher", path: "/teacher" },
    { name: "Librarian", path: "/librarian" },
    { name: "Admin", path: "/admin" },
    { name: "HOD", path: "/hod" },
    { name: "SuperAdmin", path: "/superadmin" },
    { name: "Staff", path: "/staff" },
    { name: "Visitor", path: "/visitor" },
    { name: "Accountant", path: "/accountant" },
    { name: "Researcher", path: "/researcher" },
    { name: "Digital", path: "/digital" },
    { name: "Library", path: "/library" },
  ];

  return (
    <div className={`w-full h-16 flex items-center justify-between px-4 sticky top-0 z-50
    ${isDark 
      ? "bg-gradient-to-r from-purple-900 via-purple-800 to-blue-900 backdrop-blur-lg" 
      : "bg-gradient-to-r from-purple-300 via-purple-300 to-blue-300 backdrop-blur-lg"
    } border-b ${isDark ? "border-white/20" : "border-gray-300"}`}>

      {/* Left Side */}
      <div className="flex items-center gap-3">
        {/* <button
          onClick={toggleSidebar}
          className={`p-2 rounded hover:bg-white/20 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          <Menu size={20} />
        </button> */}

        <h1 className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
          📚 LMS Dashboard
        </h1>
      </div>

      {/* Middle - Dashboards Dropdown */}
      <div className="hidden lg:flex items-center relative">
        <button
          onClick={() => setDashboardOpen(!dashboardOpen)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            isDark
              ? "hover:bg-white/10 text-white"
              : "hover:bg-black/10 text-gray-900"
          }`}
        >
          Select Dashboard
          <ChevronDown size={18} className={`transition ${dashboardOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Dropdown Menu */}
        {dashboardOpen && (
          <div className={`absolute top-14 left-0 w-48 rounded-lg shadow-lg p-2 ${
            isDark
              ? "bg-black/90 border border-white/20"
              : "bg-white/90 border border-gray-300"
          }`}>
            <div className={`grid grid-cols-1 gap-1 max-h-96 overflow-y-auto`}>
              {dashboards.map((dash) => (
                <button
                  key={dash.name}
                  onClick={() => {
                    navigate(dash.path);
                    setDashboardOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded transition text-sm ${
                    isDark
                      ? "hover:bg-white/10 text-gray-300"
                      : "hover:bg-black/10 text-gray-700"
                  }`}
                >
                  {dash.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className={`flex items-center gap-4 relative ${isDark ? "text-white" : "text-gray-900"}`}>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded hover:bg-white/20 transition`}
          title="Toggle Theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Profile */}
        <div
          onClick={() => setProfileOpen(!profileOpen)}
          className="flex items-center gap-2 cursor-pointer hover:bg-white/20 p-2 rounded"
        >
          <User size={18} />
          <span className="hidden md:block text-sm">
            {user?.email || "User"}
          </span>
        </div>

        {/* Profile Dropdown */}
        {profileOpen && (
          <div className={`absolute right-0 top-14 w-40 
          ${isDark ? "bg-black/80" : "bg-white/90"} backdrop-blur-lg rounded-lg shadow-lg p-2`}>

            <div className={`p-2 text-sm border-b ${isDark ? "border-white/20 text-gray-300" : "border-gray-300 text-gray-700"}`}>
              Role: {user?.role || "User"}
            </div>

            <button
              onClick={logout}
              className={`flex items-center gap-2 w-full p-2 hover:bg-white/20 rounded transition ${isDark ? "text-red-400" : "text-red-600"}`}
            >
              <LogOut size={16} /> Logout
            </button>

          </div>
        )}

      </div>
    </div>
  );
}