import { useState } from "react";

export default function BookRequest() {
  const [book, setBook] = useState("");
  const [requests, setRequests] = useState([]);

  const sendRequest = () => {
    const newReq = {
      id: Date.now(),
      book,
      status: "Pending"
    };

    setRequests([...requests, newReq]);
    setBook("");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Request a Book</h2>

      <input
        className="p-2 border rounded w-full mb-2"
        placeholder="Book Name"
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />

      <button
        onClick={sendRequest}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send Request
      </button>

      <div className="mt-4">
        {requests.map((r) => (
          <div key={r.id} className="p-2 bg-gray-100 mt-2 rounded">
            📘 {r.book} — {r.status}
          </div>
        ))}
      </div>
    </div>
  );
}