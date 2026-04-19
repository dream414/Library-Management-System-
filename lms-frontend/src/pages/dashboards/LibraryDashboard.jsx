import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { BookOpen, Users, BarChart3, Clock } from "lucide-react";

export default function LibraryDashboard() {
  const { isDark } = useContext(ThemeContext);

  const [librarySummary] = useState({
    totalBooks: 2450,
    membersActive: 1240,
    booksIssued: 340,
    pendingReturns: 45,
  });

  const [popularBooks] = useState([
    { title: "Clean Code", author: "Robert Martin", checkouts: 234 },
    { title: "Design Patterns", author: "Gang of Four", checkouts: 189 },
    { title: "The Pragmatic Programmer", author: "Hunt & Thomas", checkouts: 156 },
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
          🏫 Library Dashboard
        </h1>
        <p className={mutedClass}>Library Operations & Analytics</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        
        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-blue-500/30 to-blue-700/30" : "bg-gradient-to-br from-blue-200/50 to-blue-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Total Books</p>
              <p className="text-2xl font-bold">{librarySummary.totalBooks}</p>
            </div>
            <BookOpen size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-green-500/30 to-green-700/30" : "bg-gradient-to-br from-green-200/50 to-green-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Active Members</p>
              <p className="text-2xl font-bold">{librarySummary.membersActive}</p>
            </div>
            <Users size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-yellow-500/30 to-yellow-700/30" : "bg-gradient-to-br from-yellow-200/50 to-yellow-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Books Issued</p>
              <p className="text-2xl font-bold">{librarySummary.booksIssued}</p>
            </div>
            <BarChart3 size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-red-500/30 to-red-700/30" : "bg-gradient-to-br from-red-200/50 to-red-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Pending Returns</p>
              <p className="text-2xl font-bold">{librarySummary.pendingReturns}</p>
            </div>
            <Clock size={32} className="opacity-50" />
          </div>
        </div>

      </div>

      {/* Popular Books */}
      <div className={`p-5 rounded-xl backdrop-blur ${cardClass}`}>
        <h2 className={`text-lg font-semibold mb-4 ${textClass}`}>
          ⭐ Most Popular Books
        </h2>

        <div className="space-y-3">
          {popularBooks.map((book, i) => (
            <div
              key={i}
              className={`p-4 rounded-lg ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className={`font-semibold ${textClass}`}>{book.title}</p>
                  <p className={`text-sm ${mutedClass}`}>by {book.author}</p>
                </div>
                <span className={`text-lg font-bold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                  {book.checkouts} checkouts
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
        <button className={`py-3 rounded-lg font-semibold transition ${
          isDark
            ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            : "bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white"
        }`}>
          View Library Analytics
        </button>
        <button className={`py-3 rounded-lg font-semibold transition ${
          isDark
            ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            : "bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white"
        }`}>
          Generate Monthly Report
        </button>
      </div>

    </div>
  );
}