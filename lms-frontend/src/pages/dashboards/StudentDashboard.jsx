import { useContext, useState } from "react";
import { RequestContext } from "../../context/RequestContext";
import { AuthContext } from "../../context/AuthContext";

export default function StudentDashboard() {

  const { requests, addRequest, calculateFine, returnBook } =
    useContext(RequestContext);

  const { user } = useContext(AuthContext);

  const [bookName, setBookName] = useState("");

  const myRequests = requests.filter(r => r.user === user?.email);

  const handleRequest = () => {
    if (!bookName) return;
    addRequest(bookName, user.email);
    setBookName("");
  };

  return (
    <div className="p-6 text-white">

      <h1 className="text-2xl font-bold mb-5">🎓 Student Dashboard</h1>

      {/* Request Box */}
      <div className="bg-white/10 p-4 rounded-xl mb-6">
        <input
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          placeholder="Enter book name"
          className="p-2 w-full bg-white/20 rounded mb-2"
        />

        <button
          onClick={handleRequest}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Send Request
        </button>
      </div>

      {/* Table */}
      <div className="bg-white/10 p-4 rounded-xl overflow-auto">

        <table className="w-full text-sm">

          <thead>
            <tr className="border-b border-white/20">
              <th>Book</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Fine</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {myRequests.map(req => (
              <tr key={req.id} className="border-b border-white/10">

                <td>{req.name}</td>

                <td className={
                  req.status === "Pending"
                    ? "text-yellow-400"
                    : req.status === "Approved"
                    ? "text-green-400"
                    : "text-red-400"
                }>
                  {req.status}
                </td>

                <td>
                  {req.dueDate
                    ? new Date(req.dueDate).toLocaleDateString()
                    : "-"}
                </td>

                <td className="text-red-400">
                  Rs {calculateFine(req)}
                </td>

                <td>
                  {!req.returned && req.status === "Approved" && (
                    <button
                      onClick={() => returnBook(req.id)}
                      className="bg-blue-500 px-2 py-1 text-xs rounded"
                    >
                      Return
                    </button>
                  )}

                  {req.returned && (
                    <span className="text-green-400 text-xs">
                      Returned
                    </span>
                  )}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}