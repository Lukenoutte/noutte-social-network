import React from "react";
import Header from "../components/Header";

function Profile() {
  return (
    <div className="profile-container">
      <Header />
      <h1>Profile</h1>
      <a href="/feed">Feed</a>
    </div>
  );
}

export default Profile;
