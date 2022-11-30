import React from 'react'
import { NavLink } from 'react-router-dom'
import LinkNavbar from '../../atoms/link-navbar/LinkNavbar'
import Search from '../../atoms/search/Search'
import Logo from '../../atoms/logo/Logo'
import ButtonNavbar from '../../atoms/button/buttonNavbar'

function Navbar() {
  return (
    <>
      <div className='layout sticky top-0 z-50 bg-white py-6 transition-all duration-300 ease-in-out'>
        <div className='flex flex-row items-center justify-between'>
          <NavLink
            className='md:w-38 md:h-38 flex w-7 flex-row items-center gap-2 sm:h-8 sm:w-8'
            to={'/'}
          >
            <Logo />
            <span className='text-base font-semibold uppercase text-black md:text-lg'>
              Zeitmovie
            </span>
          </NavLink>

          <div className='mr-4 flex flex-row items-center gap-8'>
            <ul className='hidden sm:block'>
              <LinkNavbar />
            </ul>

            <div className='hidden sm:block'>
              <Search />
            </div>
          </div>

          {/* Button Navbar Mobile */}
          <ButtonNavbar />
        </div>
      </div>
    </>
  )
}

export default Navbar
