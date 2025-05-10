import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#C2EABD', display: 'flex', justifyContent: 'space-between' }}>
      <h2 style={{ fontFamily: 'cursive', color: '#E266AF' }}>Theobroma</h2>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
  <li><Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>Products</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact Us</Link></li>
        <li><Link to="/aboutus" style={{ textDecoration: 'none', color: 'black' }}>About Us</Link></li>
        <li><Link to="/Feedback" style={{ textDecoration: 'none', color: 'black' }}>Feedback</Link></li>



    

      </ul>
    </nav>
  );
};

export default Navbar;
