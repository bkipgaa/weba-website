import React, { useState, useEffect, useRef } from 'react';
import './LoginSignup.css';
import ProfilePage from '../ProfilePage/ProfilePage';


const Profile = ({ user, handleLogout, updateUser }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // Function to upload the profile picture
  const handleProfilePicUpload = async (file) => {
    const formData = new FormData();
    formData.append('profilePic', file);
  
    const token = localStorage.getItem('auth-token');
    if (!token) {
      alert('User is not authenticated. Please log in again.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:4000/upload-profile-pic', {
        method: 'POST',
        headers: {
          'auth-token': token,
        },
        body: formData,
      });
  
      const data = await response.json();
      if (data.success) {
        // Update local storage with new profile picture
        const updatedUser = data.updatedUser;
        const userData = { ...JSON.parse(localStorage.getItem('user')), profilePic: updatedUser.profilePic };
        localStorage.setItem('user', JSON.stringify(userData));
        updateUser(userData); // Update user data in state to reflect new profile pic
      } else {
        alert('Failed to upload profile picture');
      }
    } catch (error) {
      console.error('Error uploading profile picture:', error);
    }
  };
  

  // Function to handle file selection
  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      handleProfilePicUpload(file); // Trigger the upload function directly
    }
  };

  // Function to simulate clicking the hidden file input
  const onImageClick = () => {
    fileInputRef.current.click();
  };


  return (
    <div className="profile-section">
      <img
        src={user.profilePic  }
        alt="Profile"
        className="profile-pic"
        onClick={onImageClick} // Click event to open file input
        style={{ cursor: 'pointer' }} // Change cursor to indicate clickability
      />
      <span className="profile-name">{user.name}</span>
      <span className="profile-phone">{user.email}</span>

      {/* Hidden file input to select a new profile picture */}
      <input
        type="file"
        ref={fileInputRef} // Associate the ref with the file input
        onChange={onFileChange}
        style={{ display: 'none' }} // Hide the file input
      />

      <button onClick={handleLogout} className="logout-button">Sign Out</button>
    </div>
  );
};

const Dashboard = ({ user}) => {
  
  return (
    <div className="dashboard">
      
      <div className="main-content">
      <div className="main-content">
        <h1><span className="profile-names">{user.name}!</span> <br/>Welcome To POA Internet <br/>
        Subscribe Poa Home <br/>
        and Poa Street
        </h1>
        <div className="separator"></div>
        </div>
        <div>
        <ProfilePage/>
        </div>
        
        
      </div>
    </div>
  );
};

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);  // Toggles between login and signup views
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    location: "",
    additionalInfo: "",
    
    heardFrom: ""
  });

  const [user, setUser] = useState(null);  // Stores logged-in user data

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);  // Restores user session on reload
    }
  }, []);

  // Updates form data on input changes
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles user login, sets user data, and persists session in local storage
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
        const userData = {
          name: responseData.user.name,
          email: responseData.user.email,
          profilePic: responseData.user.profilePic || "uploads/profilePic-1729972324278-705286620-profile-pic-default.png" // Sets default profile picture if empty
        };
        localStorage.setItem('auth-token', responseData.token);  // Stores JWT
        localStorage.setItem('user', JSON.stringify(userData));   // Saves user details
        setUser(userData);  // Sets state with user data
        alert("Successfully signed up!"); // Notify user of success
    
      
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  // Handles user signup, sets user data, and persists session in local storage
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
        const userData = {
          name: responseData.user.name,
          email: responseData.user.email,
          profilePic: responseData.user.profilePic || "uploads/profilePic-1729972324278-705286620-profile-pic-default.png" // Sets default profile picture if empty
        };
        localStorage.setItem('auth-token', responseData.token);
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);  // Sets state with new user data;
        alert("Successfully signed up!"); // Notify user of success
    
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  // Handles user logout, clears local storage, and resets state
  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user');
    setUser(null);
    setIsLogin(true);  // Returns to login view after logout
  };

  return (
    <div className="auth-container">
      {/* Profile view for logged-in users */}
      {user && < Profile user={user} handleLogout={handleLogout} />}

      {/* Login/Signup forms or Dashboard based on login state */}
      {!user ? (
        <>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form>
            {/* Signup form fields (shown only if isLogin is false) */}
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
            {/* Login form fields (shown only if isLogin is true) */}
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
            {/* Button to trigger login or signup based on the isLogin state */}
            <button type="button" onClick={() => { isLogin ? login() : signup() }}>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          {/* Toggle text to switch between login and signup forms */}
          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Not a customer yet? Sign Up" : "Already a customer? Log In"}
          </p>
        </>
      ) : (
        // Dashboard view if user is logged in
        <Dashboard user={user} handleLogout={handleLogout} />
      )}
    </div>
  );
};

export default LoginSignup;
