import React from 'react'
import './Poa_Home.css'
import poahomeimage from '../../Assets/poa_home_image.png'
import momkidwifi from '../../Assets/m5.png'


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

  <div class="container">
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
        </div>
        <div class="right-div">
          <h2>Free street internet every day on Africa's largest Wi-Fi network</h2>
          <p></p>
        </div>
      </div>

    </div>
  )
}

export default Poa_Home