import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { DollarSign, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

export default function AccountantDashboard() {
  const { isDark } = useContext(ThemeContext);

  const [transactions] = useState([
    { id: 1, user: "Ali Khan", amount: 5000, type: "Received", date: "2026-04-18", status: "Completed" },
    { id: 2, user: "Sara Ahmed", amount: 3500, type: "Received", date: "2026-04-17", status: "Completed" },
    { id: 3, user: "Fine Payment", amount: 500, type: "Received", date: "2026-04-16", status: "Completed" },
    { id: 4, user: "Library Expenses", amount: 2000, type: "Paid", date: "2026-04-15", status: "Pending" },
  ]);

  const stats = {
    totalReceived: 45000,
    totalPaid: 12000,
    pending: 2000,
    balance: 33000,
  };

  const bgClass = isDark 
    ? "bg-gradient-to-br from-black via-gray-900 to-purple-900" 
    : "bg-gradient-to-br from-white via-gray-50 to-blue-50";
  
  const cardClass = isDark
    ? "bg-white/10 border border-white/20"
    : "bg-white/40 border border-white/60";

  const textClass = isDark ? "text-white" : "text-gray-900";
  const mutedClass = isDark ? "text-gray-100" : "text-gray-900";

  return (
    <div className={`p-6 min-h-screen ${bgClass}`}>

      {/* Header */}
      <div className="mb-6">
        <h1 className={`text-3xl font-bold mb-2 ${textClass}`}>
          💰 Accountant Dashboard
        </h1>
        <p className={mutedClass}>Financial Management & Transactions</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        
        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-green-500 to-green-700" : "bg-gradient-to-br from-green-200 to-green-400"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Total Received</p>
              <p className="text-2xl font-bold">Rs {stats.totalReceived}</p>
            </div>
            <TrendingUp size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-red-500 to-red-700" : "bg-gradient-to-br from-red-200 to-red-400"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Total Paid</p>
              <p className="text-2xl font-bold">Rs {stats.totalPaid}</p>
            </div>
            <DollarSign size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-yellow-500 to-yellow-700" : "bg-gradient-to-br from-yellow-300 to-yellow-400"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Pending</p>
              <p className="text-2xl font-bold">Rs {stats.pending}</p>
            </div>
            <AlertCircle size={32} className="opacity-50" />
          </div>
        </div>

        <div className={`p-4 rounded-xl ${isDark ? "bg-gradient-to-br from-blue-500 to-blue-700" : "bg-gradient-to-br from-blue-200 to-blue-400"} backdrop-blur`}>
          <div className={`flex items-center justify-between ${textClass}`}>
            <div>
              <p className={`text-sm ${mutedClass}`}>Balance</p>
              <p className="text-2xl font-bold">Rs {stats.balance}</p>
            </div>
            <CheckCircle size={32} className="opacity-50" />
          </div>
        </div>

      </div>

      {/* Transactions Table */}
      <div className={`p-5 rounded-xl backdrop-blur ${cardClass} overflow-auto`}>
        <h2 className={`text-lg font-semibold mb-4 ${textClass}`}>
          💳 Recent Transactions
        </h2>

        <table className="w-full text-sm">
          <thead className={`${isDark ? "border-white/20" : "border-gray-300"} border-b`}>
            <tr>
              <th className={`text-left p-3 ${mutedClass}`}>Description</th>
              <th className={`text-left p-3 ${mutedClass}`}>Amount</th>
              <th className={`text-left p-3 ${mutedClass}`}>Type</th>
              <th className={`text-left p-3 ${mutedClass}`}>Date</th>
              <th className={`text-left p-3 ${mutedClass}`}>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className={`${isDark ? "border-white/10 hover:bg-white/5" : "border-gray-200 hover:bg-black/5"} border-b transition`}>
                <td className={`p-3 ${textClass}`}>{txn.user}</td>
                <td className={`p-3 ${textClass} font-semibold`}>Rs {txn.amount}</td>
                <td className={`p-3 ${txn.type === "Received" ? "text-green-400" : "text-red-400"}`}>
                  {txn.type}
                </td>
                <td className={`p-3 ${mutedClass}`}>{txn.date}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    txn.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}