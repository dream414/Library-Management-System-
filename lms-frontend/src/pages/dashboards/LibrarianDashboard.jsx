import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { Book, Users, TrendingUp, AlertTriangle, Plus, Edit, Trash2 } from "lucide-react";

export default function LibrarianDashboard() {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);

  const [books] = useState([
    { id: 1, title: "React Guide", author: "John", copies: 5, issued: 3 },
    { id: 2, title: "JavaScript", author: "Jane", copies: 8, issued: 6 },
    { id: 3, title: "Python Basics", author: "Ahmed", copies: 3, issued: 2 },
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
          📚 Librarian Dashboard
        </h1>
        <p className={mutedClass}>Manage library resources and inventory</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        
        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-blue-500/30 to-blue-700/30" : "bg-gradient-to-br from-blue-200/50 to-blue-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Total Books</p>
              <p className="text-2xl font-bold">156</p>
            </div>
            <Book size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-green-500/30 to-green-700/30" : "bg-gradient-to-br from-green-200/50 to-green-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Issued</p>
              <p className="text-2xl font-bold">45</p>
            </div>
            <TrendingUp size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-yellow-500/30 to-yellow-700/30" : "bg-gradient-to-br from-yellow-200/50 to-yellow-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Available</p>
              <p className="text-2xl font-bold">111</p>
            </div>
            <Book size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-red-500/30 to-red-700/30" : "bg-gradient-to-br from-red-200/50 to-red-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Overdue</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <AlertTriangle size={32} className="opacity-50" />
          </div>
        </div>

      </div>

      {/* Books Table */}
      <div className={`p-5 rounded-xl backdrop-blur ${cardClass} overflow-auto`}>
        <h2 className={`text-lg font-semibold mb-4 ${textClass}`}>
          📖 Books List
        </h2>

        <table className="w-full text-sm">
          <thead className={`${isDark ? "border-white/20" : "border-gray-300"} border-b`}>
            <tr>
              <th className={`text-left p-3 ${mutedClass}`}>Book Title</th>
              <th className={`text-left p-3 ${mutedClass}`}>Author</th>
              <th className={`text-left p-3 ${mutedClass}`}>Total</th>
              <th className={`text-left p-3 ${mutedClass}`}>Issued</th>
              <th className={`text-left p-3 ${mutedClass}`}>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className={`${isDark ? "border-white/10 hover:bg-white/5" : "border-gray-200 hover:bg-black/5"} border-b transition`}>
                <td className={`p-3 ${textClass}`}>{book.title}</td>
                <td className={`p-3 ${mutedClass}`}>{book.author}</td>
                <td className={`p-3 ${textClass} font-semibold`}>{book.copies}</td>
                <td className={`p-3 ${textClass} font-semibold`}>{book.issued}</td>
                <td className="p-3 flex gap-2">
                  <button className={`p-1 rounded ${isDark ? "hover:bg-blue-500/30" : "hover:bg-blue-200/30"}`}>
                    <Edit size={16} className={isDark ? "text-blue-400" : "text-blue-600"} />
                  </button>
                  <button className={`p-1 rounded ${isDark ? "hover:bg-red-500/30" : "hover:bg-red-200/30"}`}>
                    <Trash2 size={16} className={isDark ? "text-red-400" : "text-red-600"} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-3">
        <button className={`flex-1 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
          isDark
            ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            : "bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white"
        }`}>
          <Plus size={18} />
          Add New Book
        </button>
        <button className={`flex-1 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
          isDark
            ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            : "bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white"
        }`}>
          <TrendingUp size={18} />
          Inventory Report
        </button>
      </div>

    </div>
  );
}