import { useState } from "react";

export default function LibraryDashboard() {

  const [books, setBooks] = useState([
    { id: 1, name: "React Basics", status: "Available" },
    { id: 2, name: "Node JS Guide", status: "Issued" },
    { id: 3, name: "Data Structures", status: "Available" },
  ]);

  return (
    <div className="min-h-screen p-6 text-white bg-gradient-to-br from-gray-900 via-black to-green-900">

      <h1 className="text-3xl font-bold mb-6">
        📚 Library Management System
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4 mb-6">

        <div className="bg-white/10 p-4 rounded-xl">
          Total Books: {books.length}
        </div>

        <div className="bg-green-500/20 p-4 rounded-xl">
          Available: {books.filter(b => b.status === "Available").length}
        </div>

        <div className="bg-red-500/20 p-4 rounded-xl">
          Issued: {books.filter(b => b.status === "Issued").length}
        </div>

      </div>

      {/* BOOK LIST */}
      <div className="bg-white/10 p-4 rounded-xl">

        {books.map((book) => (
          <div
            key={book.id}
            className="flex justify-between p-3 border-b border-white/10"
          >
            <span>{book.name}</span>

            <span
              className={
                book.status === "Available"
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              {book.status}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}