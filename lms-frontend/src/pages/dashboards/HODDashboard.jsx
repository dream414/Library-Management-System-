import { useState } from "react";

export default function HODDashboard() {
  const [pendingRequests] = useState([
    { id: 1, user: "Ali", type: "Leave Request", status: "Pending" },
    { id: 2, user: "Sara", type: "Course Approval", status: "Pending" },
    { id: 3, user: "Ahmed", type: "Research Paper", status: "Pending" },
  ]);

  const stats = [
    { title: "Total Teachers", value: 18, color: "from-blue-500 to-blue-700" },
    { title: "Students", value: 320, color: "from-green-500 to-green-700" },
    { title: "Pending Requests", value: 6, color: "from-yellow-500 to-yellow-700" },
    { title: "Approved Today", value: 12, color: "from-purple-500 to-purple-700" },
  ];

  return (
    <div className="p-6 text-white min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6">
        🎓 HOD Dashboard
      </h1>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl bg-gradient-to-r ${s.color} shadow-lg`}
          >
            <h2 className="text-sm opacity-80">{s.title}</h2>
            <p className="text-2xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT: REQUESTS */}
        <div className="bg-white/10 backdrop-blur-lg p-5 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">
            📌 Pending Department Requests
          </h2>

          {pendingRequests.map((req) => (
            <div
              key={req.id}
              className="flex justify-between items-center p-3 mb-3 bg-white/10 rounded-lg"
            >
              <div>
                <p className="font-medium">{req.user}</p>
                <p className="text-sm text-gray-300">{req.type}</p>
              </div>

              <span className="text-yellow-400 text-sm">
                {req.status}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT: QUICK ACTIONS */}
        <div className="bg-white/10 backdrop-blur-lg p-5 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">
            ⚡ Quick Actions
          </h2>

          <button className="w-full mb-3 bg-blue-500 hover:bg-blue-600 py-2 rounded-lg transition">
            Approve All Pending
          </button>

          <button className="w-full mb-3 bg-green-500 hover:bg-green-600 py-2 rounded-lg transition">
            Assign Teacher to Course
          </button>

          <button className="w-full bg-purple-500 hover:bg-purple-600 py-2 rounded-lg transition">
            Generate Department Report
          </button>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-6 bg-white/10 backdrop-blur-lg p-5 rounded-xl">
        <h2 className="text-lg font-semibold mb-3">
          📊 Department Activity
        </h2>

        <div className="h-40 flex items-center justify-center text-gray-300">
          (Chart Area - you can later add Recharts / ApexCharts here)
        </div>
      </div>
    </div>
  );
}