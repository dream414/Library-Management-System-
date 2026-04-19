import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { Users, BookOpen, CheckCircle, TrendingUp, Plus } from "lucide-react";

export default function HODDashboard() {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);

  const [pendingRequests] = useState([
    { id: 1, user: "Ali", type: "Leave Request", status: "Pending" },
    { id: 2, user: "Sara", type: "Course Approval", status: "Pending" },
    { id: 3, user: "Ahmed", type: "Research Paper", status: "Pending" },
  ]);

  const stats = [
    { title: "Total Teachers", value: 18, color: "from-blue-500/30 to-blue-700/30", icon: Users },
    { title: "Students", value: 320, color: "from-green-500/30 to-green-700/30", icon: Users },
    { title: "Pending Requests", value: 6, color: "from-yellow-500/30 to-yellow-700/30", icon: TrendingUp },
    { title: "Approved Today", value: 12, color: "from-purple-500/30 to-purple-700/30", icon: CheckCircle },
  ];

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
          🎓 HOD Dashboard
        </h1>
        <p className={mutedClass}>Department Management & Approvals</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl bg-gradient-to-br ${s.color} backdrop-blur`}
          >
            <div className={`flex items-center justify-between ${textClass}`}>
              <div>
                <p className={`text-sm ${mutedClass}`}>{s.title}</p>
                <p className="text-2xl font-bold">{s.value}</p>
              </div>
              <s.icon size={32} className="opacity-50" />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Pending Requests */}
        <div className={`p-5 rounded-xl backdrop-blur ${cardClass}`}>
          <h2 className={`text-lg font-semibold mb-4 ${textClass}`}>
            📌 Pending Department Requests
          </h2>

          {pendingRequests.map((req) => (
            <div
              key={req.id}
              className={`flex justify-between items-center p-3 mb-3 rounded-lg ${
                isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"
              } transition`}
            >
              <div>
                <p className={`font-medium ${textClass}`}>{req.user}</p>
                <p className={`text-sm ${mutedClass}`}>{req.type}</p>
              </div>
              <span className="text-yellow-400 text-sm font-semibold">
                {req.status}
              </span>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className={`p-5 rounded-xl backdrop-blur ${cardClass}`}>
          <h2 className={`text-lg font-semibold mb-4 ${textClass}`}>
            ⚡ Quick Actions
          </h2>

          <button className={`w-full mb-3 py-2 rounded-lg font-semibold transition ${
            isDark
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-blue-400 hover:bg-blue-500 text-white"
          }`}>
            Approve All Pending
          </button>

          <button className={`w-full mb-3 py-2 rounded-lg font-semibold transition ${
            isDark
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-green-400 hover:bg-green-500 text-white"
          }`}>
            Assign Teacher to Course
          </button>

          <button className={`w-full py-2 rounded-lg font-semibold transition ${
            isDark
              ? "bg-purple-500 hover:bg-purple-600 text-white"
              : "bg-purple-400 hover:bg-purple-500 text-white"
          }`}>
            Generate Department Report
          </button>
        </div>

      </div>

      {/* Department Activity */}
      <div className={`mt-6 p-5 rounded-xl backdrop-blur ${cardClass}`}>
        <h2 className={`text-lg font-semibold mb-3 ${textClass}`}>
          📊 Department Activity
        </h2>
        <div className={`h-40 flex items-center justify-center ${mutedClass}`}>
          (Chart Area - Add Recharts / ApexCharts here)
        </div>
      </div>

    </div>
  );
}