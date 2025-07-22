import React, { useEffect, useRef } from 'react';

const Header = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "Software Engineer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    };

    if (window.Typed) {
      const typed = new window.Typed(typedRef.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <nav className="nav-section">
        <div className="nav-name">
          <img className="nav-name-logo" src="/images/userAsset/NavLogo.jpg" alt="nav-name" />
          <span>amakant Singh</span>
        </div>
        <div className="nav-items">
          <a href="#projects" className="nav-item">Projects </a>
          <a href="#skills" className="nav-item">Skills </a>
          <a href="#contact" className="nav-item"> Contact Me</a>
        </div>
      </nav>

      <header className="header-container">
        <section className="left">
          <div className="left-text-para">
            <p>Hi! I'm Ramakant Singh</p>
            <p>I am a <span className="role" ref={typedRef}></span></p>
            <p>
              Aspiring Full Stack Developer passionate about building scalable web platforms and intelligent automation systems.
            </p>
            <button>Hire me</button>
          </div>
          <div className="faded-name">
            <span>Ramakant Singh</span>
          </div>
        </section>
        <section className="right">
          <div className="user-img">
            <img src="/images/userAsset/UserImage.png" alt="Ramakant Singh" className="profile-img" />
          </div>
          
          <div className="zig-zag-img">
            <img src="/images/userAsset/zigzags.png" alt="" />
          </div>
          <div className="plus-img">
            <img src="/images/userAsset/plus.png" alt="" />
          </div>
          <div className="cube-img">
            <img src="/images/userAsset/cube.png" alt="" />
          </div>
          <div className="circle-img">
            <img src="/images/userAsset/circle.png" alt="" />
          </div>
          {/* This is the missing icon */}
          <div className="dot-img">
            <img src="/images/userAsset/dots.png" alt="" />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;