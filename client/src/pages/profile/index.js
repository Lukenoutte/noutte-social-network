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
          <div className="inputs-wrapper"> 
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
          <button>Save changes</button>
          </div>
        </div>

        <div className="right-container">
          <div className="statistics-wrapper">
          <span>Personal Statistics</span>
          <div className="statistic">
            <div className="icon-statistics"></div>
            <div className="statistics-information">
            <p>999</p>
            <span>Follows</span>
            </div>
          </div>

          <div className="statistic">
            <div className="icon-statistics"></div>
            <div className="statistics-information">
            <p>999</p>
            <span>Follows</span>
            </div>
          </div>

          <div className="statistic">
            <div className="icon-statistics"></div>
            <div className="statistics-information">
            <p>999</p>
            <span>Follows</span>
            </div>
          </div>
          
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
