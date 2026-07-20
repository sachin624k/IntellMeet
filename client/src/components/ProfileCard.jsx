import React from "react";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="profile-card">

      <h2>Sruthi</h2>
      <p>Frontend Developer</p>

      <input
        type="file"
        id="upload-image"
        accept="image/*"
        hidden
      />

      <label htmlFor="upload-image" className="upload-btn">
        Upload Profile Image
      </label>

      <div className="profile-info">
        <div>
          <h3>28</h3>
          <span>Meetings</span>
        </div>

        <div>
          <h3>12</h3>
          <span>Completed</span>
        </div>

        <div>
          <h3>5</h3>
          <span>Teams</span>
        </div>
      </div>

      <button>Edit Profile</button>

    </div>
  );
}

export default ProfileCard;