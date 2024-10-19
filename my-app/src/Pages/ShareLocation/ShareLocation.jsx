import React, { useState } from 'react';
import './ShareLocation.css'
import poahomeimage from '../../Assets/poa_home_image.png'



const ShareLocation = () => {
  const [location, setLocation] = useState(null);  // State to store location
  const [error, setError] = useState(null);        // State to store error

  // Function to handle location retrieval and submission
  const shareLocationHandler = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          
          // Call a function to send the location to the backend
          submitLocation(latitude, longitude);
        },
        (err) => {
          setError("Unable to retrieve location. Please try again.");
          console.error(err);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  // Function to submit the location to the backend
  const submitLocation = async (latitude, longitude) => {
    const token = localStorage.getItem('auth-token');  // Get the auth token stored during login
  
    if (!token) {
      alert("You must be logged in to submit your location.");
      return;
    }
  
    const response = await fetch('http://localhost:4000/api/location', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': token,  // Send the token in the headers
      },
      body: JSON.stringify({ latitude, longitude }),
    });
  
    const data = await response.json();
    if (data.success) {
      alert('Location submitted successfully!');
    } else {
      alert('Error submitting location: ' + data.message);
    }
  };

  return (
    <div className='main-div-location'>
        <div class="promo-location">
    <img src={poahomeimage} alt="" />
    <h1>Share your location and get connected!</h1>
    <h2>Please share your location so we can get in touch with<br /> 
    downloads & less buffering<br />you and get you connected. Ensure you are home for<br />
    accuracy purposes<br />
    If you are not at home, please CLICK THIS LINK and we<br />
    will send you an SMS so that you can share your <br /> 
    location when you are at home</h2>
    <button className="sharelocation" onClick={shareLocationHandler}>
          Share Location Now!
        </button>
        {location && (
          <p>
            Location captured: Latitude {location.latitude}, Longitude {location.longitude}
          </p>
        )}
        {error && <p className="error">{error}</p>}
  </div>
  <div className="separator"></div>
    </div>
  )
}

export default ShareLocation