import { useState } from "react";

export default function VisitorDashboard() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "Computer Science",
  });

  const courses = [
    { id: 1, name: "Web Development", level: "Beginner" },
    { id: 2, name: "React JS Mastery", level: "Intermediate" },
    { id: 3, name: "Data Structures", level: "Advanced" },
    { id: 4, name: "UI/UX Design", level: "Beginner" },
  ];

  const announcements = [
    "📢 Admissions open for Spring 2026",
    "📢 New AI course added",
    "📢 Scholarship program available",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request submitted successfully 🚀");
    setForm({ name: "", email: "", interest: "" });
  };

  return (
    <div className="min-h-screen p-6 text-white bg-gradient-to-br from-black via-gray-900 to-blue-900">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-2">
        👋 Welcome Visitor
      </h1>

      <p className="text-gray-300 mb-6">
        Explore our LMS system before registering
      </p>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
          🎓 Total Courses <br />
          <span className="text-2xl font-bold">12+</span>
        </div>

        <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
          👨‍🏫 Expert Teachers <br />
          <span className="text-2xl font-bold">20+</span>
        </div>

        <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
          🧑‍🎓 Students Enrolled <br />
          <span className="text-2xl font-bold">1000+</span>
        </div>

      </div>

      {/* COURSES SECTION */}
      <div className="bg-white/10 p-5 rounded-xl backdrop-blur mb-6">
        <h2 className="text-xl mb-4">📚 Popular Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {courses.map((c) => (
            <div key={c.id} className="p-3 bg-white/10 rounded-lg">
              <h3 className="font-bold">{c.name}</h3>
              <p className="text-sm text-gray-300">{c.level}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ANNOUNCEMENTS */}
      <div className="bg-white/10 p-5 rounded-xl backdrop-blur mb-6">
        <h2 className="text-xl mb-4">📢 Announcements</h2>

        <ul className="space-y-2 text-gray-300">
          {announcements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>

      {/* REGISTRATION FORM */}
      <div className="bg-white/10 p-5 rounded-xl backdrop-blur">
        <h2 className="text-xl mb-4">📝 Request Registration</h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 rounded bg-black/30"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-2 rounded bg-black/30"
          />

          <select
            value={form.interest}
            onChange={(e) => setForm({ ...form, interest: e.target.value })}
            className="w-full p-2 rounded bg-black/30"
          >
            <option>Computer Science</option>
            <option>Web Development</option>
            <option>Design</option>
            <option>AI & ML</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-500 py-2 rounded hover:bg-blue-600 transition"
          >
            Submit Request
          </button>

        </form>
      </div>

    </div>
  );
}