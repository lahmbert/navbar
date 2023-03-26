import React, { useState } from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

import { AiOutlineClose, AiOutlineMenu, AiOutlineUser, AiOutlineShopping } from 'react-icons/ai'

const navLink = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Service',
    path: '/service'
  },
  {
    display: 'Contact',
    path: '/contact'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Checkout',
    path: '/checkout'
  },
]

const Navbar = () => {

  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }


  return (
    <div className='text-white flex justify-between items-center h-24 px-4 max-w-[1240px] mx-auto'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]' >React.Js</h1>
      <ul className='hidden md:flex px-24'>
        {
          navLink.map((item, index) => (
            <li className='p-4'><NavLink to={item.path} key={index}>{item.display}</NavLink></li>
          ))
        }
      </ul>
      <div className=' flex items-center gap-3 px-3'>
        <div className=' flex' >
          <AiOutlineShopping />
          <div className='cartBadge' >2</div>
        </div>
        <AiOutlineUser />
      </div>
      <div onClick={handleNav} className='block md:hidden' >
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className=' md:hidden'>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] ease-in-out duration-500 border-r border-r-gray-900 h-full bg-[#000300]' : 'fixed left-[100%]'}>
          <h1 className=' m-4 w-full text-3xl font-bold text-[#00df9a]' >React.Js</h1>
          <ul className='p-4 uppercase'>
            {
              navLink.map((item, index) => (
                <li className='p-4 border-b border-gray-600' onClick={handleNav}><NavLink to={item.path} key={index}>{item.display}</NavLink></li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar