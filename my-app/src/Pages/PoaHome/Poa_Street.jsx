import React from 'react'
import webalogo from '../../Assets/weba-logo2.png'
import'./Poa-Street.css'
import poahomeimage from '../../Assets/webahomelogo.png'

const Poa_Street = () => {
  return (
    <div className='street-main-div-street'>
        <div class="containers-street-main">
      <div class="left-div-street-main">
    <div class="image-border-main">
        <img src={webalogo} alt="" />
    </div>
</div>

        <div class="right-div-street-main">
          <h1>Get online for FREE <br />on Africa's largest<br /> Wi-Fi network</h1>
          <p>100MB of free data every single day across Africa's<br />
          largest public WI-FI network.<br />
          Over 40,000 hotspots to date and inceasing by<br />
          thousands every month.<br />
          Just KES 20 for every 1GB of data after free usage<br />
          with no expiry date <br /> Sign up today and start your journey with poa!<br />
          internet.
          </p>
             <button class="get-poa-street-btn-main">More Info</button>
        </div>
      </div>
      <div className="separator"></div>

      <div class="container-street">
        <div class="leftt-div-street">
          <h1>Joseph Njenga</h1>
          <h2>Kawangeware</h2>
          <p>“I have been using poa! Internet since April 2019. My experience has <br />
            been great. Using poa! internet has helped me earn an income. It has<br />
            also helped me gain knowledge and stay updated with news and<br />
            information on what's happening both in Kenya and globally!”</p>
        </div>
        <div class="rightt-div-street">
        <h1>Salon Owner</h1>
          <h2>Kawangeware</h2>
          <p>“Poa! has helped me in my business because I’m <br />
          a hair stylist and I have to check out the trending<br />
          styles online. Since I started using poa! I get<br />
          more clients through online engagement.”</p>
        </div>
      </div>

      <div class="word-container-street ">
        <div class="word-box-street  box-green">New Lower
          Install Price
        </div>
        <div class="word-box-street  box-yellow ">Expanding Across
          Kenya Every Day</div>
        <div class="word-box-street  box-orange">40,000+ FREE
          Street Wi-Fi
          Hotspots</div>
        <div class="word-box-street  box-blue">Unrivaled Customer Support</div>
        <div class="word-box-street  box-purple">No Data Caps,
          No Slow Downs</div>
        <div class="word-box-street  box-red">Home Internet
          From Only
          KES 1575 p/m or KES 450 p/w</div>
      </div>
      <div className="separator"></div>
      <div class="promo-street">
    <img src={poahomeimage} alt="" />
    <h1>Unlimited home internet</h1>
    <h1>From only KES 450 per week, 1575 per per month.</h1>
    <h2>If you're not already a home internet customer then get
       <br /> in touch with our team to find out how to get our 5Mbps<br />
        uncapped internet connection for your home.<br />
       And the great news is, you will now get installed for only <br />KES 2500!</h2>
       <button class="get-back-home">Get Poa Home</button>
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

export default Poa_Street