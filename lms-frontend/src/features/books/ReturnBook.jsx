import { useState } from "react";
import { calculateFine } from "./FineSystem";

export default function ReturnBook() {
  const [daysLate, setDaysLate] = useState(0);
  const [fine, setFine] = useState(0);

  const handleReturn = () => {
    setFine(calculateFine(daysLate));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Return Book</h2>

      <input
        type="number"
        className="border p-2 mt-2"
        placeholder="Days Late"
        onChange={(e) => setDaysLate(e.target.value)}
      />

      <button
        onClick={handleReturn}
        className="bg-red-500 text-white px-3 py-1 ml-2 rounded"
      >
        Calculate Fine
      </button>

      {fine > 0 && (
        <div className="mt-3 p-3 bg-yellow-100 rounded">
          💰 Fine: {fine} PKR
        </div>
      )}
    </div>
  );
}