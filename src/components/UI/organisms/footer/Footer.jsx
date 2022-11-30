import React from 'react'
import Logo from '../../atoms/logo/Logo'

function Footer() {
  const getYear = () => {
    const date = new Date()
    const year = date.getFullYear()

    return year
  }

  return (
    <div className='layout bottom-0 max-h-screen bg-slate-100/40 shadow-sm shadow-gray-100'>
      <div className='flex flex-col flex-wrap items-center justify-center gap-2 py-5 ms:flex-row ms:gap-32'>
        <div className='md:w-38 md:h-38 flex w-7 flex-row items-center justify-center gap-2 sm:h-8 sm:w-8'>
          <Logo />
          <span className='text-base font-semibold uppercase text-black md:text-lg'>
            Zeitmovie
          </span>
        </div>

        <div>
          <p className='text-sm font-normal text-gray-700 md:text-base'>
            {`© ${getYear()} - All rights reserved`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
