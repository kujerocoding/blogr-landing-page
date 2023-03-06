import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blackblue flex justify-center items-center flex-col text-center rounded-tr-[80px]'>
      <img className='my-10' src="./src/assets/images/logo.svg" alt="logo" />
      <div className='mb-10'>
        <h3>Product</h3>
        <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
        </ul>
      </div>
      <div className='mb-10'>
        <h3>Company</h3>
        <ul>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
        </ul>
      </div>
      <div className='mb-10'>
        <h3>Connect</h3>
        <ul>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
