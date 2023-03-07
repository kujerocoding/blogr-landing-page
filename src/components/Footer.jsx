import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blackblue rounded-tr-[80px]'>
      <div className=" flex justify-center items-center flex-col text-center md:flex-row md:justify-evenly md:pl-24 md:pr-32 md:py-12 md:items-start" >

      <img className='my-10' src="./src/assets/images/logo.svg" alt="logo" />

      <div className='mb-10 md:mb-0'>
        <h3>Product</h3>
        <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
        </ul>
      </div>
        <div className='mb-10 md:mb-0'>
          <h3>Company</h3>
          <ul>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
          </ul>
        </div>
        <div className='mb-10 md:mb-0'>
          <h3>Connect</h3>
          <ul>
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className='py-12 text-center text-grayishblue text-sm'>
            Challenge by 
            <a className='text-lightred' href="https://www.frontendmentor.io/challenges" target="_blank"> Frontend Mentor.</a> Coded by 
            <a className='text-lightred' href='https://github.com/kujerocoding' target="_blank"> kujerocoding</a>
      </div>

    </footer>
  )
}

export default Footer
