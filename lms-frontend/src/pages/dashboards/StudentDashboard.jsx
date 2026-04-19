import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { Book, Clock, AlertCircle, CheckCircle, Download } from "lucide-react";

export default function StudentDashboard() {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);

  const [myBooks] = useState([
    { id: 1, name: "React Mastery", author: "John Doe", dueDate: "2026-05-15", fine: 0, status: "Issued" },
    { id: 2, name: "JavaScript Guide", author: "Jane Smith", dueDate: "2026-06-20", fine: 150, status: "Overdue" },
  ]);

  const [requestHistory] = useState([
    { id: 1, book: "Python Basics", date: "2026-04-10", status: "Approved" },
    { id: 2, book: "Web Design", date: "2026-04-15", status: "Pending" },
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
          🎓 Student Dashboard
        </h1>
        <p className={mutedClass}>Welcome back, {user?.email}!</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        
        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-blue-500/30 to-blue-700/30" : "bg-gradient-to-br from-blue-200/50 to-blue-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Books Issued</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <Book size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-green-500/30 to-green-700/30" : "bg-gradient-to-br from-green-200/50 to-green-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Approved</p>
              <p className="text-2xl font-bold">5</p>
            </div>
            <CheckCircle size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-yellow-500/30 to-yellow-700/30" : "bg-gradient-to-br from-yellow-200/50 to-yellow-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Overdue</p>
              <p className="text-2xl font-bold">1</p>
            </div>
            <Clock size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-red-500/30 to-red-700/30" : "bg-gradient-to-br from-red-200/50 to-red-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Fine</p>
              <p className="text-2xl font-bold">Rs 150</p>
            </div>
            <AlertCircle size={32} className="opacity-50" />
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* My Books */}
        <div className={`p-5 rounded-xl backdrop-blur ${cardClass}`}>
          <h2 className={`text-lg font-semibold mb-4 ${textClass}`}>
            📚 My Books
          </h2>

          <div className="space-y-3">
            {myBooks.map((book) => (
              <div
                key={book.id}
                className={`p-3 rounded-lg ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className={`font-medium ${textClass}`}>{book.name}</p>
                    <p className={`text-sm ${mutedClass}`}>{book.author}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    book.status === "Issued" 
                      ? "bg-green-500/20 text-green-400" 
                      : "bg-red-500/20 text-red-400"
                  }`}>
                    {book.status}
                  </span>
                </div>
                <div className={`flex justify-between mt-2 text-xs ${mutedClass}`}>
                  <span>Due: {book.dueDate}</span>
                  <span>Fine: Rs {book.fine}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Request History */}
        <div className={`p-5 rounded-xl backdrop-blur ${cardClass}`}>
          <h2 className={`text-lg font-semibold mb-4 ${textClass}`}>
            📋 Request History
          </h2>

          <div className="space-y-3">
            {requestHistory.map((req) => (
              <div
                key={req.id}
                className={`p-3 rounded-lg ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className={`font-medium ${textClass}`}>{req.book}</p>
                    <p className={`text-xs ${mutedClass}`}>{req.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    req.status === "Approved" 
                      ? "bg-green-500/20 text-green-400" 
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {req.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-3">
        <button className={`flex-1 py-3 rounded-lg font-semibold transition ${
          isDark
            ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            : "bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white"
        }`}>
          Search Books
        </button>
        <button className={`flex-1 py-3 rounded-lg font-semibold transition ${
          isDark
            ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            : "bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white"
        }`}>
          Send Request
        </button>
      </div>

    </div>
  );
}