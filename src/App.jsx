// import React from 'react'
import './App.css'
import Firstpage from './components/firstPage/Firstpage'
import Fourthpage from './components/fourthPage/Fourthpage'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Secondpage from './components/secondPage/Secondpage'
import Thirdpage from './components/thirdPage/Thirdpage'
import Footerpage from './components/footerpage/Footerpage'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Firstpage />
      <Secondpage />
      <Thirdpage />
      <Fourthpage />
      <Footerpage />
    </div>
  )
}

export default App