import React from 'react'
import './Home.css'
import profile_img from '../Assets/profile_image.png'
import webahomelogo from '../Assets/webahomelogo.png'
import webastreetlogo from '../Assets/webastreetlogo.png'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-img-container'>
      
        <img src={profile_img} alt="" />
      </div>
      <div className="separator"></div> 
      <div class="container">
        <div class="left-div">
        <img src={webahomelogo} alt="" />
          <h2>Unlimited home internet from just KES 1575 per month or KES 450 per week</h2>
          <p>poa! home is our new home internet service, delivering 5Mbps giving you smoother streaming, better browsing, faster downloads & less buffering. Now only KES 2500 install, and as always unlimited, our service has no slowdowns, and no data-caps, meaning you can download or watch as much as you want! All poa home customers also get free access to Africa's largest street Wi-Fi network of over 40,000 hotspots with poa! street..</p>
        </div>
        <div class="right-div">
        <img src={webastreetlogo} alt="" />
          <h2>Free street internet every day on Africa's largest Wi-Fi network</h2>
          <p>poa! street is our Wi-Fi hotspot service for everyone in your community. Anyone can register and get 100MB of free data every single day, and then at just KES 20 for 1GB of data with no expiry date, access to the internet has never been cheaper. Currently, we have over 40,000 hotspots and growing, which means you can keep streaming wherever you are!</p>
        </div>
      </div>


    </div>
  )
}

export default Home