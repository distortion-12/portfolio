import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section container">
        <span className="profile-name">Ramakant Singh</span>
        <span className="footer-text">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact Me</a>
        </span>
        <span className="footer-social-icon">
          {/* Replace # with your actual profile URLs */}
          <a href="https://www.linkedin.com/in/ramchouhan/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/distortion-12" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a href="https://www.instagram.com/ram_12.01?igsh=MTh6aTd2M3FkcXBvMw==" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;