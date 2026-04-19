import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { Users, Shield, TrendingUp, AlertCircle } from "lucide-react";

export default function SuperAdminDashboard() {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);

  const [systemStats] = useState({
    users: 1240,
    admins: 12,
    teachers: 45,
    students: 980,
    requests: 320,
  });

  const bgClass = isDark 
    ? "bg-gradient-to-br from-black via-gray-900 to-purple-900" 
    : "bg-gradient-to-br from-white via-gray-50 to-blue-50";
  
  const cardClass = isDark
    ? "bg-white/10 border border-white/20"
    : "bg-white/40 border border-white/60";

  const textClass = isDark ? "text-white" : "text-gray-900";
  const mutedClass = isDark ? "text-gray-400" : "text-gray-600";

  return (
    <div className={`p-6 min-h-screen ${bgClass}`}>

      {/* Header */}
      <div className="mb-6">
        <h1 className={`text-3xl font-bold mb-2 ${textClass}`}>
          👑 Super Admin Dashboard
        </h1>
        <p className={mutedClass}>Complete System Control & Monitoring</p>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-blue-500/30 to-blue-700/30" : "bg-gradient-to-br from-blue-200/50 to-blue-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Users</p>
              <p className="text-2xl font-bold">{systemStats.users}</p>
            </div>
            <Users size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-purple-500/30 to-purple-700/30" : "bg-gradient-to-br from-purple-200/50 to-purple-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Admins</p>
              <p className="text-2xl font-bold">{systemStats.admins}</p>
            </div>
            <Shield size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-green-500/30 to-green-700/30" : "bg-gradient-to-br from-green-200/50 to-green-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Teachers</p>
              <p className="text-2xl font-bold">{systemStats.teachers}</p>
            </div>
            <Users size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-yellow-500/30 to-yellow-700/30" : "bg-gradient-to-br from-yellow-200/50 to-yellow-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Students</p>
              <p className="text-2xl font-bold">{systemStats.students}</p>
            </div>
            <Users size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-red-500/30 to-red-700/30" : "bg-gradient-to-br from-red-200/50 to-red-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Requests</p>
              <p className="text-2xl font-bold">{systemStats.requests}</p>
            </div>
            <TrendingUp size={32} className="opacity-50" />
          </div>
        </div>

      </div>

      {/* Control Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Role Control */}
        <div className={`p-5 rounded-xl backdrop-blur ${cardClass}`}>
          <h2 className={`text-lg font-semibold mb-4 ${textClass}`}>
            ⚙ Role Control
          </h2>

          <button className={`w-full mb-2 py-2 rounded font-semibold transition ${
            isDark
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-blue-400 hover:bg-blue-500 text-white"
          }`}>
            Create New Admin
          </button>

          <button className={`w-full mb-2 py-2 rounded font-semibold transition ${
            isDark
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-green-400 hover:bg-green-500 text-white"
          }`}>
            Assign Role to User
          </button>

          <button className={`w-full py-2 rounded font-semibold transition ${
            isDark
              ? "bg-purple-500 hover:bg-purple-600 text-white"
              : "bg-purple-400 hover:bg-purple-500 text-white"
          }`}>
            Remove Access
          </button>
        </div>

        {/* System Activity */}
        <div className={`p-5 rounded-xl backdrop-blur ${cardClass}`}>
          <h2 className={`text-lg font-semibold mb-4 ${textClass}`}>
            📊 System Activity
          </h2>

          <ul className={`text-sm space-y-2 ${mutedClass}`}>
            <li>✔ New student registered</li>
            <li>✔ Teacher approved request</li>
            <li>✔ Book issued successfully</li>
            <li>✔ Admin updated system settings</li>
          </ul>
        </div>

      </div>

      {/* System Status */}
      <div className={`mt-6 p-4 rounded-xl text-center ${
        isDark
          ? "bg-green-500/10 border border-green-500/20"
          : "bg-green-200/30 border border-green-400/50"
      }`}>
        <p className={`text-lg font-semibold ${isDark ? "text-green-400" : "text-green-700"}`}>
          🟢 System Status: ALL SYSTEMS OPERATIONAL
        </p>
      </div>

    </div>
  );
}