import React from 'react'
import './ShareLocation.css'
import poahomeimage from '../../Assets/poa_home_image.png'



const ShareLocation = () => {
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
    <button class="sharelocation " >Share Location Now!</button>
  </div>
  <div className="separator"></div>
    </div>
  )
}

export default ShareLocation