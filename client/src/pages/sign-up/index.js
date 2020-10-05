
import React from 'react';
import '../../assets/styles/sign-styles.css';

function SignUp() {
    return (<div className="sign-container"> 
            <div className="navegation-container-sign">

            <h1>Welcome back!</h1>
            <a href="/">Sign in</a> <br/>

            </div>

            <div className="inputs-container-sign">

            <h1>Create Account</h1>
            <form action="/feed">
            <input type="text" placeholder="Name"/>  
            <input type="text" placeholder="E-mail"/>   
            <input type="password" placeholder="Password" /> 
            <input type="password" placeholder="Confirm Password" /> 
            <button type="submit">Sign up</button>
            </form>
            </div>
     </div>)
}

export default SignUp;