export default function DigitalDashboard() {
  return (
    <div className="min-h-screen p-6 text-white bg-gradient-to-br from-black via-gray-900 to-blue-900">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6">
        📊 Digital Smart Dashboard
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white/10 p-4 rounded-xl">👨‍🎓 Users: 1200</div>
        <div className="bg-white/10 p-4 rounded-xl">📚 Books: 4500</div>
        <div className="bg-white/10 p-4 rounded-xl">📩 Requests: 320</div>
        <div className="bg-white/10 p-4 rounded-xl">✅ Approved: 210</div>

      </div>

      {/* ANALYTICS AREA */}
      <div className="bg-white/10 p-6 rounded-xl h-60 flex items-center justify-center text-gray-300">
        📈 Analytics Graph Area (Recharts/ApexCharts later)
      </div>

    </div>
  );
}