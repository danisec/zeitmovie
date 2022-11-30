import React from 'react'

function Skeleton() {
  return (
    <>
      <div role='status' className='max-w-sm animate-pulse'>
        <div>
          <div className='flex h-64 w-auto items-center justify-center rounded bg-gray-100 sm:h-80'></div>
        </div>

        <div className='mt-2 flex flex-row justify-center'>
          <h2 className='text-base font-semibold text-black md:text-xl'>
            <div className='mb-4 h-2.5 w-48 rounded-full bg-gray-100'></div>
          </h2>
        </div>
      </div>
    </>
  )
}

export default Skeleton
