import React from 'react';
// Importing social icons if you install a library like react-icons
// import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home">
      <div className="hero-content">
        [cite_start]{/* Name: Ramakant Singh [cite: 1] */}
        <h1>Ramakant Singh</h1>
        [cite_start]{/* Career Objective [cite: 1] */}
        <p>Full Stack Developer | Building scalable web platforms and intelligent automation systems.</p>
        <div className="social-links">
           {/* Replace # with your actual profile URLs */}
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Home;