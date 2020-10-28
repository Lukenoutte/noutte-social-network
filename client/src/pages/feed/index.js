import React from "react";
import "../../assets/styles/pages/feed.css";
import CardNoutte from "../components/CardNoutte";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Feed() {
  return (
    <div className="feed-container">
      <Header />
      <div className="center-container">
        <div className="before-nouttes">
          <h1>Nouttes</h1>
          <button> + Create Noutte </button>
        </div>
        <div className="wrapper-n-container">
          <div className="nouttes-container">
            <CardNoutte />
            <CardNoutte />
            <CardNoutte />
            <CardNoutte />
            <CardNoutte />
            <CardNoutte />
            <CardNoutte />
            <CardNoutte />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Feed;
