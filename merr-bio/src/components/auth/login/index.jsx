"use client";

import React, { useState } from "react";
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from "@/firebase/auth";
import { useAuth } from "../../../context/authContexts"


const Login = () => {
    const[email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSignIn, setIsSignIn] = useState(false)
    const [signInSuccess, setSignInSuccess] = useState(false);  


    const onSubmit = async (e) =>{
        e.preventDefault()
        try {
            if (isSignIn) {
                
                await doSignInWithEmailAndPassword(email, password);
                setSignInSuccess(true);
            } else {
                
                await doCreateUserWithEmailAndPassword(email, password);
                setSignInSuccess(false);  
            }
        } catch (error) {
            setSignInSuccess(false);  
            console.error("Error signing in:", error.message);
        }
    }

    return (
        <div>
          <h2>Login</h2>
          <form action="/login" method="POST" onSubmit={onSubmit} >
            <label htmlFor="username">Email:</label><br />
            <input type="text" id="username" name="username" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
      
            <label htmlFor="password">Password:</label><br />
            <input type="password" id="password" name="password"  value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  required /><br /><br />
      
            <button type="submit">Sign In</button>
          </form>
          {signInSuccess && <p style={{ color: 'green' }}>Sign in successful!</p>}
  
        </div>
      );
      
}

export default Login;