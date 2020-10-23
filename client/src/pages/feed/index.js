import React from "react";
import "../../assets/styles/feed.css";

function Feed() {
  return (
    <div className="feed-container">
      <header>
        <div className="center-container-header">
          <div className="logo">.</div>
          <div className="icon-profile">.</div>
        </div>
      </header>
      <div className="main-container">
        <div className="center-container">
          <h1>Feed</h1>
          <a href="/profile">Profile</a> <br />
          <a href="/">Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Feed;
