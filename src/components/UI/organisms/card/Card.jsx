import React from 'react'

function Card({ moviePoster, movieAlt, movieTitle }) {
  return (
    <>
      <div>
        <div className='flex justify-center bg-white shadow-lg shadow-slate-300 transition delay-150 ease-in-out hover:shadow-xl hover:shadow-slate-300'>
          <img
            className='h-64 w-auto md:h-80'
            src={moviePoster}
            alt={movieAlt}
          />
        </div>

        <div className='mt-2 flex flex-row justify-center'>
          <h2 className='text-base font-semibold text-black md:text-xl'>
            {movieTitle}
          </h2>
        </div>
      </div>
    </>
  )
}

export default Card
