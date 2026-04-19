import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const result = login(email, password);

    if (result.success) {
      // role-based routing
      navigate(`/dashboard/${result.role}`);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-blue-900 relative overflow-hidden">

      {/* floating blur circles animation */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse bottom-10 right-10"></div>

      {/* login card */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl text-white w-[360px] shadow-2xl">

        <h2 className="text-3xl font-bold text-center mb-6">
          LMS Login
        </h2>

        <input
          className="w-full p-3 mb-4 bg-white/20 rounded outline-none placeholder-gray-300"
          placeholder="Enter Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 bg-white/20 rounded outline-none placeholder-gray-300"
          placeholder="Enter Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Login
        </button>

        <p className="text-xs text-center mt-4 text-gray-300">
          Demo: admin@lms.com / 1234
        </p>

      </div>
    </div>
  );
}