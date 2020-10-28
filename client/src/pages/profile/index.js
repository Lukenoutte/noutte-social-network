import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../assets/styles/pages/profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <Header />
      <div className="center-container">
        <div className="left-container">
          <h2>Profile</h2>
          <div className="profile-pic-wrapper">
            <div className="profile-picture"></div>
            <button>+Upload new photo</button>
          </div>

          <div className="social-wrapper">
            <p id="social-title">Social media</p>
            <div className="social-media">
              <div className="icon-and-name">
                <div className="icon-social"></div>
                <p>Social Name</p>
              </div>
              <button>+</button>
            </div>

            <div className="social-media">
              <div className="icon-and-name">
                <div className="icon-social"></div>
                <p>Social Name</p>
              </div>
              <button>+</button>
            </div>

            <div className="social-media">
              <div className="icon-and-name">
                <div className="icon-social"></div>
                <p>Social Name</p>
              </div>
              <button>+</button>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
