import React from "react";
import "../../assets/styles/card_noutte.css";

export default function CardNoutte() {
  return (
    <div className="noutte">
      <div className="top-container">
        <div className="icon"></div>
        <div className="name-wrapper">
          <p>Lucas Lima</p>
          <span>Liked</span>         
        </div>   
      </div>
      <div className="image-container"></div>
      <div className="button-wrapper">
      <button> Perform task</button>
      </div>
    </div>
  );
}
