import React from "react";
import "../../assets/styles/pages/sign_styles.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="sign-container sign-up">
      <div className="navegation-container-sign sign-up-navegation">
        <h1>Welcome back!</h1>
        <Link to="/">Sign in</Link> <br />
      </div>

      <div className="inputs-container-sign">
        <h1>Create Account</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <Link to="/feed">Sign up</Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
