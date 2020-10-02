import React from 'react';
import './styles.css';

function Login() {
    return (<div className="login-container"> 
        <div className="left-container">
            <h1>Sign in to Account</h1>
            <input type="text" placeholder="E-mail"/><br/>    
            <input type="password" placeholder="Password" /> <br/>
            <button>Sign in</button>
        </div>
        <div className="right-container">

            <h1>Hello, friend!</h1>
            <a href="/signup">Sign up</a> <br/>
            
        </div>
     </div>)
}

export default Login;