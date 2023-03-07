import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu(){
    setIsMenuOpen(prevState => !prevState)
  }

  return (
    <header className='absolute top-0 pt-10 w-full px-5 z-20 md:px-32 md:pt-12'>
      <div className='grid grid-cols-2 md:flex md:justify-between md:items-center md:gap-10'>
      
        <img className='cursor-pointer' src="/src/assets/images/logo.svg" alt="Blogr logo" />
        
        <img className='md:hidden place-self-end self-center cursor-pointer' src={`/src/assets/images/${!isMenuOpen ? 'icon-hamburger' : 'icon-close'}.svg`} 
        alt={`${!isMenuOpen ? 'Hamburge' : 'X'}icon`} onClick={toggleMenu}/>
       <Navbar isMenuOpen={isMenuOpen}/>
      </div>
      
    </header>
  )
}

export default Header
