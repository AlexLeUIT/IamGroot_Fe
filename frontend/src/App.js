import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import VerifyPage from "./pages/VerifyPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import RequireAuth from "./components/RequireAuth";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify/:token" element={<VerifyPage />} />
        <Route path="/upload" element={
          <RequireAuth>
            <UploadPage />
          </RequireAuth>
        } />
      </Routes>
    </Router>
  );
}

export default App;
