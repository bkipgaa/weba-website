import React from 'react'
import './Home.css'
import profile_img from '../Assets/profile_image.png'
import webahomelogo from '../Assets/webahomelogo.png'
import webastreetlogo from '../Assets/webastreetlogo.png'
import '@fortawesome/fontawesome-free/css/all.min.css';

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

      <div className="separator"></div>

      <div class="social-container">

        <div class="social-left-div">
          <iframe width="100%" height="415" src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div class="social-right-div">
          <div class="text-phrases">
            <p class="phrase-internet">INTERNET IN</p>
            <p class="phrase-every-home">EVERY HOME</p>
            <p class="phrase-africa">IN AFRICA</p>
          </div>
          <div class="text-phrase">
            <p>We connect the unconnected,</p>
            <p>improving their lives through</p>
            <p>unlimited access to knowledge</p>
            <p>& opportunities.</p>
          </div>

          <div class="social-link"> <p>#beunlimited</p> </div>
          <div class="social-links">
          
        <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook"></i>
        </a>
        <a href="https://wa.me/your-whatsapp-number" target="_blank" aria-label="WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
        </a>
    </div>
        </div>
      </div>



    </div>
  )
}

export default Home