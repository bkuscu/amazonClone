import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = e => {
        e.preventDefault();
        //firebase login things coming up

    }   

    const register = e => {
        e.preventDefault;
        // firebse register stuff coming up
        
    }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/250px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>

        <form action="">
            <h5>E-Mail</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

            <button type="submit" className="login__signInButton" onClick="" >{signIn}</button>
        </form>

        <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
        
        <button className="login__registerButton" onClick="register">Create your Fake Amazon Account</button>

      </div>
    </div>
  );
}

export default Login;
