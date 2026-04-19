import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { Users, BookOpen, ClipboardList, BarChart3, Upload } from "lucide-react";

export default function TeacherDashboard() {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);

  const [courses] = useState([
    { id: 1, name: "React Fundamentals", students: 45, assignments: 3 },
    { id: 2, name: "Advanced JavaScript", students: 32, assignments: 5 },
  ]);

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
          👨‍🏫 Teacher Dashboard
        </h1>
        <p className={mutedClass}>Manage your courses and students</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        
        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-blue-500/30 to-blue-700/30" : "bg-gradient-to-br from-blue-200/50 to-blue-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Total Courses</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <BookOpen size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-green-500/30 to-green-700/30" : "bg-gradient-to-br from-green-200/50 to-green-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Total Students</p>
              <p className="text-2xl font-bold">77</p>
            </div>
            <Users size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-yellow-500/30 to-yellow-700/30" : "bg-gradient-to-br from-yellow-200/50 to-yellow-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Assignments</p>
              <p className="text-2xl font-bold">8</p>
            </div>
            <ClipboardList size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-purple-500/30 to-purple-700/30" : "bg-gradient-to-br from-purple-200/50 to-purple-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Attendance</p>
              <p className="text-2xl font-bold">92%</p>
            </div>
            <BarChart3 size={32} className="opacity-50" />
          </div>
        </div>

      </div>

      {/* My Courses */}
      <div className={`p-5 rounded-xl backdrop-blur ${cardClass} mb-6`}>
        <h2 className={`text-lg font-semibold mb-4 ${textClass}`}>
          📖 My Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`p-4 rounded-lg ${isDark ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20" : "bg-gradient-to-br from-blue-200/30 to-purple-200/30"}`}
            >
              <h3 className={`font-semibold mb-2 ${textClass}`}>{course.name}</h3>
              <div className={`space-y-1 text-sm ${mutedClass}`}>
                <p>👥 Students: {course.students}</p>
                <p>📝 Assignments: {course.assignments}</p>
              </div>
              <button className={`mt-3 w-full py-2 rounded font-semibold transition ${
                isDark
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-blue-400 hover:bg-blue-500 text-white"
              }`}>
                Manage Course
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <button className={`py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
          isDark
            ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            : "bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white"
        }`}>
          <Upload size={18} />
          Mark Attendance
        </button>
        <button className={`py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
          isDark
            ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            : "bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white"
        }`}>
          <Upload size={18} />
          Upload Grades
        </button>
        <button className={`py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
          isDark
            ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
            : "bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white"
        }`}>
          <BarChart3 size={18} />
          Generate Report
        </button>
      </div>

    </div>
  );
}