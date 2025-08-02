import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ hook để chuyển trang

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_BASE_API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok && data.access_token) {
      // ✅ Lưu đúng key access_token
      localStorage.setItem("access_token", data.access_token);

      alert("Login successful!");
      navigate("/upload"); // ✅ Chuyển qua trang upload sau đăng nhập
    } else {
      alert(data.msg || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
