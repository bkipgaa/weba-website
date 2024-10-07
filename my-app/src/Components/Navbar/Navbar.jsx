import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Assuming you are using React Router


const Navbar = () => {
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

<li onClick={() => { setMenu("products") }}>
  <Link style={{ textDecoration: 'none' }} to='/products'>Our Products</Link>
  {menu === "products" ? <hr /> : null}
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

         
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
