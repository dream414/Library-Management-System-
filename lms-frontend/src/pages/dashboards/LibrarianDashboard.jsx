import { useState } from "react";

export default function LibrarianDashboard() {

  // 📚 Books List
  const [books, setBooks] = useState([
    { id: 1, name: "React Basics", author: "Meta", available: true },
    { id: 2, name: "JavaScript Deep Dive", author: "Kyle", available: false },
    { id: 3, name: "Data Structures", author: "CLRS", available: true }
  ]);

  // 📥 Issue Requests
  const [requests, setRequests] = useState([
    { id: 1, student: "Ali", book: "React Basics", status: "Pending" },
    { id: 2, student: "Sara", book: "Data Structures", status: "Pending" }
  ]);

  // 📖 Issued History
  const [history, setHistory] = useState([]);

  // ✔ Issue Book
  const issueBook = (req) => {

    // mark request approved
    setRequests(prev =>
      prev.map(r =>
        r.id === req.id ? { ...r, status: "Issued" } : r
      )
    );

    // update book availability
    setBooks(prev =>
      prev.map(b =>
        b.name === req.book ? { ...b, available: false } : b
      )
    );

    // add history
    setHistory(prev => [
      ...prev,
      {
        student: req.student,
        book: req.book,
        type: "Issued",
        date: new Date().toLocaleDateString()
      }
    ]);
  };

  // 🔄 Return Book
  const returnBook = (bookName, student) => {

    setBooks(prev =>
      prev.map(b =>
        b.name === bookName ? { ...b, available: true } : b
      )
    );

    setHistory(prev => [
      ...prev,
      {
        student,
        book: bookName,
        type: "Returned",
        date: new Date().toLocaleDateString()
      }
    ]);
  };

  return (
    <div className="p-6 text-white">

      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">
        📚 Librarian Dashboard
      </h1>

      {/* Books Section */}
      <div className="bg-white/10 backdrop-blur p-4 rounded-xl mb-6">

        <h2 className="text-lg mb-4">Books Inventory</h2>

        <div className="grid md:grid-cols-3 gap-3">

          {books.map(book => (
            <div
              key={book.id}
              className="bg-white/5 p-3 rounded hover:scale-105 transition"
            >

              <h3 className="font-semibold">{book.name}</h3>
              <p className="text-sm text-gray-300">{book.author}</p>

              <p className={book.available ? "text-green-400" : "text-red-400"}>
                {book.available ? "Available" : "Issued"}
              </p>

              {/* Return Button */}
              {!book.available && (
                <button
                  onClick={() => returnBook(book.name, "Unknown Student")}
                  className="mt-2 bg-yellow-500 px-2 py-1 rounded text-xs"
                >
                  Mark Return
                </button>
              )}

            </div>
          ))}

        </div>

      </div>

      {/* Requests Section */}
      <div className="bg-white/10 backdrop-blur p-4 rounded-xl mb-6">

        <h2 className="text-lg mb-4">Issue Requests</h2>

        {requests.map(req => (
          <div
            key={req.id}
            className="bg-white/5 p-3 rounded flex justify-between items-center mb-2"
          >

            <div>
              <p><b>Student:</b> {req.student}</p>
              <p><b>Book:</b> {req.book}</p>
              <p className="text-yellow-400 text-sm">{req.status}</p>
            </div>

            {req.status === "Pending" && (
              <button
                onClick={() => issueBook(req)}
                className="bg-green-500 px-3 py-1 rounded text-xs hover:scale-105"
              >
                Issue Book
              </button>
            )}

          </div>
        ))}

      </div>

      {/* History Section */}
      <div className="bg-white/10 backdrop-blur p-4 rounded-xl">

        <h2 className="text-lg mb-4">Library History</h2>

        {history.length === 0 ? (
          <p className="text-gray-300">No history yet</p>
        ) : (
          <ul className="space-y-2 text-sm">

            {history.map((h, i) => (
              <li
                key={i}
                className="bg-white/5 p-2 rounded flex justify-between"
              >
                <span>{h.student}</span>
                <span>{h.book}</span>
                <span className={h.type === "Issued" ? "text-green-400" : "text-yellow-400"}>
                  {h.type}
                </span>
                <span>{h.date}</span>
              </li>
            ))}

          </ul>
        )}

      </div>

    </div>
  );
}