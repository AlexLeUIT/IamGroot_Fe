import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const token = localStorage.getItem("access_token"); // ✅ đúng key

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌿 Welcome to Leaf Disease Detector 🌿</h1>

      {token ? (
        <>
          <p>You are logged in!</p>
          <Link to="/upload">
            <button style={{ marginTop: "10px" }}>Go to Upload Page</button>
          </Link>
        </>
      ) : (
        <>
          <p>Please log in to access image uploads.</p>
          <Link to="/login">
            <button style={{ marginTop: "10px" }}>Login Now</button>
          </Link>
        </>
      )}
    </div>
  );
}
