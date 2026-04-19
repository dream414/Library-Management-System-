import { useState } from "react";

export default function AccountantDashboard() {

  // 📊 Dummy Users Data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ali Khan",
      fee: 5000,
      paid: 3000,
      fine: 200,
      lastPayment: "2026-04-10"
    },
    {
      id: 2,
      name: "Sara Ahmed",
      fee: 4000,
      paid: 4000,
      fine: 0,
      lastPayment: "2026-04-12"
    }
  ]);

  const [history, setHistory] = useState([]);

  // 💰 Pay Fee
  const handlePay = (id, amount) => {
    setUsers(prev =>
      prev.map(user => {
        if (user.id === id) {
          const updatedPaid = user.paid + amount;

          setHistory(prevHistory => [
            ...prevHistory,
            {
              name: user.name,
              amount,
              date: new Date().toLocaleDateString(),
              type: "Fee Payment"
            }
          ]);

          return {
            ...user,
            paid: updatedPaid,
            lastPayment: new Date().toISOString().split("T")[0]
          };
        }
        return user;
      })
    );
  };

  // ⚠️ Add Fine
  const addFine = (id) => {
    setUsers(prev =>
      prev.map(user => {
        if (user.id === id) {
          const newFine = user.fine + 100;

          setHistory(prevHistory => [
            ...prevHistory,
            {
              name: user.name,
              amount: 100,
              date: new Date().toLocaleDateString(),
              type: "Fine Added"
            }
          ]);

          return { ...user, fine: newFine };
        }
        return user;
      })
    );
  };

  // 💵 Pay Fine
  const payFine = (id) => {
    setUsers(prev =>
      prev.map(user => {
        if (user.id === id && user.fine > 0) {

          setHistory(prevHistory => [
            ...prevHistory,
            {
              name: user.name,
              amount: user.fine,
              date: new Date().toLocaleDateString(),
              type: "Fine Paid"
            }
          ]);

          return { ...user, fine: 0 };
        }
        return user;
      })
    );
  };

  return (
    <div className="p-6 text-white">

      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">
        💰 Accountant Dashboard
      </h1>

      {/* Users Table */}
      <div className="bg-white/10 backdrop-blur p-4 rounded-xl mb-6">

        <h2 className="mb-4 text-lg">Student Payments</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead>
              <tr className="border-b border-white/20 text-left">
                <th className="p-2">Name</th>
                <th>Total Fee</th>
                <th>Paid</th>
                <th>Remaining</th>
                <th>Fine</th>
                <th>Last Payment</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map(user => {
                const remaining = user.fee - user.paid;

                return (
                  <tr key={user.id} className="border-b border-white/10">

                    <td className="p-2">{user.name}</td>
                    <td>{user.fee}</td>

                    <td className="text-green-400">
                      {user.paid}
                    </td>

                    <td className="text-yellow-400">
                      {remaining}
                    </td>

                    <td className="text-red-400">
                      {user.fine}
                    </td>

                    <td>{user.lastPayment}</td>

                    <td className="flex gap-2 flex-wrap">

                      <button
                        onClick={() => handlePay(user.id, 500)}
                        className="bg-green-500 px-2 py-1 rounded text-xs hover:scale-105"
                      >
                        Pay 500
                      </button>

                      <button
                        onClick={() => addFine(user.id)}
                        className="bg-yellow-500 px-2 py-1 rounded text-xs hover:scale-105"
                      >
                        + Fine
                      </button>

                      {user.fine > 0 && (
                        <button
                          onClick={() => payFine(user.id)}
                          className="bg-red-500 px-2 py-1 rounded text-xs hover:scale-105"
                        >
                          Pay Fine
                        </button>
                      )}

                    </td>

                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>
      </div>

      {/* 📜 Transaction History */}
      <div className="bg-white/10 backdrop-blur p-4 rounded-xl">

        <h2 className="mb-4 text-lg">Transaction History</h2>

        {history.length === 0 ? (
          <p className="text-gray-300">No transactions yet</p>
        ) : (
          <ul className="space-y-2 text-sm">
            {history.map((h, i) => (
              <li
                key={i}
                className="bg-white/5 p-2 rounded flex justify-between"
              >
                <span>{h.name}</span>
                <span>{h.type}</span>
                <span>{h.amount}</span>
                <span>{h.date}</span>
              </li>
            ))}
          </ul>
        )}

      </div>

    </div>
  );
}