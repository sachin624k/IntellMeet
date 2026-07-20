import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      <div className="search-box">
        <input
          type="text"
          placeholder="Search meetings..."
        />
      </div>

      <div className="nav-right">

        <button className="notify">
          🔔
        </button>

        <div className="profile">

          <div className="user-info">
            <h4>Sruthi</h4>
            <p>Frontend Developer</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;