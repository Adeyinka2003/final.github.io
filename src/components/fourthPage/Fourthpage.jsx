// import React from 'react'
import './fourthPage.css'
import One from '../../assets/blog01.png'
import Two from '../../assets/blog02.png'
import Three from '../../assets/blog03.png'
import Four from '../../assets/blog04.png'
import Five from '../../assets/blog05.png'

const Fourthpage = () => {
  return (
    <div id='case-studies' >
        <header className='alot'>
    <h1>A lot is happening, We are blogging about it.</h1>
</header>

<section className="blog-section">
    <div className="blog-grid">
        <div className="blog-card large-card">
            <img src={One} alt="Blog Image" />
            <div className="blog-details">
                <p className="date">May 24, 2023</p>
                <h2>GPT-3 and Open AI is the future. Let us explore how it is?</h2>
                <a href="#">Read full article</a>
            </div>
        </div>

        
        <div className="blog-card">
            <img src={Two} alt="Blog Image" />
            <div className="blog-details">
                <p className="date">May 24, 2023</p>
                <h2>GPT-3 and Open AI is the future. Let us explore how it is?</h2>
                <a href="#">Read full article</a>
            </div>
        </div>

        <div className="blog-card">
            <img src={Three} alt="Blog Image" />
            <div className="blog-details">
                <p className="date">May 24, 2023</p>
                <h2>GPT-3 and Open AI is the future. Let us explore how it is?</h2>
                <a href="#">Read full article</a>
            </div>
        </div>

        <div className="blog-card">
            <img src={Four} alt="Blog Image" />
            <div className="blog-details">
                <p className="date">May 24, 2023</p>
                <h2>GPT-3 and Open AI is the future. Let us explore how it is?</h2>
                <a href="#">Read full article</a>
            </div>
        </div>

        <div className="blog-card">
            <img src={Five} alt="Blog Image" />
            <div className="blog-details">
                <p className="date">May 24, 2023</p>
                <h2>GPT-3 and Open AI is the future. Let us explore how it is?</h2>
                <a href="#">Read full article</a>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Fourthpage