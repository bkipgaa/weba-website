import React from 'react'
import webalogo from '../../Assets/weba-logo2.png'
import'./Poa-Street.css'

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

    </div>
  )
}

export default Poa_Street