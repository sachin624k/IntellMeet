import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (

    <div className="sidebar">

      <h2>IntellMeet</h2>

      <ul>

        <li>🏠 Dashboard</li>

        <li>📅 Meetings</li>

        <li>👥 Teams</li>

        <li>📊 Analytics</li>

        <li>📝 Reports</li>

        <li>⚙ Settings</li>

        <li>🚪 Logout</li>

      </ul>

    </div>

  );
}

export default Sidebar;