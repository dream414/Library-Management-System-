import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { BookOpen, Users, Award, Send } from "lucide-react";

export default function VisitorDashboard() {
  const { isDark } = useContext(ThemeContext);

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
    alert("Request submitted successfully!");
    setForm({ name: "", email: "", interest: "" });
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
    <div className={`min-h-screen p-6 ${bgClass}`}>

      {/* Header */}
      <h1 className={`text-3xl font-bold mb-2 ${textClass}`}>
        👋 Welcome Visitor
      </h1>

      <p className={`${mutedClass} mb-6`}>
        Explore our LMS system before registering
      </p>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div className={`p-4 rounded-xl backdrop-blur ${cardClass}`}>
          <div className={textClass}>
            🎓 Total Courses <br />
            <span className="text-2xl font-bold">12+</span>
          </div>
        </div>

        <div className={`p-4 rounded-xl backdrop-blur ${cardClass}`}>
          <div className={textClass}>
            👨‍🏫 Expert Teachers <br />
            <span className="text-2xl font-bold">20+</span>
          </div>
        </div>

        <div className={`p-4 rounded-xl backdrop-blur ${cardClass}`}>
          <div className={textClass}>
            🧑‍🎓 Students Enrolled <br />
            <span className="text-2xl font-bold">1000+</span>
          </div>
        </div>

      </div>

      {/* Courses Section */}
      <div className={`p-5 rounded-xl backdrop-blur ${cardClass} mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${textClass}`}>📚 Popular Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {courses.map((c) => (
            <div key={c.id} className={`p-3 rounded-lg ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition`}>
              <h3 className={`font-bold ${textClass}`}>{c.name}</h3>
              <p className={`text-sm ${mutedClass}`}>{c.level}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Announcements */}
      <div className={`p-5 rounded-xl backdrop-blur ${cardClass} mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${textClass}`}>📢 Announcements</h2>

        <ul className={`space-y-2 ${mutedClass}`}>
          {announcements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>

      {/* Registration Form */}
      <div className={`p-5 rounded-xl backdrop-blur ${cardClass}`}>
        <h2 className={`text-xl font-semibold mb-4 ${textClass}`}>📝 Request Registration</h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`w-full p-2 rounded ${
              isDark 
                ? "bg-black/30 text-white placeholder-gray-400 border border-white/10" 
                : "bg-white/30 text-gray-900 placeholder-gray-600 border border-white/50"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`w-full p-2 rounded ${
              isDark 
                ? "bg-black/30 text-white placeholder-gray-400 border border-white/10" 
                : "bg-white/30 text-gray-900 placeholder-gray-600 border border-white/50"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />

          <select
            value={form.interest}
            onChange={(e) => setForm({ ...form, interest: e.target.value })}
            className={`w-full p-2 rounded ${
              isDark 
                ? "bg-black/30 text-white border border-white/10" 
                : "bg-white/30 text-gray-900 border border-white/50"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option>Computer Science</option>
            <option>Web Development</option>
            <option>Design</option>
            <option>AI & ML</option>
          </select>

          <button
            type="submit"
            className={`w-full py-2 rounded font-semibold transition flex items-center justify-center gap-2 ${
              isDark
                ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                : "bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white"
            }`}
          >
            <Send size={18} />
            Submit Request
          </button>

        </form>
      </div>

    </div>
  );
}