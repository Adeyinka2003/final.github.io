// import React from 'react'
import './hero.css'
import AI from '../../assets/ai.png'
import People from '../../assets/people.png'
import Google from '../../assets/google.png'
import Slack from '../../assets/slack.png'
import Atlassian from '../../assets/atlassian.png'
import Dropbox from '../../assets/dropbox.png'
import Shopify from '../../assets/shopify.png'

const Hero = () => {
  return (
    <div>
      <div className='heros' id='home'>
            <div className="hero">
       <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
          <input type="email" placeholder="Your email address" className="email-input" />
          <button className="cta-button">Get Started</button> <br /><br />
          <img src={People} alt="" />
          <span className="people-number">1.6k+</span>
          <span>1,600 people requested access in the last 24 hours</span>
        </div>
        <div className='ai'>
            <img src={AI} alt="" />
        </div>
      </div>

      
        
        <div id="google">
            <div>
            <img src={Google} alt="" />
            <img src={Slack} alt=""/>
            <img src={Atlassian} alt="" />
            <img src={Dropbox} alt="" />
            <img src={Shopify} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero