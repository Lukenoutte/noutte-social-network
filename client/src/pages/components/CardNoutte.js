import React from "react";
import "../../assets/styles/components/card_noutte.css";

export default function CardNoutte() {
  return (
    <div className="noutte">
      <div className="top-container">
        <div className="icon"></div>
        <div className="name-wrapper">
          <p>Username</p>
          <span>Liked</span>
        </div>
      </div>
      <div className="image-container"></div>
      <div className="button-wrapper">
        <button> Read Noutte</button>
      </div>
    </div>
  );
}
