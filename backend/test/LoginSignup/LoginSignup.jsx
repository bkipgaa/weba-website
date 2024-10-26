import React, { useState, useEffect } from 'react';
import './LoginSignup.css';

const Profile = ({ user, handleLogout }) => {
  return (
    <div className="user-profile">
      <img src="default-profile-pic-url" alt="Profile" className="profile-pic" />
      <span>{user.name}</span>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <p>Here is your main content...</p>
    </div>
  );
};

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    location: "",
    additionalInfo: "",
    heardFrom: ""
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();

      if (responseData.success) {
        const userData = { name: responseData.user.name };
        localStorage.setItem('auth-token', responseData.token);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const signup = async () => {
    const formDataToSend = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
      location: formData.location,
      additionalInfo: formData.additionalInfo,
      heardFrom: formData.heardFrom,
    };
  
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });
  
      const responseData = await response.json();
  
      if (responseData.success) {
        const userData = { name: responseData.name };
        localStorage.setItem('auth-token', responseData.token);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user');
    setUser(null);
    setIsLogin(true);
  };

  return (
    <div className="auth-container">
      {/* Top-right profile view */}
      {user && <Profile user={user} handleLogout={handleLogout} />}

      {/* Main content */}
      {!user ? (
        <>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form>
            {!isLogin && (
              <>
                <input
                  name="username"
                  value={formData.username}
                  onChange={changeHandler}
                  type="text"
                  placeholder="Your Name"
                  autoComplete="username"
                />
                <input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={changeHandler}
                  type="tel"
                  placeholder="Phone Number"
                  autoComplete="tel"
                />
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
                  autoComplete="new-password"
                />
                <input
                  name="location"
                  value={formData.location}
                  onChange={changeHandler}
                  type="text"
                  placeholder="Location"
                  autoComplete="address-level1"
                />
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={changeHandler}
                  placeholder="Additional Information (optional)"
                />
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
            {isLogin && (
              <>
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
                  autoComplete="current-password"
                />
              </>
            )}
            <button type="button" onClick={() => { isLogin ? login() : signup() }}>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Not a customer yet? Sign Up" : "Already a customer? Log In"}
          </p>
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default LoginSignup;
