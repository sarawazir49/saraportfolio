import React from 'react';
import '../styles/Footer.css'; // Link to the CSS below
import { Link } from 'react-router-dom';
import Contact from '../pages/Contact';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About me</h3>
          <p>I'm a passionate web developer specializing in building responsive, user-friendly websites using modern technologies. I focus on creating clean, efficient code to deliver seamless digital experiences.</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/sara.a.wazir" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
     
            <a href="https://www.instagram.com/sara_al_wazir/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
            <a href="https://wa.me/+46735555777" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Sara Al wazir | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
