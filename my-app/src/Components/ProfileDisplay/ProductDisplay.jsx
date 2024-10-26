// ProfileDisplay.jsx
import React, { useState, useRef } from 'react';
import './ProductDisplay.css'; // Create a CSS file for specific styling, if needed

const ProfileDisplay = ({ user, handleLogout, updateUser }) => {
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
        src={user.profilePic}
        alt="Profile"
        className="profile-pic"
        onClick={onImageClick}
        style={{ cursor: 'pointer' }}
      />
      <span className="profile-name">{user.name}</span>
      <span className="profile-phone">{user.email}</span>

      {/* Hidden file input to select a new profile picture */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileChange}
        style={{ display: 'none' }}
      />

      <button onClick={handleLogout} className="logout-button">Sign Out</button>
    </div>
  );
};

export default ProfileDisplay;
