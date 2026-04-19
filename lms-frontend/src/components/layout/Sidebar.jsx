import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  UserCheck,
  Menu,
  X,
  Moon,
  Sun
} from "lucide-react";

export default function Sidebar() {
  const { user } = useContext(AuthContext);

  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const menu = [
    { name: "Student", path: "/dashboard/student", icon: <LayoutDashboard size={18} /> },
    { name: "Admin", path: "/dashboard/admin", icon: <Users size={18} /> },
    { name: "Teacher", path: "/dashboard/teacher", icon: <UserCheck size={18} /> },
    { name: "Librarian", path: "/dashboard/librarian", icon: <BookOpen size={18} /> },
    { name: "Guest", path: "/dashboard/guest", icon: <Users size={18} /> },
    { name: "HOD", path: "/dashboard/hod", icon: <Users size={18} /> },
    { name: "Staff", path: "/dashboard/staff", icon: <Users size={18} /> },
    { name: "Researcher", path: "/dashboard/researcher", icon: <BookOpen size={18} /> },
    { name: "Assistant", path: "/dashboard/assistant", icon: <UserCheck size={18} /> },
    { name: "Accountant", path: "/dashboard/accountant", icon: <Users size={18} /> },
    { name: "Visitor", path: "/dashboard/visitor", icon: <Users size={18} /> },
    { name: "SuperAdmin", path: "/dashboard/superadmin", icon: <Users size={18} /> },
  ];

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-black/60 p-2 rounded"
      >
        <Menu />
      </button>

      {/* SIDEBAR */}
      <div
        className={`
        fixed md:static top-0 left-0 h-screen z-40
        ${collapsed ? "w-20" : "w-64"}
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        transition-all duration-300
        ${dark ? "bg-black/70 text-white" : "bg-white text-black"}
        backdrop-blur-xl border-r border-white/10 p-4
      `}
      >

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          {!collapsed && <h2 className="font-bold text-lg">📚 LMS</h2>}

          <div className="flex gap-2">
            {/* Collapse */}
            <button onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? "➡️" : "⬅️"}
            </button>

            {/* Mobile close */}
            <button
              className="md:hidden"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>
        </div>

        {/* USER */}
        {user && !collapsed && (
          <div className="mb-4 p-2 bg-white/10 rounded">
            <p className="text-xs opacity-70">Logged in</p>
            <p className="font-semibold capitalize">{user.role}</p>
          </div>
        )}

        {/* MENU */}
        <div className="space-y-2">
          {menu.map((item) => {

            if (
              user &&
              user.role !== item.name.toLowerCase() &&
              user.role !== "superadmin"
            ) {
              return null;
            }

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition group
                  ${
                    isActive
                      ? "bg-blue-500"
                      : "hover:bg-white/20"
                  }`
                }
              >
                {/* ICON */}
                <span className="group-hover:scale-110 transition">
                  {item.icon}
                </span>

                {/* TEXT */}
                {!collapsed && (
                  <span className="text-sm">
                    {item.name}
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* TOGGLE THEME */}
        <div className="absolute bottom-5 left-0 w-full px-4">
          <button
            onClick={() => setDark(!dark)}
            className="w-full flex items-center justify-center gap-2 bg-white/10 p-2 rounded hover:scale-105 transition"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
            {!collapsed && (dark ? "Light Mode" : "Dark Mode")}
          </button>
        </div>
      </div>
    </>
  );
}