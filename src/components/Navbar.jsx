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
    props.isMenuOpen && <nav className=' mt-10 bg-white text-center rounded-lg leading-12 font-semibold text-darkblue text-xl shadow-xl z-50'>
      <ul className='nav--lists py-5 border-b border-gray-200'>
        <li id="product" onClick={toggleSublist}>Product&ensp;
        <img className={`inline ${isShowProduct ? 'rotate-180' : ""}`} src="./src/assets/images/icon-arrow-dark.svg" alt="Icon arrow" />
        <ul className={`nav--sublists ${isShowProduct ? 'block' : 'hidden'}`}>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
            </ul>
        </li>
        <li id="company" onClick={toggleSublist}>Company&ensp;
        <img className={`inline ${isShowCompany ? 'rotate-180' : ""}`} src="./src/assets/images/icon-arrow-dark.svg" alt="Icon arrow" />
        <ul className={`nav--sublists ${isShowCompany ? 'block' : 'hidden'}`}>
                <li>Company 1</li>
                <li>Company 2</li>
                <li>Company 3</li>
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
    </nav>
  )
}

export default Navbar
