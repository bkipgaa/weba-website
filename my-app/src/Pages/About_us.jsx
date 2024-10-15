import React from 'react'
import webalogo from '../Assets/weba-logo2.png'
import './About.css'
import slumimage from '../Assets/slum2.webp'
import blackman from '../Assets/black-man.webp'

const About_us = () => {
  return (
    <div className='street-main-div-street'>
        <div class="containers-street-main">
        <div class="right-div-street-main">
          <h1>About poa!</h1>
          <h2>What makes poa!<br />different?</h2>
          <p>We connect the unconnected. Improving lives through<br />
          unlimited access to knowledge & opportunities. For over 5<br />
          years poa! internet has been steadily building it's ambition to<br />
          be the leading internet provider in Africa.
          </p>
             <button class="get-poa-street-btn-main">Get in Touch with our Team</button>
        </div>
        <div class="left-div-street-main">
    <div class="image-border-main">
        <img src={webalogo} alt="" />
    </div>
</div>
      </div>
      <div className="separator"></div>

      <div class="conttainere">
        <div class="leftte-div">
          <h1>Bringing internet<br />
          to all areas of<br />
          Kenya</h1>
          <h2>We believe EVERYONE deserves access to the<br />
          internet and affordable communications.
          </h2>
          <p>Communications have an incredibly positive impact on improving the <br />
          lives of individuals and accelerating the economic and social growth of, <br />
          developing countries, and yet 4.4 billion people around the world are<br />
          still unconnected and many more are poorly serviced.
             </p>
        </div>
        <div class="rightte-div">
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img
          src={slumimage}
          alt="Description"
          style={{ pointerEvents: 'none' }} // Prevent right-click
        />
      </a>
        </div>
      </div>
      <div className="separator"></div>

      <div className="about-man-container" style={{ backgroundImage: `url(${blackman})` }}>
      <h1 className="mainn-heading">Highly Affordable Internet Access</h1>
      <h2 className="subb-heading">Serving the homes, communities and schools.</h2>
      <p className="mainn-div">
      At poa! we believe everyone deserves access to the internet and it should not be limited to the <br />
      privileged few. Our poa! internet service provides broadband to low income and rural communities <br />
      across East Africa, offering individuals and small businesses highly affordable internet access. poa! <br />
      brings significant social benefit to the communities we serve by offering free access to digital <br />
      content including educational and health materials as well as generating substantial employment<br />
      opportunities.
      </p>
    </div>
    <div className="separator"></div>

    <div class="container-about-street">
    <div><h1 className="main-about-heading">How do we do it?</h1>
    <h2 className="sub-about-heading">poa! internet has a different approach. We are driven by our mission to deliver <br />
    internet to EVERY home.</h2></div>
        <div class="left-about-div-street">
          
          <p>It would be very easy to deliver internet to the big cities, the <br />
          holiday destinations and the hotels and businesses where<br />
          access is easy. But that's not poa!, we are different because we <br />
          started out with a mission to deliver internet to every home in<br />
           Africa, not to just the privileged and already connected. We<br />
            wanted to bring connectivity to the underserved areas, <br />
            the unconnected, and the areas left out of the 
            opportunities that<br /> internet access can give.</p>
        
        <p>poa! internet is built on a dream, a simple idea but a hugely<br />
        challenging one at the same time. A dream that has gone from<br />
        0 people connected to tens of thousands, a team of 350+ <br />
        people, over 10,000 free Wi-Fi hotspots, hundreds of<br />
        communities connected and investments from global partners<br />
        and world leaders. poa! is on course to deliver on it's mission<br />
        and its promises. To connect every home in Africa.</p>
             
        </div>
      </div>
      <div className="separator"></div>

      <div class="about-container-street">
        
        <div class="about-leftt-div-street">
          <h1>50,000+</h1>
          <h2>Homes connected</h2>
          <p>Our installation teams are out every <br />
          day connecting more and more<br />
          homes. We are on course to deliver<br />
          on our mission!</p>
        </div>
        <div class="about-rightt-div-street">
        <h1>40,000+</h1>
          <h2>street Wi-Fi Hotspots</h2>
          <p>And counting! We are installing new <br />
          hotspots all the time. poa! internet is<br />
          the biggest Wi-Fi network in Africa.</p>
        </div>
        <div class="about-leftt-div-street">
          <h1>60,000+</h1>
          <h2>street Wi-Fi customers</h2>
          <p>being the biggest Wi-Fi provider in <br />
          Africa, we have thousands of people<br />
          connecting to the internet every<br />
          single day!</p>
        </div>
        <div class="about-rightt-div-street">
        <h1>350+</h1>
          <h2>poa! team members</h2>
          <p>Our team is growing every day, we <br />
          a hair stylist and I have to check out the trendinare always looking for talented<br />
          individuals to join our team.</p>
        </div>
      </div>
      <div className="separator"></div>
      <div class="word-container">
      <div class="social-containerr-about">
    <div class="social-linkk-about">
        <p>#beunlimited</p>
    </div>
    <div class="social-linkks-about">
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
        <div class="word-box box-green">New Lower
          Install Price
        </div>
        <div class="word-box box-yellow ">Expanding Across
          Kenya Every Day</div>
        <div class="word-box box-orange">40,000+ FREE
          Street Wi-Fi
          Hotspots</div>
        <div class="word-box box-blue">Unrivaled Customer Support</div>
        <div class="word-box box-purple">No Data Caps,
          No Slow Downs</div>
        <div class="word-box box-red">Home Internet
          From Only
          KES 1575 p/m or KES 450 p/w</div>
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

export default About_us