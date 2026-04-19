import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  UserCheck,
  Menu,
  X,
  Settings,
  LogOut,
  Bell,
  BarChart3,
  FileText,
  Search,
} from "lucide-react";

export default function Sidebar() {
  const { user, logout } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);

  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);

  // ONLY 12 DASHBOARDS
  const menu = [
    { name: "Student", path: "/student", icon: <LayoutDashboard size={18} /> },
    { name: "Teacher", path: "/teacher", icon: <UserCheck size={18} /> },
    { name: "Librarian", path: "/librarian", icon: <BookOpen size={18} /> },
    { name: "Admin", path: "/admin", icon: <Users size={18} /> },
    { name: "HOD", path: "/hod", icon: <Users size={18} /> },
    { name: "SuperAdmin", path: "/superadmin", icon: <Users size={18} /> },
    { name: "Staff", path: "/staff", icon: <Users size={18} /> },
    { name: "Visitor", path: "/visitor", icon: <Users size={18} /> },
    { name: "Accountant", path: "/accountant", icon: <BarChart3 size={18} /> },
    { name: "Researcher", path: "/researcher", icon: <BookOpen size={18} /> },
    { name: "Digital", path: "/digital", icon: <FileText size={18} /> },
    { name: "Library", path: "/library", icon: <BookOpen size={18} /> },
  ];

  const quickTools = [
    { name: "Settings", icon: <Settings size={16} /> },
    { name: "Notifications", icon: <Bell size={16} /> },
    { name: "Reports", icon: <FileText size={16} /> },
    { name: "Search", icon: <Search size={16} /> },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className={`md:hidden fixed top-4 left-4 z-50 ${isDark ? "bg-purple-900/80" : "bg-purple-200/80"} p-2 rounded backdrop-blur`}
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed md:static top-0 left-0 h-screen z-40
        ${collapsed ? "w-20" : "w-64"}
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        transition-all duration-300
        ${isDark 
          ? "bg-gradient-to-b from-gray-900 via-purple-900 to-black" 
          : "bg-gradient-to-b from-gray-100 via-purple-100 to-blue-50"
        }
        backdrop-blur-xl ${isDark ? "border-r border-white/10" : "border-r border-gray-300"} p-4
        flex flex-col h-screen overflow-y-auto
      `}
      >

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          {!collapsed && (
            <h2 className={`font-bold text-lg ${isDark ? "text-purple-300" : "text-purple-700"}`}>
              📚 LMS
            </h2>
          )}

          <div className="flex gap-2">
            <button 
              onClick={() => setCollapsed(!collapsed)}
              className={`p-1 rounded hover:${isDark ? "bg-white/20" : "bg-black/10"} transition`}
            >
              {collapsed ? "➡️" : "⬅️"}
            </button>

            <button
              className="md:hidden"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>
        </div>

        {/* User Info */}
        {user && !collapsed && (
          <div className={`mb-4 p-3 rounded-lg ${isDark ? "bg-purple-500/20 border border-purple-400/30" : "bg-purple-200/40 border border-purple-400"}`}>
            <p className={`text-xs opacity-70 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Current User
            </p>
            <p className={`font-semibold capitalize ${isDark ? "text-purple-300" : "text-purple-700"}`}>
              {user.role}
            </p>
            <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {user.email}
            </p>
          </div>
        )}

        {/* Menu - ONLY 12 */}
        <div className="space-y-2 mb-6 flex-1">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition group
                ${
                  isActive
                    ? isDark
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-lg"
                    : isDark
                    ? "hover:bg-white/10 text-gray-300"
                    : "hover:bg-black/10 text-gray-700"
                }`
              }
            >
              <span className="group-hover:scale-110 transition">
                {item.icon}
              </span>

              {!collapsed && (
                <span className="text-sm">
                  {item.name}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Quick Tools */}
        {!collapsed && (
          <>
            <div className={`mb-3 h-px ${isDark ? "bg-white/10" : "bg-gray-300"}`}></div>
            <p className={`text-xs font-semibold mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Quick Tools
            </p>
            <div className="space-y-2 mb-6">
              {quickTools.map((tool) => (
                <button
                  key={tool.name}
                  className={`flex items-center gap-2 w-full p-2 rounded transition ${
                    isDark
                      ? "hover:bg-white/10 text-gray-300"
                      : "hover:bg-black/10 text-gray-700"
                  }`}
                >
                  {tool.icon}
                  <span className="text-sm">{tool.name}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Logout Button - Fixed at Bottom */}
        <button
          onClick={logout}
          className={`w-full flex items-center justify-center gap-2 p-2 rounded transition font-semibold mt-auto
          ${isDark
            ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
            : "bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white"
          }`}
        >
          <LogOut size={16} />
          {!collapsed && "Logout"}
        </button>

      </div>
    </>
  );
}