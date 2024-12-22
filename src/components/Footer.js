import React from "react";
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import freepik from '../assets/freepik.svg';
import behance from '../assets/behance.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">&copy; {new Date().getFullYear()} name. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://behance.com/yourusername" className="footer-link">
            <img src={behance} alt="Behance" />
          </a>
          <a href="https://freepik.com/yourusername" className="footer-link">
            <img src={freepik} alt="Freepik" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="footer-link">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="footer-link">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
