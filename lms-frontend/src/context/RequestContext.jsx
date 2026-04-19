import { createContext, useState } from "react";

export const RequestContext = createContext();

export function RequestProvider({ children }) {

  const [requests, setRequests] = useState([]);

  const FINE_PER_DAY = 10;

  // 📌 Add Request
  const addRequest = (bookName, userEmail) => {
    const newReq = {
      id: Date.now(),
      name: bookName,
      user: userEmail,
      status: "Pending",
      requestDate: new Date(),
      approveDate: null,
      rejectDate: null,
      dueDate: null,
      returned: false
    };

    setRequests(prev => [newReq, ...prev]);
  };

  // 📌 Approve Request (7 days due date)
  const approveRequest = (id) => {
    setRequests(prev =>
      prev.map(r => {
        if (r.id === id) {
          const now = new Date();
          const due = new Date();
          due.setDate(now.getDate() + 7);

          return {
            ...r,
            status: "Approved",
            approveDate: now,
            dueDate: due
          };
        }
        return r;
      })
    );
  };

  // 📌 Reject Request
  const rejectRequest = (id) => {
    setRequests(prev =>
      prev.map(r =>
        r.id === id
          ? { ...r, status: "Rejected", rejectDate: new Date() }
          : r
      )
    );
  };

  // 📌 Return Book
  const returnBook = (id) => {
    setRequests(prev =>
      prev.map(r =>
        r.id === id ? { ...r, returned: true } : r
      )
    );
  };

  // 📌 Fine Calculation
  const calculateFine = (req) => {
    if (!req.dueDate || req.returned) return 0;

    const today = new Date();
    const due = new Date(req.dueDate);

    const diffDays = Math.floor((today - due) / (1000 * 60 * 60 * 24));

    return diffDays > 0 ? diffDays * FINE_PER_DAY : 0;
  };

  return (
    <RequestContext.Provider
      value={{
        requests,
        addRequest,
        approveRequest,
        rejectRequest,
        returnBook,
        calculateFine
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}