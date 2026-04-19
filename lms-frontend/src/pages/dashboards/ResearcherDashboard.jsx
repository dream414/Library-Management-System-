import { useState } from "react";

export default function ResearcherDashboard() {
  const [papers, setPapers] = useState([
    {
      id: 1,
      title: "AI in Education",
      status: "Approved",
      date: "2026-04-10",
    },
    {
      id: 2,
      title: "Machine Learning Models",
      status: "Pending",
      date: "2026-04-15",
    },
  ]);

  const [form, setForm] = useState({ title: "", file: null });

  const handleUpload = () => {
    if (!form.title) return;

    const newPaper = {
      id: Date.now(),
      title: form.title,
      status: "Pending",
      date: new Date().toISOString().split("T")[0],
    };

    setPapers([newPaper, ...papers]);
    setForm({ title: "", file: null });
  };

  return (
    <div className="p-6 text-white space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">📚 Researcher Dashboard</h1>
        <button className="bg-purple-500 px-4 py-2 rounded-lg hover:scale-105 transition">
          My Publications
        </button>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
          <h2 className="text-sm text-gray-300">Total Papers</h2>
          <p className="text-2xl font-bold">{papers.length}</p>
        </div>

        <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
          <h2 className="text-sm text-gray-300">Approved</h2>
          <p className="text-2xl font-bold text-green-400">
            {papers.filter(p => p.status === "Approved").length}
          </p>
        </div>

        <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
          <h2 className="text-sm text-gray-300">Pending Review</h2>
          <p className="text-2xl font-bold text-yellow-400">
            {papers.filter(p => p.status === "Pending").length}
          </p>
        </div>

      </div>

      {/* UPLOAD SECTION */}
      <div className="bg-white/10 p-5 rounded-xl backdrop-blur space-y-3">

        <h2 className="text-lg font-semibold">Upload New Research Paper</h2>

        <input
          type="text"
          placeholder="Paper Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-2 rounded bg-black/40"
        />

        <input
          type="file"
          className="w-full p-2 rounded bg-black/40"
          onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
        />

        <button
          onClick={handleUpload}
          className="bg-blue-500 px-4 py-2 rounded hover:scale-105 transition"
        >
          Upload Paper
        </button>

      </div>

      {/* PAPERS TABLE */}
      <div className="bg-white/10 p-5 rounded-xl backdrop-blur">

        <h2 className="text-lg font-semibold mb-3">My Research Papers</h2>

        <table className="w-full text-sm">

          <thead>
            <tr className="text-left border-b border-white/20">
              <th className="p-2">Title</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {papers.map((p) => (
              <tr key={p.id} className="border-b border-white/10">

                <td className="p-2">{p.title}</td>

                <td>
                  <span
                    className={
                      p.status === "Approved"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }
                  >
                    {p.status}
                  </span>
                </td>

                <td>{p.date}</td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* VIDEO SECTION (optional UI block) */}
      <div className="bg-white/10 p-4 rounded-xl backdrop-blur">
        <h2 className="mb-2 font-semibold">🎥 Research Guidelines</h2>

        <video
          className="w-full rounded-lg"
          controls
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
      </div>

    </div>
  );
}