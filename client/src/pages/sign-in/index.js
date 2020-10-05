import React from 'react';
import '../../assets/styles/sign-styles.css';

function SignIn() {
    return (<div className="sign-container"> 
        <div className="inputs-container-sign">
            <h1>Sign in to Account</h1>
            <form action="/feed">
            <input type="text" placeholder="E-mail"/>  
            <input type="password" placeholder="Password" /> 
            <button type="submit" >Sign in</button>
            </form>
        </div>
        <div className="navegation-container-sign">

            <h1>Hello, friend!</h1>
            <a href="/signup">Sign up</a> 
            
        </div>
     </div>)
}

export default SignIn;