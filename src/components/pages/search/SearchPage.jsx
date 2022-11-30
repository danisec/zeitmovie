import React from 'react'
import { useSelector } from 'react-redux'
import Skeleton from '../../UI/atoms/skeleton/Skeleton'
import Card from '../../UI/organisms/card/Card'

function SearchPage() {
  const { search, loading } = useSelector((state) => state.search)

  const getSearchParams = () => {
    const search = window.location.search
    const params = new URLSearchParams(search)

    const searchParams = params.get('q')
    return searchParams
  }

  const cardSkeleton = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <Skeleton key={item} />)
  }

  return (
    <>
      <div className='layout mx-auto max-w-screen-xl bg-white py-8'>
        <h2 className='text-xl font-semibold text-black md:text-2xl'>
          Search Result For "{getSearchParams()}"
        </h2>

        <div className='mt-8 grid justify-items-center gap-2 sx:grid-cols-2 xs:gap-4 sm:grid-cols-3 md:gap-8 lg:grid-cols-4'>
          {loading
            ? cardSkeleton()
            : search?.map((search, index) => (
                <Card
                  key={index}
                  moviePoster={search.Poster}
                  movieAlt={search.Title}
                  movieTitle={search.Title}
                />
              ))}
        </div>
      </div>
    </>
  )
}

export default SearchPage
