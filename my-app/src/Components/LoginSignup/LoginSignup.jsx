import React, { useState } from 'react';
import './LoginSignup.css'

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

     // State to hold form data for username, password, and email
  const [formData, setFormData] = useState({
    username: "", // Username field, only used in the signup form
    password: "", // Password field
    email: "", // Email field
  })

  // Handler function to update form data state when input fields change
  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const login=async()=>{
    console.log("Login Function Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method: 'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(formData)
      })
        
      .then((response)=>response.json()
      .then((data)=>responseData=data))

      if(responseData.success){
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.errors)
      }

  }

  const signup=async()=>{
    console.log("Signup Function Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
      })
      .then((response)=>response.json()
      .then((data)=>responseData=data))

      if(responseData.success){
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.errors)
      }
    
  }
  
  
  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form>
  {!isLogin && (
    <input
      name="username"
      value={formData.username}
      onChange={changeHandler}
      type="text"
      placeholder="Your Name"
      autoComplete="username"  
    />
  )}
  <input
    name="email"
    value={formData.email}
    onChange={changeHandler}
    type="email"
    placeholder="Email"
    autoComplete="email"  
  />
  <input
    name="password"
    value={formData.password}
    onChange={changeHandler}
    type="password"
    placeholder="Password"
    autoComplete={isLogin ? "current-password" : "new-password"}  
  />
  <button type="button" onClick={() => { isLogin ? login() : signup() }}>
    {isLogin ? 'Login' : 'Sign Up'}
  </button>
</form>

      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Not a yet a customer, Get Your Subscription today? Sign Up" : "Already a customer? Enter your detaits Above Login"}
      </p>
    </div>
  );
}

export default LoginSignup;
