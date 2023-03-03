import { list } from 'postcss';
import React from 'react'

const Navbar = () => {

    const open = false;
    const listOpen = false;

    const arrowUp = <img className='inline' src="./src/assets/images/icon-arrow-dark.svg" alt="Icon arrow up" />
    const arrowDown = <img className='inline' src="./src/assets/images/icon-arrow-light.svg" alt="Icon arrow up" />

  return (
    open && <nav className='bg-white-500 mx-5 text-center rounded-lg leading-12 font-semibold text-darkblue text-xl'>
      <ul className='py-5 border-b border-gray-200' >
        <li>Product {arrowUp}
            {listOpen && <ul className='nav--sublists'>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 2</li>
            </ul>}
        </li>
        <li>Company {arrowUp}
            {listOpen && <ul className='nav--sublists'>
                <li>Company 1</li>
                <li>Company 2</li>
                <li>Company 2</li>
            </ul>}
        </li>
        <li>Connect {arrowUp}
            {listOpen && <ul className='nav--sublists'>
                <li>Contact</li>
                <li>Newsletter</li>
                <li>LinkedIn</li>
            </ul>}
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