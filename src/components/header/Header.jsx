import { useState } from 'react';
import './header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">GPT-3</div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav ${isOpen ? 'nav-open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#what">What Is GPT?</a></li>
          <li><a href="#open">Open AI</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="#library">Library</a></li>
        </ul>
        <div className="nav-buttons">
          <a href="#" className="sign-in">Sign In</a>
          <a href="#" className="sign-up">Sign up</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
