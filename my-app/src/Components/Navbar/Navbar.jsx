import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import Profile from '../ProfileDisplay/ProductDisplay'



const Navbar = (user, handleLogout, updateUser) => {
  const [menu, setMenu] = useState('home')
  return (
    <div className='nav-container'>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar-links">
        <li onClick={() => { setMenu("home") }}>
  <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
  {menu === "home" ? <hr /> : null} {/* Show underline if 'Home' is active */}
</li>

<li onClick={() => { setMenu(menu === "products" ? "" : "products") }}>
  <Link style={{ textDecoration: 'none' }} to='/products'>Our Products</Link>
  {menu === "products" && (
    <div 
      style={{ 
        position: 'absolute', 
        top: '100%', 
        left: '20%', 
        background: '#2E8B57',

        padding: '10px 20px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        zIndex: '10' 
      }}
    >
      <li style={{ listStyle: 'none', margin: '5px 0' }}>
        <Link 
          style={{ 
            textDecoration: 'none', 
            color: 'white', 
            padding: '5px 0', 
            display: 'block' 
          }}
          to='/products/poa-street'
          onMouseEnter={(e) => e.target.style.color = 'yellow'}
          onMouseLeave={(e) => e.target.style.color = 'white'}
        >
          Poa Street
        </Link>
      </li>
      <li style={{ listStyle: 'none', margin: '5px 0' }}>
        <Link 
          style={{ 
            textDecoration: 'none', 
            color: 'white', 
            padding: '5px 0', 
            display: 'block' 
          }}
           to='/products/poa-home'
          onMouseEnter={(e) => e.target.style.color = 'yellow'}
          onMouseLeave={(e) => e.target.style.color = 'white'}
        >
          Poa Home
        </Link >
      </li>
    </div>
  )}
</li>



<li onClick={() => { setMenu("about") }}>
  <Link style={{ textDecoration: 'none' }} to='/about'>About Us</Link>
  {menu === "about" ? <hr /> : null}
</li>

<li onClick={() => { setMenu("coverage") }}>
  <Link style={{ textDecoration: 'none' }} to='/coverage'>Coverage</Link>
  {menu === "coverage" ? <hr /> : null}
</li>

<li onClick={() => { setMenu("internet_status") }}>
  <Link style={{ textDecoration: 'none' }} to='/internet_status'>Internet_Status</Link>
  {menu === "internet_status" ? <hr /> : null}
</li>

<li onClick={() => { setMenu("careers") }}>
  <Link style={{ textDecoration: 'none' }} to='/careers'>Careers</Link>
  {menu === "careers" ? <hr /> : null}
</li>

<li onClick={() => { setMenu("selfcare") }}>
  <Link style={{ textDecoration: 'none' }} to='/selfcare'>Selfcare</Link>
  {menu === "selfcare" ? <hr /> : null}
</li>

{user && <Profile user={user} handleLogout={handleLogout} />}

         
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
