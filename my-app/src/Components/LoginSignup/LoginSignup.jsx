import React, { useState } from 'react';
import './LoginSignup.css'

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

     // State to hold form data for username, password, and email
  const [formData, setFormData] = useState({
    username: "", // Username field, only used in the signup form
    password: "", // Password field
    email: "", // Email field
    phoneNumber: "", // Phone number field
    location: "", // Location field
    additionalInfo: "", // Additional information field
    heardFrom: "" // How did you hear about us field
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
  {/* Only show the username field, location, select, phone number when signing up */}
  {/* Signup Form Fields */}
  {!isLogin && (
          <>
            {/* Username */}
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
              autoComplete="username"
            />

            {/* Phone Number */}
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={changeHandler}
              type="tel"
              placeholder="Phone Number"
              autoComplete="tel"
            />

            {/* Email */}
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email"
              autoComplete="email"
            />

            {/* Password */}
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Password"
              autoComplete="new-password"
            />

            {/* Location */}
            <input
              name="location"
              value={formData.location}
              onChange={changeHandler}
              type="text"
              placeholder="Location"
              autoComplete="address-level1"
            />
             {/* Additional Information */}
             <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={changeHandler}
              placeholder="Additional Information (optional)"
            ></textarea>

            {/* How did you hear about us */}
            <select
              name="heardFrom"
              value={formData.heardFrom}
              onChange={changeHandler}
            >
              <option value="" disabled>How did you hear about us?</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="tiktok">TikTok</option>
              <option value="searchEngines">Search Engines</option>
              <option value="friend">From a Friend</option>
              <option value="referrals">Referrals</option>
            </select>

           
          </>
        )}

        {/* Login Form Fields (only Email and Password) */}
        {isLogin && (
          <>
            {/* Email */}
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email"
              autoComplete="email"
            />

            {/* Password */}
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
          </>
        )}
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
