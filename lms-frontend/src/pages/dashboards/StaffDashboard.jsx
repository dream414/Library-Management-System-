import { useState } from "react";

export default function StaffDashboard() {

  // 📌 Requests (Library / Admin / Student help)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Issue Books to Student",
      assignedTo: "Ali Staff",
      status: "Pending",
      priority: "High"
    },
    {
      id: 2,
      title: "Return Verification",
      assignedTo: "Sara Staff",
      status: "In Progress",
      priority: "Medium"
    }
  ]);

  const [completed, setCompleted] = useState([]);

  // ✔ Mark Task Complete
  const completeTask = (id) => {
    const task = tasks.find(t => t.id === id);

    if (task) {
      setCompleted(prev => [...prev, { ...task, status: "Completed" }]);
      setTasks(prev => prev.filter(t => t.id !== id));
    }
  };

  // ⏳ Update Status
  const updateStatus = (id, newStatus) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="p-6 text-white">

      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">
        🧑‍💼 Staff Dashboard
      </h1>

      {/* Task Section */}
      <div className="bg-white/10 backdrop-blur p-4 rounded-xl mb-6">

        <h2 className="text-lg mb-4">Active Tasks</h2>

        {tasks.length === 0 ? (
          <p className="text-gray-300">No active tasks</p>
        ) : (
          <div className="space-y-3">

            {tasks.map(task => (
              <div
                key={task.id}
                className="bg-white/5 p-3 rounded flex justify-between items-center"
              >

                {/* Info */}
                <div>
                  <h3 className="font-semibold">{task.title}</h3>
                  <p className="text-sm text-gray-300">
                    Assigned: {task.assignedTo}
                  </p>

                  <p className="text-xs text-yellow-300">
                    Priority: {task.priority}
                  </p>

                  <p className="text-xs text-blue-300">
                    Status: {task.status}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 flex-wrap">

                  <button
                    onClick={() => updateStatus(task.id, "In Progress")}
                    className="bg-blue-500 px-2 py-1 rounded text-xs hover:scale-105"
                  >
                    Start
                  </button>

                  <button
                    onClick={() => updateStatus(task.id, "Review")}
                    className="bg-yellow-500 px-2 py-1 rounded text-xs hover:scale-105"
                  >
                    Review
                  </button>

                  <button
                    onClick={() => completeTask(task.id)}
                    className="bg-green-500 px-2 py-1 rounded text-xs hover:scale-105"
                  >
                    Complete
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

      {/* Completed Tasks */}
      <div className="bg-white/10 backdrop-blur p-4 rounded-xl">

        <h2 className="text-lg mb-4">Completed Tasks</h2>

        {completed.length === 0 ? (
          <p className="text-gray-300">No completed tasks yet</p>
        ) : (
          <div className="space-y-2">

            {completed.map(task => (
              <div
                key={task.id}
                className="bg-green-500/20 p-2 rounded flex justify-between"
              >
                <span>{task.title}</span>
                <span className="text-green-300">Completed ✔</span>
              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}