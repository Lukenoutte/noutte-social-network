import React from 'react';
import './styles.css';

function Login() {
    return (<div className="sign-container"> 
        <div className="inputs-container-sign">
            <h1>Sign in to Account</h1>
            <input type="text" placeholder="E-mail"/><br/>    
            <input type="password" placeholder="Password" /> <br/>
            <button>Sign in</button>
        </div>
        <div className="navegation-container-sign">

            <h1>Hello, friend!</h1>
            <a href="/signup">Sign up</a> <br/>
            
        </div>
     </div>)
}

export default Login;