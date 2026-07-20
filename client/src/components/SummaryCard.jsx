import React from "react";
import "./SummaryCard.css";

function SummaryCard({ title, count, color }) {
  return (
    <div
      className="summary-card"
      style={{ borderTop: `5px solid ${color}` }}
    >
      <h4>{title}</h4>
      <h2>{count}</h2>
    </div>
  );
}

export default SummaryCard;