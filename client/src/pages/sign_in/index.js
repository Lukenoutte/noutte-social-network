import React from "react";
import "../../assets/styles/pages/sign_styles.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="sign-container">
      
      <div className="inputs-container-sign">
        <h1>Sign in to Account</h1>
        <form >
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <Link to="/feed">Sign in</Link>
        </form>
      </div>
      <div className="navegation-container-sign">
        <h1>Hello, friend!</h1>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}

export default SignIn;
