
import React from 'react';

function SignUp() {
    return (<div className="sign-container"> 
            <div className="navegation-container-sign">

            <h1>Welcome back!</h1>
            <a href="/">Sign in</a> <br/>

            </div>

            <div className="inputs-container-sign">

            <h1>Create Account</h1>
            <input type="text" placeholder="Name"/><br/>    
            <input type="text" placeholder="E-mail"/><br/>    
            <input type="password" placeholder="Password" /> <br/>
            <input type="password" placeholder="Confirm Password" /> <br/>
            <button>Sign up</button>
            </div>
     </div>)
}

export default SignUp;