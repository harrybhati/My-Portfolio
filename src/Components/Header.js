import React from 'react';
import './Header.css'; // Assuming you have a separate CSS file for the header styling

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-title" style={{fontSize:130}}>HARENDRA BHATI</h1>
        <p className="header-subtitle" style={{fontSize:40}}>Web Developer | Application Developer | MERN Stack</p>
      </div>
      <nav className="header-nav">
        <ul className="nav-list" style={{fontSize:30}}>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
          <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          <li className="nav-item"><a href="#certification" className="nav-link">Certification</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
