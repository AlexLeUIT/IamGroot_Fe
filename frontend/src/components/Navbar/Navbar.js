// src/components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");  // ✅ chuyển về trang login
  };

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMeu = () => setClick(false)
  return (

    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="menu-icon" onClick={handleClick}>
            <i className= {click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
           
             <li><Link to = "/" onClick={closeMobileMeu}>Home</Link></li>
             <li><Link to = "/about" onClick={closeMobileMeu}>About</Link></li>
             <li><Link to = "/test" onClick={closeMobileMeu}>Test</Link></li>
             <li><Link to = "/contact" onClick={closeMobileMeu}>Contact</Link></li>
            
          </ul>

          <div className="login-area flex">
            {!accessToken ? (
              <>
                <li>
                  <Link to = "/register">
                    <i className="fa-solid fa-chevron-right">Register</i>
                  </Link>

                </li>

                <li>
                  <Link to = "/login">
                    <i className="fa-solid fa-chevron-right">Login</i>
                  </Link>

                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to = "/upload">
                    <i className="fa-solid fa-chevron-right">Upload</i>
                  </Link>

                </li>

                <li>
                  
                  <button onClick={logout}  className="primary-btn">Log out</button>
                

                </li>


              </>
            )}
            
          </div>

          


        </div>
      </nav>
    </>
    
    // <nav style={{
    //   padding: "12px",
    //   borderBottom: "1px solid #ccc",
    //   display: "flex",
    //   gap: "15px",
    //   alignItems: "center"
    // }}>
    //   <Link to="/">Home</Link>

    //   {!accessToken ? (
    //     <>
    //       <Link to="/register">Register</Link>
    //       <Link to="/login">Login</Link>
    //     </>
    //   ) : (
    //     <>
    //       <Link to="/upload">Upload</Link>
    //       <button
    //         onClick={logout}
    //         style={{
    //           cursor: "pointer",
    //           padding: "5px 10px",
    //           border: "1px solid #888",
    //           backgroundColor: "#f8f8f8"
    //         }}
    //       >
    //         Logout
    //       </button>
    //     </>
    //   )}
    // </nav>




    
  );
}
