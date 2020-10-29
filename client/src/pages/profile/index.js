import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../assets/styles/pages/profile.css";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

function Profile() {
  return (
    <div className="profile-container">
      <Header />
      <div className="centralize-profile-container">
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
              <Link to="/profile">
                <MdAdd />
              </Link>
            </div>

            <div className="social-media">
              <div className="icon-and-name">
                <div className="icon-social"></div>
                <p>Social Name</p>
              </div>
              <Link to="/profile">
                <MdAdd />
              </Link>
            </div>

            <div className="social-media">
              <div className="icon-and-name">
                <div className="icon-social"></div>
                <p>Social Name</p>
              </div>
              <Link to="/profile">
                <MdAdd />
              </Link>
            </div>
          </div>
        </div>
        <div className="middle-container">
          <p>Name</p>
          <input type="text" />

          <p>E-mail</p>
          <input type="text" />

          <p>Password management</p>
          <p>Old Password</p>
          <input type="password" />
          <p>New Password</p>
          <input type="password" />
          <p>Confirm New Password</p>
          <input type="password" />
        </div>

        <div className="right-container">
          <p>Personal Statistics</p>
          <div className="statistics-wrapper">
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
