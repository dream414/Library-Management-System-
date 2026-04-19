import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { Users, CheckCircle, XCircle, Clock, Filter } from "lucide-react";

export default function AdminDashboard() {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);

  const [requests] = useState([
    { id: 1, user: "Ali", book: "React Guide", status: "Pending", date: "2026-04-15" },
    { id: 2, user: "Sara", book: "JavaScript", status: "Approved", date: "2026-04-14" },
    { id: 3, user: "Ahmed", book: "Python", status: "Rejected", date: "2026-04-13" },
    { id: 4, user: "Fatima", book: "Web Design", status: "Pending", date: "2026-04-12" },
  ]);

  const [search, setSearch] = useState("");

  const filtered = requests.filter(r => 
    r.user.toLowerCase().includes(search.toLowerCase()) ||
    r.book.toLowerCase().includes(search.toLowerCase())
  );

  const stats = {
    total: requests.length,
    pending: requests.filter(r => r.status === "Pending").length,
    approved: requests.filter(r => r.status === "Approved").length,
    rejected: requests.filter(r => r.status === "Rejected").length,
  };

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
          🛠 Admin Control Panel
        </h1>
        <p className={mutedClass}>Manage all requests and approvals</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        
        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-blue-500/30 to-blue-700/30" : "bg-gradient-to-br from-blue-200/50 to-blue-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Total Requests</p>
              <p className="text-2xl font-bold">{stats.total}</p>
            </div>
            <Users size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-yellow-500/30 to-yellow-700/30" : "bg-gradient-to-br from-yellow-200/50 to-yellow-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Pending</p>
              <p className="text-2xl font-bold">{stats.pending}</p>
            </div>
            <Clock size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-green-500/30 to-green-700/30" : "bg-gradient-to-br from-green-200/50 to-green-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Approved</p>
              <p className="text-2xl font-bold">{stats.approved}</p>
            </div>
            <CheckCircle size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-red-500/30 to-red-700/30" : "bg-gradient-to-br from-red-200/50 to-red-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Rejected</p>
              <p className="text-2xl font-bold">{stats.rejected}</p>
            </div>
            <XCircle size={32} className="opacity-50" />
          </div>
        </div>

      </div>

      {/* Search & Filter */}
      <div className="mb-6 flex gap-3">
        <input
          type="text"
          placeholder="Search user or book..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`flex-1 px-4 py-2 rounded-lg ${
            isDark 
              ? "bg-white/10 border border-white/20 text-white placeholder-gray-400" 
              : "bg-white/40 border border-white/60 text-gray-900 placeholder-gray-600"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <button className={`px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
          isDark
            ? "bg-blue-500/30 hover:bg-blue-500/50 text-blue-400"
            : "bg-blue-200/50 hover:bg-blue-300/50 text-blue-700"
        }`}>
          <Filter size={18} />
          Filter
        </button>
      </div>

      {/* Requests Table */}
      <div className={`p-5 rounded-xl backdrop-blur ${cardClass} overflow-auto`}>
        <h2 className={`text-lg font-semibold mb-4 ${textClass}`}>
          📋 Book Requests
        </h2>

        <table className="w-full text-sm">
          <thead className={`${isDark ? "border-white/20" : "border-gray-300"} border-b`}>
            <tr>
              <th className={`text-left p-3 ${mutedClass}`}>User</th>
              <th className={`text-left p-3 ${mutedClass}`}>Book</th>
              <th className={`text-left p-3 ${mutedClass}`}>Status</th>
              <th className={`text-left p-3 ${mutedClass}`}>Date</th>
              <th className={`text-left p-3 ${mutedClass}`}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((req) => (
              <tr key={req.id} className={`${isDark ? "border-white/10 hover:bg-white/5" : "border-gray-200 hover:bg-black/5"} border-b transition`}>
                <td className={`p-3 ${textClass} font-semibold`}>{req.user}</td>
                <td className={`p-3 ${mutedClass}`}>{req.book}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    req.status === "Pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : req.status === "Approved"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}>
                    {req.status}
                  </span>
                </td>
                <td className={`p-3 ${mutedClass}`}>{req.date}</td>
                <td className="p-3 flex gap-2">
                  {req.status === "Pending" && (
                    <>
                      <button className={`px-3 py-1 rounded text-xs font-semibold transition ${
                        isDark
                          ? "bg-green-500 hover:bg-green-500 text-green-400"
                          : "bg-green-200 hover:bg-green-300 text-green-700"
                      }`}>
                        Approve
                      </button>
                      <button className={`px-3 py-1 rounded text-xs font-semibold transition ${
                        isDark
                          ? "bg-red-500/20 hover:bg-red-500/30 text-red-400"
                          : "bg-red-200/50 hover:bg-red-300/50 text-red-700"
                      }`}>
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}