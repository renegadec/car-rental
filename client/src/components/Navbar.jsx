import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
    const location = useLocation()
    const [open, setOpen] = useState(false)

    const navMenuLinks = menuLinks.map((link, index) => {
        return (
            <Link to={link.path} key={index}>
                {link.name}
            </Link>
        )
    })

    
  return (
    <div 
        className={`flex item-center justify-between px-6 md:px-16 lg:px-24 
        xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all
        ${location.pathname === '/' && 'bg-light'}`}
    >
        <Link to="/">
            <img src={assets.logo} alt="logo" className='h-8' />
        </Link>

        <div 
            className={`max-sm:fixed max-sm:h-screen max-sm:w-full 
            max-sm:top-16 max-sm:border-t max-sm:border-borderColor 
            max-sm:right-0 flex flex-col sm:flex-row items-start sm:items-center 
            gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 
            ${location.pathname === '/' ? 'bg-light' : 'bg-white'} 
            ${open ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'}`}
        >
            {navMenuLinks}
        </div>
    </div>
  )
}

export default Navbar