import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { Clock, CheckCircle, AlertCircle, Calendar, FileText } from "lucide-react";

export default function StaffDashboard() {
  const { isDark } = useContext(ThemeContext);

  const [tasks] = useState([
    { id: 1, title: "Update Library Records", status: "Completed", date: "2026-04-18" },
    { id: 2, title: "Process Student Applications", status: "In Progress", date: "2026-04-19" },
    { id: 3, title: "Generate Monthly Report", status: "Pending", date: "2026-04-20" },
    { id: 4, title: "Data Backup", status: "Completed", date: "2026-04-17" },
  ]);

  const [attendance] = useState({
    present: 18,
    absent: 2,
    leave: 1,
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
          👔 Staff Dashboard
        </h1>
        <p className={mutedClass}>Tasks & Daily Operations</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        
        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-green-500/30 to-green-700/30" : "bg-gradient-to-br from-green-200/50 to-green-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Present Today</p>
              <p className="text-2xl font-bold">{attendance.present}</p>
            </div>
            <CheckCircle size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-red-500/30 to-red-700/30" : "bg-gradient-to-br from-red-200/50 to-red-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Absent</p>
              <p className="text-2xl font-bold">{attendance.absent}</p>
            </div>
            <AlertCircle size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-yellow-500/30 to-yellow-700/30" : "bg-gradient-to-br from-yellow-200/50 to-yellow-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>On Leave</p>
              <p className="text-2xl font-bold">{attendance.leave}</p>
            </div>
            <Calendar size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-blue-500/30 to-blue-700/30" : "bg-gradient-to-br from-blue-200/50 to-blue-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Completed Tasks</p>
              <p className="text-2xl font-bold">2/4</p>
            </div>
            <CheckCircle size={32} className="opacity-50" />
          </div>
        </div>

      </div>

      {/* Tasks */}
      <div className={`p-5 rounded-xl backdrop-blur ${cardClass}`}>
        <h2 className={`text-lg font-semibold mb-4 ${textClass}`}>
          📋 Today's Tasks
        </h2>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`p-3 rounded-lg flex justify-between items-center ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition`}
            >
              <div>
                <p className={`font-medium ${textClass}`}>{task.title}</p>
                <p className={`text-sm ${mutedClass}`}>{task.date}</p>
              </div>
              <span className={`px-3 py-1 rounded text-xs font-semibold ${
                task.status === "Completed"
                  ? "bg-green-500/20 text-green-400"
                  : task.status === "In Progress"
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}>
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-3">
        <button className={`flex-1 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
          isDark
            ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            : "bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white"
        }`}>
          <FileText size={18} />
          Mark Attendance
        </button>
        <button className={`flex-1 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
          isDark
            ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            : "bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white"
        }`}>
          <CheckCircle size={18} />
          Update Task Status
        </button>
      </div>

    </div>
  );
}