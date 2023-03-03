import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='relative pt-10 w-full  px-5 z-10'>
      <div className='flex justify-between items-center'>
        <img src="/src/assets/images/logo.svg" alt="Blogr logo" />
        <img src="/src/assets/images/icon-hamburger.svg" alt="Hamburger icon" />
      </div>
      <Navbar />
    </header>
  )
}

export default Header
