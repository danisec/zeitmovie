import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { searchMovies } from '../../../../features/search/searchSlice'

function Search() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [search, setSearch] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(searchMovies(search))

    if (search <= 0) {
      setSearch('')
    } else {
      navigate(`/search/?q=${search}`, { replace: true })
    }
  }

  const inputHandler = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <form className='flex items-center' onSubmit={submitHandler}>
        <div className='relative flex w-full'>
          <input
            type='text'
            className='block w-60 rounded-full border border-orange-500 bg-white p-2 pl-4 pr-12 text-base font-normal text-gray-700 focus:border-orange-400 focus:outline-none
            focus:ring-1 focus:ring-orange-500 lg:w-72'
            placeholder='Search...'
            onChange={inputHandler}
          />

          <button
            className='-ml-10 hover:text-gray-600'
            aria-labelledby='search'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6 text-orange-400 hover:text-orange-500'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  )
}

export default Search
