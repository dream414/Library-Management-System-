import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { BookOpen, FileText, Download, Share2 } from "lucide-react";

export default function ResearcherDashboard() {
  const { isDark } = useContext(ThemeContext);

  const [papers] = useState([
    { id: 1, title: "AI in Education", journal: "Tech Journal", date: "2026-03-15", citations: 12 },
    { id: 2, title: "Machine Learning Models", journal: "Science Quarterly", date: "2026-02-20", citations: 8 },
    { id: 3, title: "Data Analysis Techniques", journal: "Research Today", date: "2026-01-10", citations: 5 },
  ]);

  const [resources] = useState([
    { id: 1, name: "Advanced Machine Learning", type: "Book", status: "Available" },
    { id: 2, name: "Research Methodology", type: "Journal", status: "Available" },
    { id: 3, name: "Data Science Handbook", type: "eBook", status: "Issued" },
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
          🔬 Researcher Dashboard
        </h1>
        <p className={mutedClass}>Research Publications & Resources</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        
        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-blue-500/30 to-blue-700/30" : "bg-gradient-to-br from-blue-200/50 to-blue-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Published Papers</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <FileText size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-green-500/30 to-green-700/30" : "bg-gradient-to-br from-green-200/50 to-green-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Total Citations</p>
              <p className="text-2xl font-bold">25</p>
            </div>
            <Share2 size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-yellow-500/30 to-yellow-700/30" : "bg-gradient-to-br from-yellow-200/50 to-yellow-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Resources Used</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <BookOpen size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-purple-500/30 to-purple-700/30" : "bg-gradient-to-br from-purple-200/50 to-purple-400/50"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>h-Index</p>
              <p className="text-2xl font-bold">4</p>
            </div>
            <FileText size={32} className="opacity-50" />
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Published Papers */}
        <div className={`p-5 rounded-xl backdrop-blur ${cardClass}`}>
          <h2 className={`text-lg font-semibold mb-4 ${textClass}`}>
            📄 Published Papers
          </h2>

          {papers.map((paper) => (
            <div
              key={paper.id}
              className={`p-3 rounded-lg mb-3 ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className={`font-medium ${textClass}`}>{paper.title}</p>
                  <p className={`text-sm ${mutedClass}`}>{paper.journal}</p>
                </div>
                <button className={`p-1 rounded ${isDark ? "hover:bg-blue-500/30" : "hover:bg-blue-200/30"}`}>
                  <Download size={16} className={isDark ? "text-blue-400" : "text-blue-600"} />
                </button>
              </div>
              <div className={`flex justify-between mt-2 text-xs ${mutedClass}`}>
                <span>{paper.date}</span>
                <span>Citations: {paper.citations}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Research Resources */}
        <div className={`p-5 rounded-xl backdrop-blur ${cardClass}`}>
          <h2 className={`text-lg font-semibold mb-4 ${textClass}`}>
            📚 Research Resources
          </h2>

          {resources.map((res) => (
            <div
              key={res.id}
              className={`p-3 rounded-lg mb-3 ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-black/5 hover:bg-black/10"} transition`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className={`font-medium ${textClass}`}>{res.name}</p>
                  <p className={`text-sm ${mutedClass}`}>{res.type}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  res.status === "Available"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}>
                  {res.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}