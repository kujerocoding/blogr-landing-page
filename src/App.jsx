import React from 'react'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='app'>
      <div className='relative w-full h-[600px] rounded-bl-[80px] bg-gradient-to-t from-lightred to-verylightred overflow-hidden md:bg-gradient-to-l'>
        <img className='absolute bottom-5 left-[100px] scale-[3] z-10 md:hidden' src="./src/assets/images/bg-pattern-intro-mobile.svg" alt="Round background pattern" />
        <img className='absolute left-[300px] -top-[500px] scale-[2] hidden md:block' src="./src/assets/images/bg-pattern-intro-desktop.svg" alt="Round background pattern" />
      </div>
      <Header />
      <Hero />
      <Body />
      <Footer />
    </div>
  )
}

export default App
