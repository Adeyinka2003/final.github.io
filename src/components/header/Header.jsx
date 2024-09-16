// import React from 'react';
import './header.css';

function Header() {
  return (
    <div>
         <nav className="navbar">
        <ul className="nav">
            <li className="nav-links">GPT-3</li>
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
  )
}

export default Header
