import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SummaryCard from "../components/SummaryCard";
import ProfileCard from "../components/ProfileCard";
import MeetingCard from "../components/MeetingCard";
import meetings from "../data/meetings.json";
import "./Dashboard.css";

function Dashboard() {
  const upcoming = meetings.filter(
    (meeting) => meeting.status === "Upcoming"
  ).length;

  const completed = meetings.filter(
    (meeting) => meeting.status === "Completed"
  ).length;

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="welcome">
          <h1>Welcome, Sruthi 👋</h1>
          <p>Manage your meetings and collaborate efficiently.</p>
        </div>

        <div className="summary-grid">
          <SummaryCard
            title="Total Meetings"
            count={meetings.length}
            color="#2563EB"
          />

          <SummaryCard
            title="Upcoming"
            count={upcoming}
            color="#F59E0B"
          />

          <SummaryCard
            title="Completed"
            count={completed}
            color="#22C55E"
          />

          <SummaryCard
            title="Team Members"
            count="18"
            color="#8B5CF6"
          />
        </div>

        <ProfileCard />

        <div className="quick-actions">
          <button>Create Meeting</button>
          <button>Join Meeting</button>
          <button>Schedule</button>
        </div>

        <h2>Meeting List</h2>

        <div className="meeting-grid">
          {meetings.map((meeting) => (
            <MeetingCard
              key={meeting.id}
              meeting={meeting}
            />
          ))}
        </div>

      </div>

    </div>
  );
}

export default Dashboard;