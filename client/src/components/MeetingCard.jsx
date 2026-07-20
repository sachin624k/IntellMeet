import React from "react";
import "./MeetingCard.css";

function MeetingCard({ meeting }) {
  return (
    <div className="meeting-card">

      <h3>{meeting.title}</h3>

      <p>
        <strong>Host :</strong> {meeting.host}
      </p>

      <p>
        <strong>Date :</strong> {meeting.date}
      </p>

      <p>
        <strong>Time :</strong> {meeting.time}
      </p>

      <span
        className={
          meeting.status === "Completed"
            ? "completed"
            : "upcoming"
        }
      >
        {meeting.status}
      </span>

    </div>
  );
}

export default MeetingCard;