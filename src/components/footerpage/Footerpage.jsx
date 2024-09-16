// import React from 'react'
import './footerpage.css'

const footerpage= () => {
  return (
    <div className="footer-container" id='library'>
      <div className="header-section">
        <h1>Do you want to step into the future before others?</h1>
        <button className="cta-button">Request Early Access</button>
      </div>
      
      <footer>
        <div className="footer-content">
          <div className="footer-left">
            <h2>GPT-3</h2>
            <p>Crechtenwoord K12 182 DK Alkjnckb, All Rights Reserved</p>
          </div>

          <div className="footer-middle">
            <ul>
            <h3>link</h3>
              <li><a href="#">Overons</a></li>
              <li><a href="#">Social Media</a></li>
              <li><a href="#">Counters</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-right">
            <h3>Company</h3>
            <ul>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <div/>
          </div>
        </div>
        <p className="footer-copy">&copy; 2024 thedanieldiya.</p>
      </footer>
    </div>
  )
}

export default footerpage