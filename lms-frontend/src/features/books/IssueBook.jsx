import { useState } from "react";

export default function IssueBook() {
  const [pending, setPending] = useState([
    { id: 1, book: "React Guide", user: "Ali", status: "Pending" }
  ]);

  const approve = (id) => {
    setPending(
      pending.map((b) =>
        b.id === id ? { ...b, status: "Approved" } : b
      )
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Admin Book Requests</h2>

      {pending.map((b) => (
        <div key={b.id} className="p-3 bg-white shadow mt-3 rounded">
          <p>📘 {b.book}</p>
          <p>👤 {b.user}</p>
          <p>Status: {b.status}</p>

          <button
            onClick={() => approve(b.id)}
            className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
          >
            Approve
          </button>
        </div>
      ))}
    </div>
  );
}