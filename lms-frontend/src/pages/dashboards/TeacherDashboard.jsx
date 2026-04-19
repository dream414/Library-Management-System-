import { useState } from "react";

export default function TeacherDashboard() {

  // 🎓 Classes
  const [classes] = useState([
    { id: 1, name: "React Basics", students: 25 },
    { id: 2, name: "JavaScript Advanced", students: 18 }
  ]);

  // 📋 Attendance
  const [attendance, setAttendance] = useState([]);

  // 📝 Assignments
  const [assignments, setAssignments] = useState([
    { id: 1, title: "Build Todo App", class: "React Basics", status: "Pending" }
  ]);

  // ➕ Mark Attendance
  const markAttendance = (className, studentCount) => {
    setAttendance(prev => [
      ...prev,
      {
        className,
        present: studentCount,
        date: new Date().toLocaleDateString()
      }
    ]);
  };

  // 📤 Add Assignment
  const addAssignment = () => {
    const newTask = {
      id: Date.now(),
      title: "New Project Task",
      class: "React Basics",
      status: "Pending"
    };

    setAssignments(prev => [...prev, newTask]);
  };

  // ✔ Complete Assignment
  const completeAssignment = (id) => {
    setAssignments(prev =>
      prev.map(a =>
        a.id === id ? { ...a, status: "Completed" } : a
      )
    );
  };

  return (
    <div className="p-6 text-white">

      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">
        👨‍🏫 Teacher Dashboard
      </h1>

      {/* Classes */}
      <div className="bg-white/10 backdrop-blur p-4 rounded-xl mb-6">

        <h2 className="text-lg mb-4">My Classes</h2>

        <div className="grid md:grid-cols-2 gap-3">

          {classes.map(cls => (
            <div
              key={cls.id}
              className="bg-white/5 p-3 rounded hover:scale-105 transition"
            >

              <h3 className="font-semibold">{cls.name}</h3>
              <p className="text-sm text-gray-300">
                Students: {cls.students}
              </p>

              <button
                onClick={() => markAttendance(cls.name, cls.students)}
                className="mt-2 bg-blue-500 px-2 py-1 rounded text-xs hover:scale-105"
              >
                Mark Attendance
              </button>

            </div>
          ))}

        </div>
      </div>

      {/* Attendance */}
      <div className="bg-white/10 backdrop-blur p-4 rounded-xl mb-6">

        <h2 className="text-lg mb-4">Attendance Records</h2>

        {attendance.length === 0 ? (
          <p className="text-gray-300">No attendance marked</p>
        ) : (
          attendance.map((a, i) => (
            <div
              key={i}
              className="bg-white/5 p-2 rounded flex justify-between mb-2"
            >
              <span>{a.className}</span>
              <span>Present: {a.present}</span>
              <span>{a.date}</span>
            </div>
          ))
        )}

      </div>

      {/* Assignments */}
      <div className="bg-white/10 backdrop-blur p-4 rounded-xl">

        <div className="flex justify-between mb-4">
          <h2 className="text-lg">Assignments</h2>

          <button
            onClick={addAssignment}
            className="bg-green-500 px-3 py-1 rounded text-xs hover:scale-105"
          >
            + Add Assignment
          </button>
        </div>

        {assignments.map(a => (
          <div
            key={a.id}
            className="bg-white/5 p-3 rounded flex justify-between items-center mb-2"
          >

            <div>
              <p><b>{a.title}</b></p>
              <p className="text-sm text-gray-300">{a.class}</p>
              <p className={a.status === "Completed" ? "text-green-400" : "text-yellow-400"}>
                {a.status}
              </p>
            </div>

            {a.status === "Pending" && (
              <button
                onClick={() => completeAssignment(a.id)}
                className="bg-blue-500 px-3 py-1 rounded text-xs hover:scale-105"
              >
                Mark Done
              </button>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}