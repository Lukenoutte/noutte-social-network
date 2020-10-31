import React from "react";
import "../../assets/styles/components/header_and_footer.css";
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="center-container-header">
        <div className="logo"><Link to="/feed">Noutte</Link></div>
        <Link to="/profile" className="icon-profile"></Link>
      </div>
    </header>
  );
}
