export default function DashboardStats() {
  const stats = [
    { label: "Books", value: 1200 },
    { label: "Issued", value: 340 },
    { label: "Pending Requests", value: 45 },
    { label: "Users", value: 890 }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="p-4 bg-white shadow rounded-xl">
          <h3 className="text-lg font-bold">{s.label}</h3>
          <p className="text-2xl">{s.value}</p>
        </div>
      ))}
    </div>
  );
}