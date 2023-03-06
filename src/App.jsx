import React from 'react'
import Body from './components/Body'
import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='app relative'>
      <div className='absolute w-full h-[600px] rounded-bl-[80px] bg-gradient-to-t from-lightred to-verylightred overflow-hidden'>
        <img className='absolute bottom-5 left-[100px] scale-[3] z-0' src="./src/assets/images/bg-pattern-intro-mobile.svg" alt="Round background pattern" />
      </div>
      <Header />
      <Hero />
      <Body />
    </div>
  )
}

export default App
