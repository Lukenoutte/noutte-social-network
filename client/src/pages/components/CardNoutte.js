import React from "react";
import "../../assets/styles/components/card_noutte.css";
import {Link} from 'react-router-dom';

export default function CardNoutte() {
  return (
    <div className="noutte">
      <div className="top-container">
        <Link to="/profile" className="icon"></Link>
        <div className="name-wrapper">
          <Link to="/profile">Username</Link> <br/>
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
