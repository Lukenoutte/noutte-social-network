import React from "react";
import "../../assets/styles/feed.css";

function Feed() {
  return (
    <div className="feed-container">
      <header>
        <div className="center-container-header">
          <div className="logo"></div>
          <div className="icon-profile"></div>
        </div>
      </header>
     
        <div className="center-container">
          <div className="before-nouttes">
            <h1>Nouttes</h1>
            <button> + Create Noutte </button>
          </div>
          <div className="nouttes-container">

          <div className="noutte"></div>
          <div className="noutte"></div>
          <div className="noutte"></div>
          <div className="noutte"></div>
          <div className="noutte"></div>
          <div className="noutte"></div>
          </div>
        </div>
      
    </div>
  );
}

export default Feed;
