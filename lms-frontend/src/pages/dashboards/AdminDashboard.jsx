import { useContext, useState } from "react";
import { RequestContext } from "../../context/RequestContext";
import Modal from "../../components/common/Modal";

export default function AdminDashboard() {
  const { requests, approveRequest, rejectRequest } = useContext(RequestContext);

  const [modalData, setModalData] = useState(null);
  const [search, setSearch] = useState("");

  const handleApprove = (req) => {
    approveRequest(req.id);
    setModalData({ ...req, status: "Approved" });
  };

  const handleReject = (req) => {
    rejectRequest(req.id);
    setModalData({ ...req, status: "Rejected" });
  };

  const filtered = requests.filter((r) =>
    r.user.toLowerCase().includes(search.toLowerCase())
  );

  const totalPending = requests.filter(r => r.status === "Pending").length;
  const totalApproved = requests.filter(r => r.status === "Approved").length;
  const totalRejected = requests.filter(r => r.status === "Rejected").length;

  return (
    <div className="p-6 text-white min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-4">🛠 Admin Control Panel</h1>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-yellow-500/20 p-4 rounded-xl">
          Pending: {totalPending}
        </div>
        <div className="bg-green-500/20 p-4 rounded-xl">
          Approved: {totalApproved}
        </div>
        <div className="bg-red-500/20 p-4 rounded-xl">
          Rejected: {totalRejected}
        </div>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Search user..."
        className="w-full p-2 mb-4 bg-white/10 rounded"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <div className="bg-white/10 backdrop-blur p-4 rounded-xl">

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/20">
              <th>User</th>
              <th>Book</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((req) => (
              <tr key={req.id} className="border-b border-white/10">

                <td className="p-2">{req.user}</td>
                <td>{req.name}</td>

                <td>
                  <span className={
                    req.status === "Pending"
                      ? "text-yellow-400"
                      : req.status === "Approved"
                      ? "text-green-400"
                      : "text-red-400"
                  }>
                    {req.status}
                  </span>
                </td>

                <td className="flex gap-2">

                  {req.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleApprove(req)}
                        className="bg-green-500 px-3 py-1 rounded"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => handleReject(req)}
                        className="bg-red-500 px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}

                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* MODAL */}
      {modalData && (
        <Modal onClose={() => setModalData(null)}>
          <h2 className="text-xl mb-2">
            {modalData.status}
          </h2>
          <p>User: {modalData.user}</p>
          <p>Book: {modalData.name}</p>
        </Modal>
      )}
    </div>
  );
}