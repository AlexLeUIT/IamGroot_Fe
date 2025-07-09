import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ thêm dòng này

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ dùng để chuyển trang

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_BASE_API}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Register successful! Please check your email to verify.");
      navigate("/login"); // ✅ chuyển sang trang đăng nhập
    } else {
      alert(data.msg || "Registration failed.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
        /><br />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
        /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
