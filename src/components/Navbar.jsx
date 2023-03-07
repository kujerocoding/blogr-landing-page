import React, { useState } from 'react'

const Navbar = (props) => {

  const [isShowProduct, setIsShowProduct] = useState(false)
  const [isShowCompany, setIsShowCompany] = useState(false)
  const [isShowConnect, setIsShowConnect] = useState(false)

  const rotateArrow = isShowProduct || isShowCompany || isShowConnect ? 'rotate-180' : ""
  const arrow = <img className={`inline ${rotateArrow}`} src="./src/assets/images/icon-arrow-dark.svg" alt="Icon arrow up" />
  const arrowDown = <img className='inline' src="./src/assets/images/icon-arrow-light.svg" alt="Icon arrow up" />

  function toggleSublist(e){
    const id = e.target.id
    if(id === 'product'){
      setIsShowProduct(prevState => !prevState)
      setIsShowCompany(false)
      setIsShowConnect(false)
    }else if(id === 'company'){
      setIsShowProduct(false)
      setIsShowCompany(prevState => !prevState)
      setIsShowConnect(false)
    }else if(id === 'connect'){
      setIsShowProduct(false)
      setIsShowCompany(false)
      setIsShowConnect(prevState => !prevState)
    }
  }


  return (
     <nav className='bg-white text-center rounded-lg  font-semibold text-darkblue text-xl shadow-xl z-50 col-span-2 md:flex-1 md:bg-transparent md:shadow-none md:text-white'>

      {props.isMenuOpen && <div className='leading-12 md:hidden'>
      <ul className='nav--lists py-5 border-b border-gray-200'>
        <li id="product" onClick={toggleSublist}>Product&ensp;
        <img className={`inline ${isShowProduct ? 'rotate-180' : ""}`} src="./src/assets/images/icon-arrow-dark.svg" alt="Icon arrow" />
        <ul className={`nav--sublists ${isShowProduct ? 'block' : 'hidden'}`}>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Marketplace</li>
                <li>Features</li>
                <li>Integrations</li>
            </ul>
        </li>
        <li id="company" onClick={toggleSublist}>Company&ensp;
        <img className={`inline ${isShowCompany ? 'rotate-180' : ""}`} src="./src/assets/images/icon-arrow-dark.svg" alt="Icon arrow" />
        <ul className={`nav--sublists ${isShowCompany ? 'block' : 'hidden'}`}>
                <li>About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
        </li>
        <li id="connect" onClick={toggleSublist}>Connect&ensp;
        <img className={`inline ${isShowConnect ? 'rotate-180' : ""}`} src="./src/assets/images/icon-arrow-dark.svg" alt="Icon arrow" />
           <ul className={`nav--sublists ${isShowConnect ? 'block' : 'hidden'}`}>
                <li>Contact</li>
                <li>Newsletter</li>
                <li>LinkedIn</li>
            </ul>
        </li>
      </ul>
      <ul className='py-5'>
        <li><button>Login</button></li>
        <li><button className='px-10 py-2 text-white rounded-full bg-gradient-to-l from-lightred to-verylightred'>Signup</button></li>
      </ul>
      </div>}

      <div className='hidden md:flex md:justify-between text-sm'>
      <ul className='flex gap-10'>
        <li className='nav__menu--link' id="product" onClick={toggleSublist}>Product&ensp;
        <img className={`inline ${isShowProduct ? 'rotate-180' : ""}`} src="./src/assets/images/icon-arrow-light.svg" alt="Icon arrow" />
        <ul className={`nav__menu--sublinks ${isShowProduct ? 'block' : 'hidden'}`}>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Marketplace</li>
                <li>Features</li>
                <li>Integrations</li>
            </ul>
        </li>
        <li className='nav__menu--link' id="company" onClick={toggleSublist}>Company&ensp;
        <img className={`inline ${isShowCompany ? 'rotate-180' : ""}`} src="./src/assets/images/icon-arrow-light.svg" alt="Icon arrow" />
        <ul className={`nav__menu--sublinks ${isShowCompany ? 'block' : 'hidden'}`}>
                <li>About</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
        </li>
        <li className='nav__menu--link' id="connect" onClick={toggleSublist}>Connect&ensp;
        <img className={`inline ${isShowConnect ? 'rotate-180' : ""}`} src="./src/assets/images/icon-arrow-light.svg" alt="Icon arrow" />
           <ul className={`nav__menu--sublinks ${isShowConnect ? 'block' : 'hidden'}`}>
                <li>Contact</li>
                <li>Newsletter</li>
                <li>LinkedIn</li>
            </ul>
        </li>
      </ul>
      <ul className='flex justify-center items-center gap-10 pl-6'>
        <li><button>Login</button></li>
        <li><button className='px-10 py-2 text-lightred rounded-full bg-white hover:bg-lightred hover:text-white'>Signup</button></li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
