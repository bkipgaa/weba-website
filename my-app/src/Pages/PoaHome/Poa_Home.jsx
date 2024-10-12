import React from 'react'
import './Poa_Home.css'
import poahomeimage from '../../Assets/poa_home_image.png'
import momkidwifi from '../../Assets/m5.png'
import webalogo from '../../Assets/weba-logo2.png'
import nairobi from '../../Assets/nairobi.webp'



const Poa_Home = () => {
  return (
    <div className='main-div'>
         <div className="about-poa-container" style={{ backgroundImage: `url(${momkidwifi})` }}>
      <h1 className="main-heading">Here to Connect You</h1>
      <h2 className="sub-heading">poa! internet for the home and for the community.</h2>
      <p className="description">
        poa! internet delivers unlimited home internet and FREE street Wi-Fi <br />
        to people across Kenya, we are continually expanding our reach every day in <br />
        our mission to connect every home in Africa. poa! internet is for the <br />
        community and delivered by people from the community.
      </p>
    </div>

    <div className="separator"></div>

    <div class="promo">
    <img src={poahomeimage} alt="" />
    <h1>Faster, more flexible and <br />even better value!</h1>
    <h2>Smoother streaming, better browsing, faster <br /> downloads & less buffering</h2>
  </div>
  <div className="separator"></div>

  <div class="containers">
        <div class="left-div">
          <h1>poa! Home</h1>
          <h2>Unlimited home internet from just KES <br />1575 per month or KES
              450 per week</h2>
          <p>poa! home is our new home internet service, delivering<br />
             5Mbps giving you smoother streaming, better<br />
             browsing, faster downloads & less buffering. Now only<br />
             KES 2500 install, and as always unlimited, our service<br />
             has no slowdowns, and no data-caps, meaning you can<br />
             download or watch as much as you want!</p>
             <button class="get-poa-home-btn">Get Poa Home</button>
        </div>
        <div className="right-divv">
      <h2>Total Flexibilty <br />change plans whenever you want and as many times<br />
      as you want by simply logging in to poa.im
      </h2>
      
      <div className="conttainer">
        <div className="box weeklly">
          <span className="label">WEEKLY</span>
          <span className="descriptionn">PAY WEEKLY FOR JUST<br /> KES 450</span>
        </div>
        <div className="box saverr">
          <span className="label">SAVER</span>
          <span className="descriptionn">PAY ON TIME AND SAVE<br /> KES 175 @ KES 1,575</span>
        </div>
        <div className="box monthly">
          <span className="label">MONTHLY</span>
          <span className="descriptionn">MONTHLY NOW BETTER <br />VALUE @ KES 1,750</span>
        </div>
      </div>
    </div>
      </div>
      <div className="separator"></div>
      <div class="containers-street">
      <div class="left-div-street">
    <div class="image-border">
        <img src={webalogo} alt="" />
    </div>
</div>

        <div class="right-div-street">
          <h1>poa! Street</h1>
          <h2>Get online for FREE on Africa's <br />largest Wi-Fi network</h2>
          <p>100MB of free data every single day across Africa's<br />
          largest public WI-FI network.<br />
          Over 40,000 hotspots to date and inceasing by<br />
          thousands every month.<br />
          Just KES 20 for every 1GB of data after free usage<br />
          with no expiry date <br /> Sign up today and start your journey with poa!<br />
          internet.
          </p>
             <button class="get-poa-street-btn">More Info</button>
        </div>
      </div>
      <div className="separator"></div>

      <div className="mission-poa-container" style={{ backgroundImage: `url(${nairobi})` }}>
      <h1 className="mission-main-heading">Our mission</h1>
      <h2 className="mission-sub-heading">To connect every home in Africa</h2>
      <p className="mission-description">
      We are working tirelessly to deliver on our mission to connect every <br />
      home in Africa. We are driven by this passion driven by the people<br />
      home in Africa. We are driven by this passion driven by the people 
      </p>
      <button className="get-poa-button">Where can I get poa! internet?</button>
    </div>

    <div className="separator"></div>

    <div class="main-container">
<div class="navigation-container">
    <h2>Navigation</h2>
    <ul class="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Our Products</a></li>
        <li><a href="#">About poa!</a></li>
        <li><a href="#">Our Coverage</a></li>
        <li><a href="#">Careers at poa!</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Online Security</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Website Privacy Notice</a></li>
        <li><a href="#">Acceptable Use Policy</a></li>
        <li><a href="#">Service T's & C's</a></li>
        <li><a href="#">Website T's & C's</a></li>
    </ul>
</div>


<div class="street-contact-container">
<h2>Contact poa!</h2>
    <div class="street-left-contact-column">
        <p><strong>Support</strong></p>
        <p>Email: <a href="mailto:support@poainternet.net">support@poainternet.net</a></p>
        <p>Phone: 0730 762 762</p>
    </div>
    <div class="street-right-contact-column">
        <p><strong>Sales</strong></p>
        <p>Email: <a href="mailto:sales@poainternet.net">sales@poainternet.net</a></p>
        <p>Phone: 0730 862 862</p>
    </div>
</div>



<div class="social-containerr">
    <div class="social-linkk">
        <p>#beunlimited</p>
    </div>
    <div class="social-linkks">
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


<footer class="footer">
    <p>Copyright © 2024 - All Rights Reserved</p>
</footer>

    </div>
  )
}

export default Poa_Home