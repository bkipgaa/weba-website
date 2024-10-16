import React from 'react'
import webadirectors from '../Assets/webanet.webp'
import './Coverage.css'
import mombasamap from '../Assets/mombasa map.webp'
import malindimap from '../Assets/malindi map.webp'
import { useNavigate } from 'react-router-dom'

const Coverage = () => {
  const navigate = useNavigate();

  const handleNavigate = () =>{
      navigate('./share-location')
  }

  return (
    <div className='Coverage-main-container'>
 <div class="containers-coverage-main">
        <div class="right-div-coveragee-main">
          <h1>Our Coverage!</h1>
          <h2>Serving the homes of Kenya</h2>
          <p>We are launching new networks all the time at poa! internet as we<br />
          push to deliver on our mission of connecting every home in Africa.<br />
          Please get in touch if your area isn't listed below and we will do<br />
          everything possible to get to you as quickly as we can.
          </p>
             <button class="get-poa-coverage-btn-main-map " onClick={handleNavigate}>Check your Coverage</button>
        </div>
        <div class="left-div-coverage-main">
    <div class="image-border-main">
        <img src={webadirectors} alt="" />
    </div>
</div>
      </div>
      <div className="separator"></div>

      <div class="conttainere">
        <div class="leftte-div">
          <h1>Mombasa Coverage<br />
          Map<br />
          </h1>
          <button class="get-poa-coverage-btn-main">Check your Coverage</button>
         
        </div>
        <div class="rightte-div">
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img
          src={mombasamap}
          alt="Description"
          style={{ pointerEvents: 'none' }} // Prevent right-click
        />
      </a>
        </div>
      </div>
      <div className="separator"></div>
      

      <div class="conttainere">
      <div class="rightte-div-malindi">
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <img
          src={malindimap}
          alt="Description"
          style={{ pointerEvents: 'none' }} // Prevent right-click
        />
      </a>
        </div>
        <div class="leftte-div-malindi">
          <h1>Malindi Coverage<br />
          Map<br />
          </h1>
          <button class="get-poa-coverage-btn-main">Check your Coverage</button>
         
        </div>
        
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

export default Coverage