import { useState } from "react";

export default function SuperAdminDashboard() {

  const [systemStats] = useState({
    users: 1240,
    admins: 12,
    teachers: 45,
    students: 980,
    requests: 320,
  });

  return (
    <div className="p-6 text-white min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6">
        👑 Super Admin Dashboard
      </h1>

      {/* SYSTEM STATS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">

        <div className="bg-blue-500/20 p-4 rounded-xl">
          Users <br /> {systemStats.users}
        </div>

        <div className="bg-purple-500/20 p-4 rounded-xl">
          Admins <br /> {systemStats.admins}
        </div>

        <div className="bg-green-500/20 p-4 rounded-xl">
          Teachers <br /> {systemStats.teachers}
        </div>

        <div className="bg-yellow-500/20 p-4 rounded-xl">
          Students <br /> {systemStats.students}
        </div>

        <div className="bg-red-500/20 p-4 rounded-xl">
          Requests <br /> {systemStats.requests}
        </div>

      </div>

      {/* CONTROL PANEL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* ROLE CONTROL */}
        <div className="bg-white/10 backdrop-blur p-5 rounded-xl">
          <h2 className="text-lg mb-3">⚙ Role Control</h2>

          <button className="w-full mb-2 bg-blue-500 py-2 rounded">
            Create New Admin
          </button>

          <button className="w-full mb-2 bg-green-500 py-2 rounded">
            Assign Role to User
          </button>

          <button className="w-full bg-purple-500 py-2 rounded">
            Remove Access
          </button>
        </div>

        {/* SYSTEM ACTIVITY */}
        <div className="bg-white/10 backdrop-blur p-5 rounded-xl">
          <h2 className="text-lg mb-3">📊 System Activity</h2>

          <ul className="text-sm space-y-2 text-gray-300">
            <li>✔ New student registered</li>
            <li>✔ Teacher approved request</li>
            <li>✔ Book issued successfully</li>
            <li>✔ Admin updated system settings</li>
          </ul>

        </div>

      </div>

      {/* FOOTER STATUS */}
      <div className="mt-6 bg-green-500/10 p-4 rounded-xl text-center">
        🟢 System Status: ALL SYSTEMS OPERATIONAL
      </div>

    </div>
  );
}